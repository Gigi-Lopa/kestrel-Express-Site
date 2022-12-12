let HEADER = document.querySelector('#header')
let NAV = document.querySelector('#navbar')
let HERO = document.querySelector('#hero')
var tinyslider = function() {

    var slider = document.querySelectorAll('.features-slider');
   
    
    if ( slider.length> 0 ) {
        var tnsSlider = tns({
            container: '.features-slider',
            mode: 'carousel',
            speed: 700,
            items: 3,
            // center: true,
            gutter: 30,
            loop: false,
            edgePadding: 80,
            controlsPosition: 'bottom',
            // navPosition: 'bottom',
            nav: false,
            // autoplay: true,
            // autoplayButtonOutput: false,
            controlsContainer: '#features-slider-nav',
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2
                },
                900: {
                    items: 3
                }
            }
        });
    }

}

$(document).ready(()=>{
/*     AOS.init({
        duration: 800,
        easing: 'slide',
        once: true
    }); */
    tinyslider();
    $('.mobile-nav-toggle').on('click',()=>{
        if(!NAV.classList.contains('navbar-mobile')){
            NAV.classList.add('navbar-mobile')
        }
        else{
            NAV.classList.remove('navbar-mobile')
        }
    })
})
document.addEventListener('scroll', e=>{
    if(this.scrollY >= 164){
        HEADER.classList.add('fixed-top')
        
    }
    else{
        HEADER.classList.remove('fixed-top')
    }
})
const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }
on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)