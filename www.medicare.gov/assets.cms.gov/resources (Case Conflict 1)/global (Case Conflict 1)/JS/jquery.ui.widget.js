/*!
 * jQuery UI Widget @VERSION
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(a,d){var c=Array.prototype.slice;var b=a.cleanData;a.cleanData=function(f){for(var g=0,h;(h=f[g])!=null;g++){try{a(h).triggerHandler("remove")}catch(j){}}b(f)};a.widget=function(f,h,e){var g=f.split(".")[0],j;f=f.split(".")[1];j=g+"-"+f;if(!e){e=h;h=a.Widget}a.expr[":"][j]=function(k){return !!a.data(k,f)};a[g]=a[g]||{};a[g][f]=a.extend(function(k,l){if(!this._createWidget){return new a[g][f](k,l)}if(arguments.length){this._createWidget(k,l)}},a[g][f],{version:e.version});var i=new h();i.options=a.widget.extend({},i.options);a.each(e,function(l,k){if(a.isFunction(k)){e[l]=(function(){var m=function(o){return h.prototype[o].apply(this,c.call(arguments,1))};var n=function(p,o){return h.prototype[p].apply(this,o)};return function(){var q=this._super,o=this._superApply,p;this._super=m;this._superApply=n;p=k.apply(this,arguments);this._super=q;this._superApply=o;return p}}())}});a[g][f].prototype=a.widget.extend(i,{namespace:g,widgetName:f,widgetEventPrefix:f,widgetBaseClass:j},e);a.widget.bridge(f,a[g][f])};a.widget.extend=function(j){var f=c.call(arguments,1),i=0,e=f.length,g,h;for(;i<e;i++){for(g in f[i]){h=f[i][g];if(f[i].hasOwnProperty(g)&&h!==d){j[g]=a.isPlainObject(h)?a.widget.extend({},j[g],h):h}}}return j};a.widget.bridge=function(f,e){a.fn[f]=function(i){var g=typeof i==="string",h=c.call(arguments,1),j=this;i=!g&&h.length?a.widget.extend.apply(null,[i].concat(h)):i;if(g){this.each(function(){var k=a.data(this,f);if(!k){return a.error("cannot call methods on "+f+" prior to initialization; attempted to call method '"+i+"'")}if(!a.isFunction(k[i])||i.charAt(0)==="_"){return a.error("no such method '"+i+"' for "+f+" widget instance")}var l=k[i].apply(k,h);if(l!==k&&l!==d){j=l&&l.jquery?j.pushStack(l.get()):l;return false}})}else{this.each(function(){var k=a.data(this,f);if(k){k.option(i||{})._init()}else{e(i,this)}})}return j}};a.Widget=function(e,f){if(!this._createWidget){return new a[namespace][name](e,f)}if(arguments.length){this._createWidget(e,f)}};a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(e,f){f=a(f||this.defaultElement||this)[0];this.element=a(f);this.options=a.widget.extend({},this.options,this._getCreateOptions(),e);this.bindings=a();this.hoverable=a();this.focusable=a();if(f!==this){a.data(f,this.widgetName,this);this._bind({remove:"destroy"})}this._create();this._trigger("create");this._init()},_getCreateOptions:a.noop,_create:a.noop,_init:a.noop,destroy:function(){this._destroy();this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled");this.bindings.unbind("."+this.widgetName);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")},_destroy:a.noop,widget:function(){return this.element},option:function(h,j){var e=h,k,g,f;if(arguments.length===0){return a.widget.extend({},this.options)}if(typeof h==="string"){e={};k=h.split(".");h=k.shift();if(k.length){g=e[h]=a.widget.extend({},this.options[h]);for(f=0;f<k.length-1;f++){g[k[f]]=g[k[f]]||{};g=g[k[f]]}h=k.pop();if(j===d){return g[h]===d?null:g[h]}g[h]=j}else{if(j===d){return this.options[h]===d?null:this.options[h]}e[h]=j}}this._setOptions(e);return this},_setOptions:function(e){var f=this;a.each(e,function(g,h){f._setOption(g,h)});return this},_setOption:function(e,f){this.options[e]=f;if(e==="disabled"){this.widget().toggleClass(this.widgetBaseClass+"-disabled ui-state-disabled",!!f).attr("aria-disabled",f);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_bind:function(g,f){if(!f){f=g;g=this.element}else{g=a(g);this.bindings=this.bindings.add(g)}var e=this;a.each(f,function(m,l){function j(){if(e.options.disabled===true||a(this).hasClass("ui-state-disabled")){return}return(typeof l==="string"?e[l]:l).apply(e,arguments)}var k=m.match(/^(\w+)\s*(.*)$/),i=k[1]+"."+e.widgetName,h=k[2];if(h){e.widget().delegate(h,i,j)}else{g.bind(i,j)}})},_delay:function(h,g){function f(){return(typeof h==="string"?e[h]:h).apply(e,arguments)}var e=this;return setTimeout(f,g||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e);this._bind(e,{mouseenter:function(f){a(f.currentTarget).addClass("ui-state-hover")},mouseleave:function(f){a(f.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e);this._bind(e,{focusin:function(f){a(f.currentTarget).addClass("ui-state-focus")},focusout:function(f){a(f.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(g,h,j){var l=this.options[g],e;h=a.Event(h);h.type=(g===this.widgetEventPrefix?g:this.widgetEventPrefix+g).toLowerCase();j=j||{};if(h.originalEvent){for(var f=a.event.props.length,k;f;){k=a.event.props[--f];h[k]=h.originalEvent[k]}}this.element.trigger(h,j);e=a.isArray(j)?[h].concat(j):[h,j];return !(a.isFunction(l)&&l.apply(this.element[0],e)===false||h.isDefaultPrevented())}};a.each({show:"fadeIn",hide:"fadeOut"},function(f,e){a.Widget.prototype["_"+f]=function(i,h,k){if(typeof h==="string"){h={effect:h}}var j,g=!h?f:h===true||typeof h==="number"?e:h.effect||e;h=h||{};if(typeof h==="number"){h={duration:h}}j=!a.isEmptyObject(h);h.complete=k;if(h.delay){i.delay(h.delay)}if(j&&a.effects&&(a.effects.effect[g]||a.uiBackCompat!==false&&a.effects[g])){i[f](h)}else{if(g!==f&&i[g]){i[g](h.duration,h.easing,k)}else{i.queue(function(l){a(this)[f]();if(k){k.call(i[0])}l()})}}}});if(a.uiBackCompat!==false){a.Widget.prototype._getCreateOptions=function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]}}})(jQuery);