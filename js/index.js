// Generate onload
window.onload = function() {
  var myCode = webJSON(elements);
  myCode.init();
}
function changeTo(file) {
  webJSON().changeTo(file);
}
