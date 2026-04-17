<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>مرحباً بك في مدرسة النور</h1>
        <p>نحن نوفر تعليماً عالي الجودة لبناء مستقبل مشرق</p>
        <router-link to="/courses" class="btn btn-primary">اكتشف الكورسات</router-link>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <h2>لماذا اختيار مدرسة النور؟</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">👨‍🏫</div>
            <h3>معلمون متخصصون</h3>
            <p>معلمون ذو خبرة عالية في مجالاتهم المختلفة</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📚</div>
            <h3>محتوى غني</h3>
            <p>مناهج حديثة ومحتوى تعليمي شامل</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>تعليم فعال</h3>
            <p>طرق تعليم مبتكرة وفاعلة</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🏆</div>
            <h3>نتائج مثبتة</h3>
            <p>تحقيق أعلى المعايير التعليمية</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
      <div class="container">
        <div class="stat-item">
          <h3>500+</h3>
          <p>طالب وطالبة</p>
        </div>
        <div class="stat-item">
          <h3>45+</h3>
          <p>كورس تعليمي</p>
        </div>
        <div class="stat-item">
          <h3>30+</h3>
          <p>معلم متخصص</p>
        </div>
        <div class="stat-item">
          <h3>95%</h3>
          <p>نسبة الرضا</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <h2>هل أنت مستعد للبدء؟</h2>
        <p>انضم إلينا اليوم واستفد من أفضل البرامج التعليمية</p>
        <router-link to="/contact" class="btn btn-secondary">تواصل معنا الآن</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home-page {
  width: 100%;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  padding: 8rem 2rem;
  text-align: center;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: slideDown 0.8s ease;
}

.hero-content p {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  animation: slideUp 0.8s ease;
}

.btn {
  display: inline-block;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.btn-primary {
  background: white;
  color: #1a1a1a;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: #d4af37;
  color: #1a1a1a;
}

.btn-secondary:hover {
  background: #c59a2a;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(212, 175, 55, 0.4);
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Features Section */
.features {
  padding: 4rem 2rem;
  background: white;
}

.features h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: #1a1a1a;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: #d4af37;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.feature-card p {
  color: #666;
}

/* Stats Section */
.stats {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  padding: 3rem 2rem;
}

.stats .container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}

.stat-item h3 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #d4af37;
}

.stat-item p {
  font-size: 1.1rem;
  opacity: 0.9;
}

/* CTA Section */
.cta {
  padding: 4rem 2rem;
  text-align: center;
  background: #f8f9fa;
}

.cta h2 {
  font-size: 2rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.cta p {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
}

/* Animations */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Tablet */
@media (max-width: 1024px) {
  .hero {
    padding: 5rem 2rem;
    min-height: 400px;
  }

  .hero-content h1 {
    font-size: 2.5rem;
  }

  .hero-content p {
    font-size: 1.1rem;
  }

  .features h2,
  .cta h2 {
    font-size: 1.8rem;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Responsive Mobile */
@media (max-width: 768px) {
  .hero {
    padding: 4rem 1.5rem;
    min-height: 350px;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-content p {
    font-size: 1rem;
  }

  .container {
    padding: 0 1.5rem;
  }

  .features {
    padding: 2.5rem 1.5rem;
  }

  .features h2,
  .cta h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .feature-card {
    padding: 1.5rem;
  }

  .feature-icon {
    font-size: 2.5rem;
  }

  .feature-card h3 {
    font-size: 1.1rem;
  }

  .stats {
    padding: 2rem 1.5rem;
  }

  .stats .container {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .stat-item h3 {
    font-size: 2rem;
  }

  .stat-item p {
    font-size: 0.95rem;
  }

  .cta {
    padding: 2.5rem 1.5rem;
  }

  .cta p {
    font-size: 1rem;
  }
}

/* Responsive Small Mobile */
@media (max-width: 480px) {
  .hero {
    padding: 3rem 1rem;
    min-height: 300px;
  }

  .hero-content h1 {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }

  .hero-content p {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }

  .btn {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }

  .container {
    padding: 0 1rem;
  }

  .features {
    padding: 2rem 1rem;
  }

  .features h2,
  .cta h2 {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }

  .features-grid {
    gap: 1rem;
  }

  .feature-card {
    padding: 1.2rem;
  }

  .feature-icon {
    font-size: 2rem;
  }

  .feature-card h3 {
    font-size: 1rem;
  }

  .feature-card p {
    font-size: 0.9rem;
  }

  .stats {
    padding: 1.5rem 1rem;
  }

  .stats .container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .stat-item h3 {
    font-size: 1.8rem;
  }

  .stat-item p {
    font-size: 0.9rem;
  }

  .cta {
    padding: 2rem 1rem;
  }

  .cta p {
    font-size: 0.95rem;
  }
}

/* Responsive Tablet */
@media (max-width: 1024px) {
  .hero {
    padding: 5rem 2rem;
    min-height: 400px;
  }

  .hero-content h1 {
    font-size: 2.5rem;
  }

  .hero-content p {
    font-size: 1.1rem;
  }

  .features h2,
  .cta h2 {
    font-size: 1.8rem;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Responsive Mobile */
@media (max-width: 768px) {
  .hero {
    padding: 4rem 1.5rem;
    min-height: 350px;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-content p {
    font-size: 1rem;
  }

  .container {
    padding: 0 1.5rem;
  }

  .features {
    padding: 2.5rem 1.5rem;
  }

  .features h2,
  .cta h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .feature-card {
    padding: 1.5rem;
  }

  .feature-icon {
    font-size: 2.5rem;
  }

  .feature-card h3 {
    font-size: 1.1rem;
  }

  .stats {
    padding: 2rem 1.5rem;
  }

  .stats .container {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .stat-item h3 {
    font-size: 2rem;
  }

  .stat-item p {
    font-size: 0.95rem;
  }

  .cta {
    padding: 2.5rem 1.5rem;
  }

  .cta p {
    font-size: 1rem;
  }
}

/* Responsive Small Mobile */
@media (max-width: 480px) {
  .hero {
    padding: 3rem 1rem;
    min-height: 300px;
  }

  .hero-content h1 {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }

  .hero-content p {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }

  .container {
    padding: 0 1rem;
  }

  .features {
    padding: 2rem 1rem;
  }

  .features h2,
  .cta h2 {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }

  .features-grid {
    gap: 1rem;
  }

  .feature-card {
    padding: 1.2rem;
  }

  .feature-icon {
    font-size: 2rem;
  }

  .feature-card h3 {
    font-size: 1rem;
  }

  .feature-card p {
    font-size: 0.9rem;
  }

  .stats {
    padding: 1.5rem 1rem;
  }

  .stats .container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .stat-item h3 {
    font-size: 1.8rem;
  }

  .stat-item p {
    font-size: 0.9rem;
  }

  .cta {
    padding: 2rem 1rem;
  }

  .cta p {
    font-size: 0.95rem;
  }
}
</style>
