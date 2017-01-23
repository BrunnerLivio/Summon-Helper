navigation = {
	activeLi : null,
	//Deletes all Navigation points and fills in again all Navigation points
	load: function(){
		$(".sideBar").children().remove();
		var html = "<ul class=\"navigation\">";
		html += "<div class=\"title\">Navigation</div>";
		html += "<div class=\"sideBarhr\"></div>";
		
		for(var i=0;i<websiteData.navigation.length;i++){
			if(navigation.activeLi == websiteData.navigation[i].href)
				html += "<li class=\"active\"><a href=\"{0}\">{1}</a></li>".format(websiteData.navigation[i].href, websiteData.navigation[i].displayName);
			else
				html += "<li><a href=\"{0}\">{1}</a></li>".format(websiteData.navigation[i].href, websiteData.navigation[i].displayName);
		}
		html += "</ul>";
		var latestEntities = entity.cookie.load();
		if(latestEntities.length>0){
			html += "<div class=\"title\">Your latest Entities</div>";
			html += "<div class=\"sideBarhr\"></div>";
			
			for(var i = latestEntities.length-1;i>=0;i--){
				html += "<a href=\"entityEditor.html?latestEntity={0}\">".format(i);
				html += "<div class=\"latestEntity\">";
				html += "<div class=\"latestEntityImage\" style=\"background-image:url(./images/entity/{0})\" />".format(latestEntities[i].all[0].entityData.image);
				html += "<div class=\"latestEntityName\">{0}</div>".format(latestEntities[i].all[0].entityData.name);
				html += "</div>";
				html += "</a>";
			}
		}
		
		$(".sideBar").append(html);
	},
	setActive:function(nav){
		for(var i=0;i<websiteData.navigation.length;i++){
			if(nav == websiteData.navigation[i].href){
				navigation.activeLi = nav;
				navigation.load();
				return;
			}
		}
		console.error("Navigation link \"" + navigation + "\" does not exist");
		
	}
}