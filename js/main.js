//Checks if is running local or on a server
switch(window.location.protocol) {
	case 'http:':
	case 'https:':
		websiteData.isServer = true;
 	break;
    case 'file:':
	    websiteData.isServer = false;
	break;
	default: 
	   	websiteData.isServer = false;
}

//Set isMobile true or false -> is used in the specific updateDesign-Functions
$(window).resize(function(){
	if($(window).width() <= websiteData.mobileWidth){
		websiteData.isMobile = true;
	} else {
		websiteData.isMobile = false;
	}
});
$(window).scroll(function(){
	main.onScroll($(window).scrollTop());
});
$(window).on("touchmove", function(e) {
	main.onScroll($(window).scrollTop());
});

$(window).resize(function(){
	updateDesign();
	main.updateDesign();
	infobox.updateDesign();
});

//Event which execute functions everytime $().append();
$(document).bind("append", function() { 
	iconLoader.update();
	infobox.update();
});
$(document).on("remove", function() { 
	iconLoader.update();
	infobox.update();
});


//Update Design for global
function updateDesign(){
	$(".imagePreloading").css({
		"top" : $(window).height() - $(".imagePreloading").height() + "px"
	});
	for(var i = 1;i<6;i++){
		if(websiteData.isMobile){
			$(".wrapper .col{0}".format(i)).css({
				"float" : "none",
				"width" : "100%",
				"margin-top" : "5px"
			});
		}else{
			$(".wrapper .col{0}".format(i)).css({
				"float" : "left",
				"width" : 100 / i + "%",
			});
			count = 0;
			while(($children = $(":not(.parent)>.col{0}:lt(3)".format(i))).length) {
			    $children.wrapAll($('<div class="parent"></div>'));
			}
		}
	}
	
	$(".whiteGround").css({
		"width" : $(window).width() + "px",
		"height" : $(window).height() + "px",
	});
}

$(document).ready(function(){
	//Set isMobile true or false -> is used in the specific updateDesign-Functions
	if($(window).width() <= websiteData.mobileWidth){
		websiteData.isMobile = true;
	} else {
		websiteData.isMobile = false;
	}
	//Loads the navigation in
	navigation.load();
	
	
	//Opens sideBar clicking on Menu Button
	//Extension is in index.js because index has another stylesheet.
	displayCounter = 0;
	$(".menu_button, .blackFading").click(function(){
		if(displayCounter == 0){
			$(".blackFading").fadeIn("fast", function(){
				$(".sideBar").animate({
					"margin-left" : "0px",
				});
				$("body").css({
					"overflow" : "hidden"
				});
				$(".mainBar").animate({
					"margin-left" : $(".sideBar").width(),
					"width" : $(window).width(),
				});
				$(".menu").animate({
					"width" : $(window).width()-300 + "px",
					"margin-left" : 300 + "px",
				});	
				$(".blackFading").animate({
					"width" : $(window).width()-300 + "px",
					"margin-left" : 300 + "px"
				});
				$(".menu_button").css({
					"background-image" : "url(./images/design/menu_open.png)"
				});
			});
			
			displayCounter++;

		}else{
			$(".menu").animate({
				"width" : "100%",
				"margin-left" : "0px",
			});
			$(".sideBar").animate({
				"margin-left" : "-" + $(".sideBar").width(),
			});
			$(".mainBar").animate({
				"margin-left" : "0px",
				"width" : "100%",
			}, function(){
				$("body").css({
					"overflow" : "auto"
				});
			});
			
			$(".menu_button").css({
				"background-image" : "url(./images/design/menu.png)"
			});
			$(".blackFading").animate({
				"width" : $(window).width() + "px",
				"margin-left" : "0px"
			}, function(){
				$(".blackFading").fadeOut("fast");
			});
			displayCounter = 0;
		}
		
	});

	
	//Loads in the Controller of the active View and sends Get Parameters
	main.load(QueryString);
	main.updateDesign();
	updateDesign();
	iconLoader.update();
	infobox.updateDesign();

	$(".whiteGround").fadeOut();
	if(!websiteData.isServer){
		loader.off();
	}
});