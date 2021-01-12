$(document).on('click','.navbar-collapse.in',function(e) {
  if( $(e.target).is('a') ) {
    $(this).collapse('hide');
  }
});

$('.navbar-nav').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});
