"use strict";

$( document ).ready(function() {
	$('.active a.clickable').on("click", function (e) {
		if ($(this).hasClass('panel-collapsed')) {
			// expand the panel
			$(this).parents('.active').find('.collapsein').show();
			$(this).removeClass('panel-collapsed');
			$(this).find('svg').removeClass('fa-chevron-down').addClass('fa-chevron-right');
		}
		else {
			// collapse the panel
			$(this).parents('.active').find('.collapsein').hide();
			$(this).addClass('panel-collapsed');
			$(this).find('svg').removeClass('fa-chevron-right').addClass('fa-chevron-down');
		}
	});
});
/* ===== Stickyfill ===== */
/* Ref: https://github.com/wilddeer/stickyfill */
// Add browser support to position: sticky

var elements = document.querySelectorAll('.sticky');
Stickyfill.add(elements);

/* ===== Gumshoe SrollSpy ===== */
/* Ref: https://github.com/cferdinandi/gumshoe  */
// Initialize Gumshoe
var spy = new Gumshoe('#doc-nav a', {
	offset: 0 
});




/* ====== SimpleLightbox Plugin ======= */
/*  Ref: https://github.com/andreknieriem/simplelightbox */
var lightbox = new SimpleLightbox('.simplelightbox-gallery-1 a', { /* options */ });
var lightbox = new SimpleLightbox('.simplelightbox-gallery-2 a', {/* options */});
var lightbox = new SimpleLightbox('.simplelightbox-gallery-3 a', {/* options */});
var lightbox = new SimpleLightbox('.simplelightbox-gallery-4 a', {/* options */});
var lightbox = new SimpleLightbox('.simplelightbox-gallery-5 a', {/* options */});
var lightbox = new SimpleLightbox('.simplelightbox-gallery-6 a', {/* options */});
var lightbox = new SimpleLightbox('.simplelightbox-gallery-7 a', {/* options */});



