// --------------------------------------------- Trigger The GSAP Animations --------------------------------------------- //

function triggerGsapFunction() {
  gsap.registerPlugin(ScrollTrigger);

  // ===== HOME SECTION =====
  gsap.from('.slide-in-right', {
    scrollTrigger: {
      trigger: '#home',
      start: 'top bottom',
      toggleActions: 'play none none complete'
    },
    opacity: 0,
    x: 200,
    duration: 1.5,
    ease: 'power3.out'
  });

  gsap.from(['.slide-in-left', '.logo'], {
    scrollTrigger: {
      trigger: '#home',
      start: 'top bottom'
    },
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
  });

  gsap.from('#home p, #home h1, #home button', {
    scrollTrigger: {
      trigger: '#home',
      start: 'top 80%'
    },
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.3,
    ease: 'power2.out'
  });

  // ===== SERVICES SECTION =====
  gsap.from('#my-service', {
    scrollTrigger: {
      trigger: '#my-service',
      start: 'top 80%'
    },
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    ease: 'power2.out'
  });

  // ===== PROJECT CARDS (Diagonal Wave) =====
  gsap.utils.toArray('.box').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none complete'
      },
      y: 80,
      opacity: 0,
      scale: 0.95,
      duration: 1.2,
      ease: 'power3.out',
      delay: (i % 3) * 0.15 + Math.floor(i / 3) * 0.15 // diagonal wave effect
    });
  });

  // ===== ABOUT SECTION =====
  gsap.from('#about h1', {
    scrollTrigger: {
      trigger: '#about h1',
      start: 'top 80%'
    },
    x: -100,
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out'
  });

  gsap.from('#about p, #about button', {
    scrollTrigger: {
      trigger: '#about p',
      start: 'top 80%'
    },
    opacity: 0,
    y: 30,
    duration: 1.2,
    stagger: 0.2,
    ease: 'power2.out'
  });

  // ===== PROJECT MANAGEMENT SECTION =====
  gsap.from('#project-managment', {
    scrollTrigger: {
      trigger: '#project-managment',
      start: 'top 60%'
    },
    y: -200,
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out'
  });

  // ===== CONTACT FORM =====
  gsap.from('#form > div:nth-child(2)', {
    scrollTrigger: {
      trigger: '#contact-me',
      start: 'top 80%'
    },
    y: -200,
    opacity: 0,
    duration: 1.5,
    stagger: 0.3,
    ease: 'power2.out'
  });

  // ===== PRICING SECTION =====
  gsap.from('#pricing div', {
    scrollTrigger: {
      trigger: '#pricing div',
      start: 'top 80%'
    },
    scale: 0.7,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: 'power3.out'
  });

  // ===== TEXT FADE-INS =====
  gsap.utils.toArray('#My-projects p, #pricing p:nth-of-type(1)').forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 80%'
      },
      opacity: 0,
      duration: 1.2,
      ease: 'power1.out'
    });
  });

  // ===== SECTION HEADINGS =====
  gsap.utils.toArray('section:not(#home, #about, #project-managment) h1').forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 80%'
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out'
    });
  });
}

function progressBarAnimator() {

  
  function isElementInViewport(el) {
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function animateProgress() {
      const rings = document.querySelectorAll('.progress-ring');
      rings.forEach(ring => {
          if (isElementInViewport(ring) && !ring.classList.contains('animated')) {
              ring.classList.add('animated');

              const percent = ring.getAttribute('data-percent');
              const circle = ring.querySelector('.progress');
              const text = ring.querySelector('.progress-text');
              const radius = circle.r.baseVal.value;
              const circumference = radius * 2 * Math.PI;
              const offset = circumference - (percent / 100) * circumference;

              circle.style.strokeDasharray = circumference;
              circle.style.strokeDashoffset = offset;

              let currentPercent = 0;
              const interval = setInterval(() => {
                  if (currentPercent <= percent) {
                      text.textContent = `${currentPercent}%`;
                      currentPercent++;


                  } else {
                      clearInterval(interval);

                  }
              }, 8);
          }
      });
  }

  window.addEventListener('scroll', animateProgress);
  window.addEventListener('resize', animateProgress);
  animateProgress()
}



  
  
