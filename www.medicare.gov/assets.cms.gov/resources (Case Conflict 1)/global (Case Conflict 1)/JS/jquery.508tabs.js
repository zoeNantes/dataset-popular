(function(a){a.fn.GenerateTabs=function(k){var g={numberoftabs:1,tabHeadings:"",tabDivIDs:"",cssClass:"DefaultTabClass",anchorable:true,collapsible:false,sortable:false,selected:0};var b=a.extend({},g,k);var f=jQuery("<ul/>",{id:"tabs-ul"});var c="";for(var d=0;d<b.numberoftabs;d++){var h=jQuery("<li/>",{id:"tab"+d});f.append(h);if(d===b.selected){h.append(jQuery("<a/>",{href:"#contentTab"+(d+1)}).html(b.tabHeadings.split(",")[d]));h.children("a:eq(0)").append("<span class='HiddenText 508State'>, tab selected</span>");c=jQuery("<div/>",{id:"contentTab"+(d+1),"class":b.cssClass}).html("<a name =contentTab"+(d+1)+"></a><p class='HiddenText 508SelectedMsg'>You have selected "+b.tabHeadings.split(",")[d]+"</p>");var e=a("#"+b.tabDivIDs.split(",")[d]).html();c.append(e)}else{h.append(jQuery("<a/>",{href:"#contentTab"+(d+1)}).html(b.tabHeadings.split(",")[d]));c=jQuery("<div/>",{id:"contentTab"+(d+1),style:"display:none;","class":b.cssClass}).html("<a name =contentTab"+(d+1)+"></a><p class='HiddenText 508SelectedMsg'></p>");h.children("a:eq(0)").append("<span class='HiddenText 508State'>, tab</span>");var j=a("#"+b.tabDivIDs.split(",")[d]).html();c.append(j)}this.append(c)}f.prependTo(this);this.tabs({collapsible:b.collapsible,sortable:b.sortable,select:function(p,o){var i=o.index;var n;var q=a(this).children("ul").eq(0).children("li");for(var l=0;l<q.length;l++){n=q.eq(l).children("a:eq(0)").children("span.508State");if(l===i){n.html(", tab selected")}else{n.html(", tab")}}for(var m=0;m<a(this).children("div").length;m++){if(m===i){a(this).children("div").eq(m).css("display","").find(".508SelectedMsg").first().html("You have selected "+b.tabHeadings.split(",")[m]);if(b.anchorable){var r=document.location.href.split("#")[0];window.location.href=r+"#contentTab"+(m+1)}}else{a(this).children("div").eq(m).css("display","none").find(".508SelectedMsg").first().html("")}}}})}})(jQuery);