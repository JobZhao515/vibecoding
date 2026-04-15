/* ============================================
   安徽庐江龙桥矿业 - JavaScript 交互
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // === Mobile Menu Toggle ===
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      this.classList.toggle('active');
      mainNav.classList.toggle('open');
    });

    // Mobile dropdown toggle
    if (window.innerWidth <= 768) {
      mainNav.querySelectorAll('li').forEach(function (li) {
        const dropdown = li.querySelector('.dropdown');
        if (dropdown) {
          li.querySelector('a').addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {
              e.preventDefault();
              li.classList.toggle('dropdown-open');
            }
          });
        }
      });
    }
  }

  // === Banner Slider ===
  const slides = document.querySelectorAll('.banner-slide');
  const dots = document.querySelectorAll('.banner-dots span');

  if (slides.length > 0) {
    let current = 0;
    let timer;

    function showSlide(index) {
      slides.forEach(function (s) { s.classList.remove('active'); });
      dots.forEach(function (d) { d.classList.remove('active'); });
      slides[index].classList.add('active');
      if (dots[index]) dots[index].classList.add('active');
      current = index;
    }

    function nextSlide() {
      showSlide((current + 1) % slides.length);
    }

    function startTimer() {
      timer = setInterval(nextSlide, 4000);
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        clearInterval(timer);
        showSlide(i);
        startTimer();
      });
    });

    startTimer();
  }

  // === Header scroll shadow ===
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 2px 12px rgba(0,0,0,.12)';
      } else {
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,.08)';
      }
    });
  }

  // === Job Accordion ===
  document.querySelectorAll('.job-item-header').forEach(function (header) {
    header.addEventListener('click', function () {
      const body = this.nextElementSibling;
      const arrow = this.querySelector('.arrow');
      body.classList.toggle('open');
      if (arrow) arrow.classList.toggle('open');
    });
  });

  // === Investor Tabs ===
  document.querySelectorAll('.investor-tabs .tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      const target = this.dataset.tab;
      document.querySelectorAll('.investor-tabs .tab').forEach(function (t) { t.classList.remove('active'); });
      document.querySelectorAll('.tab-content').forEach(function (c) { c.classList.remove('active'); });
      this.classList.add('active');
      var el = document.getElementById(target);
      if (el) el.classList.add('active');
    });
  });

  // === Honor Year Toggle ===
  document.querySelectorAll('.honor-item .view-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Could open modal or expand detail — placeholder
      alert('证书查看功能开发中');
    });
  });

  // === Video Thumbs ===
  document.querySelectorAll('.video-thumbs .vthumb').forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      document.querySelectorAll('.video-thumbs .vthumb').forEach(function (t) { t.classList.remove('active'); });
      this.classList.add('active');
      var title = document.querySelector('.video-title');
      if (title) title.textContent = this.textContent;
    });
  });

  // === Scroll to top (if present) ===
  var backTop = document.querySelector('.back-to-top');
  if (backTop) {
    window.addEventListener('scroll', function () {
      backTop.style.display = window.scrollY > 400 ? 'flex' : 'none';
    });
    backTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
