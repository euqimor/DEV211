$(document).ready(function () {
    manipulateDOM();
});

function manipulateDOM() {
   var h1Headers = $('h1');
   h1Headers.text('Huilo World');
   var h3Headers = $('h3');
   h3Headers.first().css('text-decoration', 'line-through');
   h3Headers.css('color', 'red');
   var lastH3 = $('h3:last');
   lastH3.css('background-color', 'black');
}
