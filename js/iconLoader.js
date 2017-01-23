
var iconLoader = {
	update : function(){
			$("div[icon]").each(function(index, element) {
				var queryResult = Enumerable.From(icons_coordinateData)
			    .Where(function (x) { return x.name == $(element).attr("icon")})
			    .ToArray();
				$(element).css({
					"width" : queryResult[0].width + "px",
					"height" : queryResult[0].height + "px",
					"background-image" : "url(./images/design/icons.png)",
					"background-position" : "-{0}px -{1}px".format(queryResult[0].left, queryResult[0].top)
				});
			});
		
	}
}
