/*
 * jQFader by Matthéo Geoffray (mattheo.geoffray@gmail.com || http://mgeoffray.fr)
 * http://git.mgeoffray.fr/jQFader/
 * https://github.com/mgeoffray
 *
 * Version 1.0
 * Require jQuery v1.4+
 */
(function($){
    $.fn.jqfader=function(options) {
		// Default values
        var defaults = {
			speed:100, // Speed between fade
			randomize:false, // Option randomize
			reverse:false, // Option reverse
			animate:500, // Speed of fade
			callback:function(){} // Callback function
        };
        var o=$.extend(defaults,options); // Extends options
		var l=this.length; // Number of element to fade
		var d=0; // Delay between fade
		function randOrd(){
			return (Math.round(Math.random())-0.5); // Function to sort by random
		}
		// Animation 
		function fader(i,e){
			e=jQuery(e); // Select the element with jQuery
			if(l==i+1) e.delay(d).fadeTo(o.animate,1,function(){ o.callback.call(); }); // If last element do fade animation and call callback
			else e.delay(d).fadeTo(o.animate,1); // Else do simple fade animation
			d+=o.speed; // Increase delay between fade by speed
		}
		$.fn.reverse=Array.prototype.reverse; // Hack to reverse jQuery object like an array
		if(o.randomize) this.sort(randOrd); // Random appear
		if(o.reverse) this.reverse(); // Reverse appear
        this.each(fader); // Launch animation function
        return this;
    };
})(jQuery);