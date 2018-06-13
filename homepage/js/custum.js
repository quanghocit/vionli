$.fn.responsiveTabs = function() {
  this.addClass('responsive-tabs');
  this.append($('<span class="fas fa-bars"></span>'));
  this.append($('<span class="fas fa-times"></span>'));

  this.on('click', 'li.active > a, span.fas', function() {
    this.toggleClass('open');
  }.bind(this));

  this.on('click', 'li:not(.active) > a', function() {
    this.removeClass('open');
  }.bind(this));
};

$('.nav.nav-tabs').responsiveTabs();
$(function() {
    $('.height').matchHeight();
   
});