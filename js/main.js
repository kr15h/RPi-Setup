$(document).ready( function(){
	$(".nav a").click( function(){
		// deactivate all parent li's 
		$(".nav li").removeClass("active");
		// activate this a element's parent li
		$(this).parent().addClass("active");
		// hide all OS specific content
		$(".mac").css("display", "none");
		$(".win").css("display", "none");
		$(".linux").css("display", "none");
		// show depending on choice
		var choice = $(this).text();
		var selector = "";
		switch(choice){
			case "Mac": selector = ".mac"; break;
			case "Win": selector = ".win"; break;
			case "Linux": selector = ".linux"; break;
			default: break;
		}
		if (selector != "") {
			$(selector).css("display", "inline");
			$(selector).css("display", "initial");
		}
	});
});

