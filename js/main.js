---
layout: null
---
$(document).ready(function () {

  $('a.full-screen-button').click(function (e) {
    var $el = $('.panel-cover[style*="max-width"]');
    if ($el.length === 0) return
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('animated slideInLeft')
      $('.panel-cover[style]').removeAttr('style');
      $('.panel-cover').addClass('panel-cover')
      $('.panel-cover').css({
        'background-image': 'url({{ "images/spacex.gif" | prepend: site.baseurl }}'
      });
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
  })

  $('a.blog-button').click(function (e) {
    var $el = $('.panel-cover[style*="max-width"]');
    if ($('.panel-cover').hasClass('panel-cover--collapsed') || $el.length === 1) return
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
  })

  if (window.location.hash !== '#full-screen') {
    var $el = $('.panel-cover[style*="max-width"]');
    if ($('.panel-cover').hasClass('panel-cover--collapsed') || $el.length === 1) return
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
  } else {
    if ($('.panel-cover').hasClass('panel-cover')) return
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover')
      $('.content-wrapper').addClass('animated slideInLeft')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

})
