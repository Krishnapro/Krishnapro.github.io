// ========= menu show y Hidden =======
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    /* ====== Menu Show ===== */
    /* validation if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


      /* ====== Menu Hidden ===== */
    /* validation if constant exists */
    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
    }
    /* ================ remove menu mobile ============= */
    const navLink = document.querySelectorAll('.nav_link')
    function linkAction(){
        const navMenu = document.getElementById('nav-menu')
        // When we click on each nav_link, we remove show-menu class
        navMenu.classList.remove('show-menu')

    }
    navLink.forEach(n => n.addEventListener('click', linkAction))


    /* ========= PROJECT SWIPER ========= */
    // new Swiper(swiperContainer, parameters)

    let swiper = new Swiper(".project_container", {
        cssMode: true,
        

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // mousewheel: true,
        // keyboard: true,
      });

     /* ============ CHANGE BACKGROUND HEADER =========*/
     function scrollHeader(){
         const nav = document.getElementById('header')
         // when the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
         if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')

     }
     window.addEventListener('scroll', scrollHeader)


    //  ========= DARK LIGHT THEME ===========

    
    