var itemEditor = {
	isOpen : false,
	currentEquipment : undefined,
	load : function(){
		if(arguments.length == 2){
			itemEditor.currentEquipment = entity.all[arguments[0]].Equipment[arguments[1]];	
		} else {
			itemEditor.currentEquipment = arguments[0];	
		}
		equipment.current = itemEditor.currentEquipment;
		itemEditor.open();
	},
	open : function(){
		entityEditor.extraEditor.close();
		$(".itemEditor").addClass("mainEditorActive");
		$(".entityEditor").removeClass("mainEditorActive");
		itemEditor.itemInformation.load();
		main.updateDesign();
		$(".itemInformation").addClass("active");
		$(".itemEditor .active").css({
			"width" : $(".itemEditor").width() - 100  + "px" 
		});
		
		itemEditor.itemInformation.open();
		ridingEntitySelection.update();
		main.updateDesign();
	},
	itemInformation : {
		open : function(){
			$(".editor").removeClass("active");
			$(".itemInformation").addClass("active");
			$(".itemTagEditor .leftBorder .close").remove();
			$(".itemTagOverview .leftBorder .close").remove();
			$(".itemEditor .active").animate({
				"width" : $(".itemEditor").width() - 100  + "px" 
			});
			$(".itemTagOverview").animate({
				"width" : 50 + "px" 
			});
			$(".itemTagEditor").animate({
				"width" : 50 + "px" 
			});
		},
		load : function(){
			$("#itemName").html(itemEditor.currentEquipment.itemData.name);
			$("#itemImage").css({
				"background-image" : "url(./images/items/{0}-{1}.png)".format(itemEditor.currentEquipment.itemData.type, itemEditor.currentEquipment.itemData.meta)
			});
			$(".itemInformation .content .itemTagNavigation li").remove();

			//Loads in the saved option in the dropdown box
			if (user.options.load("itemTagView") != undefined) {
				itemTagView = parseInt(user.options.load("itemTagView"));
			} else {
				itemTagView = 0;
			}
			$(itemEditorData).each(function(index, element){
				var setDisplay = false;
				if(element.defaultCategory!= undefined){
					var l = Enumerable.From(element.defaultCategory)
					.Where(function(x){
						return x.text_type == itemEditor.currentEquipment.itemData.text_type && (x.meta == undefined ? true : x.meta == itemEditor.currentEquipment.itemData.meta);
					}).ToArray().length;
					if(l > 0){
						setDisplay = true;
					} else {
						setDisplay = false;
					}
				}else{
					setDisplay = true;
				}
				if(setDisplay){
					var number = 0;
					number = itemEditor.itemTagOverview.generateList(itemTagView, element).length;
					$(".itemInformation .content .itemTagNavigation").append("<li OnClick=\"itemEditor.itemTagOverview.load({0});itemEditor.itemTagOverview.open();\" id=\"{0}{1}\">{1}<span class=\"number\">{2}</span></li>".format(index, element.name, number));
				}
				
			});
				

		}
	},
	itemTagOverview : {
		current : -1,
		generateList : function(itemTagView, list){
			//Sets the id, so it can speak to the element of the list later
			$(list.navigation).each(function(index, element){
				element.id = index;
			});

			//Sets the itemEditorData[n].navigation[m].category to itemEditorData[n].category, if itemEditorData[n].navigation[m].category is undefined
			$(list).each(function(index,element){
				if(element.defaultCategory != undefined){
					$(element.navigation).each(function(index, innerElement){
						if(innerElement.category == undefined) {
							innerElement.category = element.defaultCategory;
						}
					});
				}
			});
			
			//Generates a list for the selected value in the dropdown box
			if (itemTagView == "0") {
				//Heavy programming 
				//▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
				var itemEditorNavList = Enumerable.From(list.navigation)
					.Where(function(x) {
						var callback = false;
						if(x.difficulty == 0 || x.difficulty == undefined){
							if(x.category != undefined){

								var categoryList = Enumerable.From(x.category)
									.Where(function(y){
										var innerCallback = true;
										if(y.text_type != undefined){
											if(y.text_type == itemEditor.currentEquipment.itemData.text_type){
												
												if(y.meta != undefined){
													if(y.meta == itemEditor.currentEquipment.itemData.meta){
														innerCallback = true;
													} else{
														innerCallback = false;
													}
												}else {
													innerCallback = true;
												}
											} else {
												innerCallback = false;
											}
										} else {
											innerCallback = true;
										}
										return innerCallback;
									})
									.ToArray();
								if(categoryList.length > 0 ){
									callback = true;
								} else {
									callback = false;
								}
							} else {
								callback = true;
							}
						} else {
							callback = false;
						}

						return callback;
					
					})
					.OrderBy(function(x) {
						return x.name
					})
					.ToArray();
			} else if (itemTagView == "1") {
				var itemEditorNavList = Enumerable.From(list.navigation)
					.Where(function(x) {
						var callback = false;
						if(x.difficulty == 0 || x.difficulty == 1 || x.difficulty == undefined){
							if(x.category != undefined){
								var categoryList = Enumerable.From(x.category)
									.Where(function(y){
										var innerCallback = true;
										if(y.text_type != undefined){
											if(y.text_type == itemEditor.currentEquipment.itemData.text_type){
												
												if(y.meta != undefined){
													if(y.meta == itemEditor.currentEquipment.itemData.meta){
														innerCallback = true;
													} else{
														innerCallback = false;
													}
												}else {
													innerCallback = true;
												}
											} else {
												innerCallback = false;
											}
										} else {
											innerCallback = true;
										}
										return innerCallback;
									})
									.ToArray();
								if(categoryList.length > 0 ){
									callback = true;
								} else {
									callback = false;
								}
							} else {
								callback = true;
							}
						} else {
							callback = false;
						}

						return callback;
					
					})
					.OrderBy(function(x) {
						return x.name
					})
					.ToArray();
			} else if (itemTagView == "2") {
				var itemEditorNavList = list.navigation;
			}
			return itemEditorNavList;
		},
		open : function(){
			$(".editor").removeClass("active");
			$(".itemTagOverview").addClass("active");
			$(".itemTagOverview .leftBorder .close").remove();
			$(".itemTagEditor .leftBorder .close").remove();
			$(".itemTagOverview .leftBorder").append("<div class=\"close\" onclick=\"itemEditor.itemInformation.load();itemEditor.itemInformation.open()\" icon=\"close\"></div>");
			
			if(websiteData.isMobile){
				$(".itemEditor .active").animate({
					"height" : $(".itemEditor").height()-100 + "px" 
				});
				$(".itemInformation").animate({
					"height" : 50 + "px" 
				});
				$(".content").css({
					"display" : "none"
				})
				$(".itemTagOverview .content").css({
					"display" : "inline"
				});
				$(".itemTagEditor").animate({
					"height" : 50 + "px" 
				});
			}else {
				$(".itemEditor .active").animate({
					"width" : $(".itemEditor").width()-100 + "px" 
				});
				$(".itemInformation").animate({
					"width" : 50 + "px" 
				});
				$(".itemTagEditor").animate({
					"width" : 50 + "px" 
				});
			}
			
			
		},
		load : function(tagClass){
			if(tagClass == undefined){
				tagClass = itemEditor.itemTagOverview.current;
			}
			itemEditor.itemTagOverview.current = tagClass;
			//Removes the old list items
			$(".itemTagOverview .content .itemTags li").remove();
			$(".itemTagOverview .content .title").text(itemEditorData[tagClass].name);

			//Loads in the saved option in the dropdown box
			if (user.options.load("itemTagView") != undefined) {
				$("#itemTagView").val(user.options.load("itemTagView"));
			}
			itemEditorNavList = itemEditor.itemTagOverview.generateList(parseInt($("#itemTagView option:selected").val()), itemEditorData[tagClass]);
			
			$("#itemTagView").change(function() {
				user.options.save("itemTagView", $("#itemTagView option:selected").val());
				itemEditor.itemTagOverview.load(tagClass);
			});
			

			html = "";
			for (var i = 0; i < itemEditorNavList.length; i++) {
				
				if (itemEditorNavList[i].displayName == undefined) {
					itemEditorNavList[i].displayName = itemEditorNavList[i].name;
				}
				if(itemEditorNavList[i].editor == undefined || itemEditorNavList[i].editor == null) {
					itemEditorNavList[i].editor = itemEditorData[tagClass].defaultEditor;
				}
				if(itemEditorNavList[i].preTag == undefined || itemEditorNavList[i].preTag == null) {
					itemEditorNavList[i].preTag = itemEditorData[tagClass].defaultPreTag;
				}

				html += "<li OnClick=\"itemEditor.itemTagEditor.load({0},{1});itemEditor.itemTagEditor.open()\">".format(tagClass, itemEditorNavList[i].id);
				if (itemEditorNavList[i].texture != undefined) {
					html += "<img src=\"./images/tags/{0}/{1}\" />".format(itemEditorNavList[tagClass].name, itemEditorNavList[i].texture);
				}
			
				html += "{0}</li>".format(itemEditorNavList[i].displayName);
				console.log(itemEditorNavList[i]);
			}
			$(".itemTagOverview .content .itemTags").append(html);
			itemEditor.itemTagOverview.open();
		}
	},
	itemTagEditor : {
		load : function(tagClass, tagId){
			itemEditor.itemTagEditor.resetEditorValues();
			itemEditor.itemTagEditor.loadEditor(itemEditorData[tagClass].navigation[tagId]);
		},
		resetEditorValues : function(){
			$(".itemTagEditor .content").children().remove();
		},
		loadEditor : function(obj){
			for(var i=0;i<editorData.length;i++){
				if(editorData[i].name == obj.editor){
					editorData[i].html($(".itemTagEditor .content"), obj, "editorData[{0}].additionalFunction".format(i));
					$(editorData[i].validate).each(function(index, element){
						$(element.obj).attr("onkeyup", "validation.validate(\"{0}\",\"{1}\")".format(element.obj, element.type));
					});
					return;
				}
			}
			console.error("Editor \"{0}\" does not exist".format(obj.editor));
		},
		open : function(){
			$(".editor").removeClass("active");
			$(".itemTagEditor").addClass("active");
			$(".itemTagEditor .leftBorder .close").remove();
			$(".itemTagEditor .leftBorder").append("<div class=\"close\" onclick=\"itemEditor.itemTagOverview.open()\" icon=\"close\"></div>");
			if(websiteData.isMobile){
				$(".itemEditor .active").animate({
					"height" : $(".itemEditor").height()-100 + "px" 
				});
				$(".itemInformation").animate({
					"height" : 50 + "px" 
				});
				$(".itemTagOverview").animate({
					"height" : 50 + "px" 
				});
				$(".content").css({
					"display" : "none"
				})
				$(".itemTagEditor .content").css({
					"display" : "inline"
				});
			}else{
				$(".itemEditor .active").animate({
					"width" : $(".itemEditor").width()-100 + "px" 
				});
				$(".entityInformation").animate({
					"width" : 50 + "px" 
				});
				$(".itemTagOverview").animate({
					"width" : 50 + "px" 
				});
			}

			
			
		}
	},
	extraEditor : {
		isActive : false,
		toLoadingElement : "",
		open : function(){
			itemEditor.extraEditor.isActive = true;
			$(".extraEditor .content").children().remove();
			$(".extraEditor .content").append(itemEditor.extraEditor.toLoadingElement);
			$(".extraEditor").css("display", "block");
			$(".itemInformation").animate({
				"height" : 0 + "px" 
			});
			$(".itemTagOverview").animate({
				"height" : 0 + "px" 
			});
			$(".itemTagEditor").animate({
				"height" : 0 + "px" 
			}, function(){
				$(".editor:not(.extraEditor) .content").css("display", "none");
			});
			
		},
		close : function(){
			
			itemEditor.extraEditor.isActive = false;
			$(".itemInformation").animate({
				"height" : "100%" 
			});
			$(".itemTagOverview").animate({
				"height" : "100%" 
			});
			$(".itemTagEditor").animate({
				"height" : "100%" 
			}, function(){
				$(".editor:not(.extraEditor) .content").fadeIn();
				main.updateDesign();
			});
		}
	},
}