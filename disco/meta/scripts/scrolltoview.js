/* <<ScrollTo>> macro: Scrolls the window to the given element ID.
			Waits for element to exist.
			Accepts parameters for scrollIntoView().  See:
https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView

Usage:
	Scroll element into view aligned to the top of the window:
		<<ScrollTo "ElementID">>
	Scroll element into view aligned to the bottom of the window:
		<<ScrollTo "ElementID" false>>
*/
Macro.add('ScrollTo', {
	skipArgs : false,
	handler  : function () {
		if (this.args.length > 0) {
			var Value = this.args[0];
			if (typeof Value === "string" || Value instanceof String) {
				var element = null, params = undefined;
				if (this.args.length > 1) {
					params = this.args[1];
				}
				// wait for element
				var elementWaitID = setInterval(function () {
					element = document.getElementById(Value);
					if (element != null) {
						// stop waiting and set scroll position
						clearInterval(elementWaitID);
						if (params != undefined) {
							element.scrollIntoView({block: params, behavior: "smooth"});
						} else {
							element.scrollIntoView({behavior: "smooth" });
						}
					}
				}, 100);
			}
		}
	}
});
/* <<ScrollTo>> macro - End */