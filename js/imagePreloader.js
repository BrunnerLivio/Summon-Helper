imagePreloader = {
	images : [],
	add :function(imagePath){
		imagePreloader.images.push(imagePath);
	},

	load : function(){
			loader.on();
			$(window).load(function(){
				loader.off();
			});
			$(imagePreloader.images).each(function(index, element) {
				$('<img>').attr("src", element).load(function() {
					$(".imagePreloading .progress-bar span").css("width", Math.floor(($(".imagePreloading").width() - 5) / imagePreloader.images.length * index) + "px");
				});
			});

		
	}
};
loader = {
	on : function(){
		$(".imagePreloading ").fadeIn();
	},
	off :function(){
		console.log("loader.off();");
		$(".imagePreloading ").fadeOut();
	},
}