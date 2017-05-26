function startLogic() {
   var newHtml = '<em>New Header</em>';
   document.getElementById('headerItem').innerHTML = newHtml;
}
function buttonPush() {
   window.alert('You pushed the button');
   startLogic();
}
