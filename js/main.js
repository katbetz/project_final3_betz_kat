$(document).ready(function() {
// Adds wallpaper plugin to the header and footer
$('.header').wallpaper({
	source: {
		"fallback": "img/header.png",
		"(min-width: 1000px)": "img/header.png"
	}

});

$("#menunav").animate({
            backgroundColor: "#091214"
    }, 2000 );

//FORM
var oname = document.getElementById("ordername");
var omenu = document.getElementById("ordermenu");
var onumb = document.getElementById("ordernumber");

(function (){
    if (document.contains(document.getElementById("orderform"))){
        oname.addEventListener("change", MenuFunction);
        omenu.addEventListener("change", MenuFunction);
        onumb.addEventListener("change", MenuFunction);
    }
})();

function MenuFunction() {
    var oname2 = oname.value;
    var onumb2 = onumb.value;
	var omenu2 = omenu.options[omenu.selectedIndex].value;
	var omenu3 = omenu.options[omenu.selectedIndex].text;
	var cost = onumb2*omenu2;
    document.getElementById("submitted").innerHTML = oname2 + " ordered " + onumb2 + " " + omenu3 + " for " + cost + " credits.";

}

$("#orderform").submit(function( event ) {
    event.preventDefault();
    $("form").hide("slow");
    $("#submitted").text( "Thank you for your request. This is not the resturant you were looking for." );

});


});
