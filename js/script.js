$(function(){
	
	'use strict';

// Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
	
// navbar scrolling background

	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();

		if (scroll > 100) {
			$(".navbar").addClass("Scroll_scroll"); 
		} else {
			$(".navbar").removeClass("Scroll_scroll");
		}
	});
	
	$(window).scroll(function() {
		  if ($(document).scrollTop() > 150) {
			$('nav').addClass('shrink');
		  } else {
			$('nav').removeClass('shrink');
		  }
	});
	
// navbar scrolling background end	



 //animation scroll js
    $('#mynav ul li a').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top -50
                }, 1000);
                return false;
            }
        }
 });
 
//animation scroll js

//scrollspy

	$('body').scrollspy({
	target: '#navbar-example',
	offset:200,
	});
	
//scrollspy
	
//scroll top button

	$(window).on('scroll',function(){
		var winscroll = $(window).scrollTop();
		if(winscroll > 500 ){
			$(".scroll_top").fadeIn(1000);
		}else{
			$(".scroll_top").fadeOut(1000);
		}
	});

	 $(".scroll_top").on('click',function(){
			 $('html, body').animate({
				 scrollTop:0
			 },800)
	});
	
//scroll top button end	
	
//screenshot//

	$('.all_uses').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  nextArrow:false,
	  prevArrow:false ,
	  responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 479,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			  ]
	});

//Banner version-4//

	$('.slider_top').slick({
        dots: true,
        infinite: true,
        speed: 800,
        arrows: true,
		nextArrow: ".nxtbtn",
        prevArrow: ".prevbtn",
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true
    });
	
//Banner version-2//

	$('.slider_item').slick({
        dots: false,
    });
	
//review//

	$('.all_review').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  nextArrow:false,
	  prevArrow:false ,
	  responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 479,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			  ]
	});
//partner//

	$('.all_partner').slick({
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  nextArrow:false,
	  prevArrow:false ,
	  responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 5,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 479,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				}
			  ]
	});
	
//counter
	$('.counter').counterUp({
		delay: 1,
		time: 1000
	});	
	
//venobox
 
	$('.venobox').venobox({
		framewidth: '300px',
		frameheight: '500px',
		border: '6px',
		bgcolor: '#fff',
		closeColor:'#fff',
		arrowsColor:'#B345C2',
		numerationColor:'#fff',
		numerationBackground:'#B345C2',
		closeBackground:'#B345C2',
		numeratio: true,
		spinner: 'wave',
		spinColor:'#D6C6B2',
	});	
	
//BANNER CAPTION ITYPED.JS
     window.ityped.init(document.querySelector('.ityped'), {
         strings: ["promot your app ","increase your app","develop your app"],
         loop: true,
         typeSpeed: 200,
         backSpeed: 100,
         startDelay: 500,
         backDelay: 500,
	 });	
	
	
	

	
	
});