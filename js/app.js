
document.querySelector(".toggle-settings img").onclick = function () {


  // Toggle Class Open On Main Settings Box
  document.querySelector(".settings-box").classList.toggle("open");
  
};


function openNav() {
  $('#mySidenav').css('left' , '0')
  $('.burgerBtn').css('opacity','0')
}

function closeNav() {
    $('#mySidenav').css('left' , '-100%')
    $('.burgerBtn').css('opacity','1')
}
