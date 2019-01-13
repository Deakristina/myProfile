function isScrolledIntoView(el) {
	let rect = el.getBoundingClientRect();
	let elemTop = rect.top;
	let elemBottom = rect.bottom;
	let isVisible = elemTop < window.innerHeight && elemBottom >= 0;
	return isVisible;
}

$(document).scroll(function() {
	document.querySelectorAll('.animation').forEach(function(elem) {
		let jqueryObj = $(elem);
		if (isScrolledIntoView(elem) && !jqueryObj.hasClass('fadeIn')) {
			jqueryObj.addClass('animated fadeIn projectAnimation');
		} else if (!isScrolledIntoView(elem) && jqueryObj.hasClass('fadeIn')) {
			jqueryObj.removeClass('animated fadeIn projectAnimation');
		}
	});

	document.querySelectorAll('.roll').forEach(function(obj) {
		let rollObj = $(obj);
		if (isScrolledIntoView(obj) && !rollObj.hasClass('progress-bar')) {
			rollObj.addClass('progress-bar');
		} else if (!isScrolledIntoView(obj) && rollObj.hasClass('progress-bar')) {
			rollObj.removeClass('progress-bar');
		}
	});
});
