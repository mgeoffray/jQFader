jQuery(document).ready(function(){
	init();
});
function restart(){
	jQuery('.no-display,.fader,.random,.reverse').css({'display':'none'});
	init();
}
function init(){
	jQuery('.fader').jqfader({callback:showRestart});// Simple effect with callback
}
function showRestart(){
	jQuery('.restart').fadeTo(300,1);
}