/* ============================================================
   OVERSTORY TREE — script.js
   ============================================================ */

'use strict';

/* ── STICKY HEADER ─────────────────────────────────────────── */
(function () {
  const header = document.getElementById('top');
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
})();


/* ── MOBILE MENU TOGGLE ────────────────────────────────────── */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const menu   = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', function () {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    menu.hidden = isOpen;
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  // Close menu when a nav link is clicked
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.setAttribute('aria-expanded', 'false');
      menu.hidden = true;
      document.body.style.overflow = '';
    });
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !menu.hidden) {
      toggle.setAttribute('aria-expanded', 'false');
      menu.hidden = true;
      document.body.style.overflow = '';
      toggle.focus();
    }
  });
})();


/* ── SMOOTH SCROLL (polyfill fallback) ─────────────────────── */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = anchor.getAttribute('href').slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();

      const headerH = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--header-h')) || 68;

      const top = target.getBoundingClientRect().top + window.scrollY - headerH;

      window.scrollTo({ top: top, behavior: 'smooth' });

      // Move focus to section for accessibility
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });
})();


/* ── SCROLL ANIMATION (IntersectionObserver) ─────────────── */
(function () {
  if (!window.IntersectionObserver) return;

  const targets = document.querySelectorAll(
    '.service-card, .why-list li, .process-step, .section-header, .contact-info, .contact-form-wrap'
  );

  targets.forEach(function (el) {
    el.classList.add('fade-up');
  });

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();


/* ── FOOTER YEAR ───────────────────────────────────────────── */
(function () {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();


/* ── CONTACT FORM → MAILTO ─────────────────────────────────── */
(function () {
  const form       = document.getElementById('quoteForm');
  const errorEl    = document.getElementById('form-error');
  if (!form || !errorEl) return;

  const RECIPIENT  = 'hello@overstorytree.com';

  function showError(msg) {
    errorEl.textContent = msg;
    errorEl.style.display = 'block';
  }

  function clearError() {
    errorEl.textContent = '';
    errorEl.style.display = 'none';
  }

  function getVal(name) {
    const el = form.elements[name];
    return el ? el.value.trim() : '';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearError();

    // Basic validation
    const name    = getVal('name');
    const phone   = getVal('phone');
    const email   = getVal('email');
    const address = getVal('address');
    const service = getVal('service');
    const notes   = getVal('notes');

    if (!name) { showError('Please enter your name.'); form.elements['name'].focus(); return; }
    if (!phone && !email) { showError('Please enter a phone number or email address so we can reach you.'); form.elements['phone'].focus(); return; }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError('Please enter a valid email address.'); form.elements['email'].focus(); return; }
    if (!service) { showError('Please select a service.'); form.elements['service'].focus(); return; }

    // Build mailto
    const subject = encodeURIComponent('Overstory Tree – Quote Request from ' + name);

    const body = encodeURIComponent(
      'Hello Overstory Tree,\n\n' +
      'I\'d like to request a free estimate.\n\n' +
      '--- Contact Info ---\n' +
      'Name:    ' + name   + '\n' +
      'Phone:   ' + (phone   || 'Not provided') + '\n' +
      'Email:   ' + (email   || 'Not provided') + '\n' +
      'Address: ' + (address || 'Not provided') + '\n\n' +
      '--- Request Details ---\n' +
      'Service: ' + service + '\n' +
      'Notes:   ' + (notes || 'None') + '\n\n' +
      'Thank you,\n' + name
    );

    const mailtoUrl = 'mailto:' + RECIPIENT + '?subject=' + subject + '&body=' + body;

    // Use a hidden <a> click — window.location.href causes page-to-top navigation
    const tempLink = document.createElement('a');
    tempLink.href = mailtoUrl;
    tempLink.style.display = 'none';
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);

    // Show success state
    const submitBtn = form.querySelector('[type="submit"]');
    const originalHTML = submitBtn.innerHTML;

    submitBtn.innerHTML =
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>' +
      ' Email client opened!';
    submitBtn.style.background = 'var(--green-mid)';
    submitBtn.disabled = true;

    setTimeout(function () {
      submitBtn.innerHTML = originalHTML;
      submitBtn.style.background = '';
      submitBtn.disabled = false;
    }, 5000);
  });
})();


/* ── GALLERY DRAG-SCROLL ────────────────────────────────────── */
(function () {
  const strip = document.querySelector('.gallery-strip');
  if (!strip) return;

  let isDown = false, startX, scrollLeft;

  strip.addEventListener('mousedown', function (e) {
    isDown = true;
    startX = e.pageX - strip.offsetLeft;
    scrollLeft = strip.scrollLeft;
    strip.style.userSelect = 'none';
  });

  strip.addEventListener('mouseleave', function () { isDown = false; });
  strip.addEventListener('mouseup',    function () { isDown = false; strip.style.userSelect = ''; });

  strip.addEventListener('mousemove', function (e) {
    if (!isDown) return;
    e.preventDefault();
    const x    = e.pageX - strip.offsetLeft;
    const walk = (x - startX) * 1.4;
    strip.scrollLeft = scrollLeft - walk;
  });
})();


/* ── GALLERY LIGHTBOX ──────────────────────────────────────── */
(function () {
  const lightbox     = document.getElementById('lightbox');
  const lbImg        = document.getElementById('lightboxImg');
  const lbCounter    = document.getElementById('lightboxCounter');
  const lbClose      = document.getElementById('lightboxClose');
  const lbPrev       = document.getElementById('lightboxPrev');
  const lbNext       = document.getElementById('lightboxNext');
  const items        = Array.from(document.querySelectorAll('.gallery-img-wrap'));

  if (!lightbox || !items.length) return;

  let currentIndex = 0;
  let lastFocused  = null;

  function getSrc(index) {
    return items[index].querySelector('img').src;
  }

  function getAlt(index) {
    return items[index].querySelector('img').alt;
  }

  function showImage(index) {
    currentIndex = (index + items.length) % items.length;
    lbImg.style.animation = 'none';
    // Force reflow to restart animation
    void lbImg.offsetWidth;
    lbImg.style.animation = '';
    lbImg.src = getSrc(currentIndex);
    lbImg.alt = getAlt(currentIndex);
    lbCounter.textContent = (currentIndex + 1) + ' / ' + items.length;
  }

  function openLightbox(index) {
    lastFocused = document.activeElement;
    showImage(index);
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
    lbImg.src = '';
    if (lastFocused) lastFocused.focus();
  }

  // Open on click of any gallery image wrap
  items.forEach(function (wrap, i) {
    wrap.setAttribute('role', 'button');
    wrap.setAttribute('tabindex', '0');
    wrap.setAttribute('aria-label', 'View photo ' + (i + 1) + ' – click to enlarge');

    wrap.addEventListener('click', function () { openLightbox(i); });

    wrap.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(i);
      }
    });
  });

  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click',  function () { showImage(currentIndex - 1); });
  lbNext.addEventListener('click',  function () { showImage(currentIndex + 1); });

  // Click outside image to close
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', function (e) {
    if (lightbox.hidden) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   showImage(currentIndex - 1);
    if (e.key === 'ArrowRight')  showImage(currentIndex + 1);
  });

  // Touch swipe support
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  lightbox.addEventListener('touchend', function (e) {
    const delta = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 50) {
      delta < 0 ? showImage(currentIndex + 1) : showImage(currentIndex - 1);
    }
  }, { passive: true });
})();