var $ = require('jquery');
var Foundation = require('foundation-sites');
var gsap = require("gsap");
var TweenMax = require('gsap').TweenMax;
import Headroom from "headroom.js";

TweenMax.staggerFromTo(
	".masthead h1, .masthead p, .masthead a img", 1, {
		opacity: 0,
		y: 100
	}, {
		opacity: 1,
		y: 0,
		ease: Power2.easeInOut
	}, .1);

$(document).foundation();

if (document.querySelector('.scrolling-nav')) {
	// Scrolling article nav
	const headroom = new Headroom(document.querySelector(".scrolling-nav"), {
		offset: 100,
		tolerance: {
			up: 100,
			down: 0
		}
	});
	headroom.init();

	// Scrolling progress bar
	var winHeight = $(window).height(), 
		docHeight = $(".article").height() + 650,
		progressBar = $('progress'),
		max, value;

		max = docHeight - winHeight;
		progressBar.attr('max', max);

	$(document).on('scroll', function(){
		value = $(window).scrollTop();
		progressBar.attr('value', value);
	});
}