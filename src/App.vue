<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div id="app">
    <!-- Navigation Header -->
    <header class="navbar">
      <div class="navbar-container">
        <div class="logo">
          <h1>🎓 مدرسة النور</h1>
        </div>
        <nav class="nav-links">
          <router-link to="/" class="nav-link">الرئيسية</router-link>
          <router-link to="/about" class="nav-link">عن المدرسة</router-link>
          <router-link to="/courses" class="nav-link">الكورسات</router-link>
          <router-link to="/contact" class="nav-link">اتصل بنا</router-link>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>عن المدرسة</h3>
          <p>مدرسة النور توفر تعليماً عالي الجودة للطلاب من جميع المستويات</p>
        </div>
        <div class="footer-section">
          <h3>روابط سريعة</h3>
          <ul>
            <li><router-link to="/">الرئيسية</router-link></li>
            <li><router-link to="/courses">الكورسات</router-link></li>
            <li><router-link to="/contact">اتصل بنا</router-link></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>تواصل معنا</h3>
          <p>البريد: info@school.com</p>
          <p>الهاتف: +966-1-234-5678</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 مدرسة النور. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif, 'Arial', 'Helvetica';
  direction: rtl;
  text-align: right;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Navigation Bar */
.navbar {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  padding: 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  font-size: 1.8rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 2rem;
  flex-direction: row-reverse;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.nav-link:hover,
.nav-link.router-link-active {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

/* Main Content */
.main-content {
  flex: 1;
  padding: 2rem 0;
  background: #f8f9fa;
}

/* Footer */
.footer {
  background: #0d0d0d;
  color: white;
  padding: 3rem 2rem 1rem;
  margin-top: 3rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  margin-bottom: 1rem;
  color: #d4af37;
}

.footer-section p {
  line-height: 1.6;
  margin-bottom: 0.5rem;
  opacity: 0.8;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #d4af37;
}

.footer-bottom {
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1rem;
  opacity: 0.7;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .navbar-container {
    padding: 0.8rem 1.5rem;
  }

  .logo h1 {
    font-size: 1.5rem;
  }

  .nav-links {
    gap: 1.5rem;
  }

  .nav-link {
    padding: 0.4rem 0.8rem;
    font-size: 0.95rem;
  }

  .main-content {
    padding: 1.5rem 0;
  }

  .footer {
    padding: 2rem 1rem;
  }

  .footer-content {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .navbar-container {
    flex-direction: column;
    gap: 1rem;
    padding: 0.8rem 1rem;
  }

  .logo h1 {
    font-size: 1.3rem;
  }

  .nav-links {
    gap: 0.8rem;
    width: 100%;
    justify-content: center;
  }

  .nav-link {
    padding: 0.4rem 0.6rem;
    font-size: 0.9rem;
  }

  .main-content {
    padding: 1rem 0;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .footer {
    padding: 1.5rem 1rem;
  }
}

@media (max-width: 480px) {
  .navbar-container {
    padding: 0.6rem 0.8rem;
  }

  .logo h1 {
    font-size: 1.1rem;
  }

  .nav-links {
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .nav-link {
    padding: 0.3rem 0.5rem;
    font-size: 0.8rem;
  }

  .main-content {
    padding: 0.5rem 0;
  }

  .footer {
    padding: 1rem 0.8rem;
  }

  .footer-section h3 {
    font-size: 1rem;
  }

  .footer-section p {
    font-size: 0.9rem;
  }
}
</style>
