// Examples
jQuery(document).ready(function(){
	ex1(); // Call first example
});

function relaunch(){
	jQuery('.no-display,.fader,.random,.reverse').css({'display':'none'});
	ex1();
}
function ex1(){
	jQuery('.fader').jqfader({callback:ex2}); // Simple effect with callback
}
function ex2(){
	jQuery('h2').eq(1).fadeTo(300,1,function(){
		jQuery('.random').jqfader({randomize:true,callback:ex3}); // Randomize effect with callback
	});
}
function ex3(){
	jQuery('h2').eq(2).fadeTo(300,1,function(){
		jQuery('.reverse').jqfader({reverse:true,callback:showRelaunch}); // Reverse effect with callback
	});
}
function showRelaunch(){
	jQuery('.relaunch').fadeTo(300,1);
}