$(document).ready(function(){
  // adds items to list
  $('#button').click(function(){
    var toAdd = $('input[name=item]').val();
    $('.list').append("<br>" + "<div class='item'>" + toAdd + "</div>" );
  });
  // removes items when clicked on
  $(document).on('click', '.item', function(){
    $(this).remove();
  });
  // use 'enter' to also add
  $('#inputitem').keypress(function (e) {
    if (e.which == 13) {var toAdd = $('input[name=item]').val();
      $('.list').append("<br>" + "<div class='item'>" + toAdd + "</div>" );
      return false;    // to prevent enter continuous
    }
  });

});