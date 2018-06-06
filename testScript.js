$(document).ready(function(){
    $("button").click(function(){
        $("#MAKETHESUPERCHANGE").fadeToggle();
        $("#MAKETHESUPERCHANGE").fadeToggle("slow");
        $("#MAKETHESUPERCHANGE").fadeToggle(3000);
    });
	
	$("experimental").click(function(){
        alert('hello');
		alert('hello2');
    });
});