$(document).ready(function () {
  $('#about-me-btn').on('click', function () {
    var that = $(this)
    $('.about-me-show').slideDown("slow");

    $('.projects-show').css('display', 'none');
    $('.blog-show').css('display', 'none');
    $('.default-show').css('display', 'none');
  })
  $('#projects-btn').on('click', function () {
    $('.projects-show').slideDown("slow");

    $('.about-me-show').css('display', 'none');
    $('.blog-show').css('display', 'none');
    $('.default-show').css('display', 'none');
  })
  $('#blog-btn').on('click', function () {
   window.location.replace('http://justkarenlo.github.io/blog')
  })
});