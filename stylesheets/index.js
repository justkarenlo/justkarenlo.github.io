$(document).ready(function () {

  $('#about-me-btn').on('click', function () {
    $('#projects').css('left', '-3000px')
    setTimeout( function () {$('#projects').css('display', 'none')
    }, 200);

    $('#aboutme').css('display', 'block')
    setTimeout( function () {$('#aboutme').css('left', 0)
    }, 200);
  })
  $('#projects-btn').on('click', function () {
    $('#aboutme').css('left', '-3000px')
    setTimeout( function () {$('#aboutme').css('display', 'none')
    }, 200);

    $('#projects').css('display', 'block')
    setTimeout( function () {$('#projects').css('left', 0)
    }, 200);
  })
  $('#blog-btn').on('click', function () {
   // window.location.href = 'http://justkarenlo.github.io/blog'
   window.open('http://justkarenlo.github.io/blog', '_blank')
  })
});