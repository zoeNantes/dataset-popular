Type.registerNamespace("RFERL.js.custom");RFERL.js.custom.MultimediaWidget=function(a){RFERL.js.custom.MultimediaWidget.initializeBase(this);this._MediaPlayerURL=a.MediaPlayerURL;this._PhotoGalleryPlayerURL=a.PhotoGalleryPlayerURL;this._LTRorRTL=a.LTRorRTL;this.scrollTimer;this.scrollStep;this.videoH=a.videoH;this.videoW=a.videoW;this.photogalH=a.photogalH;this.photogalW=a.photogalW;this.soundslideW=a.soundslideW;this.soundslideH=a.soundslideH;this.oneColW=a.oneColW;this.oneColH=a.oneColH;this.OSSModal;this.SSPopupHtml};RFERL.js.custom.MultimediaWidget.prototype={loadItem:function(mediaIdOrPlaceholderUrl,mediaType,placeholderImg,elementReference,WidgetInstanceId,ArticleId){var Owidget=this.selectOwidget(elementReference,WidgetInstanceId),flId="Flash_"+Owidget.attr("id"),oPlaceholder=$(".mmw_youtube_placeholder",Owidget),ytPlayer=window._mmwYTAPIPlayers?window._mmwYTAPIPlayers[flId.replace("Flash_mmw_","")]:null,oIfrPlaceholder=$("#ifr_YT_"+Owidget.attr("id"),oPlaceholder);if(mediaType==="Video"){var flPath=String.format("/GetFlashXml.aspx?param={1}|user|{0}",mediaType,mediaIdOrPlaceholderUrl),flashvars={configFilePath:encodeURIComponent(flPath),defvolume:getVolume(),brand:window.Settings.Video.FlashPlayerBranding},params={wmode:"transparent",allowFullScreen:"true"},attributes={id:flId,name:mediaType+"Player"},w,h;$(".mmw_ssph, .mmw_youtube_placeholder, .mmw_htmlPhotogallery_placeholder",Owidget).hide();oIfrPlaceholder.attr("src","");$("#"+flId).show();if(Owidget.hasClass("mmw_one_column")){w=this.oneColW;h=this.oneColH}else{w=mediaType=="Video"?this.videoW:this.photogalW;h=mediaType=="Video"?this.videoH:this.photogalH}swfobject.embedSWF(mediaType=="Video"?this._MediaPlayerURL+"?cache=":this._PhotoGalleryPlayerURL,flId,w,h,"10.0.0","/flash/expressInstall.swf",flashvars,params,attributes)}else{if(mediaType==="Photogallery"){$("#"+flId+", .mmw_ssph, .mmw_youtube_placeholder",Owidget).hide()}else{if(mediaType==="Soundslide"||(mediaType==="Placeholder"&&mediaIdOrPlaceholderUrl.indexOf("youtube.com/embed")===-1)){var Ossph=$(".mmw_ssph",Owidget),i=$(".mmw_ssph_i",Ossph),oOver=$(".mmw_ssph_over",Ossph);if((isIE6||isIE7)&&!i.data("events")){i.bind("load",function(){oOver.css("width",i.width()+"px")})}$("#"+flId+", .mmw_youtube_placeholder, .mmw_htmlPhotogallery_placeholder",Owidget).hide();oIfrPlaceholder.attr("src","");Ossph.show();$("#"+flId).replaceWith("<div id='"+flId+"'/>");placeholderImg&&i.attr("src",placeholderImg);Ossph.data("flashurl",mediaType==="Soundslide"?mediaIdOrPlaceholderUrl:null);Ossph.attr("href",mediaType==="Soundslide"||mediaIdOrPlaceholderUrl===""?"javascript:void(0)":mediaIdOrPlaceholderUrl);if(mediaType==="Soundslide"){oOver.show()}else{oOver.hide()}}else{if(mediaType==="Placeholder"&&mediaIdOrPlaceholderUrl.indexOf("youtube.com/embed")!==-1){$("#"+flId+", .mmw_ssph, .mmw_htmlPhotogallery_placeholder",Owidget).hide();$("#"+flId).replaceWith("<div id='"+flId+"'/>");oPlaceholder.show();oIfrPlaceholder.attr("src")!==mediaIdOrPlaceholderUrl&&$("iframe",oPlaceholder).attr("src",mediaIdOrPlaceholderUrl)}else{$("#"+flId).hide()}}}}if(ArticleId){var _this=this;var w=Owidget.hasClass("mmw_one_column")?this.oneColW:this.photogalW;www.rferl.org.Services.MediaWidgetService.GetMediaDescription(ArticleId,Owidget.hasClass("mmw_one_column")?this.oneColW:this.photogalW,Owidget.hasClass("mmw_one_column")?this.oneColH:this.photogalH,function(res){var JsonRes=eval("("+res+")");_this.showDesc(JsonRes.MediaDescription,Owidget);if(JsonRes.PhotogalleryJs){$(".htmlPhgFullScreen").remove();$(".mmw_htmlPhotogallery_placeholder",Owidget).show().empty().append(JsonRes.PhotogalleryJs)}},function(){})}if(elementReference){$(".mmw_th_selected",Owidget).removeClass("mmw_th_selected");$(elementReference).addClass("mmw_th_selected")}},showDesc:function(b,a){$(".mmw_nowplaying_description",a).html(b)},scroll:function(d,c){var g=this;var a=this.selectOwidget(d);var e=$(".mmw_thumbnails",a);var f=e.width();var b=$(".mmw_thumbnails_container",a).width();this.setScrollStep(5);if(f>b){this.scrollTimer=window.setInterval(function(){c=="back"?g.scrollB(e,f,b):g.scrollF(e,f,b)},10)}},scrollF:function(b,c,a){this.doScroll(b,Math.max(parseInt(b.css(this._LTRorRTL=="rtl"?"margin-right":"margin-left"))-this.scrollStep,-c+a))},scrollB:function(b,c,a){this.doScroll(b,Math.min(parseInt(b.css(this._LTRorRTL=="rtl"?"margin-right":"margin-left"))+this.scrollStep,0))},doScroll:function(b,a){b.css(this._LTRorRTL=="rtl"?"margin-right":"margin-left",a+"px")},stopScroll:function(){window.clearInterval(this.scrollTimer)},selectOwidget:function(a,b){return a?$(a).parents(".multimedia_widget"):$(String.format("#mmw_{0}",b))},showSoundSlide:function(e){var b=this.selectOwidget(e),a="SFlash_soundslide_modal",f={bgcolor:"#000000"},d={id:a,name:"SoundSlide"},c=$(e).data("flashurl");if(c){if(!this.OSSModal){this.OSSModal=$(".mmw_soundslide_fulscreen",b);$(document.body).append(this.OSSModal);$(".mmw_soundslide_fl",this.OSSModal).attr("id",a);this.SSPopupHtml=$(".mmw_soundslide_popup",this.OSSModal).html()}this.OSSModal.show();fixOperaRedraw("#feffff");if(isIE6){$(".mmw_soundslide_popup_cont",this.OSSModal).css("top",($(window).scrollTop()+25)+"px");$(".mmw_soundslide_bg",this.OSSModal).css("height",$(document).height()+"px")}swfobject.embedSWF(c,a,this.soundslideW,this.soundslideH,"10.0.0","/flash/expressInstall.swf",null,f,d)}},hideSoundSlide:function(){this.OSSModal.hide();$(".mmw_soundslide_popup",this.OSSModal).html(this.SSPopupHtml);fixOperaRedraw("#feffff")},setScrollStep:function(a){this.scrollStep=a}};RFERL.js.custom.MultimediaWidget.registerClass("RFERL.js.custom.MultimediaWidget",null,Sys.IDisposable);;