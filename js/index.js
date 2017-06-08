// Generate onload
window.onload = function() {
  var myCode = webJSON();
  myCode.init();
  $("parrafo").click(function(){
    alert("klik parrafo jquery");
  });
}
function changeTo(file) {
  webJSON().changeTo(file);
}
