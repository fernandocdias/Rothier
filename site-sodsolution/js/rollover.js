// JavaScript Document

$(function() {
  $('.rollover').hover(function() {
	  var currentImg = $(this).attr('src');
	  $(this).attr('src', $(this).attr('hover'));
	  $(this).attr('hover', currentImg);
  }, function() {
	  var currentImg = $(this).attr('src');
	  $(this).attr('src', $(this).attr('hover'));
	  $(this).attr('hover', currentImg);
  });
});