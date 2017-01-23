var main = {
	load : function(getParameters){
		navigation.setActive("index.html");
        loader.off();

        if(!websiteData.isServer){
            $("#download").remove();
            $("#suggestion").remove();
        } 

        //----------------------
        //--Loads Changelog in--
        //----------------------
        changelogText = "<div class=\"wrapper\">";
        for(var i = 0;i<changelog.length;i++){
            changelogText += "<div class=\"col3\">";
            changelogText += "<div style=\"float:left;\"><strong>Version {0} {1}</strong></div><br />".format(changelog[i].prefix, changelog[i].version);
            for(var j = 0;j<changelog[i].added.length;j++)
                changelogText += "<br /><div style=\"margin:auto;width:auto;\"><span style=\"float:left;\"><div style=\"float:left;\" icon=\"changelog_added\"></div>{0}</span></div>".format(changelog[i].added[j]);
            for(var j = 0;j<changelog[i].fixed.length;j++)
                changelogText += "<br /><div style=\"margin:auto;width:auto;\"><span style=\"float:left;\"><div style=\"float:left;\" icon=\"changelog_fixed\"></div>{0}</span></div>".format(changelog[i].fixed[j]);
            for(var j = 0;j<changelog[i].changed.length;j++)
                changelogText += "<br /><div style=\"margin:auto;width:auto;\"><span style=\"float:left;\"><div style=\"float:left;\" icon=\"changelog_changed\"></div>{0}</span></div>".format(changelog[i].changed[j]);
            for(var j = 0;j<changelog[i].info.length;j++)
                changelogText += "<br /><div style=\"margin:auto;width:auto;\"><span style=\"float:left;\"><div style=\"float:left;\" icon=\"changelog_info\"></div>{0}</span></div>".format(changelog[i].info[j]);
            changelogText += "<br /><br />";
            changelogText += "</div>";
        }
        changelogText += "</div>";
        $("#changelog .changeList").append(changelogText);


        //----------------------
        //--Handles Contact me--
        //----------------------
        user = {};
        $(".radio").hover(function(){
            $(this).find(".radio-button").append("<div class=\"radio-button-active\"></div>");
        }, function(){
            $(this).find(".radio-button").find(".radio-button-active").remove();
        });
        $(".radio").click(function(){
            user.type = $(this).find(".radio_text").text();
            $("#radio-select").slideUp("slow");
            $("#name").fadeIn("slow");
        });
        $(".contact-name, .contact-text").keyup(function(){
            if($(this).val() != ""){
                $(".contact-ok").fadeIn(0);
            } else{
                $(".contact-ok").fadeOut(0);
            }
        });
        $("#contact-name-ok").click(function(){
            $(".contact-ok").fadeOut(0);
            if($("#contact-name").val() != ""){
                user.name = $("#contact-name").val();
                $("#name").slideUp();
                $("#text").fadeIn("slow");
            } 
            
        });
        $("#contact-text-ok").click(function(){
            $(".contact-ok").fadeOut(0);
            if($("#contact-text").val() != ""){
                $("#text .error").remove();
                user.text = $("#contact-text").val();
                $("#text").slideUp();
                $("#email").fadeIn("slow");
            }
            
        });
        $("#contact-email-ok").click(function(){
            $(".contact-ok").fadeOut(0);
            if($("#contact-email").val() != "" && validateEmail($("#contact-email").val())){
                $("#email .error").remove();
                user.email = $("#contact-email").val();
                $("#email").slideUp();
                $("#thanks").fadeIn("slow");
                console.log(user);
                $.post("sendEmail.php", {user : JSON.stringify(user)}, function(data){
                    console.log(data);
                });
            } else {
                $("#email").prepend('<div class=\"error\">You must write a valid email</div>');
            }
        });


		console.log("%cindex.js loaded", "color: green;");
	},
	updateDesign : function(){
		frame.updateDesign();
        if(websiteData.isMobile){
            $(".hr").css({
                "margin-left" : "0px",
                "width" : "100%"
                
            });
            $(".frame h1, .frame h2").css({
                "width" : "100%"
            });
            $(".modernButton").css({
                "top" : "75%",
                "height" : "20px",
                "font-size" : "20px",
                "width" : "100px",
                "margin-left" : "-70px",
            });
            $(".fancyTitle").css({
                "font-size" : "30px",
            });
            $(".fancyUndertitle").css({
                "font-size" : "20px",
            });
        } else {
             $(".hr").css({
                "width" : "80%",
                "margin-left" : "10%"
            });
            $(".frame h1, .frame h2").css({
                "width" : "80%"
            });
            $(".modernButton").css({
                "top" : "50%",
                "font-size" : "30px",
                "height" : "40px",
                "width" : "300px",
                "margin-left" : "-170px",
            });
            $(".fancyTitle").css({
                "font-size" : "80px",
            });
            $(".fancyUndertitle").css({
                "font-size" : "30px",
            });
        }
	},
    onScroll : function(windowTop){
        $(".headline-bottom, .headline-top").css({
            "width" : 400 - (windowTop  / $(window).height() * 300)  + "px"
        })
        if(!websiteData.isMobile){
            if($("#header").height()-400 < windowTop){
                $("#header").children().fadeOut();
             } else {
                $("#header").children().fadeIn();
             }
        }
         
        if($("#header").height() < windowTop){
            $("#header").css({
                "display" : "none"
            });
            $(".menu").css({
                "display" : "none"
            });
        } else {
             $("#header").css({
                "display" : "inline"
            });
            $(".menu").css({
                "display" : "inline"
            });
        }
    }
	
}
frame = {
    updateDesign: function () {
       
        if(websiteData.isMobile){
            $("#header").css({
                "min-height": $(window).height() / 2 + "px",
            });
            $(".frame:nth-child(2)").css({
                "margin-top" : $(window).height() / 2 + "px",
            });
        }else{
            $("#header").css({
                "min-height": $(window).height() + "px",
            });
            $(".frame:nth-child(2)").css({
                "margin-top" : $(window).height() + "px",
            });
        }
       $("#background").css({
        "min-height" : $(window).height() / 1.5 + "px"
       })
        
    },
    current: function () {

        $(".frame").each(function (index, element) {
            if (index < $(".frame").length)
                if ($(element).position().top <= $(window).scrollTop() && ($(element).position().top + $(element).height()) > $(window).scrollTop())
                    window.cur = $(this);

        });

        return window.cur;
    }
}
