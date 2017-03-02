var entityEditor = {
	isOpen: true,
	currentEntity: {},
	load: function(entityId) {
		if ($.isNumeric(entityId)) {
			if (entityId == -1)
				entityId = entity.all.length - 1;
			entityEditor.entityInformation.load(entity.all[entityId]);
			entity.current = entityId;

		} else {
			entityEditor.entityInformation.load(entityId);
			entity.current = entityId.id;
		}
		entityEditor.open();
	},
	open: function() {
		$(".entityEditor").addClass("mainEditorActive");
		$(".itemEditor").removeClass("mainEditorActive");
		main.updateDesign();
		$(".entityInformation").addClass("active");
		$(".entityEditor .active").css({
			"width": $(".entityEditor").width() - 100 + "px"
		});
		main.updateDesign();
		entityEditor.entityInformation.open();
		ridingEntitySelection.update();
	},
	addEntity: function() {
		entityEditor.load(-1);


		html = "";

		for (i = 0; i < entityClassData.length; i++) {
			html += "<div class=\"RidingEntityClassTitle\">{0}</div>".format(entityClassData[i].name);
			html += "<ul class=\"smallNavigation\">";
			var queryResult = Enumerable.From(entityData)
				.Where(function(x) {
					return x.class == entityClassData[i].name
				})
				.ToArray();
			for (var j = 0; j < queryResult.length; j++) {
				html += "<li OnClick=\"entity.add('{1}');entityEditor.extraEditor.close();entityEditor.load(-1)\"><div class=\"entityRiding\"><img class=\"entityRidingImage\" src=\"./images/entity/{0}\" alt=\"{1}\" /><div class=\"entityRidingName\">{1}</div></div></li>".format(queryResult[j].image, queryResult[j].display.name);
			}
			html += "</ul>";

		}
		entityEditor.extraEditor.toLoadingElement = html;
		entityEditor.extraEditor.open();
	},
	entityInformation: {
		open: function() {
			$(".editor").removeClass("active");
			$(".entityInformation").addClass("active");
			$(".tagEditor .leftBorder .close").remove();
			$(".tagOverview .leftBorder .close").remove();

			$(".entityEditor .active").animate({
				"width": $(".entityEditor").width() - 100 + "px"
			});
			$(".tagOverview").animate({
				"width": 50 + "px"
			});
			$(".tagEditor").animate({
				"width": 50 + "px"
			});
		},
		load: function(ent) {
			entityEditor.currentEntity = ent;
			if (ent.name == ent.entityData.name) {
				$("#entityName").html(ent.entityData.display.name);
			} else {
				$("#entityName").html("{0} ({1})".format(ent.name, ent.entityData.display.name));
			}


			$("#entityImage").css({
				"background-image": "url(./images/entity/{0})".format(ent.entityData.image)
			});
			$(".entityInformation .content .tagNavigation li").remove();
			for (var i = 0; i < entityEditorData.length; i++) {
				entityEditorNav = Enumerable.From(entityEditorData[i].navigation).OrderBy(function(x) {
					return x.name
				}).ToArray();
				number = 0;
				var tagViewOpt = user.options.load("tagView");
				if (tagViewOpt == undefined) {
					tagViewOpt = "0";
				}

				if (tagViewOpt == "0") {
					number = Enumerable.From(entityEditorData[i].navigation)
						.Where(function(x) {
							return (x.difficulty == 0 || x.difficulty == undefined) && (x.category == undefined ? true : jQuery.inArray(x.category, entityEditor.currentEntity.entityData.category) != -1)
						})
						.OrderBy(function(x) {
							return x.name
						})
						.ToArray()
						.length;
				} else if (tagViewOpt == "1") {
					number = Enumerable.From(entityEditorData[i].navigation)
						.Where(function(x) {
							return (x.difficulty == 0 || x.difficulty == undefined || x.difficulty == 1) && (x.category == undefined ? true : jQuery.inArray(x.category, entityEditor.currentEntity.entityData.category) != -1)
						})
						.ToArray()
						.length;
				} else if (tagViewOpt == "2") {
					number = Enumerable.From(entityEditorData[i].navigation)
						.Where(function(x) {
							return (x.difficulty == 0 || x.difficulty == undefined || x.difficulty == 1)
						})
						.ToArray()
						.length;
				}
				$(".entityInformation .content .tagNavigation").append("<li OnClick=\"entityEditor.tagOverview.load({0});entityEditor.tagOverview.open();\" id=\"{0}{1}\">{1}<span class=\"number\">{2}</span></li>".format(i, entityEditorData[i].name, number));

			}
		}
	},
	tagOverview: {
		current : -1,
		open: function() {
			$(".editor").removeClass("active");
			$(".tagOverview").addClass("active");
			$(".tagOverview .leftBorder .close").remove();
			$(".tagEditor .leftBorder .close").remove();
			$(".tagOverview .leftBorder").append("<div class=\"close\" onclick=\"entityEditor.entityInformation.open()\" icon=\"close\"></div>");
			$(".entityEditor .active").animate({
				"width": $(".entityEditor").width() - 100 + "px"
			});
			$(".entityInformation").animate({
				"width": 50 + "px"
			});
			$(".tagEditor").animate({
				"width": 50 + "px"
			});


		},
		load: function(tagClass) {
			if(tagClass == undefined){
				tagClass = entityEditor.tagOverview.current;
			}
			entityEditor.tagOverview.current = tagClass;
			$(".tagOverview .content .tags li").remove();
			$(".tagOverview .content .title").text(entityEditorData[tagClass].name);

			if (user.options.load("tagView") != undefined) {
				$("#tagView").val(user.options.load("tagView"));
			}
			

			for(var i = 0;i<entityEditorData[tagClass].navigation.length;i++){
				entityEditorData[tagClass].navigation[i].id = i;
			}

			if ($("#tagView option:selected").val() == "0") {
				var entityEditorNavList = Enumerable.From(entityEditorData[tagClass].navigation)
					.Where(function(x) {
						return (x.difficulty == 0 || x.difficulty == undefined) && (x.category == undefined ? true : jQuery.inArray(x.category, entityEditor.currentEntity.entityData.category) != -1)
					})
					.OrderBy(function(x) {
						return x.name
					})
					.ToArray();
			} else if ($("#tagView option:selected").val() == "1") {
				var entityEditorNavList = Enumerable.From(entityEditorData[tagClass].navigation)
					.Where(function(x) {
						return (x.difficulty == 0 || x.difficulty == undefined || x.difficulty == 1) && (x.category == undefined ? true : jQuery.inArray(x.category, entityEditor.currentEntity.entityData.category) != -1)
					})
					.ToArray();
			} else if ($("#tagView option:selected").val() == "2") {
				var entityEditorNavList = Enumerable.From(entityEditorData[tagClass].navigation)
					.Where(function(x) {
						return (x.difficulty == 0 || x.difficulty == undefined || x.difficulty == 1)
					})
					.ToArray();
			}
			$("#tagView").change(function() {
				user.options.save("tagView", $("#tagView option:selected").val());
				entityEditor.tagOverview.load(tagClass);
			});

			html = "";
			for (var i = 0; i < entityEditorNavList.length; i++) {
				if (entityEditorNavList[i].displayName == undefined) {
					entityEditorNavList[i].displayName = entityEditorNavList[i].name;
				}
				if(entityEditorNavList[i].category == undefined){
					ecategory = "";
				} else {
					ecategory = entityEditorNavList[i].category ;
				}
				html += "<li OnClick=\"entityEditor.tagEditor.load({0},{1});entityEditor.tagEditor.open()\">".format(tagClass, entityEditorNavList[i].id);
				if (entityEditorNavList[i].texture != undefined) {
					html += "<img src=\"./images/tags/{0}/{1}\" />".format(entityEditorData[tagClass].name, entityEditorNavList[i].texture); 
				}
				html += "{0}<span class=\"tagCategory\">{1}</span>".format(entityEditorNavList[i].displayName, ecategory);				html += "</li>".format();
			}
			$(".tagOverview .content .tags").append(html);
			entityEditor.tagOverview.open();
		}
	},
	tagEditor: {
		load: function(tagClass, tagId) {
			entityEditor.tagEditor.resetEditorValues();
			if (entityEditorData[tagClass].navigation[tagId].editor == undefined || entityEditorData[tagClass].navigation[tagId].editor == null)
				entityEditorData[tagClass].navigation[tagId].editor = entityEditorData[tagClass].defaultEditor;
			entityEditor.tagEditor.loadEditor(entityEditorData[tagClass].navigation[tagId]);
		},
		resetEditorValues: function() {
			$(".tagEditor .content").children().remove();
		},
		loadEditor: function(obj) {
			for (var i = 0; i < editorData.length; i++) {
				if (editorData[i].name == obj.editor) {
					editorData[i].html($(".tagEditor .content"), obj, "editorData[{0}].additionalFunction".format(i));
					$(editorData[i].validate).each(function(index, element){
						$(element.obj).attr("onkeyup", "validation.validate(\"{0}\",\"{1}\")".format(element.obj, element.type));
					});
					return;
				}
			}
			console.error("Editor \"{0}\" does not exist".format(obj.editor));
		},
		open: function() {
			$(".editor").removeClass("active");
			$(".tagEditor").addClass("active");
			$(".tagEditor .leftBorder .close").remove();
			$(".tagEditor .leftBorder").append("<div class=\"close\" onclick=\"entityEditor.tagOverview.open()\" icon=\"close\"></div>");
			$(".entityEditor .active").animate({
				"width": $(".entityEditor").width() - 100 + "px"
			});
			$(".entityInformation").animate({
				"width": 50 + "px"
			});
			$(".tagOverview").animate({
				"width": 50 + "px"
			});



		}
	},
	extraEditor: {
		isActive: false,
		toLoadingElement: "",
		open: function() {
			entityEditor.extraEditor.isActive = true;
			$(".extraEditor .content").children().remove();
			$(".extraEditor .content").append(entityEditor.extraEditor.toLoadingElement);
			$(".extraEditor").css("display", "block");
			$(".itemEditor").css("display", "none");
			$(".entityInformation").animate({
				"height": 0 + "px"
			});
			$(".entityInformation").animate({
				"height": 0 + "px"
			});
			$(".tagOverview").animate({
				"height": 0 + "px"
			});
			$(".tagEditor").animate({
				"height": 0 + "px"
			}, function() {
				$(".editor:not(.extraEditor) .content").css("display", "none");
			});

		},
		close: function() {

			entityEditor.extraEditor.isActive = false;
			$(".entityInformation").animate({
				"height": "100%"
			});
			$(".entityInformation").animate({
				"height": "100%"
			});
			$(".tagOverview").animate({
				"height": "100%"
			});
			$(".tagEditor").animate({
				"height": "100%"
			}, function() {
				$(".editor:not(.extraEditor) .content").fadeIn();
				main.updateDesign();
			});
		}
	},
}