(function($){
    $.fn.jqfader = function(options) {
		// Default values
        var defaults = {
			speed:100, // Speed between fade
			randomize:false, // Option randomize
			reverse:false, // Option reverse
			animate:500, // Speed of fade
			callback:function(){} // Callback function
        };
        var opts = $.extend(defaults,options);
		var numFader = this.length; // Number of element to fade
		var delay=0; // Delay between fade
		function randOrd(){
			return (Math.round(Math.random())-0.5); // Function to sort by random
		}
		// Animation 
		function fader(i,e){
			if(numFader==i+1) jQuery(this).delay(delay).fadeTo(opts.animate,1,function(){ opts.callback.call(); }); // If last element do fade animation and call callback
			else jQuery(this).delay(delay).fadeTo(opts.animate,1); // Else do simple fade animation
			delay+=opts.speed; // Increase delay between fade by speed
		}
		$.fn.reverse=Array.prototype.reverse; // Hack to reverse jQuery object like an array
		if(opts.randomize) this.sort(randOrd); // Random appear
		if(opts.reverse) this.reverse(); // Reverse appear
        this.each(fader); // Launch animation function
        return this;
    };
})(jQuery);