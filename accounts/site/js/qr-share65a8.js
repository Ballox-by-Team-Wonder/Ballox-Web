$(document).ready(function(){

  // qr code - lrg preview trigger
  $('.qr-code-body .default-modal-buttons a.qr-large-preview').on('click', function(e) {
      e.preventDefault();
      $('body').toggleClass('qr-lrg-preview');
      var text = $('.qr-code-body .default-modal-buttons a.blue-button').text();
      $('.qr-code-body .default-modal-buttons a.blue-button').text(
          text == "Show larger preview" ? "Show smaller preview" : "Show larger preview");
  });

  // qr code - close lrg preview
  $('#qr-code-modal a.close-reveal-modal').on('click', function(e) {
      e.preventDefault();
      $('body').removeClass('qr-lrg-preview');
  });

  // qr code - lrg preview
  $('#poll-created .share-link.qr-code, #poll-created .share-link.qr-code, a.share-link.link').on('click', function(e) {
      $("div#poll-created").fadeOut(0);
  });


	// qr code switch buttons
	$('a.grey-button.results-page-button').on('click', function(e) {
		e.preventDefault();
		$(this).hide();
		$(".results-page-qr-code-wrapper").hide();
		$(".vote-page-qr-code-wrapper").fadeIn(400);
		$("a.grey-button.vote-page-button").show();
	});

	$('a.grey-button.vote-page-button').on('click', function(e) {
		e.preventDefault();
		$(this).hide();
		$(".vote-page-qr-code-wrapper").hide();
		$(".results-page-qr-code-wrapper").fadeIn(400);
		$("a.grey-button.results-page-button").show();
	});

});
