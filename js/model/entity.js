var entity = {
	x : "~",
	y : "~1",
	z : "~",
	UUID : 0,
	all : [],
	current : 0,
	spawnerSettings : {
		spawnCount : undefined,
		spawnRange : undefined,
		delay : undefined,
		minSpawnDelay : undefined,
		maxSpawnDelay : undefined,
		requiredPlayerRange : undefined,
	},
	obj :function(){
		
		this.name = undefined;
		this.data = {};
		//Not relevant for the generator itself
		//The entityData from ./data/entityData.js will be loaded in
		//So you can access for example the texture of the entity
		this.entityData = {};
		//Equipment object will be saved in here.
		this.Equipment = [{},{},{},{},{}];
	},
	create : function(){
		newEntity = new entity.obj();
		newEntity.id = entity.all.length;
		entity.all.push(newEntity);
		
		return newEntity;
	},
	delete : function(id){
		if(entity.all.length == 1){
			console.error("Can't delete last entity");
			return;
		}
		entity.all.splice(id, 1);
		adress.update()
		return;
	},
	change : function(id1, id2){
		ent1 = entity.all[id1];
		ent2 = entity.all[id2];
		entity.all[id1] = ent2;
		entity.all[id2] = ent1;
		adress.update()
		return;
	},
	copy : function(id){
		entity.all[entity.all.length] = jQuery.extend(true, {}, entity.all[id]);
		entity.all[entity.all.length-1].name = "Copy of {0}".format(entity.all[id].name);
		adress.update()
		return;
	},
	add : function(entityName){
		var queryResult = Enumerable.From(entityData)
		.Where(function (x) { return x.name == entityName})
		.Single()
		newEntity = entity.create();
		entityNameCounter = 0;
		for(var i = 0;i<entity.all.length;i++){
			if(entity.all[i].entityData.name == queryResult.name){
				entityNameCounter++;
			}
		}
		if(entityNameCounter == 0){
			newEntity.name = "{0}".format(queryResult.name);
		}else {
			newEntity.name = "{0} ({1})".format(queryResult.name, entityNameCounter);
		}
		
		newEntity.entityData = queryResult;
		newEntity.entityData.category.push(newEntity.name);
		ridingEntitySelection.update();
		adress.update();
		return newEntity;
	},
	
	save : function(){
		//entity.save(tagName, tagValue)
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
			entity.all[entity.current].data[arguments[0]] = arguments[1];
		} 
		else {
			console.error("Arguments error in entity.save()!");
		}
		adress.update();
		console.log(entity.command.generate());
	},
	saveToArray : function(){
		//entity.saveToArray(tagName, elmentOfArray, tagValue) 
		if(arguments.length == 3 && typeof arguments[0] == "string" && typeof arguments[1] == "number" && typeof arguments[2] == "string" ||  typeof arguments[2] == "float" || typeof arguments[2] == "number" || typeof arguments[2] == "object"){
			
			if(entity.all[entity.current].data[arguments[0]] == undefined){
				entity.all[entity.current].data[arguments[0]] = [];
			}
			entity.all[entity.current].data[arguments[0]][arguments[1]] = Float.TryParse(arguments[2]);
			if(typeof arguments[2] == "object"){
				//Tries to parse all the attributes of the object.
				for(var i = 0;i<getKeys(arguments[2]).length;i++){
					if(arguments[2][getKeys(arguments[2])[i]] != undefined){
						arguments[2][getKeys(arguments[2])[i]] = Float.TryParse(arguments[2][getKeys(arguments[2])[i]]);
					}
				}
				for(var i = 0;i<entity.all[entity.current].data[arguments[0]].length;i++){
					if(entity.all[entity.current].data[arguments[0]][i] == null || entity.all[entity.current].data[arguments[0]][i] == undefined){
						entity.all[entity.current].data[arguments[0]][i] = {};
					}
				}
			}
		}		
		//entity.saveToArray(tagName, tagValue) 
		else if(arguments.length == 2 && typeof arguments[0] == "string" && (typeof arguments[1] == "string" || typeof arguments[1] == "number" || typeof arguments[1] == "object")){
			if(entity.all[entity.current].data[arguments[0]] == undefined){
				entity.all[entity.current].data[arguments[0]] = [];
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
					for(var i = 0;i<entity.all[entity.current].data[arguments[0]].length;i++){
						if(entity.all[entity.current].data[arguments[0]][i].Id == arguments[1].Id){
							entity.all[entity.current].data[arguments[0]][i] = arguments[1];
							adress.update();
							console.log(entity.command.generate());
							return;
						}
					}
				} else if(arguments[1].id != undefined){
					for(var i = 0;i<entity.all[entity.current].data[arguments[0]].length;i++){
						if(entity.all[entity.current].data[arguments[0]][i].id == arguments[1].id){
							entity.all[entity.current].data[arguments[0]][i] = arguments[1];
							adress.update();
							console.log(entity.command.generate());
							return;
						}
					}
				}else if(arguments[1].name != undefined){

					for(var i = 0;i<entity.all[entity.current].data[arguments[0]].length;i++){
						if(entity.all[entity.current].data[arguments[0]][i].name == arguments[1].name){
							entity.all[entity.current].data[arguments[0]][i] = arguments[1];
							adress.update();
							console.log(entity.command.generate());
							return;
						}
					}
				}else if(arguments[1].Name != undefined){
					
					for(var i = 0;i<entity.all[entity.current].data[arguments[0]].length;i++){
						if(entity.all[entity.current].data[arguments[0]][i].Name == arguments[1].Name){
							entity.all[entity.current].data[arguments[0]][i] = arguments[1];
							adress.update();
							console.log(entity.command.generate());
							return;
						}
					}
				}
			} else {
				for(var i = 0;i<entity.all[entity.current].data[arguments[0]].length;i++){
					if(entity.all[entity.current].data[arguments[0]][i] == arguments[1]){
						entity.all[entity.current].data[arguments[0]][i] = arguments[1];
						adress.update();
						console.log(entity.command.generate());
						return;
					}
				}
			}
			entity.all[entity.current].data[arguments[0]].push(arguments[1]);
		}
		adress.update();
		console.log(entity.command.generate());
	},
	//Saves a equipment Object from equipment.js to an entity
	saveEquipment : function(eqObj, eqElementId, entityId){
		if(entityId == undefined){
			entityId = entity.current;
		}
		entity.all[entityId].Equipment[eqElementId] = eqObj;
		ridingEntitySelection.update();
		adress.update();
	},
	setCoordinates : function(x, y, z, absolute){
		if(!absolute){
			x = "~" + x;
			y = "~" + y;
			z = "~" + z;
		}
		entity.x = x;
		entity.y = y;
		entity.z = z;
	},
	setSpawnerSettings : function(obj){
		for(i=0;i<getKeys(obj).length;i++){
			if(isNull(obj[getKeys(obj)[i]])){
				delete obj[getKeys(obj)[i]];
			} else{
				entity.spawnerSettings[getKeys(obj)[i]] = obj[getKeys(obj)[i]];
			}
			
		}
	},
	//Saves the current entity into Cookie
	cookie : {
		save : function(){
			var data = {};

			data.all = entity.all;
			data.UUID = entity.UUID;
			data.x = entity.x;
			data.y = entity.y;
			data.z = entity.z;
			data.spawnerSettings = entity.spawnerSettings;

			var cookieEntities = entity.cookie.load();
			if(cookieEntities == null){
				cookieEntities = [];
			}
			if(data.UUID == 0){
				var queryResult = Enumerable.From(cookieEntities)
				    .OrderByDescending(function (x) { return x.UUID })
				    .FirstOrDefault();
				data.UUID = queryResult.UUID + 1;
			}
			if(data.all!= undefined){
				$.each(cookieEntities, function(index, value){
					if(index.UUID == data.UUID){
						cookieEntities.splice(value, 1);
					}
				});
				cookieEntities.push(data);
				cookieEntities = JSON.stringify(cookieEntities);
		    	createCookie("entities", cookieEntities, 20*365);
		    	navigation.load();
	    	}
		},
		load : function(){
			if(readCookie("entities") == null){
				return [];
			}else {
				ent = JSON.parse(readCookie("entities"));
				return ent;
			}
			
		},
	},
	Equipment : {
		delete : function(entityId, equipmentElement){
			entity.all[entityId].Equipment[equipmentElement] = {};


		}
	},
	command : {
		//Generates the final command
		generate : function(){
			for(var j = 0;j<entity.all.length;j++){
				delete entity.all[j].data["Riding"];
				delete entity.all[j].data["Id"];
				delete entity.all[j].data["EntityId"];
				delete entity.all[j].data["SpawnData"];
				
				

				//Check if has equipment
				//Is for cleaner code generation
				hasEquipment = false;
				for(var i = 0;i<entity.all[j].Equipment.length;i++){
					if(entity.all[j].Equipment[i].data != null){
						hasEquipment = true;
					}
				}
				//Adds equipment
				if(hasEquipment){
					entity.all[j].data["Equipment"] = [];
					for(var i = 0;i<entity.all[j].Equipment.length;i++){
						if(entity.all[j].Equipment[i].data == null){
							entity.all[j].data["Equipment"][i] = {};
						} else {
							entity.all[j].data["Equipment"][i] = entity.all[j].Equipment[i].data;
						}
					}
				}

				
			}
			command = "/summon {0} {1} {2} {3}".format(entity.all[0].name, entity.x, entity.y, entity.z); 
			finalData = entity.all[0].data;
			data = finalData;
			for(i=1;i<entity.all.length;i++){
				finalData["Riding"] = {};
				ridingObject = entity.all[i].data;
				ridingObject["id"] = entity.all[i].name;
				finalData["Riding"] = ridingObject;
				finalData = finalData.Riding;
			}
			
			//The IF is for Cleaner Code Generation (for ex. /summon Creeper ~ ~1 ~ instead of /summon Creeper ~ ~1 ~ {})
			if(!jQuery.isEmptyObject(data)){
				//The replace is for-> for Example : {CustomName : "Test"} instead of {"CustomName" : "Test"}
				command += " " + JSON.stringify(data).replace(/\"([^(\")"]+)\":/g,"$1:");
				//The replace is for-> for Example : ShowParticles:1b instead of ShowParticles:"1b"
				command = command.replace(/\"1b\"/g,'1b').replace(/\"0b\"/g,'0b');
				//The replace is for-> for Example : Attributes:[{Name:zombie.spawnReinforcement}] instead of Attributes:[{Name:"zombie.spawnReinforcement"}]
				command = command.replace(/\"###/g,'').replace(/###\"/g,'');
			}
			
			return command;
		},
		//Generates /setblock command for Spawners
		generateSpawner : function(){
			for(i=0;i<entity.all.length;i++){
				delete entity.all[i].data["Riding"];
				delete entity.all[i].data["Id"];
				delete entity.all[i].data["EntityId"];
				delete entity.all[i].data["SpawnData"];
			}
			command = "/setblock {0} {1} {2} minecraft:mob_spawner 0 replace ".format( entity.x, entity.y, entity.z); 
			data = entity.all[0].data;
			data["EntityId"] = entity.all[0].name;
			data["SpawnData"] = {};
			ridingData = data["SpawnData"];
			//Transfering the Attributes and data from entity.spawnerSettings to data
			for(i=0;i<getKeys(entity.spawnerSettings).length;i++){
				data[getKeys(entity.spawnerSettings)[i]] = entity.spawnerSettings[getKeys(entity.spawnerSettings)[i]];
			}
			//Adds all Riding object
			for(i=1;i<entity.all.length;i++){
				ridingData["Riding"] = {};
				ridingObject = entity.all[i].data;
				ridingObject["id"] = entity.all[i].name;
				ridingData["Riding"] = ridingObject;
				ridingData = ridingData.Riding;
			}
			//The replace is for-> for Example : {CustomName : "Test"} instead of {"CustomName" : "Test"}
			command += " " + JSON.stringify(data).replace(/\"([^(\")"]+)\":/g,"$1:");
			//The replace is for-> for Example : ShowParticles:1b instead of ShowParticles:"1b"
			command = command.replace(/\"1b\"/g,'1b').replace(/\"0b\"/g,'0b');
			//The replace is for-> for Example : Attributes:[{Name:zombie.spawnReinforcement}] instead of Attributes:[{Name:"zombie.spawnReinforcement"}]
			command = command.replace(/\"###/g,'').replace(/###\"/g,'');
			return command;
		}
	}
}
