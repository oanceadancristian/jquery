$(function () {
  $('#list')
    .children('li')
    .filter(':even')
    .css('background-color', 'rgba(180, 180, 30, 0.8)');
  // $('li')
  //   .filter(function (index) {
  //     return index % 3 === 2;
  //   })
  //   .css('background-color', 'rgba(180, 180, 30, 0.8)');
  $('li').first().css('background-color', 'rgba(180, 180, 30, 0.8)');
});
