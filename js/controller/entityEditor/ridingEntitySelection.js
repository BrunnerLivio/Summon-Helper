var ridingEntitySelection = {
	maxRGB : {r : 0, g : 86, b : 173 },
	minRGB : {r : 95, g : 133, b : 173},
	//Updates the riding entity selection
	update : function(){
		$(".ridingEntitySelection ul li").remove();
		var html = "";
		for(var i = 0;i < entity.all.length;i++){
			html += "<li"
			if(i == entity.current){
				html += " style=\"width:110px\" ";
			}
			html += ">";
			html += "<img infoBox=\"{2}\" OnClick=\"entityEditor.load({0})\" style=\"float:left\" src=\"./images/entity/{1}\" />".format(i, entity.all[i].entityData.image, entity.all[i].name);
			if(i >= 1)
				html += "<div class=\"ico\" infoBox=\"Ascend Entity\" icon=\"arrow_up\" OnClick=\"entity.change({0}, {1});ridingEntitySelection.update();entityEditor.load({1})\"></div>".format(i, i-1);
			if(i < entity.all.length-1)
				html += "<div class=\"ico\" infoBox=\"Descend Entity\" icon=\"arrow_down\" OnClick=\"entity.change({0}, {1});ridingEntitySelection.update();entityEditor.load({1})\"></div><br />".format(i, i+1);
			else 
				html += "<br />"
			if(i >= 1)
				html += "<div class=\"ico\" infoBox=\"Delete Entity\" icon=\"trash\" OnClick=\"entity.delete({0});ridingEntitySelection.update();entityEditor.load(0)\"></div>".format(i);
			html += "<div class=\"ico\" infoBox=\"Copy Entity\" icon=\"copy\" OnClick=\"entity.copy({0});ridingEntitySelection.update();entityEditor.load({1})\"></div>".format(i, entity.all.length);
			
			html += "</li>";
			//Equipment
			if(entity.all[i].Equipment != undefined){
				for(var j = entity.all[i].Equipment.length-1;j>=0;j--){
					if(entity.all[i].Equipment[j].name != undefined){
						html += "<li class=\"itemObject\" "
						if(i == entity.current){
							html += " style=\"width:90px;margin-left:20px;\" ";
						} else {
							html += " style=\"width:80px;margin-left:20px;\" ";
						}
						html += ">";
						html += "<img infoBox=\"{3}\" OnClick=\"itemEditor.load({0}, {1})\" style=\"float:left\" src=\"./images/items/{2}\" />".format(i, j, entity.all[i].Equipment[j].texture,entity.all[i].Equipment[j].name);
						html += "<div infoBox=\"Delete Item\" style=\"float:left;margin-left:3px\" icon=\"trash\" OnClick=\"entity.Equipment.delete({0}, {1});ridingEntitySelection.update();entityEditor.load(0)\"></div>".format(i, j);
						html += "</li>";
					}
					
				}
			}
			
		}
		html += "<li infobox=\"Add riding entity\" OnClick=\"entityEditor.addEntity()\"><div style=\"float:left;margin-left:3px\" icon=\"add\"></div></li>";
		$(".ridingEntitySelection ul").append(html);
		ridingEntitySelection.setColor();
	},
	//Sets background color for all Riding Entities
	setColor : function(){
		amount =  $(".ridingEntitySelection ul li").length;
		$(".ridingEntitySelection ul li").each(function (index, element) {
			RGB = { r : 0, g : 0, b : 0 };
			factor =  (index + 1) / amount;
			RGB.r = Math.floor(((ridingEntitySelection.minRGB.r - ridingEntitySelection.maxRGB.r) * factor) + ridingEntitySelection.maxRGB.r);
			RGB.g = Math.floor(((ridingEntitySelection.minRGB.g - ridingEntitySelection.maxRGB.g) * factor) + ridingEntitySelection.maxRGB.g);
			RGB.b = Math.floor(((ridingEntitySelection.minRGB.b - ridingEntitySelection.maxRGB.b) * factor) + ridingEntitySelection.maxRGB.b);
            $(element).css({
            	"background-color" : "rgb({0},{1},{2})".format(RGB.r, RGB.g, RGB.b)
            })

        });
	}
}