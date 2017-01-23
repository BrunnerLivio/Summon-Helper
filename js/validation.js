var validation = {
	validate : function(obj, type){
		var objSubmit = $(obj).parent().find(":submit");
		console.log($(obj).val());
		switch(type){
			case "string":
			break;
			case "integer":

				if(parseInt($(obj).val()) == null || $(obj).val() == ""){
					$(obj).addClass("validationError");
					objSubmit.prop('disabled', true);
					$(".error").html("<div icon=\"warning\" style=\"float:left;margin-left:5px;margin-right:5px;\"></div> Value must be a number.");
					iconLoader.update();
					$(".error").fadeIn();

				} else {
					$(obj).removeClass("validationError");
					if($(obj).parent().find(".validationError").length == 0){
						$(".error").fadeOut(function(){
							$(this).html("");
						});
						objSubmit.prop('disabled', false);
					}
				}
			break;
			case "double":
				if(parseFloat($(obj).val()) == null || $(obj).val() == ""){
					$(obj).addClass("validationError");
					objSubmit.prop('disabled', true);
					$(".error").html("<div icon=\"warning\" style=\"float:left;margin-left:5px;margin-right:5px;\"></div> Value must be a float.");
					iconLoader.update();
					$(".error").fadeIn();

				} else {

					$(obj).removeClass("validationError");
					if($(obj).parent().find(".validationError").length == 0){
						$(".error").fadeOut(function(){
							$(this).html("");
						});
						objSubmit.prop('disabled', false);
					}
					
				}
			break;
		}
	}
}