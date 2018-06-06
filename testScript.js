$(document).ready(function(){
    $("button").click(function(){
        $("#MAKETHESUPERCHANGE").fadeToggle();
        $("#MAKETHESUPERCHANGE").fadeToggle("slow");
        $("#MAKETHESUPERCHANGE").fadeToggle(3000);
    });
	
	$("experimental").click(function(){
        $("#123").fadeToggle();
        $("#123").fadeToggle("slow");
        $("#123").fadeToggle(3000);
    });
});