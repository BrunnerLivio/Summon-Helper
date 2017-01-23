var main = {
    load: function (getParameters) {
        //Preload certain images
        if (websiteData.isServer) {
            for (var i = 0; i < entityData.length; i++) {
                imagePreloader.add("./images/entity/{0}".format(entityData[i].image));
            }
            for (var i = 0; i < itemData.length; i++) {
                imagePreloader.add("./images/items/{0}-{1}.png".format(itemData[i].type, itemData[i].meta));
            }
            imagePreloader.add("./images/design/blurriedHill.png");
            imagePreloader.load();
        }


        window.onbeforeunload = function() 
        {
            //entity.cookie.save();
        }



        //When you click history back or forward, it will load in the last changes
        window.onpopstate = function (e) {
            if (e.state) {
                entity.all = e.state;
                ridingEntitySelection.update();
                entityEditor.load(0);
            }
        };


        //Looks for GET-Paremeters and Loads in an entity
        if (getParameters.entityId != undefined) {
            if (Object.prototype.toString.call(getParameters.entityId) === '[object Array]') {
                //Multiple entityId's = Entity Riding
                newEntity = entity.obj;
                for (var i = 0; i < getParameters.entityId.length; i++) {
                    entity.add(getParameters.entityId[i]);
                }
            } else {
                //Single Entity
                entity.add(getParameters.entityId);
            }
            if(getParameters.equipmentId != undefined){
                    
                    if (Object.prototype.toString.call(getParameters.equipmentId) === '[object Array]') {
                        $(getParameters.equipmentId).each(function(index, element){
                            var eqInfo = element.split(';');
                            var equipData = Enumerable.From(itemData).Where(function(x){ return x.text_type == eqInfo[2] && x.meta == parseInt(eqInfo[3])}).Single();
                            var eq = equipment.create(equipData);
                            entity.saveEquipment(eq, parseInt(eqInfo[1]), eqInfo[0]);
                        });
                        
                    } else {
                        var eqInfo = getParameters.equipmentId.split(';');
                        var equipData = Enumerable.From(itemData).Where(function(x){ return x.text_type == eqInfo[2] && x.meta == parseInt(eqInfo[3])}).Single();
                        var eq = equipment.create(equipData);
                        entity.saveEquipment(eq, parseInt(eqInfo[1]), eqInfo[0]);
                    }
                }
        } else {
            console.error("Have not received any 'entityId' or 'latestEntity'-GET Parameter.");
            window.location = 'entitySelection.html';
        }
        entityEditor.load(entity.all[0]);



        //Open Extra Editor with the Summon Command
        $("#getSummon").click(function () {
            html = "";
            if (entity.command.generate().length > 100) {
                html += "<div class=\"note\">This command must be executed in an command block.</div>";
            }
            html += "<input type=\"text\" class=\"summonCommand\" OnClick=\"this.select()\" value='{0}'/>".format(entity.command.generate());
            entityEditor.extraEditor.toLoadingElement = html;
            entityEditor.extraEditor.open();
        });



        //Open Extra Editor where you can set Coordinates
        $("#setCoordinates").click(function () {
            html = "<h1>Coordinates</h1>";
            html += "<div><label for=\"relativeCoordinates\">Absolute:</label><input id=\"relativeCoordinates\" name=\"relativeCoordinates\" type=\"checkbox\" ";
            if (entity.x.indexOf("~") == -1) {
                html += "checked ";
            }
            html += "/></div>";
            html += "<div><label for=\"xCoor\">X:</label><input type=\"number\" id=\"xCoor\" ";
            html += "value=\"{0}\" ".format(entity.x.replace("~", ""));
            html += "/></div>";
            html += "<div><label for=\"yCoor\">Y:</label><input type=\"number\" id=\"yCoor\" value=\"{0}\"/></div>".format(entity.y.replace("~", ""));
            html += "<div><label for=\"zCoor\">Z:</label><input type=\"number\" id=\"zCoor\" value=\"{0}\"/></div>".format(entity.z.replace("~", ""));
            html += "<input type=\"submit\" value=\"Save\" OnClick=\"entity.setCoordinates($('#xCoor').val(), $('#yCoor').val(), $('#zCoor').val(), $('#relativeCoordinates').prop('checked'))\"/>";
            entityEditor.extraEditor.toLoadingElement = html;
            entityEditor.extraEditor.open();
        });


        //Open Extra Editor where you can set Spawner data and you get Spawner code
        $("#getSpawner").click(function () {
            html = "<h1>Spawner</h1>";
            html += "<div><label for=\"spawnCount\">Spawn Count:</label><input type=\"number\" id=\"spawnCount\" value=\"{0}\"/></div>".format(entity.spawnerSettings.spawnCount);
            html += "<div><label for=\"spawnRange\">Spawn Range:</label><input type=\"number\" id=\"spawnRange\" value=\"{0}\"/></div>".format(entity.spawnerSettings.spawnRange);
            html += "<div><label for=\"delay\">Delay:</label><input type=\"number\" id=\"delay\" value=\"{0}\"/></div>".format(entity.spawnerSettings.delay);
            html += "<div><label for=\"minSpawnDelay\">Min Spawn Delay:</label><input type=\"number\" id=\"minSpawnDelay\" value=\"{0}\"/></div>".format(entity.spawnerSettings.minSpawnDelay);
            html += "<div><label for=\"maxSpawnDelay\">Max Spawn Delay:</label><input type=\"number\" id=\"maxSpawnDelay\" value=\"{0}\"/></div>".format(entity.spawnerSettings.maxSpawnDelay);
            html += "<div><label for=\"requiredPlayerRange\">Required Player Range:</label><input type=\"number\" id=\"requiredPlayerRange\" value=\"{0}\"/></div>".format(entity.spawnerSettings.requiredPlayerRange);
            html += "<input type=\"submit\" value=\"Save\"  OnClick=\"entity.setSpawnerSettings({ spawnCount : parseInt($('#spawnCount').val()), spawnRange : parseInt($('#spawnRange').val()), delay : parseInt($('#delay').val()), minSpawnDelay : parseInt($('#minSpawnDelay').val()), maxSpawnDelay : parseInt($('#maxSpawnDelay').val()), requiredPlayerRange : parseInt($('#requiredPlayerRange').val()) });$('#spawnerCommand').val(entity.command.generateSpawner())\"/>";
            html += "<input type=\"text\" class=\"summonCommand\" id=\"spawnerCommand\" OnClick=\"this.select()\" value='{0}' />".format(entity.command.generateSpawner());
            entityEditor.extraEditor.toLoadingElement = html;
            entityEditor.extraEditor.open();
        });



        //Open Extra Editor where you can get Give Command of the current item
        $("#getGive").click(function(){
            html = "";
            if (equipment.command.generate().length > 100) {
                html += "<div class=\"note\">This command must be executed in an command block.</div>";
            }
            html += "<input type=\"text\" class=\"summonCommand\" OnClick=\"this.select()\" value='{0}'/>".format(equipment.command.generate());
            itemEditor.extraEditor.toLoadingElement = html;
            itemEditor.extraEditor.open();
        });
        console.log("%centityEditor.js loaded", "color: green;");
    },
    updateDesign: function () {


        $(".mainEditor").css({
            "width": $(".main").width() - ($(".ridingEntitySelection").width() * 2 + $(".ridingEntitySelection").offset().left + 100) + "px",
            "height": $(window).height() - $(".header").height() - 100 + "px"
        });
        
        if (!entityEditor.extraEditor.isActive) {
            $(".leftBorder").css({
                "width": "50px",
                "height": "100%",
                "float": "left",
                "clear": "none",
                "height": "100%"
            });
            $(".editor:not(.extraEditor)").css({
                "float": "left",
                "clear": "none",
                "width": "50px",
                "height": "100%"
            });
            $(".mainEditorActive .active:not(.extraEditor)").css({
                "width": $(".mainEditorActive").width() - 100 + "px",
            });
            $(".editor:not(.extraEditor) .content").css({
                "display": "block",
                "margin-left": $(".leftBorder").width() + 10 + "px",
                "margin-top": "10px",
                "width": $(".mainEditor .active").width() - ($(".leftBorder").width() + 10) + "px",
                "height": $(".mainEditor .active").height() - 20 + "px"
            });
        }
        $(".extraEditor").css({
            "width": $(".mainEditorActive").width() + "px",
            "height": $(".mainEditorActive").height() + "px"
        });
        $(".extraEditor .content").css({
            "display": "block",
            "margin-left": 10 + "px",
            "margin-top": $(".topBorder").height() + 10 + "px",
            "width": $(".extraEditor").width() - 10 + "px",
            "height": $(".extraEditor").height() - ($(".topBorder").height() + 15) + "px"
        });
    },
    onScroll: function (windowTop) {

    }
}




