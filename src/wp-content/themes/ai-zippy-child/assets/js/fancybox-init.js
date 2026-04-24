(function ($) {
	"use strict";

	function getOptions() {
		return {
			loop: false,
			infobar: true,
			smallBtn: false,
			toolbar: true,
			buttons: ["zoom", "slideShow", "fullScreen", "thumbs", "close"],
			idleTime: false,
			protect: true,
			baseClass: "calla-fancybox",
			thumbs: {
				autoStart: true,
				axis: "x",
			},
			animationEffect: "fade",
			transitionEffect: "slide",
		};
	}

	function initCallaFancybox() {
		if (!$ || !$.fancybox) {
			return;
		}

		$("[data-fancybox]").fancybox(getOptions());
	}

	$(document).ready(initCallaFancybox);
})(window.jQuery);
