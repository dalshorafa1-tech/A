<template>
  <div class="contact-page">
    <!-- Page Header -->
    <section class="page-header">
      <h1>اتصل بنا</h1>
      <p>نحن هنا للإجابة على جميع استفساراتك</p>
    </section>

    <!-- Contact Content -->
    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Info -->
          <div class="contact-info-section">
            <h2>معلومات التواصل</h2>
            
            <div class="info-card">
              <div class="info-icon">📍</div>
              <div class="info-text">
                <h4>العنوان</h4>
                <p>شارع النيل، الحي الثقافي<br>القاهرة، مصر</p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">📞</div>
              <div class="info-text">
                <h4>الهاتف</h4>
                <p>+966-1-234-5678<br>+966-1-234-5679</p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">✉️</div>
              <div class="info-text">
                <h4>البريد الإلكتروني</h4>
                <p>info@school.com<br>support@school.com</p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">⏰</div>
              <div class="info-text">
                <h4>ساعات العمل</h4>
                <p>السبت - الخميس: 8:00 - 16:00<br>الجمعة: مغلق</p>
              </div>
            </div>

            <!-- Social Media -->
            <div class="social-links">
              <h4>تابعنا على:</h4>
              <div class="social-icons">
                <a href="#" class="social-icon">f</a>
                <a href="#" class="social-icon">𝕏</a>
                <a href="#" class="social-icon">in</a>
                <a href="#" class="social-icon">📷</a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form-section">
            <h2>أرسل لنا رسالة</h2>
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-group">
                <label for="name">الاسم الكامل *</label>
                <input 
                  v-model="form.name"
                  type="text" 
                  id="name" 
                  placeholder="أدخل اسمك الكامل"
                  required
                >
              </div>

              <div class="form-group">
                <label for="email">البريد الإلكتروني *</label>
                <input 
                  v-model="form.email"
                  type="email" 
                  id="email" 
                  placeholder="أدخل بريدك الإلكتروني"
                  required
                >
              </div>

              <div class="form-group">
                <label for="phone">رقم الهاتف</label>
                <input 
                  v-model="form.phone"
                  type="tel" 
                  id="phone" 
                  placeholder="أدخل رقم الهاتف"
                >
              </div>

              <div class="form-group">
                <label for="subject">الموضوع *</label>
                <select 
                  v-model="form.subject"
                  id="subject"
                  required
                >
                  <option value="">اختر الموضوع</option>
                  <option value="استفسار">استفسار عام</option>
                  <option value="تسجيل">التسجيل للدورات</option>
                  <option value="شكوى">شكوى أو اقتراح</option>
                  <option value="وظيفة">التقديم على وظيفة</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">رسالتك *</label>
                <textarea 
                  v-model="form.message"
                  id="message" 
                  rows="5"
                  placeholder="اكتب رسالتك هنا"
                  required
                ></textarea>
              </div>

              <div class="form-group checkbox">
                <input 
                  v-model="form.privacy"
                  type="checkbox" 
                  id="privacy"
                  required
                >
                <label for="privacy">أوافق على سياسة الخصوصية</label>
              </div>

              <button type="submit" class="submit-btn">إرسال الرسالة</button>
            </form>

            <div v-if="submitted" class="success-message">
              ✅ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section (placeholder) -->
    <section class="map-section">
      <div class="container">
        <h2>موقعنا</h2>
        <div class="map-placeholder">
          📍 خريطة موقع المدرسة (يتم إضافة الخريطة الحقيقية هنا)
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const submitted = ref(false)

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  privacy: false
})

const submitForm = () => {
  console.log('Form submitted:', form.value)
  submitted.value = true
  
  // Reset form after 3 seconds
  setTimeout(() => {
    form.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      privacy: false
    }
    submitted.value = false
  }, 3000)
}
</script>

<style scoped>
.contact-page {
  width: 100%;
}

