var editorData = [
//---------------------------------------------------------//
//							Entity 						   //
//---------------------------------------------------------//
	{
		name : "string",
		validate : [
		{
			obj : "#val",
			type : "string"
		}
		],
		html : function(x, obj){
			html = "<h1>{0}</h1>".format(obj.name);
			html += "<p class=\"info\">{0}</p>".format(obj.info);
			html += "<div class=\"error\"></div>";
			html += "<div><label for=\"val{0}\">Value:</label><input name=\"val{0}\" type=\"text\" id=\"val\" /></div>".format(obj.name);
			html += "<input onclick=\"entity.save('{0}', $('.tagEditor .content #val').val());entityEditor.tagOverview.load();\" type=\"submit\" value=\"Save\" />".format(obj.name);
			x.append(html);
			if(entity.all[entity.current].data[obj.name] != undefined){
				$("#val{0}".format(obj.name)).val(entity.all[entity.current].data[obj.name]);
			}
		}

	},
	{
		name : "integer",
		validate : [
		{
			obj : "#val",
			type : "integer"
		}
		],
		html : function(x, obj){
			html = "<h1>{0}</h1>".format(obj.name);
			html += "<p class=\"info\">{0}</p>".format(obj.info);
			html += "<div class=\"error\"></div>";
			html += "<div><label for=\"val{0}\">Value:</label><input name=\"val{0}\" type=\"number\" id=\"val\" /></div>".format(obj.name);
			html += "<input onclick=\"entity.save('{0}', $('.tagEditor .content #val').val());entityEditor.tagOverview.load();\" type=\"submit\" value=\"Save\" />".format(obj.name);
			x.append(html);
			if(entity.all[entity.current].data[obj.name] != undefined){
				$("#val{0}".format(obj.name)).val(entity.all[entity.current].data[obj.name]);
			}
		}

	},
	{
		name : "double",
		validate : [
		{
			obj : "#val",
			type : "double"
		}
		],
		html : function(x, obj){
			html = "<h1>{0}</h1>".format(obj.name);
			html += "<p class=\"info\">{0}</p>".format(obj.info);
			html += "<div class=\"error\"></div>";
			html += "<div><label for=\"val{0}\">Value:</label><input name=\"val{0}\" type=\"number\" step=\"any\" id=\"val\" /></div>".format(obj.name);
			html += "<input onclick=\"entity.save('{0}', $('.tagEditor .content #val').val());entityEditor.tagOverview.load();\" type=\"submit\" value=\"Save\" />".format(obj.name);
			x.append(html);
			if(entity.all[entity.current].data[obj.name] != undefined){
				$("#val{0}".format(obj.name)).val(entity.all[entity.current].data[obj.name]);
			}
		}

	},
	{
		name : "boolean",
		html : function(x, obj){
			html = "<h1>{0}</h1>".format(obj.name);
			html += "<p class=\"info\">{0}</p>".format(obj.info);
			html += "<div class=\"error\"></div>";
			html += "<label for=\"val{0}\">Value:</label><select name=\"val{0}\" id=\"val{0}\"><option value=\"1\">True</option><option value=\"0\">False</option></select>".format(obj.name);
			html += "<input onclick=\"entity.save('{0}', parseInt($('.tagEditor .content #val{0} option:selected').attr('value')));entityEditor.tagOverview.load();\" type=\"submit\" value=\"Save\" />".format(obj.name);
			x.append(html);
			if(entity.all[entity.current].data[obj.name] != undefined){
				$("#val{0}".format(obj.name)).val(entity.all[entity.current].data[obj.name]);
			}
		}
	},
	{
		name : "Equipment",
		html : function(x, obj, addFunc){
			x.append("<h1>{0}</h1><ul class=\"itemOverview\"></ul><input type=\"submit\" value=\"Save\" id=\"saveItem\" />".format(obj.displayName));
			items = "";
			itemLength = itemData.length;
			for(var i=0;i<itemLength;i++){
				items += "<li class=\"item\" infoBox=\"{2}\" id=\"item{0}-{1}\"><img src=\"./images/items/{0}-{1}.png\" alt=\"{2}\"  onclick=\"{3}({4},'{5}', {6})\" /></li>".format(itemData[i].type, itemData[i].meta,itemData[i].name, addFunc, i, obj.name, obj.element);
			}

			x.find(".itemOverview").append(items);
			if(entity.all[entity.current].data[obj.name] != undefined){
				if(entity.all[entity.current].data[obj.name][obj.element] != undefined){
					if(entity.all[entity.current].data[obj.name][obj.element].id != undefined){
						for(var i = 0;i<itemData.length;i++){
							if(itemData[i].text_type == entity.all[entity.current].data[obj.name][obj.element].id && itemData[i].meta == entity.all[entity.current].data[obj.name][obj.element].damage){
								break;
							}
						}
						$(".item").removeClass("selected");
						$("#item{0}-{1}".format(itemData[i].type, itemData[i].meta)).addClass("selected");
					}
					
				}
				
			}
		},
		additionalFunction : function(itemId, tagName, elementId){
			$(".item").removeClass("selected");
			$("#item{0}-{1}".format(itemData[itemId].type, itemData[itemId].meta)).addClass("selected");
			$("#saveItem").click(function(){
				eq = equipment.create(itemData[itemId]);
				entity.saveEquipment(eq, elementId);
				itemEditor.load(entity.all[entity.current].Equipment[elementId]);
			});
		}
	},
	{
		
		name : "Effect",
		validate : [
		{
			obj : "#duration",
			type : "integer"
		},
		{
			obj : "#amplifier",
			type : "integer"
		}
		],
		html : function(x, obj){
			var html = "<h1>{0}</h1>".format(obj.name);
			html += "<p>{0}</p>".format(obj.info);
			html += "<div class=\"error\"></div>";
			html += "<label for=\"duration{0}\">Duration:</label><input name=\"duration{0}\" type=\"number\" id=\"duration\" />".format(obj.id);
			html += "<label for=\"amplifier{0}\">Amplifier:</label><input name=\"amplifier{0}\" type=\"number\" id=\"amplifier\" />".format(obj.id);
			html += "<label for=\"showParticles{0}\">Show Particles:</label><select name=\"showParticles{0}\" id=\"showParticles\"><option value=\"1b\">True</option><option value=\"0b\">False</option></select>".format(obj.id);
			html += "<input type=\"submit\" value=\"Save\"";
			html += "OnClick=\"entityEditor.tagOverview.load();entity.saveToArray(";
			html += "'ActiveEffects',";
			html += "{ Id : {1}, Amplifier : $('#amplifier').val(), Duration : $('#duration').val(), ShowParticles: $('#showParticles option:selected').attr('value') })\" />".format(obj.id,obj.id);
			x.append(html);
			//Edit mode
			if(entity.all[entity.current].data["ActiveEffects"] != undefined)
				for(var i = 0;i<entity.all[entity.current].data["ActiveEffects"].length;i++)
					if(entity.all[entity.current].data["ActiveEffects"][i].Id == obj.id){
						$("#duration{0}".format(obj.id)).val(entity.all[entity.current].data["ActiveEffects"][i].Duration);
						$("#amplifier{0}".format(obj.id)).val(entity.all[entity.current].data["ActiveEffects"][i].Amplifier);
						$("#showParticles{0}".format(obj.id)).val(entity.all[entity.current].data["ActiveEffects"][i].ShowParticles);
					}
				
		}
	},
	{
		name : "Attribute",
		validate : [
		{
			obj : "#amount",
			type : "double",
		},
		],
		html : function(x, obj){
			var html = "<h1>{0}</h1>".format(obj.name);
			html += "<p>{0}</p>".format(obj.info);
			html += "<div class=\"error\"></div>";
			html += "<label for=\"amount{0}\">Base:</label><input name=\"amount{0}\" type=\"text\" id=\"amount\" />".format(obj.name);
			html += "<input type=\"submit\" value=\"Save\"";
			html += "OnClick=\"entityEditor.tagOverview.load();entity.saveToArray(";
			html += "'Attributes',";
			html += "{ Name : '###{0}###', Base : parseFloat($('#amount').val()) })\" />".format(obj.name);
			x.append(html);
			//Edit mode
			if(entity.all[entity.current].data["Attributes"] != undefined)
				for(var i = 0;i<entity.all[entity.current].data["Attributes"].length;i++){
					if(entity.all[entity.current].data["Attributes"][i].Name == "###" +  obj.name + "###"){
						$("#amount").val(entity.all[entity.current].data["Attributes"][i].Base);
					}
				}
					
		}
	},
	{
		name : "Enchantment",
		validate : [
		{
			obj : "#level",
			type : "integer",
		},
		],
		html : function(x, obj){
			var html = "<h1>{0}</h1>".format(obj.name);
			html += "<p>{0}</p>".format(obj.info);
			html += "<div class=\"error\"></div>";
			html += "<label for=\"level{0}\">Level:</label><input name=\"level\" type=\"number\" id=\"level\" />".format(obj.name);
			html += "<input type=\"submit\" value=\"Save\"";
			html += "OnClick=\"itemEditor.itemTagOverview.load();equipment.saveToArray(";
			html += "'ench',";
			html += "{id : {0}, lvl : $('#level').val() })\" />".format(obj.id);
			x.append(html);
			//Edit mode
			if(equipment.current.data["ench"] != undefined){
				var queryResult = Enumerable.From(equipment.current.data["ench"])
				.Where(function (x) { return x.id == obj.id})
				.ToArray();

				if(queryResult.length > 0){
					$("#level").val(queryResult[0].lvl);
				}
			}		
		}
	},
	{
		name : "entityHorseType",
		html : function(x, obj, addFunc){
			var html = "<h1>{0}</h1>".format(obj.name);
			html += "<p>Choose a type!</p>";
			for(var i = 0;i<entityHorseTypeData.length;i++){
				html += "<img src=\"./images/horses/{0}\" class=\"horseTypes\" alt=\"{1}\" OnClick=\"{3}({2})\" />".format(entityHorseTypeData[i].texture, entityHorseTypeData[i].Name, entityHorseTypeData[i].id, addFunc);
			}
			x.append(html);
			
		},
		additionalFunction : function(horseTypeId){
			entity.save("Type", horseTypeId);
			entityEditor.tagOverview.load();
		}
	},
	{
		name : "XYZ",
		validate : [
		{
			obj : "#X",
			type : "double",
		},
		{
			obj : "#Y",
			type : "double",
		},
		{
			obj : "#Z",
			type : "double",
		},
		],
		html : function(x, obj, addFunc){
			var html = "<h1>{0}</h1>".format(obj.name);
			html += "<p>{0}</p>".format(obj.info);
			html += "<div class=\"error\"></div>";
			html += "<label for=\"X\"></label><input type=\"number\" id=\"X\" name=\"X\" />";
			html += "<label for=\"Y\"></label><input type=\"number\" id=\"Y\" name=\"Y\" />";
			html += "<label for=\"Z\"></label><input type=\"number\" id=\"Z\" name=\"Z\" />";
			html += "<input type=\"submit\" value=\"Save\" OnClick=\"{0}($('#X').val(), $('#Y').val(), $('#Z').val(), '{1}')\" />".format(addFunc, obj.name);
			x.append(html);
			//Edit Mode
			if(entity.all[entity.current].data[obj.name] != undefined){
				$("#X").val(parseFloat(entity.all[entity.current].data[obj.name][0].replace(/###/g,'')));
				$("#Y").val(parseFloat(entity.all[entity.current].data[obj.name][1].replace(/###/g,'')));
				$("#Z").val(parseFloat(entity.all[entity.current].data[obj.name][2].replace(/###/g,'')));

			}
			
		},
		additionalFunction : function(X, Y, Z, saveTag){
			entity.saveToArray(saveTag, 0, "###" + parseFloat(Math.round(X * 100) / 100).toFixed(3) + "###");
			entity.saveToArray(saveTag, 1, "###" + parseFloat(Math.round(Y * 100) / 100).toFixed(3) + "###");
			entity.saveToArray(saveTag, 2, "###" + parseFloat(Math.round(Z * 100) / 100).toFixed(3) + "###");
			entityEditor.tagOverview.load();
		}
	},
	{
		name : "blockSelect",
		html : function(x, obj, addFunc){
			x.append("<h1>Select a Block</h1><ul class=\"itemOverview\"></ul><input type=\"submit\" value=\"Save\" id=\"saveItem\" />");
			blocks = "";
			var blockData = Enumerable.From(itemData)
				.Where(function (x) { return x.type < 256})
				.ToArray();


			blockLength = blockData.length;
			for(var i=0;i<blockLength;i++){
				blocks += "<li class=\"item\" id=\"item{0}-{1}\"><img src=\"./images/items/{0}-{1}.png\" alt=\"{2}\" onclick=\"{3}({4},'{5}', '{6}')\" /></li>".format(blockData[i].type, blockData[i].meta,blockData[i].name, addFunc, i, obj.name, obj.meta);
			}

			x.find(".itemOverview").append(blocks);
			if(entity.all[entity.current].data[obj.name] != undefined){
				for(var i = 0;i<blockData.length;i++){
					if(blockData[i].text_type == entity.all[entity.current].data[obj.name].replace("minecraft:", "") && blockData[i].meta == entity.all[entity.current].data[obj.meta]){
						$(".item").removeClass("selected");
						$("#item{0}-{1}".format(blockData[i].type, blockData[i].meta)).addClass("selected");
						break;

					}
				}
				
				
			}
		},
		additionalFunction : function(itemId, tagName, tagMeta){
			var blockData = Enumerable.From(itemData)
				.Where(function (x) { return x.type < 256})
				.ToArray();
			$(".item").removeClass("selected");
			$("#item{0}-{1}".format(blockData[itemId].type, blockData[itemId].meta)).addClass("selected");
			$("#saveItem").click(function(){
				entity.save(tagName, "minecraft:{0}".format(blockData[itemId].text_type));

				entity.save(tagMeta, blockData[itemId].meta);
				entityEditor.tagOverview.load();
				if(tagName == "DisplayTile"){
					if(entity.all[entity.current].data["CustomDisplayTile"] == undefined){
						entity.all[entity.current].data["CustomDisplayTile"] = 1;
					}
				}
				
			});
		}
	},
	{
		name : "DropChance",
		html : function(x, obj){
			
			var html = "<h1>Drop Chance</h1>";
			html += "<p>{0}</p>".format(obj.info);
			names = Enumerable.From(entityEditorData).Where(function(x){return x.name == "Equipment"}).Single();
			for(var i = 0;i<=4;i++){
				
				html += "<h3>{0}</h3>".format(names.navigation[i].displayName);
				if(!jQuery.isEmptyObject(entity.all[entity.current].Equipment[i])){
					html += "<div id=\"itemImage\" style=\"float:none;display:block;background-image:url(./images/items/{0}-{1}.png)\"></div>".format(entity.all[entity.current].Equipment[i].itemData.type, entity.all[entity.current].Equipment[i].itemData.meta);
				}
				html += "<input style=\"display:inline;width:60px\" id=\"value{0}\" value=\"0.00\" type=\"number\" class=\"sliderValue\" step=\"0.01\"/>".format(i);
				html += "</div>";
				html += "<div>"
				html += "<div class=\"slider\" id=\"dropChanceSlider{0}\"></div>".format(i);
				html += "<span>Undamaged:</span>";
				html += "<input type=\"checkBox\" class=\"changeDurabillity\" id=\"durabillity{0}\">".format(i);
				html += "<hr />"
			}
			html += "<input type=\"submit\" value=\"Save\" id=\"submitDropChance\" />";
			
			x.append(html);
			$(".sliderValue").change(function(event){
				id = parseInt($(event.target).attr("id").slice(-1));
				$("#dropChanceSlider" + id).slider( "value", $(this).val() );
			});
			$( ".slider" ).slider({
			  max: 1.01,
			  step: 0.01,
			  min:0,
			  change: function( event, ui ) {
			  	var id = parseInt($(event.target).attr("id").slice(-1));
			  	$("#value" + id).val(ui.value);
			  	if(ui.value!=1){
			  		if($("#durabillity" + id).prop('checked')){
			  			$("#durabillity" + id).prop('checked', false);
			  		}
			  	}
			  }
			});
			$(".changeDurabillity").change(function(){
				var id = parseInt($(event.target).attr("id").slice(-1));
				if($(this).prop('checked')){
					$("#value" + id).val(1);
					$("#dropChanceSlider" + id).slider( "value", 1 );
				}
			});
			$("#submitDropChance").click(function(){
				for(var i=0;i<=4;i++){
					if(!jQuery.isEmptyObject(entity.all[entity.current].Equipment[i])){
						if(entity.all[entity.current].Equipment[i].data["Count"] == undefined){
							entity.all[entity.current].Equipment[i].data["Count"] = 1;
						}
					}
					value = 0.00;
					if($("#value" + i).val() != ""){
						value = parseFloat($("#value" + i).val());
					}
					if($("#durabillity" + i).prop('checked')){
						value = 2;
					}
					entity.saveToArray("DropChances", i, "###" + value + "f###");
					entityEditor.tagOverview.open();
				}
				
			});
			//Edit mode
			if(entity.all[entity.current].data["DropChances"] != undefined){
					for(var i = 0;i<=4;i++){
						if(entity.all[entity.current].data["DropChances"] != undefined){
							if(entity.all[entity.current].data["DropChances"][i] != undefined){
								value = parseFloat(entity.all[entity.current].data["DropChances"][i].replace(/###/g,''));
								if(value > 1){
									value = 1;
									$("#durabillity" + i).prop('checked', true);
								}
								$("#value" + i).val(value);
								$("#dropChanceSlider" + i).slider( "value", value );
							}
						}
					}	
			}
			
		}
	},
//---------------------------------------------------------//
//							Item 						   //
//---------------------------------------------------------//
	{
		name : "itemString",
		validate : [
		{
			obj : "#val",
			type : "string",
		},
		],
		html : function(x, obj){
			html = "<h1>{0}</h1>".format(obj.name);
			html += "<p class=\"info\">{0}</p>".format(obj.info);
			html += "<div class=\"error\"></div>";
			html += "<label for=\"val{0}\">Value:</label><input name=\"val{0}\" type=\"text\" id=\"val\" />".format(obj.name);
			if(obj.preTag != undefined){
				html += "<input onclick=\"equipment.save('{1}', { {0} :$('.itemTagEditor .content #val').val()});itemEditor.itemTagOverview.load();\" type=\"submit\" value=\"Save\" />".format(obj.name, obj.preTag);
			}
			else{
				html += "<input onclick=\"equipment.save('{0}', $('.itemTagEditor .content #val').val());itemEditor.itemTagOverview.load();\" type=\"submit\" value=\"Save\" />".format(obj.name);
			}

			x.append(html);
			if(equipment.current.data[obj.preTag] != undefined){
				if(equipment.current.data[obj.preTag][obj.name] != undefined){
					$('.itemTagEditor .content #val{0}'.format(obj.name)).val(equipment.current.data[obj.preTag][obj.name]);
				}
			} else {
				if(equipment.current.data[obj.name] != undefined){
					$('.itemTagEditor .content #val{0}'.format(obj.name)).val(equipment.current.data[obj.name]);
				}
			}
			
		}

	},
	{
		name : "itemInteger",
		validate : [
		{
			obj : "#val",
			type : "integer",
		},
		],
		html : function(x, obj){
			html = "<h1>{0}</h1>".format(obj.name);
			html += "<p class=\"info\">{0}</p>".format(obj.info);
			html += "<div class=\"error\"></div>";
			html += "<label for=\"val{0}\">Value:</label><input name=\"val\" type=\"number\" id=\"val\" />".format(obj.name);
			if(obj.preTag != undefined){
				html += "<input onclick=\"equipment.save('{1}', { {0} : $('.itemTagEditor .content #val').val()});itemEditor.itemTagOverview.load();\" type=\"submit\" value=\"Save\" />".format(obj.name, obj.preTag);
			}
			else{
				html += "<input onclick=\"equipment.save('{0}', $('.itemTagEditor .content #val').val());itemEditor.itemTagOverview.load();\" type=\"submit\" value=\"Save\" />".format(obj.name);
			}
			x.append(html);
			if(equipment.current.data[obj.preTag] != undefined){
				if(equipment.current.data[obj.preTag][obj.name] != undefined){
					$('.itemTagEditor .content #val{0}'.format(obj.name)).val(equipment.current.data[obj.preTag][obj.name]);
				}
			} else {
				if(equipment.current.data[obj.name] != undefined){
					$('.itemTagEditor .content #val{0}'.format(obj.name)).val(equipment.current.data[obj.name]);
				}
			}
			
		}

	},
	{
		name : "SkullEditor",
		validate : [
		{
			obj : "#val",
			type : "string",
		},
		],
		html : function(x, obj, addFunc){
			html = "<h1>{0}</h1>".format(obj.name);
			html += "<p class=\"info\">{0}</p>".format(obj.info);
			html += "<div class=\"error\"></div>";
			html += "<div class=\"usernameEdit\"><h3>Username</h3><input onkeydown=\"{1}($(this).val())\" onkeyup=\"{1}($(this).val())\" name=\"val{0}\" type=\"text\" id=\"val\" /></div>".format(obj.name, addFunc);
			html += "<div class=\"usernamePreview\"><h3> Preview </h3><div class=\"usernameImage\"></div>";
			
			html += "<input onclick=\"equipment.save('{0}',  $('.itemTagEditor .content #val').val());itemEditor.itemTagOverview.load();\" type=\"submit\" value=\"Save\" style=\"margin-top:70px;\"/>".format(obj.name);
			x.append(html);
			if(equipment.current.data[obj.preTag] != undefined){
				if(equipment.current.data[obj.preTag][obj.name] != undefined){
					$('.itemTagEditor .content #val'.format(obj.name)).val(equipment.current.data[obj.preTag][obj.name]);
				}
			}
			
		},
		additionalFunction : function(username){
			if(username != ""){
				$(".usernameImage").css("background-image", "url(https://minotar.net/cube/{0}/64.png)".format(username));
			}
			
		}

	},
]