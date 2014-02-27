$(document).ready( function(){
	// switch to client OS automatically
	var os = $.client.os;
	// show active OS content only
	if ( os == "Mac" || os == "Win" || os == "Linux" ) {
		// hide all and show only OS content
		hideAllOS();
		showOS(os);
		// activate OS item in the navbar
		$(".nav li").each( function(){
			if ( $(this).find("a").text() == os ) {
				$(".nav li").removeClass("active");
				$(this).addClass("active");
			}
		});
	}
	
	// show OS feature on click
	$(".nav a").click( function(){
		// deactivate all parent li's 
		$(".nav li").removeClass("active");
		// activate this a element's parent li
		$(this).parent().addClass("active");
		// hide all OS specific content
		hideAllOS();
		// show depending on choice
		var choice = $(this).text();
		showOS(choice);
	});
});

var hideAllOS = function(){
	$(".mac").css("display", "none");
	$(".win").css("display", "none");
	$(".linux").css("display", "none");
}

var showOS = function(os){
	console.log(os);
	var selector = "";
	switch(os){
		case "Mac": selector = ".mac"; break;
		case "Win": selector = ".win"; break;
		case "Linux": selector = ".linux"; break;
		default: break;
	}
	if (selector != "") {
		$(selector).css("display", "inline");
		$(selector).css("display", "initial");
	}
}

