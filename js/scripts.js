$(document).ready(function(){
  alert("this code was read!")
  $(".card").click(function(){
    $(this.children).toggle();
  });
});
