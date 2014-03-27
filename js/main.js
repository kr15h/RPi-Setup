// =============== OS selection =============== //
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


// =============== Bootstrap affix plugin =============== //
$(function() {
	// Populates the affix with h2 and h3 titles from the page
	var affixUl = $('#affix ul')
		, previousH2 = null

	var setupTitle = function(titleElem, parentElem, titleHash) {
		var titleText = titleElem.text()
			, titleMenuItem = $('<li>')
			, titleAnchor = $('<a>', { href: '#' + titleHash, class: 'titleAnchor' }).html(' #')
		titleElem.attr('id', titleHash)
		titleElem.append(titleAnchor)
		titleMenuItem.append($('<a>', { href: '#' + titleHash }).html(titleText))
		parentElem.append(titleMenuItem)
		return titleMenuItem
	}

	// Iterate on all h2 and set-up title
	$('h2').each(function(i, h2) {
		h2 = $(h2)
		var h2Hash = 'titles.' + (i + 1)
			, h2MenuItem = setupTitle(h2, affixUl, h2Hash)
			, h2MenuChildList = $('<ul>')
		h2MenuItem.append(h2MenuChildList)
		h2MenuItem.addClass('affixH2Item affixItem')

		// Iterate on all h3 that are children of the current h2, and set-up title
		h2.nextUntil('h2').filter('h3').each(function(i, h3) {
			h3 = $(h3)
			var h3MenuItem = setupTitle(h3, h2MenuChildList, h2Hash + '.' + (i + 1))
			h3MenuItem.addClass('affixH3Item affixItem')
		})
	})
})