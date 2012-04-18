// Examples
jQuery(document).ready(function(){
	init();
});
function init(){
	jQuery('.fader').jqfader({callback:showRestart});// Simple effect with callback
}
function showRestart(){
	jQuery('.restart').fadeTo(300,1);
}
function restart(){
	jQuery('.restart,.fader').css({'display':'none'});
	init();
}