$(document).ready(function () {
    //remaining jobs:
    //making .focuseout to text + edit btn + vice versa
    //minus btn after each element + code
    //print btn under each template - removing every input, textarea, svg with plus or minus in their id name
    //----------------------------------------------------------------
    //real codes
    $("#th1-btn").click(function () {
        $("#themetwo").hide();
        $("#themethree").hide();
        $("#themeone").show();
    });
    $("#th2-btn").click(function () {
        $("#themetwo").show();
        $("#themethree").hide();
        $("#themeone").hide();
    });
    $("#th3-btn").click(function () {
        $("#themetwo").hide();
        $("#themethree").show();
        $("#themeone").hide();
    });

    //theme 1 btns:
    //btn print:
    //........

    //Theme 1 btns:
    $("#t1-fname").focusout(function () {
        $("#t1-fullname").append(function () {
            var fn = $("#t1-fname").val();
            return "<h1>" + fn + "</h1>";
        });
        $("#t1-fname").hide();
        $("#t1-fname-edit").show();
    });
    $("#t1-fname-edit").click(function () {
        //$("#t1-fullname").children("h1").hide();
        $("h1:nth-child(3)").remove();
        $("#t1-fname").show();
    });
    $("#t1-moccup").focusout(function () {
        $("#t1-mainoccup").append(function () {
            var fn = $("#t1-moccup").val();
            return "<h5>" + fn + "</h5>";
        });
        $("#t1-moccup").hide();
        $("#t1-mainoccup-edit").show();
    });
    $("#t1-mainoccup-edit").click(function () {
        //$("#t1-fullname").children("h1").hide();
        $("h5:nth-child(3)").remove();
        $("#t1-moccup").show();
    });
    $("#t1-desc").focusout(function () {
        $("#t1-description").append(function () {
            var fn = $("#t1-desc").val();
            return "<h7>" + fn + "</h7>";
        });
        $("#t1-desc").hide();
        $("#t1-description-edit").show();
    });
    $("#t1-description-edit").click(function () {
        //$("#t1-fullname").children("h1").hide();
        $("h7:nth-child(3)").remove();
        $("#t1-desc").show();
    });
    $("#t1-email").focusout(function () {
        var fn = $("#t1-email").val();
        $("#t1-email-span").text(fn);
        $("#t1-email").hide();
        $("#t1-email-edit").show();
    });
    $("#t1-email-edit").click(function () {
        var fn = "";
        //$("#t1-fullname").children("h1").hide();
        $("#t1-email-span").text(fn);
        $("#t1-email").show();
    });
    $("#t1-phone").focusout(function () {
        var fn = $("#t1-phone").val();
        $("#t1-phone-span").text(fn);
        $("#t1-phone").hide();
        $("#t1-phone-edit").show();
    });
    $("#t1-phone-edit").click(function () {
        var fn = "";
        //$("#t1-fullname").children("h1").hide();
        $("#t1-phone-span").text(fn);
        $("#t1-phone").show();
    });
    $("#t1-addr").focusout(function () {
        var fn = $("#t1-addr").val();
        $("#t1-addr-span").text(fn);
        $("#t1-addr").hide();
        $("#t1-addr-edit").show();
    });
    $("#t1-addr-edit").click(function () {
        var fn = "";
        //$("#t1-fullname").children("h1").hide();
        $("#t1-addr-span").text(fn);
        $("#t1-addr").show();
    });
    $("#t1-webaddress").focusout(function () {
        var fn = $("#t1-webaddress").val();
        $("#t1-webaddr-span").text(fn);
        $("#t1-webaddress").hide();
        $("#t1-webaddr-edit").show();
    });
    $("#t1-webaddr-edit").click(function () {
        var fn = "";
        //$("#t1-fullname").children("h1").hide();
        $("#t1-webaddr-span").text(fn);
        $("#t1-webaddress").show();
    });
    $("#t1-fb").focusout(function () {
        var fn = $("#t1-fb").val();
        $("#t1-fbacc-span").text(fn);
        $("#t1-fb").hide();
        $("#t1-fbacc-edit").show();
    });
    $("#t1-fbacc-edit").click(function () {
        var fn = "";
        //$("#t1-fullname").children("h1").hide();
        $("#t1-fbacc-span").text(fn);
        $("#t1-fb").show();
    });

    $("#t1-plusjb").click(function () {
        $("#t1-jobitem").append(function () {
            var t1jbt = $("#t1-jbt").val();
            var t1compName = $("#t1-compName").val();
            var t1jbdtfrom = $("#t1-jbdtfrom").val();
            var t1jbdtto = $("#t1-jbdtto").val();
            var t1jbdesc = $("#t1-jbdesc").val();
            return "<div><h5 class=\"jobtitle\">" + t1jbt + "</h5>" + "<h5 style=\"font-weight: 400;\">" + t1compName + "</h5>" + "<p> <span class=\"dateTime\">" + t1jbdtfrom + " - " + t1jbdtto + "</span>" + "<br>" + t1jbdesc + "</p><svg class=\"minus\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z\"/></svg></div>" + "<script>" + "$(\".minus\").click(function(){$(this).parent().remove();});" + "<\/script>";
        });
        $(':nth-child(5)', "#t1-jobitem").hide();
    });

    $("#t1-plusedu").click(function () {
        $("#t1-eduitem").append(function () {
            var t1edutlt = $("#t1-edutlt").val();
            var t1UniName = $("#t1-UniName").val();
            var t1edufrom = $("#t1-edufrom").val();
            var t1eduto = $("#t1-eduto").val();
            return "<div><h5 class=\"jobtitle\">" + t1edutlt + "</h5>" + "<h5 style=\"font-weight: 400;\">" + t1UniName + "</h5>" + "<p> <span class=\"dateTime\">" + t1edufrom + " - " + t1eduto + "</span></p><svg class=\"minus\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z\"/></svg></div>" + "<script>" + "$(\".minus\").click(function(){$(this).parent().remove();});" + "<\/script>";
        });
        $(':nth-child(5)', "#t1-eduitem").hide();
    });

    $("#t1-plusproj").click(function () {
        $("#t1-projitem").append(function () {
            var t1projtlt = $("#t1-projtlt").val();
            var t1projdesc = $("#t1-projdesc").val();
            return "<div><h5 style=\"font-weight: 400;\">" + t1projtlt + "</h5>" + "<p>" + t1projdesc + "</p><svg class=\"minus\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z\"/></svg></div>" + "<script>" + "$(\".minus\").click(function(){$(this).parent().remove();});" + "<\/script>";
        });
        $(':nth-child(5)', "#t1-projitem").hide();
    });

    $("#t1-plusskill").click(function () {
        $("#t1-skillitem").append(function () {
            var t1skilltlt = $("#t1-skilltlt").val();
            var t1skillprof = $("#t1-skillprof").val();
            return "<div><div class=\"row\"> <div class=\"col-md-6\"> <div class=\"mb-4\">" + t1skilltlt + "</div> </div> <div class=\"col-md-6\"> <span>" + t1skillprof + "</span> </div> </div><svg class=\"minus\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z\"/></svg></div>" + "<script>" + "$(\".minus\").click(function(){$(this).parent().remove();});" + "<\/script>";
        });
        $(':nth-child(5)', "#t1-skillitem").hide();
    });

    $("#t1-plustechskill").click(function () {
        $("#t1-techskillitem").append(function () {
            var t1techskillt = $("#t1-techskillt").val();
            return "<div><h6 class=\"techskilltitle\">" + t1techskillt + "</h6><svg class=\"minus\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z\"/></svg></div>" + "<script>" + "$(\".minus\").click(function(){$(this).parent().remove();});" + "<\/script>";
        });
        $(':nth-child(5)', "#t1-techskillitem").hide();
    });

    $("#t1-pluslang").click(function () {
        $("#t1-langitem").append(function () {
            var t1langt = $("#t1-langt").val();
            var langprof = $("#t1-langprof").val();
            return "<div><div class=\"row\"> <div class=\"col-md-6\"> <div class=\"mb-4\">" + t1langt + "</div> </div> <div class=\"col-md-6\"> <span>" + langprof + "</span> </div> </div><svg class=\"minus\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z\"/></svg></div>" + "<script>" + "$(\".minus\").click(function(){$(this).parent().remove();});" + "<\/script>";
        });
        $(':nth-child(5)', "#t1-langitem").hide();
    });

    $("#t1-plusiter").click(function () {
        $("#t1-interitems").append(function () {
            var t1intert = $("#t1-intert").val();
            return "<div><div><div type=\"button\" class=\"btn btn-outline-secondary interests\">" + t1intert + "</div></div></div>" + "<script>" + "$(\".interests\").click(function(){$(this).parent().remove();});" + "<\/script>";
        });
        $(':nth-child(5)', "#t1-interitems").hide();
    });

    // Theme 2 btns:
    $("#t2-fname").focusout(function () {
        $("#t2-fullname").append(function () {
            var fn = $("#t2-fname").val();
            return "<h2>" + fn + "</h2>";
        });
        $("#t2-fname").hide();
        $("#t2-fname-edit").show();
    });
    $("#t2-fname-edit").click(function () {
        //$("#t1-fullname").children("h1").hide();
        $("h2:nth-child(3)").remove();
        $("#t2-fname").show();
    });

    $("#t2-moccup").focusout(function () {
        $("#t2-mainoccup").append(function () {
            var fn = $("#t2-moccup").val();
            return "<h5>" + fn + "</h5>";
        });
        $("#t2-moccup").hide();
        $("#t2-mainoccup-edit").show();
    });
    $("#t2-mainoccup-edit").click(function () {
        //$("#t1-fullname").children("h1").hide();
        $("h5:nth-child(3)").remove();
        $("#t2-moccup").show();
    });

    $("#t2-email").focusout(function () {
        var fn = $("#t2-email").val();
        $("#t2-email-span").text(fn);
        $("#t2-email").hide();
        $("#t2-email-edit").show();
    });
    $("#t2-email-edit").click(function () {
        var fn = "";
        //$("#t1-fullname").children("h1").hide();
        $("#t2-email-span").text(fn);
        $("#t2-email").show();
    });

    $("#t2-phone").focusout(function () {
        var fn = $("#t2-phone").val();
        $("#t2-phone-span").text(fn);
        $("#t2-phone").hide();
        $("#t2-phone-edit").show();
    });
    $("#t2-phone-edit").click(function () {
        var fn = "";
        //$("#t1-fullname").children("h1").hide();
        $("#t2-phone-span").text(fn);
        $("#t2-phone").show();
    });

    $("#t2-Addr").focusout(function () {
        var fn = $("#t2-Addr").val();
        $("#t2-addr-span").text(fn);
        $("#t2-Addr").hide();
        $("#t2-addr-edit").show();
    });
    $("#t2-addr-edit").click(function () {
        var fn = "";
        //$("#t1-fullname").children("h1").hide();
        $("#t2-addr-span").text(fn);
        $("#t2-Addr").show();
    });

    $("#t2-fb").focusout(function () {
        var fn = $("#t2-fb").val();
        $("#t2-fbacc-span").text(fn);
        $("#t2-fb").hide();
        $("#t2-fbacc-edit").show();
    });
    $("#t2-fbacc-edit").click(function () {
        var fn = "";
        //$("#t1-fullname").children("h1").hide();
        $("#t2-fbacc-span").text(fn);
        $("#t2-fb").show();
    });

    $("#t2-plusskill").click(function () {
        $("#t2-skillitem").append(function () {
            var t2skill = $("#t2-skill").val();
            return "<div><p class=\"t2-skill-i\">" + t2skill + "</p></div>" + "<script>" + "$(\".t2-skill-i\").click(function(){$(this).parent().remove();});" + "<\/script>";
        });
        $(':nth-child(5)', "#t2-skillitem").hide();
    });

    $("#t2-plusedu").click(function () {
        $("#t2-eduitem").append(function () {
            var t2edutlt = $("#t2-edutlt").val();
            var t2Unitlt = $("#t2-Unitlt").val();
            var t2edudate = $("#t2-edudate").val();
            return "<div><h6 class=\"jobtitle\" style=\"text-transform: uppercase;\">" + t2edutlt + "</h6> <p>" + t2Unitlt + "<br>" + t2edudate + "</p><svg class=\"minus\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z\"/></svg></div>" + "<script>" + "$(\".minus\").click(function(){$(this).parent().remove();});" + "<\/script>";
        });
        $(':nth-child(5)', "#t2-eduitem").hide();
    });

    $("#t2-plusinter").click(function () {
        $("#t2-intertitles").append(function () {
            var t2interitem = $("#t2-interitem").val();
            return "<div><div class=\"btn btn-outline-dark t2-inter-i\">" + t2interitem + "</div></div>" + "<script>" + "$(\".t2-inter-i\").click(function(){$(this).parent().remove();});" + "<\/script>";
        });
        $(':nth-child(5)', "#t2-intertitles").hide();
    });

    $("#t2-resumeobjective").focusout(function () {
        $("#t2-resumeobj").append(function () {
            var fn = $("#t2-resumeobjective").val();
            return "<h7>" + fn + "</h7>";
        });
        $("#t2-resumeobjective").hide();
        $("#t2-resumeobj-edit").show();
    });
    $("#t2-resumeobj-edit").click(function () {
        $("h7:nth-child(3)").remove();
        $("#t2-resumeobjective").show();
    });
    /*$("#t2-plusresobj").click(function () {
        $("#t2-resumeobj").append(function () {
            var t2resumeobjective = $("#t2-resumeobjective").val();
            return "<p>" + t2resumeobjective + "</p>";
        });
    });*/

    $("#t2-plusworkexp").click(function () {
        $("#t2-workexp").append(function () {
            var t2workexptitle = $("#t2-workexptitle").val();
            var t2compName = $("#t2-compName").val();
            var t2workdatefrom = $("#t2-workdatefrom").val();
            var t2workdateto = $("#t2-workdateto").val();
            var t2workdesc = $("#t2-workdesc").val();
            return "<div><h5 class=\"jobtitle\">" + t2workexptitle + "</h5> <h5 style=\"font-weight: 400; font-style: italic;\">" + t2compName + " / " + t2workdatefrom + " - " + t2workdateto + "</h5> <p>" + t2workdesc + "</p><svg class=\"minus\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z\"/></svg></div>" + "<script>" + "$(\".minus\").click(function(){$(this).parent().remove();});" + "<\/script>";
        });
        $(':nth-child(5)', "#t2-workexp").hide();
    });

    //Theme 3 btns:
    $("#t3-profiletext").focusout(function () {
        $("#t3-profile").append(function () {
            var fn = $("#t3-profiletext").val();
            return "<h7>" + fn + "</h7>";
        });
        $("#t3-profiletext").hide();
        $("#t3-profile-edit").show();
    });
    $("#t3-profile-edit").click(function () {
        $("h7:nth-child(3)").remove();
        $("#t3-profiletext").show();
    });

    $("#t3-Occuptlt").focusout(function () {
        var fn = $("#t3-Occuptlt").val();
        $("#t3-mainoccup-span").text(fn);
        $("#t3-Occuptlt").hide();
        $("#t3-mainoccup-edit").show();
    });
    $("#t3-mainoccup-edit").click(function () {
        var fn = "";
        //$("#t1-fullname").children("h1").hide();
        $("#t3-mainoccup-span").text(fn);
        $("#t3-Occuptlt").show();
    });

    $("#t3-fname").focusout(function () {
        var fn = $("#t3-fname").val();
        $("#t3-fname-span").text(fn);
        $("#t3-fname").hide();
        $("#t3-fname-edit").show();
    });
    $("#t3-fname-edit").click(function () {
        var fn = "";
        //$("#t1-fullname").children("h1").hide();
        $("#t3-fname-span").text(fn);
        $("#t3-fname").show();
    });

    $("#t3-Addr").focusout(function () {
        var fn = $("#t3-Addr").val();
        $("#t3-addr-span").text(fn);
        $("#t3-Addr").hide();
        $("#t3-addr-edit").show();
    });
    $("#t3-addr-edit").click(function () {
        var fn = "";
        //$("#t1-fullname").children("h1").hide();
        $("#t3-addr-span").text(fn);
        $("#t3-Addr").show();
    });

    $("#t3-phone").focusout(function () {
        var fn = $("#t3-phone").val();
        $("#t3-phone-span").text(fn);
        $("#t3-phone").hide();
        $("#t3-phone-edit").show();
    });
    $("#t3-phone-edit").click(function () {
        var fn = "";
        //$("#t1-fullname").children("h1").hide();
        $("#t3-phone-span").text(fn);
        $("#t3-phone").show();
    });

    $("#t3-email").focusout(function () {
        var fn = $("#t3-email").val();
        $("#t3-email-span").text(fn);
        $("#t3-email").hide();
        $("#t3-email-edit").show();
    });
    $("#t3-email-edit").click(function () {
        var fn = "";
        //$("#t1-fullname").children("h1").hide();
        $("#t3-email-span").text(fn);
        $("#t3-email").show();
    });

    $("#t3-fb").focusout(function () {
        var fn = $("#t3-fb").val();
        $("#t3-fbacc-span").text(fn);
        $("#t3-fb").hide();
        $("#t3-fbacc-edit").show();
    });
    $("#t3-fbacc-edit").click(function () {
        var fn = "";
        //$("#t1-fullname").children("h1").hide();
        $("#t3-fbacc-span").text(fn);
        $("#t3-fb").show();
    });

    $("#t3-plusexp").click(function () {
        $("#t3-skillitems").append(function () {
            var t3skilltlt = $("#t3-skilltlt").val();
            var skillexpertis = $("#t3-skillexpertis").val();
            return "<div><div id=\"t3-skillitems\"> <div class=\"row\"> <div class=\"col-md-6\"> <div class=\"mb-4\">" + t3skilltlt + "</div> </div> <div class=\"col-md-6\"> <span>" + skillexpertis + "</span> </div> </div><svg class=\"minus\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z\"/></svg></div>" + "<script>" + "$(\".minus\").click(function(){$(this).parent().remove();});" + "<\/script>";
        });
        $(':nth-child(5)', "#t3-skillitems").hide();
    });

    $("#t3-plusedu").click(function () {
        $("#t3-eduitems").append(function () {
            var t3edutlt = $("#t3-edutlt").val();
            var t3UniCol = $("#t3-UniCol").val();
            var t3edudate = $("#t3-edudate").val();
            return "<div><p> <span style=\"font-weight: 600;\">" + t3edutlt + "/span><br> <span style=\"color: white; text-transform: uppercase;\">" + t3UniCol + "</span>" + t3edudate + "<br> </p><svg class=\"minus\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z\"/></svg></div>" + "<script>" + "$(\".minus\").click(function(){$(this).parent().remove();});" + "<\/script>";
        });
        $(':nth-child(5)', "#t3-eduitems").hide();
    });

    $("#t3-plusworkexp").click(function () {
        $("#t3-workexpitems").append(function () {
            var t3jbtlt = $("#t3-jbtlt").val();
            var t3compName = $("#t3-compName").val();
            var t3workdate = $("#t3-workdate").val();
            var t3workdesc = $("#t3-workdesc").val();
            return "<div><p class=\"card-text\"><span style=\"text-transform: uppercase; font-weight: 550;\">" + t3jbtlt + "</span> - " + t3compName + " - " + t3workdate + "<br>" + t3workdesc + "</p><svg class=\"minus\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z\"/></svg></div>" + "<script>" + "$(\".minus\").click(function(){$(this).parent().remove();});" + "<\/script>";
        });
        $(':nth-child(5)', "#t3-workexpitems").hide();
    });

    $("#t3-plusinter").click(function () {
        $("#t3-interitems").append(function () {
            var t3intertlt = $("#t3-intertlt").val();
            return "<div><div type=\"button\" class=\"btn btn-outline-secondary interests\">" + t3intertlt + "</div></div>" + "<script>" + "$(\".interests\").click(function(){$(this).parent().remove();});" + "<\/script>";
        });
        $(':nth-child(5)', "#t3-interitems").hide();
    });

    //print btns:

    $("#t1-print").click(function () {
        //removing every input, textarea, svg with plus or minus in their id name
        $("input").hide();
        $("textarea").hide();
        $(".plus").hide();
        $("#navbarHeader").hide();
        $("#footer-bar").hide();
        $("#themebtn").hide();
        $(".navbar-toggler").hide();
        $(this).hide();
        window.print();
    });
    $("#t2-print").click(function () {
        //removing every input, textarea, svg with plus or minus in their id name
    });
    $("#t3-print").click(function () {
        //removing every input, textarea, svg with plus or minus in their id name
    });

});
