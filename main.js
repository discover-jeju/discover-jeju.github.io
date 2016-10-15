document.addEventListener("DOMContentLoaded", function() {
  console.log("init");
  $('.hamburger-wrapper').click(function() {
    $('#sidebar').addClass('sidebar--open');
  });
  $('#sidebar.sidebar--open, #sidebar-overlay').click(function() {
    $('#sidebar').removeClass('sidebar--open');
  });
});