/* Page Header */
.page-header {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  padding: 3rem 2rem;
  text-align: center;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.page-header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Contact Content */
.contact-content {
  padding: 4rem 2rem;
  background: white;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

/* Contact Info Section */
.contact-info-section h2,
.contact-form-section h2 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.info-card {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateX(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.info-icon {
  font-size: 2rem;
  min-width: 50px;
}

.info-text h4 {
  color: #d4af37;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.info-text p {
  color: #666;
  line-height: 1.6;
}

/* Social Links */
.social-links {
  margin-top: 2rem;
}

.social-links h4 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  width: 45px;
  height: 45px;
  background: #d4af37;
  color: #1a1a1a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: #c59a2a;
  transform: translateY(-5px);
}

/* Contact Form */
.contact-form {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
  font-weight: 600;
  font-size: 0.95rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #d4af37;
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
}

.form-group.checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.form-group.checkbox input {
  width: auto;
}

/* Submit Button */
.submit-btn {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #d4af37 0%, #c59a2a 100%);
  color: #1a1a1a;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(212, 175, 55, 0.4);
}

.success-message {
  margin-top: 1.5rem;
  padding: 1rem;
  background: #52c41a;
  color: white;
  border-radius: 6px;
  text-align: center;
  font-weight: 600;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Map Section */
.map-section {
  padding: 4rem 2rem;
  background: #f8f9fa;
  text-align: center;
}

.map-section h2 {
  font-size: 2rem;
  color: #1a1a1a;
  margin-bottom: 2rem;
}

.map-placeholder {
  background: white;
  padding: 4rem;
  border-radius: 10px;
  color: #667eea;
  font-size: 1.2rem;
  border: 2px dashed #ddd;
  margin: 0 auto;
  max-width: 800px;
}

/* Responsive */
@media (max-width: 1024px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .page-header p {
    font-size: 1rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .map-placeholder {
    padding: 2.5rem;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 2rem 1.5rem;
  }

  .page-header h1 {
    font-size: 1.5rem;
  }

  .page-header p {
    font-size: 0.95rem;
  }

  .contact-content {
    padding: 2.5rem 1.5rem;
  }

  .container {
    padding: 0 1.5rem;
  }

  .contact-info-section h2,
  .contact-form-section h2 {
    font-size: 1.5rem;
  }

  .info-card {
    margin-bottom: 1.5rem;
    padding: 1.2rem;
  }

  .info-icon {
    font-size: 1.8rem;
  }

  .info-text h4 {
    font-size: 1rem;
  }

  .info-text p {
    font-size: 0.9rem;
  }

  .social-links h4 {
    font-size: 1rem;
  }

  .social-icon {
    width: 40px;
    height: 40px;
    font-size: 0.9rem;
  }

  .contact-form {
    padding: 1.5rem;
  }

  .form-group label {
    font-size: 0.9rem;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 0.7rem;
    font-size: 0.95rem;
  }

  .submit-btn {
    padding: 0.8rem;
    font-size: 0.95rem;
  }

  .map-section h2 {
    font-size: 1.5rem;
  }

  .map-placeholder {
    padding: 2rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .page-header {
    padding: 1.5rem 1rem;
  }

  .page-header h1 {
    font-size: 1.3rem;
  }

  .page-header p {
    font-size: 0.85rem;
  }

  .contact-content {
    padding: 1.5rem 1rem;
  }

  .container {
    padding: 0 1rem;
  }

  .contact-grid {
    gap: 1.5rem;
  }

  .contact-info-section h2,
  .contact-form-section h2 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  .info-card {
    flex-direction: column;
    margin-bottom: 1rem;
    padding: 1rem;
    gap: 0.8rem;
  }

  .info-icon {
    font-size: 1.6rem;
  }

  .info-text h4 {
    font-size: 0.95rem;
  }

  .info-text p {
    font-size: 0.85rem;
  }

  .social-links h4 {
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
  }

  .social-icons {
    gap: 0.8rem;
  }

  .social-icon {
    width: 36px;
    height: 36px;
    font-size: 0.8rem;
  }

  .contact-form {
    padding: 1rem;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-group label {
    font-size: 0.85rem;
    margin-bottom: 0.4rem;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 0.6rem;
    font-size: 0.9rem;
  }

  .form-group textarea {
    resize: vertical;
  }

  .form-group.checkbox {
    gap: 0.4rem;
  }

  .form-group.checkbox label {
    font-size: 0.8rem;
  }

  .submit-btn {
    padding: 0.7rem;
    font-size: 0.9rem;
    margin-top: 0.8rem;
  }

  .success-message {
    margin-top: 1rem;
    padding: 0.8rem;
    font-size: 0.9rem;
  }

  .map-section {
    padding: 2rem 1rem;
  }

  .map-section h2 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  .map-placeholder {
    padding: 1.5rem;
    font-size: 0.9rem;
  }
}
</style>
