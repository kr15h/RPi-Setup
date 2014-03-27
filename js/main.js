$(function(){
	// switch to client OS automatically
	var os = $.client.os;

	// show active OS content only
	if ( os == "Mac" || os == "Win" || os == "Linux" ) {
		hideAllOS();
		showOS(os);

	// If not know OS, put windows as default
	} else {
		hideAllOS();
		showOS('Win');
	}
	
	// show OS content on click
	$(".nav a").click( function(){
		hideAllOS();
		showOS($(this).text());
	});
});

var hideAllOS = function(){
	$(".mac").hide();
	$(".win").hide();
	$(".linux").hide();
	$(".nav li").removeClass("active");
}

var showOS = function(os) {
	var selector = { "Mac": ".mac", "Win": ".win", "Linux": ".linux" }[os];
	if (!selector) throw new Error('unknown OS');
	$(selector + '-nav').addClass("active");
	$(selector).show();
}

