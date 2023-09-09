/*=============== SHOW MENU ===============*/
document.addEventListener('DOMContentLoaded', () => {
   const navMenu = document.getElementById('nav_menu');
   const navToggle = document.getElementById('nav-toggle');
   const navClose = document.getElementById('nav-close');

   /*===== MENU SHOW =====*/
   /* Validate if constant exists */
   if (navToggle) {
      navToggle.addEventListener('click', () => {
         navMenu.classList.add('show-menu');
      });
   }

   /*===== MENU HIDDEN =====*/
   /* Validate if constant exists */
   if (navClose) {
      navClose.addEventListener('click', () => {
         navMenu.classList.remove('show-menu');
      });
   }
});



/*=============== REMOVE MENU MOBILE ===============*/


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== GSAP ANIMATION ===============*/
