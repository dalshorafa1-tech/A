<template>
  <div class="courses-page">
    <!-- Page Header -->
    <section class="page-header">
      <h1>الكورسات والبرامج التعليمية</h1>
      <p>استكشف مجموعة واسعة من الكورسات المتخصصة</p>
    </section>

    <!-- Filters -->
    <section class="filters-section">
      <div class="container">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="selectedCategory = category"
          :class="{active: selectedCategory === category}"
          class="filter-btn"
        >
          {{ category }}
        </button>
      </div>
    </section>

    <!-- Courses Grid -->
    <section class="courses-content">
      <div class="container">
        <div class="courses-grid">
          <div 
            v-for="course in filteredCourses" 
            :key="course.id"
            class="course-card"
          >
            <div class="course-header">
              <div class="course-icon">{{ course.icon }}</div>
              <span class="course-category">{{ course.category }}</span>
            </div>
            <h3>{{ course.title }}</h3>
            <p class="course-description">{{ course.description }}</p>
            <div class="course-info">
              <span class="teacher">👨‍🏫 {{ course.teacher }}</span>
              <span class="level">📊 {{ course.level }}</span>
            </div>
            <div class="course-footer">
              <span class="students">{{ course.students }} طالب</span>
              <button class="enroll-btn">التسجيل</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <h2>لم تجد الكورس المناسب؟</h2>
        <p>تواصل معنا لمزيد من المعلومات حول البرامج المتاحة</p>
        <router-link to="/contact" class="btn btn-primary">اتصل بنا الآن</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedCategory = ref('الكل')

const categories = [
  'الكل',
  'العلوم',
  'الرياضيات',
  'اللغات',
  'البرمجة',
  'الفنون'
]

const courses = [
  {
    id: 1,
    title: 'الكيمياء العضوية',
    category: 'العلوم',
    icon: '⚗️',
    description: 'دراسة شاملة لأساسيات الكيمياء العضوية وتطبيقاتها',
    teacher: 'د. علي محمد',
    level: 'متوسط',
    students: 45
  },
  {
    id: 2,
    title: 'الفيزياء الحديثة',
    category: 'العلوم',
    icon: '⚛️',
    description: 'استكشف عالم الفيزياء الحديثة والنسبية',
    teacher: 'د. سارة أحمد',
    level: 'متقدم',
    students: 38
  },
  {
    id: 3,
    title: 'الأحياء والبيئة',
    category: 'العلوم',
    icon: '🧬',
    description: 'فهم علم الأحياء والنظم البيئية',
    teacher: 'أ. محمود علي',
    level: 'أساسي',
    students: 52
  },
  {
    id: 4,
    title: 'الرياضيات المتقدمة',
    category: 'الرياضيات',
    icon: '📐',
    description: 'حساب التفاضل والتكامل والمتسلسلات',
    teacher: 'د. نور الدين',
    level: 'متقدم',
    students: 35
  },
  {
    id: 5,
    title: 'الإحصاء والاحتمالات',
    category: 'الرياضيات',
    icon: '📊',
    description: 'تطبيقات الإحصاء والاحتمالات في العالم الحقيقي',
    teacher: 'أ. فاطمة سالم',
    level: 'متوسط',
    students: 40
  },
  {
    id: 6,
    title: 'الجبر الخطي',
    category: 'الرياضيات',
    icon: '🔢',
    description: 'أساسيات الجبر الخطي والمصفوفات',
    teacher: 'د. خالد حسن',
    level: 'أساسي',
    students: 48
  },
  {
    id: 7,
    title: 'اللغة الإنجليزية',
    category: 'اللغات',
    icon: '🇬🇧',
    description: 'تعلم اللغة الإنجليزية من الصفر إلى الإتقان',
    teacher: 'أ. جيمس سميث',
    level: 'أساسي',
    students: 60
  },
  {
    id: 8,
    title: 'اللغة الفرنسية',
    category: 'اللغات',
    icon: '🇫🇷',
    description: 'دورة تفاعلية للغة الفرنسية',
    teacher: 'أ. مارك ديجان',
    level: 'متوسط',
    students: 32
  },
  {
    id: 9,
    title: 'مقدمة في البرمجة',
    category: 'البرمجة',
    icon: '💻',
    description: 'تعلم أساسيات البرمجة باستخدام Python',
    teacher: 'د. أحمد عمر',
    level: 'أساسي',
    students: 75
  },
  {
    id: 10,
    title: 'الويب ديزاين',
    category: 'البرمجة',
    icon: '🎨',
    description: 'إنشاء مواقع الويب بـ HTML و CSS و JavaScript',
    teacher: 'أ. ليلى محمود',
    level: 'متوسط',
    students: 55
  },
  {
    id: 11,
    title: 'الرسم الكلاسيكي',
    category: 'الفنون',
    icon: '🎨',
    description: 'تعلم فنون الرسم الكلاسيكية',
    teacher: 'أ. محمد فنان',
    level: 'أساسي',
    students: 25
  },
  {
    id: 12,
    title: 'الموسيقى والعزف',
    category: 'الفنون',
    icon: '🎵',
    description: 'دروس موسيقية شاملة وتعليم آلات مختلفة',
    teacher: 'أ. ياسين موسى',
    level: 'متوسط',
    students: 28
  }
]

