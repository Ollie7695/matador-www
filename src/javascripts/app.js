var $ = require('jquery');
var Foundation = require('foundation-sites');
var gsap = require("gsap");
var TweenMax = require('gsap').TweenMax;

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