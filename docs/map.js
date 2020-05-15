$("path, circle").hover(function(e) {
  $('#info-box').css('display','block');
  $('#info-box').html($(this).data('info'));
});

$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});

$(document).mousemove(function(e) {
  $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
  $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
}).mouseover();

$('path').click(function () {
  var name = ($(this).data('info'));

  if (name == "Nigeria") {
    window.location.href = 'Nigeria/';
  } else {
    window.location.href = 'under_construction.html';
  }
});
