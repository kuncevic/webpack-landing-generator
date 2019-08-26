/*
 *
 *
 *
 * HERO SECTION
 *
 *
 *
 */
$('.main-cta').sticky({
  responsiveWidth: true,
  getWidthFrom: '.w150p'
});

$('.menu-section-container-nav').css({ display: 'none', opacity: 0 });

$('.main-cta').on('sticky-start', function() {
  $('.secondary-cta').css('display', 'none');
  $('.main-cta').css('margin-top', '0.9rem'); // XXX : hacky, indeed
  $('.main-cta').text(buttons['main'].textOnHeader); // set button text in header
  $('body').toggleClass('is-sticky');
  $('.secondary-cta').css('display', 'none');
  $('.main-cta').css('display', buttons['main'].showOnHeader ? 'block' : 'none');
});
$('.main-cta').on('sticky-end', function() {
  $('.secondary-cta').toggle();
  $('.secondary-cta').css('display', '');
  $('.main-cta').css('margin-top', '');
  $('.main-cta').text(buttons['main'].text); // switch back original text
  $('body').toggleClass('is-sticky');
  $('body').removeClass('is-expanded');
  $('.menu-section-container-nav').css({ display: 'none', opacity: 0 });
  $('#nav-toggle').css('display', 'block');
  $('.main-cta').css('display', 'inline-block');
});

/*
 *
 *
 *
 * MENU SECTION
 *
 *
 *
 */
function toggleNavigation() {
  if ($('body').hasClass('is-expanded')) {
    $('body').removeClass('is-expanded');
    $('.menu-section-container-nav').css({ display: 'none', opacity: 0 });
  } else {
    $('body').addClass('is-expanded');
    $('.menu-section-container-nav').css({ display: 'flex' });
    setTimeout(function() {
      $('.menu-section-container-nav').css({ opacity: 1 });
    }, 500);
  }

  if ($('#nav-toggle').hasClass('active')) {
    $('#nav-toggle').removeClass('active');
  } else {
    $('#nav-toggle').addClass('active');
  }
}
$(document).ready(function(event) {
  $('#nav-toggle').on('click', function() {
    toggleNavigation();
  });

  $('.nav-item').on('click', function(e) {
    toggleNavigation();
    $.scrollTo('.' + $(e.currentTarget).attr('data-target'), { duration: 500 });
  });

  $('.footer-nav-item').on('click', function(e) {
    $.scrollTo('.' + $(e.currentTarget).attr('data-target'), { duration: 500 });
  });

  $(window).resize(function() {
    if (!$('body').hasClass('is-sticky')) {
      $('.main-cta').width('auto');
    }
  });
});
