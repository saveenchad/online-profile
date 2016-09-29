$(document).ready(function() {
  // $('.carousel').carousel({
  //   indicators: true
  // });
  $('.materialboxed').materialbox();
  $('.parallax').parallax();
  $('.tabs').tabs();
  $('.tooltipped').tooltip({delay: 50});

  $('.tab').click(function() {
    $('html, body').animate({scrollTop: 400}, 750);
  });

  $('#themeSwitch').on('change',function(){
    var darkClasses = 'body, .my-card-blue, .main-content, .tabs, .card, .card-reveal, .dropdown-content';
    if ($(this).is(":checked")) {
      $(darkClasses).addClass('dark');
    } else {
      $(darkClasses).removeClass('dark');
    }
  });
});
