var $ = require('jquery');
var Foundation = require('foundation-sites');
var gsap = require("gsap");
var TweenMax = require('gsap').TweenMax;
var Flickity = require("flickity");
import Headroom from "headroom.js";

TweenMax.staggerFromTo(
	".masthead h1, .masthead h2, .masthead p, .masthead a img", 1, {
		opacity: 0,
		y: 100
	}, {
		opacity: 1,
		y: 0,
		ease: Power2.easeInOut
	}, .1);

if (document.querySelector('.mobile-features')) {
	var flkty = new Flickity( '.mobile-features', {
		prevNextButtons: false,
		pageDots: false
	});
}

if (document.querySelector('.mobile-investors')) {
	var flkty = new Flickity( '.mobile-investors', {
		prevNextButtons: false,
		pageDots: false,
		adaptiveHeight: true,
		cellAlign: 'left'
	});
}

if (document.querySelector('.mobile-values')) {
	var flkty = new Flickity( '.mobile-values', {
		prevNextButtons: false,
		pageDots: false,
		adaptiveHeight: true,
		cellAlign: 'left'
	});
}

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

$(".nav").on('click', function(){
 //    var className = '' + nav.className + '';
	// var d = document.getElementById('navigation');
	// var body = document.getElementsByTagName("body")[0];

	if ( $( ".nav" ).is( ".is-active" ) ) {
		TweenLite.to(".header nav a", .1, {color: "#004DFF", ease: Power3.easeInOut});
		TweenLite.to(".header svg", .1, {color: "#004DFF", ease: Power3.easeInOut});
		TweenLite.to(".header .logo", .1, {background: "url(../images/logo.svg)", ease: Power3.easeInOut});
		// body.classList.remove('scroll-disabled');
		TweenLite.to(".navigation", .8, {y: "-100%", ease: Power4.easeInOut});

		$(".header").removeClass("is-active");
		$(".nav").removeClass("is-active");
	} else {
		// body.classList.add('scroll-disabled');

		$(".header").addClass("is-active");
		$(".nav").addClass("is-active");

		TweenLite.to(".header .logo", .1, {background: "url(../images/logo-light.svg)", ease: Power3.easeInOut});
		TweenLite.to(".header nav a", .1, {color: "#fff", ease: Power3.easeInOut});
		TweenLite.to(".header svg", .5, {color: "#fff", ease: Power3.easeInOut});
		TweenLite.to(".navigation", .8, {y: "0%", ease: Power4.easeInOut});
	}
});

