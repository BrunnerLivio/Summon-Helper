var infobox = {
	isActive : false,
	element : undefined,
	update : function(){

		$("*[infobox]").mouseover(function(event){
			$(".infobox .blackBox span").html($(event.target).attr("infobox"));
			infobox.isActive = true;
			infobox.element = $(event.target);
			infobox.updateDesign();
		}).mouseleave(function(){
			infobox.isActive = false;
			infobox.updateDesign();
		});
	},
	updateDesign : function(){
		if(infobox.isActive){
			$(".infobox").fadeIn(0);
			$(".infobox").css({
				"top" : infobox.element.offset().top - $(".infobox").height() - 5 + "px",
				"left" : infobox.element.offset().left +  (infobox.element.width() / 2) - ($(".infobox").width() / 2) + "px",
			});
		} else {
			$(".infobox").fadeOut(0);
		}
	}
}