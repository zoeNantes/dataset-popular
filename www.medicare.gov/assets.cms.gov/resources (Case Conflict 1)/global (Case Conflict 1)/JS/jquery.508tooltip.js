(function(b){var a=0;b.widget("ui.tooltip",{version:"@VERSION",options:{content:function(){return b(this).attr("title")},hide:true,items:"[title]",position:{my:"left+15 center",at:"right center",collision:"flipfit flipfit"},show:true,tooltipClass:null,close:null,open:null},_create:function(){this._bind({mouseover:"open",focusin:"open"});this.tooltips={}},_setOption:function(c,d){if(c==="disabled"){this[d?"_disable":"_enable"]();this.options[c]=d;return}this._super("_setOption",c,d)},_disable:function(){var c=this;b.each(this.tooltips,function(f,d){var e=b.Event("blur");e.target=e.currentTarget=d[0];c.close(e,true)});this.element.find(this.options.items).andSelf().each(function(){var d=b(this);if(d.is("[title]")){d.data("tooltip-title",d.attr("title")).attr("title","")}})},_enable:function(){this.element.find(this.options.items).andSelf().each(function(){var c=b(this);if(c.data("tooltip-title")){c.attr("title",c.data("tooltip-title"))}})},open:function(e){var d,c=this,f=b(e?e.target:this.element).closest(this.options.items);if(!f.length||f.attr("aria-describedby")){return}if(!f.data("tooltip-title")){f.data("tooltip-title",f.attr("title"))}d=this.options.content.call(f[0],function(g){setTimeout(function(){c._open(e,f,g)},1)});if(d){c._open(e,f,d)}},_open:function(d,f,c){if(!c){return}if(f.is("[title]")){f.attr("title","")}var e=this._find(f);if(!e.length){e=this._tooltip(f);f.attr("aria-describedby",e.attr("id"))}e.find(".ui-tooltip-content").html(c);e.stop(true).position(b.extend({of:f},this.options.position)).hide();this._show(e,this.options.show);this._trigger("open",d,{tooltip:e});this._bind(f,{mouseleave:"close",blur:"close",keyup:function(g){if(g.keyCode==b.ui.keyCode.ESCAPE){var h=b.Event(g);h.currentTarget=f[0];this.close(h,true)}}})},close:function(d,f){var c=this,g=b(d?d.currentTarget:this.element),e=this._find(g);if(!f&&document.activeElement===g[0]){return}if(g.data("tooltip-title")){g.attr("title",g.data("tooltip-title"))}g.removeAttr("aria-describedby");e.stop(true);this._hide(e,this.options.hide,function(){b(this).remove();delete c.tooltips[this.id]});g.unbind("mouseleave.tooltip blur.tooltip keyup.tooltip");this._trigger("close",d,{tooltip:e})},_tooltip:function(c){var e="ui-tooltip-"+a++,d=b("<div>").attr({id:e,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));b("<div>").addClass("ui-tooltip-content").appendTo(d);d.appendTo(document.body);if(b.fn.bgiframe){d.bgiframe()}this.tooltips[e]=c;return d},_find:function(c){var d=c.attr("aria-describedby");return d?b("#"+d):b()},_hoverable:function(c){this.hoverable=this.hoverable.add(c);this._bind(c,{mouseenter:function(d){b(d.currentTarget).addClass("ui-state-hover")},mouseleave:function(d){b(d.currentTarget).removeClass("ui-state-hover")}})},_destroy:function(){b.each(this.tooltips,function(c){b("#"+c).remove()})},_bind:function(e,d){if(!d){d=e;e=this.element}else{e=b(e);this.bindings=this.bindings.add(e)}var c=this;b.each(d,function(k,j){function h(){if(c.options.disabled===true||b(this).hasClass("ui-state-disabled")){return}return(typeof j==="string"?c[j]:j).apply(c,arguments)}var i=k.match(/^(\w+)\s*(.*)$/),g=i[1]+"."+c.widgetName,f=i[2];if(f){c.widget().delegate(f,g,h)}else{e.bind(g,h)}})}})}(jQuery));