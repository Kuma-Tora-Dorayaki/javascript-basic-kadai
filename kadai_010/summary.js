$('#change-color').on('click', function() {
  $('#target').css('color','orange');
}) ;

$('#change-text').on('click', function() {
  $('#target').text('阪神 優勝！！！やったー！おめでとう！！！！！');
});

$('#fade-out').on('click', function() {
  $('#target').fadeOut(1000);
});

$('#fade-in').on('click', function() {
  $('#target').fadeIn(1000);
});