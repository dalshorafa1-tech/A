<template>
  <div class="about-page">
    <!-- Page Header -->
    <section class="page-header">
      <h1>عن مدرسة النور</h1>
      <p>رؤية شاملة عن مؤسستنا التعليمية</p>
    </section>

    <!-- About Content -->
    <section class="about-content">
      <div class="container">
        <div class="about-intro">
          <h2>من نحن؟</h2>
          <p>مدرسة النور هي مؤسسة تعليمية رائدة متخصصة في توفير تعليم عالي الجودة لجميع الطلاب. 
             نحن نؤمن بأن كل طالب لديه إمكانيات فريدة ونسعى لتطويرها على أكمل وجه.</p>
        </div>

        <!-- Mission & Vision -->
        <div class="mission-vision">
          <div class="box mission">
            <h3>🎯 رسالتنا</h3>
            <p>تقديم تعليم متميز يساهم في تطوير شخصية الطالب العلمية والأخلاقية والاجتماعية</p>
          </div>
          <div class="box vision">
            <h3>👁️ رؤيتنا</h3>
            <p>أن تكون مدرسة النور نموذجاً تعليمياً متقدماً يسهم في بناء جيل قادر على قيادة المستقبل</p>
          </div>
          <div class="box values">
            <h3>💎 قيمنا</h3>
            <p>الجودة والتميز والاستمرارية والتطور المستمر والحفاظ على القيم الأخلاقية</p>
          </div>
        </div>

        <!-- History -->
        <div class="history-section">
          <h2>تاريخنا</h2>
          <p>تأسست مدرسة النور عام 2010 برؤية تعليمية طموحة. على مدار السنوات، نجحنا في بناء 
             سمعة عريقة من خلال التزامنا بالتعليم المتميز والابتكار المستمر.</p>
        </div>

        <!-- Team -->
        <div class="team-section">
          <h2>فريقنا</h2>
          <p>يتكون فريقنا من معلمين متخصصين وموظفين إداريين ذوي خبرة عالية</p>
          <div class="team-grid">
            <div class="team-member">
              <div class="member-avatar">👨‍💼</div>
              <h4>الدكتور محمد علي</h4>
              <p>مدير المدرسة</p>
            </div>
            <div class="team-member">
              <div class="member-avatar">👩‍🏫</div>
              <h4>أ. فاطمة محمود</h4>
              <p>رئيس القسم الأكاديمي</p>
            </div>
            <div class="team-member">
              <div class="member-avatar">👨‍🏫</div>
              <h4>أ. عمر حسن</h4>
              <p>معلم الرياضيات</p>
            </div>
            <div class="team-member">
              <div class="member-avatar">👩‍💼</div>
              <h4>أ. ليلى سالم</h4>
              <p>مسؤولة الشؤون الإدارية</p>
            </div>
          </div>
        </div>

        <!-- Achievements -->
        <div class="achievements-section">
          <h2>إنجازاتنا</h2>
          <ul class="achievements-list">
            <li>🏅 حصلنا على جوائز تعليمية عديدة على المستوى المحلي والإقليمي</li>
            <li>📊 95% نسبة نجاح الطلاب في الامتحانات الوطنية</li>
            <li>🌟 اعتماد المناهج الدولية المتطورة</li>
            <li>💻 مرافق تعليمية حديثة مجهزة بأحدث التقنيات</li>
            <li>🤝 شراكات استراتيجية مع جامعات عالمية</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about-page {
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

/* About Content */
.about-content {
  padding: 4rem 2rem;
  background: white;
}

.about-intro {
  margin-bottom: 3rem;
  text-align: center;
}

.about-intro h2 {
  font-size: 2rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.about-intro p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
}

/* Mission Vision Values */
.mission-vision {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.box {
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
}

.mission {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
}

.vision {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}

.values {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
}

.box h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.box p {
  line-height: 1.6;
}

/* History Section */
.history-section {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 3rem;
  text-align: right;
}

.history-section h2 {
  color: #667eea;
  margin-bottom: 1rem;
}

.history-section p {
  color: #666;
  line-height: 1.8;
}

/* Team Section */
.team-section h2 {
  text-align: center;
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.team-section > p {
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.team-member {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s ease;
}

.team-member:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.member-avatar {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.team-member h4 {
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.team-member p {
  color: #d4af37;
  font-weight: 600;
}

/* Achievements */
.achievements-section h2 {
  text-align: center;
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.achievements-list {
  list-style: none;
  max-width: 800px;
  margin: 0 auto;
}

.achievements-list li {
  background: #f8f9fa;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  border-right: 4px solid #d4af37;
  font-size: 1.1rem;
  color: #333;
  line-height: 1.6;
  transition: all 0.3s ease;
}

.achievements-list li:hover {
  background: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

/* Responsive */
@media (max-width: 1024px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .page-header p {
    font-size: 1rem;
  }

  .about-intro h2 {
    font-size: 1.6rem;
  }

  .mission-vision {
    grid-template-columns: 1fr;
  }

  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .history-section {
    padding: 1.5rem;
  }

  .achievements-list li {
    padding: 1rem;
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
    font-size: 1rem;
  }

  .container {
    padding: 0 1.5rem;
  }

  .about-content {
    padding: 2.5rem 1.5rem;
  }

  .about-intro h2 {
    font-size: 1.4rem;
  }

  .about-intro p {
    font-size: 1rem;
  }

  .mission-vision {
    gap: 1.5rem;
  }

  .box {
    padding: 1.5rem;
  }

  .box h3 {
    font-size: 1.3rem;
  }

  .box p {
    font-size: 0.95rem;
  }

  .history-section h2,
  .team-section h2,
  .achievements-section h2 {
    font-size: 1.4rem;
  }

  .team-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .team-member {
    padding: 1.5rem;
  }

  .member-avatar {
    font-size: 2.5rem;
  }

  .team-member h4 {
    font-size: 1rem;
  }

  .achievements-list li {
    padding: 1.2rem;
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
    font-size: 0.9rem;
  }

  .container {
    padding: 0 1rem;
  }

  .about-content {
    padding: 1.5rem 1rem;
  }

  .about-intro h2 {
    font-size: 1.2rem;
  }

  .about-intro p {
    font-size: 0.9rem;
  }

  .mission-vision {
    gap: 1rem;
  }

  .box {
    padding: 1.2rem;
  }

  .box h3 {
    font-size: 1.1rem;
  }

  .box p {
    font-size: 0.9rem;
  }

  .history-section h2,
  .team-section h2,
  .achievements-section h2 {
    font-size: 1.2rem;
  }

  .history-section {
    padding: 1rem;
  }

  .history-section p {
    font-size: 0.9rem;
  }

  .team-member {
    padding: 1rem;
  }

  .member-avatar {
    font-size: 2rem;
  }

  .team-member h4 {
    font-size: 0.95rem;
  }

  .team-member p {
    font-size: 0.85rem;
  }

  .achievements-list li {
    padding: 1rem;
    font-size: 0.9rem;
    border-right-width: 3px;
  }
}
</style>
