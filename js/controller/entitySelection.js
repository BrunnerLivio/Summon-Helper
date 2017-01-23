var main = {
	load : function(getParameters){
		//Preload certain images
		if(websiteData.isServer){
            for(var i=0;i<entityData.length;i++){
            	imagePreloader.add("./images/entity/{0}".format(entityData[i].image));
            }
            imagePreloader.add("./images/design/blurriedHill.png");
            imagePreloader.load();
        }
		navigation.setActive("entitySelection.html");
		entityClassDataLength = entityClassData.length;
		html = "";


		//Loads all the entities in to the overview
		for(i=0;i<entityClassDataLength;i++){
			html += "<div class=\"columnList\" id=\"{0}\">".format(i + entityClassData[i].name);
			html += "<div class=\"title\">{0} Entities</div>".format(entityClassData[i].name);
			var queryResult = Enumerable.From(entityData)
			    .Where(function (x) { return x.class == entityClassData[i].name})
			    .ToArray();
			for(j=0;j<queryResult.length;j++){
				html += "<a href=\"entityEditor.html?entityId={0}\" id=\"a{1}{2}\" class=\"item\"><div id=\"{1}{2}\" >".format(queryResult[j].name,j,queryResult[j].name);
				html += "<div class=\"entityOverviewLeft\"><img src=\"./images/entity/{0}\" alt=\"{1}\" /></div>".format(queryResult[j].image, queryResult[j].name);
				html += "<div class=\"entityOverviewRight\">";
				html += "<h3>{0}</h3>".format(queryResult[j].name);
				html += "<div class=\"entityHearts\">";

				//Shows number of hearts for entity
				if(queryResult[j].heart > 0 && queryResult[j].heart <= 20){
					for(k=0;k<Math.floor(queryResult[j].heart/2);k++){
						html += "<div icon=\"heart_full\" class=\"fullHeart\"></div>";
					}
					if(queryResult[j].heart%2>0){
						html += "<div icon=\"heart_half\" class=\"halfHeart\"></div>";
					}
				} else if(queryResult[j].heart > 20){
						html += "<p>{0} Hearts".format(queryResult[j].heart);
				}
				html += "</div>";
				
				html += "<p class=\"entityInfo\">{0}</p>".format(queryResult[j].info);
				html += "</div>";
				html += "</div></a>";
			}
			html += "</div>";
		}
		$(".entityOverview").append(html);



		$(".columnList a").hover(function(){
			$(".columnList a:not(#{0})".format(this.id)).css({
				"opacity" : "0.5"
			});
			$(this).css({
				"opacity" : "1.0"
			});

		}, function(){
			$(".columnList a".format(this.id)).css({
				"opacity" : "1"
			});
		});

		
		console.log("%centitySelection.js loaded", "color: green;");
	},
	updateDesign : function(){
		if(websiteData.isMobile){
			$(".entityOverviewLeft").css({
				"clear" : "both",
				"float" : "none"
			});
			$(".columnList .item").css({
				"width" : $(".columnList").width() + "px",
				"margin-left" : "0px"
			});

		}else {
			$(".entityOverviewLeft").css({
				"clear" : "none",
				"float" : "left"
			});
			$(".columnList .item:nth-child(3n+0)").css({
				"width" : $(".columnList").width() / 3 - 6 + "px",
				"margin-left" : "5px"
			});
			$(".columnList .item:nth-child(3n+1)").css({
				"width" : $(".columnList").width() / 3 - 6 + "px",
				"margin-left" : "5px"
			});
			$(".columnList .item:nth-child(3n+2)").css({
				"width" : $(".columnList").width() / 3 + "px",
				"margin-left" : "0px"
			});
		}
		
	},
    onScroll : function(windowTop){
        
    }
}