
const pulser = document.querySelector('.pulser')
const wrapper = document.querySelector('.content-wrapper')
const body  = document.querySelector('body')
document.onreadystatechange = function () {
    if (document.readyState !== 'complete') {
        wrapper.style.display = 'none';
        body.style.background = 'white';
        pulser.style.visibility = 'visible';
    } else {
        setTimeout(() => {
            pulser.style.visibility = 'visible';
        }, 0); 
        setTimeout(() => {
            pulser.style.visibility = 'hidden';
            wrapper.style.display = 'block';
            body.style.background = 'var(--primary-color)';
            triggerGsapFunction();
            progressBarAnimator();
        }, 5500); 
    }
};

const updatePulser = (content, delay) => {
    setTimeout(() => {
        pulser.innerHTML = content;
    }, delay);
}

updatePulser('<div><div class="grid"><p>Modern</p><img src="dist/icons/modern.png" alt = "..."></div></div>', 1500);
updatePulser('<div><div class="grid"><p>Appeling</p><img src="dist/icons/magnet.png "alt = "..."></div></div>', 2500);
updatePulser('<div><div class="grid"><p>User Friendly</p><img src="dist/icons/user-friendly.png" alt = "..."></div></div>', 3500);
updatePulser('<div><div class="grid"><p>Self Based Web Agency</p></div></div>', 4500);



//  ---------------------------------------------Trigger The Gsap Animation----------------------------------------//

function triggerGsapFunction() {


  gsap.registerPlugin(ScrollTrigger);
  
  gsap.from('.slide-in-right', {
      scrollTrigger: {
          trigger: '.slide-in-right',
          start: 'top bottom',
          toggleActions: 'play none none complete'
      },
      opacity: 0,
      x: 200,
      duration: 1.5
  });
  
  
  gsap.from('.slide-in-left', {
      scrollTrigger: {
          trigger: '.slide-in-left',
          start: 'top bottom',
          toggleActions: 'play none none none'
      },
      x: -200,
      opacity: 0,
      duration: 1.5
  });
  
  gsap.from('.div-services', {
      scrollTrigger: {
          trigger: '.div-services',
          start: 'top 80%',
          toggleActions: 'play none none complete',
      },
      opacity: 0,
      duration: 5,
      x: -50,
      stagger: 0.3,
  });
  
  gsap.from('.box', {
      scrollTrigger: {
          trigger: '.box',
          start: 'top 80%',
          toggleActions: 'play none none none'
      },
      x: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3
  });
  
  gsap.from('#home p, #home h1, #home button', {
      scrollTrigger: {
          trigger: '#home',
          start: 'top 80%',
          toggleActions: 'play none none none'
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
      duration: 2.5,
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
          y: 100,
          opacity: 0,
          duration: 1.5,
          stagger: 0.2
      });
  });
  
  document.querySelectorAll('.div-services div').forEach(hover => {
      hover.addEventListener('mouseenter', () => {
          gsap.to(hover, { scale: 1.05, duration: 0.3, ease: "power1.inOut" });
      });
      hover.addEventListener('mouseleave', () => {
          gsap.to(hover, { scale: 1, duration: 0.4, ease: "power1.inOut" });
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



  
  
