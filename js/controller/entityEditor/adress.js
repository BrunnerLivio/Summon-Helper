var adress = {
	//Updates addressbar
	update : function(){
		ad = "entityEditor.html?";
		$(entity.all).each(function(index, element){
			ad += "entityId={0}".format(element.entityData.name);
			
			$(element.Equipment).each(function(index2, element2){
				if(!jQuery.isEmptyObject(element2)){
					ad += "&";
					ad += "equipmentId={2};{1};{0};{3}".format(element2.itemData.text_type, index2, index, element2.itemData.meta);
					
				}
				
			});
			if(index<entity.all.length-1)
				ad += "&";
		});
		window.history.pushState(entity.all, "", ad);
		return;
	}
}