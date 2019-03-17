var $ = require('jquery');
var Foundation = require('foundation-sites');
var gsap = require("gsap");
var TweenMax = require('gsap').TweenMax;
var Flickity = require("flickity");
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

var flkty = new Flickity( '.mobile-features', {
	prevNextButtons: false,
	pageDots: false
});

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

document.getElementById('nav').onclick = function() {
	var className = '' + nav.className + '';
	var d = document.getElementById('navigation');
	var body = document.getElementsByTagName("body")[0];

	if ( ~className.indexOf(' is-active') ) {
		this.className = className.replace(' is-active', '');
		d.classList.add = d.className.replace(' is-active', '');
		TweenLite.to(".header nav a", .1, {color: "#004DFF", ease: Power3.easeInOut});
		TweenLite.to(".header svg", .1, {color: "#004DFF", ease: Power3.easeInOut});
		body.classList.remove('scroll-disabled');
		TweenLite.to(".navigation", .8, {y: "-100%", ease: Power4.easeInOut});
	} else {
		this.className += ' is-active';
		d.classList.add = "navigation is-active";
		body.classList.add('scroll-disabled');
		TweenLite.to(".header nav a", .1, {color: "#fff", ease: Power3.easeInOut});
		TweenLite.to(".header svg", .5, {color: "#fff", ease: Power3.easeInOut});
		TweenLite.to(".navigation", .8, {y: "0%", ease: Power4.easeInOut});
	}
}