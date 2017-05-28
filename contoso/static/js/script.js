// var slideInterval = 3500;
// function getFigures() {
//     var section = document.getElementById('carousel');
//     return section.getElementsByTagName('figure');
// }
//
// function moveForward() {
//     var result;
//     var figures = getFigures();
//     function getNextIndex(currIndex) {
//         if (currIndex === figures.length-1) {
//             result = 0;
//         }
//         else {
//             result = currIndex+1;
//         }
//         return result;
//     }
//     for (var i=0; i < figures.length; i++ ) {
//         if (figures[i].classList[0] === 'visible') {
//             var iN = getNextIndex(i);
//             figures[i].classList.remove('visible');
//             figures[iN].classList.add('visible');
//             break;
//         }
//     }
// }
//
// window.onload = function () {
//    setInterval(moveForward, slideInterval);
// }


$(document).ready(function () {
   $('#carousel').owlCarousel({
       loop:true,
       nav:false,
       margin:10,
       animateOut:'fadeOut',
       autoplay:true,
       autoplayHoverPause:false,
       responsive:{
          0:{
             items:1
          },
           600:{
              items:1
           },
           1000:{
              items:1
           }
       }
   });
});

