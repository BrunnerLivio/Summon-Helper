var equipment = {
	current : {},
	obj :function(){
		
		this.name = undefined;
		this.data = {Count : 1};
		this.texture = "";
		//Not relevant for the generator itself
		//The itemData from ./data/itemData.js will be loaded in
		//So you can access for example the texture of the item
		this.itemData = {};
	},
	create : function(itemData){
		newEquipment = new equipment.obj();
		newEquipment.itemData = itemData;
		newEquipment.data = { "id" : itemData.text_type, "damage" : itemData.meta }
		newEquipment.name = itemData.name;
		newEquipment.texture = itemData.type + "-" + itemData.meta + ".png";
		return newEquipment;
	},
	delete : function(entityId, equipmentId){
		entity.all[entityId].splice(id, 1);
		adress.update();
		return;
	},
	
	save : function(){
		//equipment.save(tagName, tagValue)
		if(arguments.length == 2 && typeof arguments[0] == "string" && typeof arguments[1] == "string" || typeof arguments[1] == "number" || typeof arguments[1] == "object"){
			if(typeof arguments[1] == "object"){
				//Tries to parse all the attributes of the object.
				for(var i = 0;i<getKeys(arguments[1]).length;i++){
					if(arguments[1][getKeys(arguments[1])[i]] != undefined){
						arguments[1][getKeys(arguments[1])[i]] = Float.TryParse(arguments[1][getKeys(arguments[1])[i]]);
					}
				}
			}else {
				arguments[1] = Float.TryParse(arguments[1]);
			}
			equipment.current.data[arguments[0]] = arguments[1];
			
		}
		console.log(entity.command.generate());
	},
	saveToArray : function(){
		//equipment.saveToArray(tagName, tagValue) 
		if(arguments.length == 2 && typeof arguments[0] == "string" && typeof arguments[1] == "string" || typeof arguments[1] == "number" || typeof arguments[1] == "object"){
			if(equipment.current.data[arguments[0]] == undefined){
				equipment.current.data[arguments[0]] = [];
			}
			//Searching for an ID, so it can decide if it is a new entry or an editing
			if(typeof arguments[1] == "object"){
				//Tries to parse all the attributes of the object.
				for(var i = 0;i<getKeys(arguments[1]).length;i++){
					if(arguments[1][getKeys(arguments[1])[i]] != undefined){
						arguments[1][getKeys(arguments[1])[i]] = Float.TryParse(arguments[1][getKeys(arguments[1])[i]]);
					}
				}
				if(arguments[1].Id != undefined){
					for(var i = 0;i<equipment.current.data[arguments[0]].length;i++){
						if(equipment.current.data[arguments[0]][i].Id == arguments[1].Id){
							equipment.current.data[arguments[0]][i] = arguments[1];
							console.log(equipment.command.generate());
							return;
						}
					}
				} else if(arguments[1].id != undefined){
					for(var i = 0;i<equipment.current.data[arguments[0]].length;i++){
						if(equipment.current.data[arguments[0]][i].id == arguments[1].id){
							equipment.current.data[arguments[0]][i] = arguments[1];
							console.log(equipment.command.generate());
							return;
						}
					}
				}else if(arguments[1].name != undefined){

					for(var i = 0;i<equipment.current.data[arguments[0]].length;i++){
						if(equipment.current.data[arguments[0]][i].name == arguments[1].name){
							equipment.current.data[arguments[0]][i] = arguments[1];
							console.log(equipment.command.generate());
							return;
						}
					}
				}else if(arguments[1].Name != undefined){
					
					for(var i = 0;i<equipment.current.data[arguments[0]].length;i++){
						if(equipment.current.data[arguments[0]][i].Name == arguments[1].Name){
							equipment.current.data[arguments[0]][i] = arguments[1];
							console.log(equipment.command.generate());
							return;
						}
					}
				}
			} else {
				for(var i = 0;i<equipment.current.data[arguments[0]].length;i++){
					if(equipment.current.data[arguments[0]][i] == arguments[1]){
						equipment.current.data[arguments[0]][i] = arguments[1];
						console.log(equipment.command.generate());
						return;
					}
				}
			}
			equipment.current.data[arguments[0]].push(arguments[1]);
		}
		console.log(equipment.command.generate());	
	},
	command : {
		//Generates the equipment command
		generate : function(){
			if(equipment.current.data.Count == undefined){
				quantity = 1;
			} else {
				quantity = equipment.current.data.Count;
			}
			var data = jQuery.extend(true, {}, equipment.current.data);
			delete data["damage"];
			delete data["id"];
			data = JSON.stringify(data);
			//The replace is for-> for Example : {CustomName : "Test"} instead of {"CustomName" : "Test"}
			data = data.replace(/\"([^(\")"]+)\":/g,"$1:");
			//The replace is for-> for Example : ShowParticles:1b instead of ShowParticles:"1b"
			data = data.replace(/\"1b\"/g,'1b').replace(/\"0b\"/g,'0b');
			//The replace is for-> for Example : Attributes:[{Name:zombie.spawnReinforcement}] instead of Attributes:[{Name:"zombie.spawnReinforcement"}]
			data = data.replace(/\"###/g,'').replace(/###\"/g,'');

			command = "/give @p minecraft:{0} {1} {2} {3}".format(equipment.current.itemData.text_type, quantity, equipment.current.itemData.meta, data);
			return command;
		},
	}
}