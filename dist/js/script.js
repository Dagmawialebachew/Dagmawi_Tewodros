function openDocx() {
    var docUrl = 'https://docs.google.com/document/d/1G7T8jhqi6uJvUgy18EHXquNPkgAs9mpW/edit?usp=sharing&ouid=112830450550044639270&rtpof=true&sd=true';
    window.open(docUrl, '_blank');
}

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.innerText = 'Sending...';

   const serviceID = 'service_ilt0bsa';
   const templateID = 'template_cswagx5';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.innerText = 'Send Email';
      alert('I will contact you sooner with your email!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
    

        function checkWidth() {
            const div = document.getElementById('cardDiv');
            if (window.innerWidth <= 988) {
                div.style.display = 'none'
            } else {
                div.style.display = 'flex'

            }
        } 

        window.addEventListener('resize', checkWidth);
  window.addEventListener('load', checkWidth);

menu = document.getElementById('menu')
menuDiv = document.getElementById('menu-div')
dropDown = document.getElementById('drop-down')
toggle = document.getElementById('toggle')
nav = document.getElementById('nav')
lazyMethod = document.getElementById('lazy')
lazyMethod.style.display = 'none'
function show() {
     menuDiv.classList.toggle ('active')
     const isToggled = menuDiv.classList.contains('active')
     dropDown.src = isToggled ? 'dist/icons/top.png' : 'dist/icons/menu.png'
}

function toggleFun() {
     nav.classList.toggle('nav-active');
     dropDown.style.display = 'none'
     lazyMethod.style.display = 'flex'
     const isVisible = nav.classList.contains('nav-active')
     toggle.src = isVisible ? 'dist/icons/slider.png': 'dist/icons/toggle.png'
    


    }
        
    document.addEventListener('DOMContentLoaded', function() {
      const video = document.getElementById('background-video');
      const project = document.getElementById('project-managment');
  
      if (!video || !project) {
          console.error('Required elements not found.');
          return;
      }
  
      function isElementInViewport(el) {
          const rect = el.getBoundingClientRect();
          return (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
      }
  
      function checkVideoPlayback() {
          if (isElementInViewport(project)) {
              video.style.display = 'block';
              if (video.paused) {
                  video.play();
              }
          } else {
              video.style.display = 'block';
             
          }
      }

  
      // Restart the video when it ends
      video.addEventListener('ended', function() {
          video.currentTime = 0;
          video.play();
      });
  
      // Initial check
      checkVideoPlayback();
  
      // Check on scroll and resize
      window.addEventListener('scroll', checkVideoPlayback);
      window.addEventListener('resize', checkVideoPlayback);
  });

  

