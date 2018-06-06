$(document).ready(function(){
    $("button").click(function(){
        $("#mainPanel").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    });
});
