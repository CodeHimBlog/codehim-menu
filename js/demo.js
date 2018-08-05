$(document).ready(function() {
// Orange Theme 
$('#orange').click(function() { 
$(".codehim-menu").addClass("orange-theme").removeClass("pink-theme cute-theme blue-theme green-theme"); 
});

// Pink Theme 
$('#pink').click(function() { 
$(".codehim-menu").addClass("pink-theme").removeClass("cute-theme orange-theme blue-theme green-theme");
});

// Blue Theme 
$('#blue').click(function() { 
$(".codehim-menu").addClass("blue-theme").removeClass("cute-theme orange-theme pink-theme green-theme");
});

// Red Theme 
$('#red').click(function() { 
$(".codehim-menu").addClass("cute-theme").removeClass("blue-theme orange-theme pink-theme green-theme"); 
});

// Green Theme 
$('#green').click(function() { 
$(".codehim-menu").addClass("green-theme").removeClass("cute-theme orange-theme pink-theme blue-theme"); 
});

//Generated Code
$('.color-plate').click(function() { 
MenuSource();
});

// Fixed Top
$('.set-top').click(function() { 
$(".codehim-menu").toggleClass("fixed-top").removeClass("static");
$(this).toggleClass("active");   
$('.set-static').removeClass("active");
MenuSource();
});

// Set Static
$('.set-static').click(function() { 
$(".codehim-menu").toggleClass("static").removeClass("fixed-top");
$(this).toggleClass("active");
$('.set-top').removeClass("active");
MenuSource();
});

// Set Glossy Color
$('.set-glossy').click(function() { 
$(".codehim-menu").toggleClass("glossy");
$(this).toggleClass("active");
MenuSource();
});

// Set Text Shadow
$('.set-shade').click(function() { 
$(".codehim-menu").toggleClass("text-shade");
$(this).toggleClass("active");
MenuSource();
});

 function MenuSource(){
var Source = $('#menu-code').html();
     $('.codehim_menu_code').val(Source);
     }

MenuSource();
});

//Copy to Clipboard
function copyFunction() {
  var copyText = document.getElementById("display");
  copyText.select();
  document.execCommand("Copy");

}

