window.onbeforeunload = function(){
    window.scrollTo(0,0);
}

window.addEventListener('load', function(){

    //
    // Components
    //
    var intro   = document.querySelector('.intro');
    var title   = document.querySelector('.intro h2');
    var about   = document.querySelector('.about');
    var body    = document.querySelector('body');
    var h       = window.innerHeight;

    //
    // Remove waiting class
    //
    body.classList.remove('waiting');

    //
    // On scroll
    //
    document.addEventListener('scroll', function(event){

        //
        // PX Scrolled
        //
        var scrolled = h - about.getBoundingClientRect().top;
        var half     = h / 2;
        var opacity  = 1 - (scrolled / half);
        var scale    = 1 - ((1 - opacity) / 100 * 15);
        title.style.opacity = opacity;
        title.style.transform = 'matrix(' + scale + ',0,0,' + scale + ',0,0)';
    })
})




'use strict';

(function() {
  var body = document.body;
  var burgerMenu = document.getElementsByClassName('b-menu')[0];
  var burgerContain = document.getElementsByClassName('b-container')[0];
  var burgerNav = document.getElementsByClassName('b-nav')[0];

  burgerMenu.addEventListener('click', function toggleClasses() {
    [body, burgerContain, burgerNav].forEach(function (el) {
      el.classList.toggle('open');
    });
  }, false);
})();