$(document).ready(function(){
	/**
	 * Console Log
	 */
	var debug = false; // set to false to disable logging for production
	var log = function() {
		if (!debug)
			return false;
		try {
			if (window.console && window.console.firebug || typeof firebug === 'object')
	  			console.log.apply(this, arguments);
	  	} catch(err) {
			alert(err.description+'\nmake sure firebug light\nis included in the header before\nautomator.js');
		}
	}
	log('Starting Error Log...');
	
	/**
     * Change Opacity for a remote element
     * 
     * @event onClick
     * @usage <... opacity="opacity"> - Opacity is optional, defaults to 50%
     * @example <div opacity="75">
	 * 
     * REFACTORED
     */
	var opacitySelector 		= "[opacity]";
	var opacityTag 			= "opacity";
	var opacityTarget			= "[opacitytarget]";
	var opacityTargetTag		= "opacitytarget";
	$(opacitySelector).livequery( function() {
		var target = $(opacityTarget).attr(opacityTargetTag);
		if ((opacityTag && opacityTargetTag)) {
			try {
				var op = ($(this).attr(opacityTag) || 50)/100;
				$(this).click(function() {
				$("#" + target).fadeTo("fast", op);
				//($.browser.msie) ? $(this).css("filter", "alpha(opacity="+op+")") : $(this).animate({ opacity: op }, 1000);
				});
			} catch(err) {
				log(err);
				log('Error thrown while trying to animate opacity.  Element::'+$(this).attr('id'));
			}
		} else {
			try {
				var op = ($(this).attr(opacityTag) || 50)/100;
				$(this).fadeTo("fast", op);
				//($.browser.msie) ? $(this).css("filter", "alpha(opacity="+op+")") : $(this).animate({ opacity: op }, 1000);
			} catch(err) {
				log(err);
				log('Error thrown while trying to animate opacity.  Element::'+$(this).attr('id'));
			}
		}
	});
});