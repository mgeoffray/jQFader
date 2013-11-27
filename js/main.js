/**************************
 **** Main.js
 **************/

jQuery(document).ready(function(){
	init();
});

/** Launch demo **/
function init(){
	jQuery('.fader').jqfader({callback:showRestart});// Simple effect with callback
}
/** Show restart button **/
function showRestart(){
	jQuery('.restart').fadeTo(300,1);
}
/** Restart demo **/
function restart(){
	jQuery('.restart,.fader').css({'display':'none'});
	init();
}