// JavaScript Document

jQuery(function(){
	  var SelfLocation = window.location.href.split('?');
	  switch (SelfLocation[1]) {
		case "justify_right":
		  jQuery(".megamenu").megamenu({ 'justify':'right' });
		  break;
		case "justify_left":
		default:
		  jQuery(".megamenu").megamenu();
	  }
	});