var _isLoggedIn=false;function ShowLogged(){var a=$get("header_membership");a.innerHTML="";www.rferl.org.Services.MembershipService.GetDisplayName(ShowLoggedCallback,ErrorCallbackAuth)}function ShowLoggedCallback(a){var b=$get("header_membership");if(a.length>0){b.innerHTML=a}}function ErrorCallbackAuth(a){}function showMembershipBar(){if($get("liMembershipUserName")){www.rferl.org.Services.MembershipService.GetCurrentUserName(function a(b){if(b){$("#ulMembershipBar li").css("display","none");$("#liMembershipUserName span:first").text(b);$("#liMembershipUserName").css("display","inline");$(".article_comments .onlyregisteredAuth").css("display","block");$(".header_searchform_submit").css("display","inline");$(".header_mobile").css("display","inline");_isLoggedIn=true}else{$("#ulMembershipBar li").css("display","inline");$("#liMembershipUserName").css("display","none");_isLoggedIn=false}},ErrorCallbackAuth)}}function RateComment(b,a,e){var d=document.getElementById("rate"+b);var c=function(f,g){if(f!=null&&f.length==3){if(f[0]=="none"){window.location="/login.aspx"}else{var i=document.getElementById("rate"+g);if(i!=null){i.className="ratediv"}if(f[0]=="stay"){if(f[2]!=="notsigned"){var l=$(e).offset();var k=smallMessageBox({html:f[2]});k.css("top",l.top).css("left",l.left-k.outerWidth(true))}else{$.fancybox({hideOnContentClick:false,type:"iframe",titleShow:false,transitionIn:"elastic",transitionOut:"elastic",speedIn:600,speedOut:200,width:800,height:600,padding:0,margin:0,onComplete:iframeFancyboxOpened,onClosed:iframeFancyboxClosed,href:"/login.html"})}}if(f[0]=="plus"){var h=document.getElementById("rateplus"+g);if(h!=null){h.className=h.className.replace("rate","voted");h.innerHTML=f[1]}}if(f[0]=="minus"){var j=document.getElementById("rateminus"+g);if(j!=null){j.className=j.className.replace("rate","voted");j.innerHTML=f[1]}}}}};if(d!=null){d.className="item_hide"}www.rferl.org.Services.MembershipService.RateComment(b,a,c,ErrorCallbackAuth,b)}if(typeof(Sys)!=="undefined"){Sys.Application.notifyScriptLoaded()};;