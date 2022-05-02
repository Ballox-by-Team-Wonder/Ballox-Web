$(document).ready(function(){

	// copy url click
  $('a.modal-copy-url-link').on('click', function(e) {
    e.preventDefault();
  });

	// copy results url
	var clipboard_results_url = new ClipboardJS('.clipboard-results-link');
	clipboard_results_url.on('success', function(e) {
		// update copy text
	  $(".clipboard-results-link").addClass('active-copy').text("Copied");

	  // revert after delay
	  setTimeout(function(){
	    $(".clipboard-results-link").removeClass('active-copy').text("Copy Link");
	  }, 3000);

	  e.clearSelection();
	});

	// copy vote url
	var clipboard_vote_url = new ClipboardJS('.clipboard-vote-link');
	clipboard_vote_url.on('success', function(e) {
		// update copy text
	  $(".clipboard-vote-link").addClass('active-copy').text("Copied");

	  // revert after delay
	  setTimeout(function(){
	    $(".clipboard-vote-link").removeClass('active-copy').text("Copy Link");
	  }, 3000);

	  e.clearSelection();
	});

	// copy comment url
	var clipboard_comment_url = new ClipboardJS('.comment-link');
	clipboard_comment_url.on('success', function(e) {
		// update copy text
	  $("a.comment-link").addClass('active-copy').text("Copied");

	  // revert after delay
	  setTimeout(function(){
	    $("a.comment-link").removeClass('active-copy').text("Link to Comment");
	  }, 3000);

	  e.clearSelection();
	});


});
