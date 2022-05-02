$(document).ready(function(){

  // timestamp
  $(".timeago").timeago();

  // tooltip
  $('.tooltip').tooltipster({
      theme: 'tooltipster-sml',
      maxWidth: '300'
  });

	// tooltip sml
	$('.tooltip-sml').tooltipster({
		theme: 'tooltipster-comments',
		maxWidth: '300',
		animation: 'fade',
		delay: 100
	});

  // remove variable from url
  var uri = window.location.toString();
	if (uri.indexOf("?") > 0) {
	    var clean_uri = uri.substring(0, uri.indexOf("?"));
	    window.history.replaceState({}, document.title, clean_uri);
	}

	// reply to comment
	$('a.comment-reply').on('click', function(e) {
		e.preventDefault();
		$('#comment_reply_id').val($( this ).next().html());
		$('.comments .comments-inner .comment-textarea .right button').text('Post Reply');
		$('.comments .comments-inner .comment-textarea .right a.cancel-reply-button').show();
		$('.comments .comments-inner .comment-textarea .right .reply-badge').fadeIn(300);

		var reply_img_count = $(".comments .comments-inner .comment-textarea .left .avatar").find('img').length;

		if (reply_img_count > 1)
		{
		$('.comments .comments-inner .comment-textarea .left .avatar img:nth-of-type(2)').remove();

		$(this).parent().parent().parent().parent().find('img').addClass('this').clone().appendTo(".comments .comments-inner .comment-textarea .left .avatar");
		$('.comments .comments-inner .comment-textarea .left .avatar').addClass('reply-avatars');

		} else {

		$('.comments .comments-inner .comment-textarea .left .avatar img:nth-of-type(2)').remove();
		$(this).parent().parent().parent().parent().find('img').addClass('this').clone().appendTo(".comments .comments-inner .comment-textarea .left .avatar");
		$('.comments .comments-inner .comment-textarea .left .avatar').addClass('reply-avatars');

		}

		$('html, body').animate({
		scrollTop: $('.comment-textarea').offset().top
		}, 1000);

		$('#comment').focus();
	});

	// cancel reply
	$('a.cancel-reply-button').on('click', function(e) {
		e.preventDefault();
		$('#comment_reply_id').val('');
		$('.comments .comments-inner .comment-textarea .right button').text('Post Comment');
		$('.comments .comments-inner .comment-textarea .right a.cancel-reply-button').hide();
		$('.comments .comments-inner .comment-textarea .right .reply-badge').fadeOut(300);
		$('.comments .comments-inner .comment-textarea .left .avatar img:last').remove();
		$('.comments .comments-inner .comment-textarea .left .avatar').removeClass('reply-avatars');
		$('#comment').focus();
	});

	// disable comment likes
	$('a.comment-likes, a.comment-likes-disabled').on('click', function(e) {
		e.preventDefault();
	});

	// disabled edit link
	$(document).on('click', '.disabled-edit-link', function(e){
		e.preventDefault();
	});

	// comments tooltip
	$('.comments .comments-inner .comment .right .comment-footer p.likes a.comment-likes, .comments .comments-inner .comment .right .comment-footer p.likes a.comment-likes-disabled').tooltipster({
			theme: 'tooltipster-comments',
      maxWidth: '200',
			content: null
  });

	// copy comment url
  $('.comment-link').on('click', function(e) {
      e.preventDefault();
  });

	// comment more dropdown
	$(document).on('click', '.comments .comments-inner .comment .right .comment-footer .comment-more-button a.comment-more', function(e){
		e.preventDefault();
		$(".comments .comments-inner .comment .right .comment-footer .item-dropdown").hide();
		$(this).next(".item-dropdown").show();
	});

	// report comment get data attr
	$('a.report-comment-button').on('click', function(e) {
		e.preventDefault();
		var comment_id=$(this).data('comment-id');
		$('div#report-comment input#comment_id').val(comment_id);
	});

	// poll settings menu
	$('.poll-settings-button a').on('click', function(e) {
		e.preventDefault();
		$(".poll-right-column .poll-right-column-inner .poll-share").fadeToggle(0);
		$(".poll-votes-count").fadeToggle(0);
		$(".poll-settings-right-column-wrapper").fadeToggle(0);
		var text = $(this).text();
		$(this).text(
				text == "Poll Settings" ? "Hide Poll Settings" : "Poll Settings");
	});


	// settings dropdown
	$(document).on('click touchstart', function (e) {
		if ($(e.target).closest(".comments .comments-inner .comment .right .comment-footer .comment-more-button a.comment-more, a.comment-link").length === 0) {
			$(".comments .comments-inner .comment .right .comment-footer .item-dropdown").delay(100).fadeOut(100);
		}
	});

	// hide notice after 7 seconds
	setTimeout(function(){
		$(".notice.info").slideUp(500);
	}, 7000);

	// validate form
	$( "#comment-form" ).validate();

	// responsive fix for disabled polls
	if ( ($('.poll-submit-button').length == 0) && ($('.poll-voted-notice').length == 0) )  {
		$('.poll-right-column').addClass('n-button-mobile-spacing');
		$('body').addClass('n-button-right-column-spacing');
	}

	// settings dropdown
	$(document).on('click', '.item-link-settings', function(e){
		e.preventDefault();
		$(".item-dropdown").hide();
		$(this).next(".item-dropdown").show();
	});


	$(document).on('click', '.item-link-share', function(e){
		e.preventDefault();
		$(".item-dropdown").hide();
		$(this).next(".item-dropdown").show();
	});

	$(document).on('click', '.item-link-share-inline', function(e){
		e.preventDefault();
		$(".item-dropdown").hide();
		$(this).next(".item-dropdown").show();
	});
	
	$(document).on('click', '.item-link-settings-inline', function(e){
		e.preventDefault();
		$(".item-dropdown").hide();
		$(this).next(".item-dropdown").show();
	});


	// settings dropdown
	$(document).on('click touchstart', function (e) {
		if ($(e.target).closest(".poll-settings-wrapper .item-dropdown-wrapper a.item-link-settings, .poll-settings-wrapper .item-dropdown-wrapper a.item-link-share, .poll-heading a.item-link-share-inline, .poll-heading a.item-link-settings-inline").length === 0) {
			$(".poll-settings-wrapper .item-dropdown-wrapper .item-dropdown, .item-share-inline-wrapper .item-dropdown-wrapper .item-dropdown.animated-dropdown.bounceIn.social-share-links.inline, .item-settings-inline-wrapper .item-dropdown-wrapper .item-dropdown.animated-dropdown.bounceIn.settings-links").delay(100).fadeOut(100);
		}
	});


});


// stick right column

if(!$('.comments ').length){//does ot exist
	var contentadjust = $('#footer').height() + 171;

} else {
	var contentadjust = $('.comments').height() + $('#footer').height() + 352;

}

$(".poll-right-column-stick").sticky({
	topSpacing: 25,
	bottomSpacing: contentadjust
});


// stick right column - based on resize

$(window).resize(function() {
 if ($(window).width() < 800) {
   $(".poll-right-column-stick").unstick();
 }
});
