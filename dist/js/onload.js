//  ---------------------------------------------Trigger The Gsap Animation----------------------------------------//

function triggerGsapFunction() {


  gsap.registerPlugin(ScrollTrigger);
  
  gsap.from('.slide-in-right', {
      scrollTrigger: {
          trigger: '#home',
          start: 'top bottom',
          toggleActions: 'play none none complete'
      },
      opacity: 0,
      x: 200,
      duration: 3
  });
  
  
  gsap.from('.slide-in-left, .logo', {
      scrollTrigger: {
          trigger: '#home',
          start: 'top bottom',
          toggleActions: 'play none none none'
      },
      x: -200,
      opacity: 0,
      duration: 1
  });
  
  gsap.from('#my-service', {
      scrollTrigger: {
          trigger: '#my-service',
          start: 'top 80%',
          toggleActions: 'play none none complete'
      },
      opacity: 0,
      duration: 2,
      scale:0.8,
      stagger: 0.3,
  });
  
  gsap.from('.box', {
      scrollTrigger: {
          trigger: '.box',
          start: 'top 80%',
          toggleActions: 'play none none complete'
      },
      y: 100,
      opacity: 0,
      duration: 2,
      stagger: 0.3,
  });


   gsap.from('#about h1', {
      scrollTrigger: {
          trigger: '#about h1',
          start: 'top 80%',
          toggleActions: 'play none none complete'
      },
      x: -100,
      opacity: 0,
      duration: 2,
      stagger: 0.3,
  });

   gsap.from('#about p, #about button', {
      scrollTrigger: {
          trigger: '#about p',
          start: 'top 80%',
          toggleActions: 'play none none complete'
      },
      x: 0,
      opacity: 0,
      duration: 2,
      stagger: 0.3,
  });
  
  gsap.from('#home p, #home h1, #home button', {
      scrollTrigger: {
          trigger: '#home',
          start: 'top 80%',
          toggleActions: 'play none none complete.'
      },
      x: 0,
      opacity: 0,
      duration: 1.5,
      stagger: 0.5
  });



  
  gsap.from('#project-managment', {
      scrollTrigger: {
          trigger: '#project-managment',
          start: 'top 80%',
          toggleActions: 'play none none none'
      },
      y: -200,
      opacity: 0,
      duration: 1.5
  });
  
  gsap.from('#form > div:nth-child(2)', {
      scrollTrigger: {
          trigger: '#contact-me',
          start: 'top 80%',
          toggleActions: 'play none none none'
      },
      y: -200,
      opacity: 0,
      duration: 3,
      stagger: 0.3
  });
  
  gsap.from('#pricing div', {
      scrollTrigger: {
          trigger: '#pricing div',
          start: 'top 80%',
          toggleActions: 'play none none none'
      },
      scale: 0.7,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2
  });
  
  gsap.utils.toArray('#My-projects p, #pricing p:nth-of-type(1)').forEach(element => {
      gsap.from(element, {
          scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              toggleActions: 'play none none none'
          },
          opacity: 0,
          duration: 8
      });
  });
  
  gsap.utils.toArray('section:not(#home, #about, #project-managment) h1').forEach(element => {
      gsap.from(element, {
          scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              toggleActions: 'play none none none'
          },
          y: 50,
          opacity: 0,
          duration: 1.5,
          stagger: 0.2
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



  
  