const filteredCourses = computed(() => {
  if (selectedCategory.value === 'الكل') {
    return courses
  }
  return courses.filter(course => course.category === selectedCategory.value)
})
</script>

<script>
import { computed } from 'vue'

export default {
  setup() {
    return { computed }
  }
}
</script>

<style scoped>
.courses-page {
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

/* Filters */
.filters-section {
  padding: 2rem;
  background: #f8f9fa;
  text-align: center;
}

.filter-btn {
  background: white;
  border: 2px solid #ddd;
  padding: 0.7rem 1.5rem;
  margin: 0.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  color: #2c3e50;
}

.filter-btn:hover,
.filter-btn.active {
  background: #d4af37;
  color: #1a1a1a;
  border-color: #d4af37;
}

/* Courses Content */
.courses-content {
  padding: 4rem 2rem;
  background: white;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

/* Course Card */
.course-card {
  background: white;
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.course-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.course-header {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  padding: 2rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.course-icon {
  font-size: 2.5rem;
}

.course-category {
  background: rgba(255, 255, 255, 0.3);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.course-card h3 {
  padding: 1.5rem 2rem 0.5rem;
  color: #1a1a1a;
  font-size: 1.3rem;
}

.course-description {
  padding: 0 2rem;
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  flex-grow: 1;
}

.course-info {
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #666;
}

.course-footer {
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;
  background: #f8f9fa;
}

.students {
  color: #d4af37;
  font-weight: 600;
}

.enroll-btn {
  background: #d4af37;
  color: #1a1a1a;
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.enroll-btn:hover {
  background: #c59a2a;
  transform: scale(1.05);
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

.btn {
  display: inline-block;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: #d4af37;
  color: #1a1a1a;
}

.btn-primary:hover {
  background: #c59a2a;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(212, 175, 55, 0.4);
}

/* Responsive */
@media (max-width: 1024px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .page-header p {
    font-size: 1rem;
  }

  .filter-btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.95rem;
  }

  .courses-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cta h2 {
    font-size: 1.8rem;
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

  .filters-section {
    padding: 1.5rem;
  }

  .filter-btn {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    margin: 0.3rem;
  }

  .courses-content {
    padding: 2.5rem 1.5rem;
  }

  .container {
    padding: 0 1.5rem;
  }

  .courses-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .course-card h3 {
    font-size: 1.1rem;
  }

  .course-description {
    font-size: 0.9rem;
  }

  .course-header {
    padding: 1.5rem;
  }

  .course-icon {
    font-size: 2rem;
  }

  .course-category {
    font-size: 0.8rem;
  }

  .course-info {
    padding: 0.8rem 1.5rem;
    font-size: 0.85rem;
  }

  .course-footer {
    padding: 1rem 1.5rem;
  }

  .enroll-btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .cta {
    padding: 2.5rem 1.5rem;
  }

  .cta h2 {
    font-size: 1.4rem;
  }

  .cta p {
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

  .filters-section {
    padding: 1rem;
  }

  .filter-btn {
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
    margin: 0.2rem;
  }

  .courses-content {
    padding: 1.5rem 1rem;
  }

  .container {
    padding: 0 1rem;
  }

  .courses-grid {
    gap: 1rem;
  }

  .course-card {
    border-radius: 8px;
  }

  .course-header {
    padding: 1.2rem;
  }

  .course-icon {
    font-size: 1.8rem;
  }

  .course-category {
    font-size: 0.7rem;
  }

  .course-card h3 {
    padding: 1rem 1.5rem 0.3rem;
    font-size: 1rem;
  }

  .course-description {
    padding: 0 1.5rem;
    font-size: 0.85rem;
  }

  .course-info {
    padding: 0.6rem 1.5rem;
    font-size: 0.8rem;
  }

  .course-footer {
    padding: 0.8rem 1.5rem;
    flex-direction: column;
    gap: 0.5rem;
  }

  .students {
    font-size: 0.85rem;
  }

  .enroll-btn {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
    width: 100%;
  }

  .cta {
    padding: 1.5rem 1rem;
  }

  .cta h2 {
    font-size: 1.2rem;
  }

  .cta p {
    font-size: 0.9rem;
  }

  .btn {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
}
</style>
