td_site.page.roundMover={v:{r:{}},fun:{make:function(b,c,d){this.ary=b;this.par=c;this.grow=d;this.cOn={o:0,c:{}};this.cb=function(g,h,f,a){if(g.type==="mouseout"){if(this.cOn.o){this.cOn=this.par.rem(this.cOn);}}else{if(this.cOn.o){if(this.cOn.o===h){return;}this.cOn=this.par.rem(this.cOn);}this.cOn.o=h;this.cOn.c=this.par.add(h,this.ary);if(this.grow){this.par.grow(h,this.cOn);}}};}},build:function(e,a,c,d){if(!this.v.r[e]){var b=this.site.s.mR(e);if(!a){delete b.t;}if(!c){delete b.b;}this.v.r[e]=new this.fun.make(b,this,d);}return{t:this.v.r[e],f:"cb"};},grow:function(g,d){var f;for(f in d.c){if(d.c.hasOwnProperty(f)&&d.c[f]){var h=this.site.s.fC(d.c[f],"div");var b=h[0].offsetWidth;if(h.length>2){b+=h[2].offsetWidth;}h[1].style.width=(g.offsetWidth-b)+"px";}}},add:function(d,b){var c={t:0,b:0};if(b.t){c.t=d.insertBefore(b.t.cloneNode(1),d.childNodes[0]);}if(b.b){c.b=d.appendChild(b.b.cloneNode(1));}return c;},rem:function(b){var c;for(c in b.c){if(b.c.hasOwnProperty(c)&&b.c[c]){b.o.removeChild(b.c[c]);}}return{o:0,c:{}};},inish:td_site.inish};td_site.page.ooOne={v:{g:{},TO:{}},fun:{make:function(e,d,c,b){this.name=e;this.id=0;this.o=d;this.TO=0;this.cb=[];this.par=b;var a;for(a=0;a<d.length;a++){e=new b.par.fun.event(this,d[a]);b.par.u.addListener(d[a],c,e.run);}this.event=function(g,h,f){this.par.event(this,g,h,f.par);};this.addCB=function(f){this.cb.push(f);};}},build:function(b,a,c){var d=a;if(!d){d=this.par.s.ids(b);}if(!c){c=["mouseover","mouseout"];}this.v.g[b]=new this.fun.make(b,d,c,this);return d;},addCB:function(b,a){this.v.g[b].addCB(a);},doCB:function(d,f,a,b){var c;for(c=0;c<a.length;c++){a[c].t[a[c].f](d,f,a[c].t,b);}},event:function(c,b,d,a){clearTimeout(c.TO);if(b.type==="mouseout"){if(c.id){c.TO=this.par.u.TO(this.mouse,"out",{e:this.site.s.cEvt(b),o:c.o,t:a,sg:c.name,g:c},5,0);}}else{if(c.id){if(c.id===d.id){return;}this.mouse.out({e:b,o:c.o,t:a,sg:c.name,g:c});}c.id=d.id;c.o=d;this.mouse.over(b,d,a,c);}},mouse:{over:function(c,d,a,b){if(b.cb){a.doCB(c,d,b.cb,c.type);}a.par.s.cnRe(d,c.type);},out:function(a){if(a.g.cb){a.t.doCB(a.e,a.o,a.g.cb,"mouseout");}a.g.id=a.t.v.g[a.sg].id=0;a.t.par.s.cnRe(a.o,"mouseout");}},inish:td_site.inish};td_site.page.nav={v:{anFin:200,flyH:550,flyHshoppingTools:552,topCornerWidth:6,mainNav:{tdi_globalNav_cars:0,tdi_globalNav_crossSuvs:0,tdi_globalNav_trucks:0,tdi_globalNav_hybrids:0,"tdi_globalNav_commercial-trucks":0,tdi_globalNav_vehicles:-1,tdi_globalNav_technology:-1,tdi_globalNav_shoppingtools:0},btnClose:"btnClose",iconSpriteV:{out:0,over:-63}},goHere:function(b,c,a){switch(c){case 0:document.location=b;break;case 1:window.open(b);break;}this.extClose();},build:function(){if(!this.site.s.id("tdi_menuTopTable")){this.site.u.TO(this,"build",{},250,0);return;}this.catTab=this.par.roundMover.build("catTab",1,1,1);this.attach("tdi_menuTopTable","globalnav-content","tdi_subNav_holder","div","btnClose",td_site.v.url.l.length);this.par.ooOne.build("overOut",this.site.s.ids("overOut"),["mouseover","mouseout"]);this.site.corpTab.build("td_nav_corpTab","td_nav_corpDiv");},attach:function(b,i,j,h,w,t){var v=this.site.s;this.holder=this.par.s.id(i);var u=this.par.s.fC(this.par.s.id(j),h,0,0);this.onTab=this.curTab=this.cH=this.TO=this.anTOi=this.bAn=this.curChild=0;var q=["mouseup","mouseout"];var m,g;for(m in this.v.mainNav){if(this.v.mainNav.hasOwnProperty(m)){var d=v.id(m);var l=false;if(this.site.v.url.l.length){l=this.site.v.url.l[0].toLowerCase();}var f=m.split("_").pop().toLowerCase();if(l&&(((l===f)||((l==="crossovers"||l==="suvs")&&f==="crosssuvs"))||((l==="new-cars")&&f==="cars"))){this.onTab=d;var p=v.fC(d,"div",0,1)[0];var a=v.iB(d,p,v.mR("catTab").t);p.className+=" catTabText_onTab";a.className+=" catTab_onTab";}g=new this.par.fun.event(this,d);this.par.u.addListener(d,q,g.run);}}g=new this.par.fun.event(this,this.holder);this.par.u.addListener(this.holder,["mouseover","mouseout"],g.run);var k=this.par.s.id(w);this.v.btnClose=k;g=new this.par.fun.event(this,k);this.par.u.addListener(k,["click"],g.run);this.compSpeed();this.holder.style.height="0px";},buildChild:function(b){var c;var e=b.split("_")[2];switch(e){case"shoppingtools":this.bgCornMover("tdi_shopTool_plac","mainPlac");this.site.u.TO(this.site.u,"cachSprite",{targ:"tdi_globalNav_shoppingtools_div",cn:["holder_mouseover","icon"]},5,0);break;case"all":this.bgCornMover("tdi_evt_vl_"+e,"vlinksBun");this.bgCornMover("tdi_"+e+"_plac","mainPlac");break;case"commercial-trucks":this.bgCornMover("tdi_evt_vl_"+e,"vlinksBun");this.bgCornMover("tdi_"+e+"_plac","mainPlac");break;default:var d=this.site.s;var a=d.fC(d.id(b+"_div"),"div",0,1)[0];c=d.fC(a,"div");if(a&&a.style){a.style.width=(this.site.u.getPos(c[c.length-1]).r-this.site.u.getPos(a).l+5)+"px";}this.bgCornMover("tdi_evt_vl_"+e,"vlinksBun");this.bgCornMover("tdi_"+e+"_plac","mainPlac");break;}this.v.mainNav[b]=this.site.s.id(b+"_div");},bgCornMover:function(b,a){var c=this.par.ooOne.build(a,this.site.s.ids(b),["mouseover","mouseout"]);this.par.ooOne.addCB(a,this.par.roundMover.build(a,1,1,1));},compSpeed:function(){this.maxH=this.v.flyH;this.speed=this.maxH/this.v.anFin;this.holder.style.visibility="hidden";},setCollectionDisplay:function(c,b){if(c&&b){var a;for(a=0;a<c.length;a++){c[a].style.display=b;}}},showHide:function(a){this.v.killTab={e:this.site.s.cEvt(a.e),o:a.o};if(a.a==="mouseover"||a.a==="mouseup"){if(this.curChild){this.curChild.style.visibility="hidden";this.par.s.cnRe(this.curTab,"mouseout");}this.curTab=a.o;this.dir=1;this.curChild=this.v.mainNav[a.o.id];if(this.curChild!==-1){this.par.s.cnRe(a.o,"mouseover");if(!(a.t.site.v.url.l.length&&a.t.site.v.url.l[0].toLowerCase()===a.o.id.split("_").pop().toLowerCase())){this.catTab.t.cb(a.e,a.o,"catTab",a.e.type);}if(!this.curChild){this.buildChild(a.o.id);this.curChild=this.site.s.id(a.o.id+"_div");}this.curChild.style.visibility="visible";}}else{this.dir=-1;}if(!this.bAn&&this.curChild!==-1){this.bAn=(new Date()).getTime();this.holder.style.visibility="visible";this.anTOi=this.par.u.TO(this,"animate",0,5,1);}},extClose:function(){this.bAn=-(new Date()).getTime();this.dir=-1;this.animate();},animate:function(){this.cH+=((new Date()).getTime()-this.bAn)*(this.speed*this.dir);if(this.cH>this.maxH||this.cH<0){if(this.cH<0){this.cH=0;this.holder.style.visibility="hidden";if(this.curTab){this.catTab.t.cb(this.v.killTab.e,this.v.killTab.o,"catTab",this.v.killTab.e.type);this.par.s.cnRe(this.curTab,"mouseout");}}else{this.cH=this.maxH;}clearInterval(this.anTOi);this.bAn=0;}if(this.holder){this.holder.style.height=this.cH+"px";}},event:function(c,d,b){clearTimeout(b.TO);var a={e:this.site.s.cEvt(c),o:d,t:b,a:c.type};if(d===b.v.btnClose){b.showHide(a);return;}if(c.type==="mouseover"||c.type==="mouseup"){if(d===b.holder){return;}this.maxH=(d.id==="tdi_globalNav_shoppingtools")?this.v.flyHshoppingTools:this.v.flyH;if(b.cur!==d){if(b.cH>0||c.type==="mouseup"){b.showHide(a);}else{b.TO=b.par.u.TO(this,"showHide",a,800,0);}}}else{if(c.relatedTarget&&c.target.parentNode&&c.relatedTarget.parentNode===c.target.parentNode&&c.target.parentNode.className==="catTabText"){return;}b.TO=b.par.u.TO(this,"showHide",a,100,0);}},extEvent:function(a){if(a.type==="mouseout"){this.event(a,0,this);}else{clearTimeout(this.TO);}},getPos:function(){return this.site.u.getPos(this.holder);},inish:td_site.inish};td_site.page.iconExp={v:{cUrl:0},u:{run:function(b,a,g,c){this.par.con=document.getElementById(a);var e=document.body.insertBefore(document.createElement("div"),document.body.childNodes[0]);e.className=g;var f=new this.site.fun.event(this.par.goLink,e,{t:this.par});this.site.u.addListener(e,["mouseup"],f.run);e.innerHTML='<table cellspacing="0" cellpadding="0" border="0"><tbody><tr><td class="spritesA tl corner"><div class="spDIV1x1">&nbsp;</div></td><td class="t outer"><div class="spDIV1x1">&nbsp;</div></td><td class="spritesA tr corner"><div class="spDIV1x1">&nbsp;</div></td></tr><tr><td class="ml outer"><div class="spDIV1x1">&nbsp;</div></td><td class="m"></td><td class="mr outer"><div class="spDIV1x1">&nbsp;</div></td></tr><tr><td class="spritesA bl corner"><div class="spDIV1x1">&nbsp;</div></td><td class="b outer"><div class="spDIV1x1">&nbsp;</div></td><td class="spritesA br corner"><div class="spDIV1x1">&nbsp;</div></td></tr></tbody></table>';this.par.table=this.site.s.fC(e,"table",0)[0];this.par.div=e;this.add(this.par.div,["mouseout","mouseover"]);this.add(this.site.s.ids(b),["mouseover"]);},add:function(c,b){if(!c.length){c=[c];}var a;for(a=0;a<c.length;a++){var d=new this.site.fun.event(this.par.run,c[a],{t:this.par});this.site.u.addListener(c[a],["mouseover","mouseout"],d.run);}},inish:function(a,b){this.name=a;this.par=b;this.site=b.site;this.TO=0;}},hide:{run:function(a,f,b){var e=b.div;e.style.visibility="hidden";e.style.left="-1000px";var c=b.site.nav.getPos();if(a<c.l||a>c.r||f<c.t||f>c.b){b.site.nav.extEvent({type:"mouseout"});}}},getSate:{isVis:function(){return(this.div.style.visibility.toLowerCase()==="visible");}},run:{event:function(B,v,q,r){var m=r.t.site.u;var C=r.t.div;var D=r.t.con;var f=r.t.table.rows[1].cells[1];if(B.type==="mouseout"){if(C.style.visibility==="hidden"){return;}var j=B.clientX;var g=B.clientY;var E={to:function(){r.t.hide.run(j,g,r.t);}};r.t.TO=setTimeout(E.to,50);}else{clearTimeout(r.t.TO);if(v===C){r.t.site.nav.extEvent("mouseover");return;}r.t.v.cUrl=r.t.site.s.fC(v,"a",0)[0].href;f.innerHTML="<CENTER>"+v.innerHTML+"</CENTER>";var i=r.t.site.s.fC(C,"img",1)[0];i.style.width="165px";i.style.height="105px";var b=m.getPos(v);var k=C.offsetWidth;var A=C.offsetHeight;var z=(b.l+(v.offsetWidth/2))-(k/2);var n=(b.t+(v.offsetHeight/2))-(A/2);var a=m.getPos(D);if(z+k>a.r){z=a.r-k;}if(z<a.l){z=a.l;}if(n+A>a.b){n=a.b-A;}if(n<a.t){n=a.t;}C.style.left=z+"px";C.style.top=n+"px";C.style.visibility="visible";r.t.div=C;r.t.site.nav.extEvent(B.type);}}},goLink:{event:function(c,d,a,b){document.location=b.t.v.cUrl;}},inish:td_site.inish};td_site.page.corpTab={u:{inish:function(a,b){}},build:function(d,a){var b=this.site.s;this.tab=b.id(d);this.div=b.id(a);this.table=b.fC(this.div,"table",false,true)[0];this.bAnim=false;this.curAction=false;this.iHeight=0;this.curHeight=0;this.curTime=0;this.dir=1;this.TO=0;var c=["mouseover","mouseout"];var e=new this.site.fun.event(this,this.table);this.site.u.addListener(this.table,c,e.run);e=new this.site.fun.event(this,this.tab);this.site.u.addListener(this.tab,c,e.run);},event:function(c,d,a,b){clearTimeout(a.TO);if(c.type==="mouseover"){if(!a.iHeight){a.iHeight=a.table.offsetHeight;a.div.style.height=0;}a.startMove({action:"mouseover",obj:d});}else{a.TO=a.site.u.TO(a,"startMove",{action:"mouseout",obj:d},100,false);}},checkClosed:function(b){if(b===0){this.div.style.height="1px";var a="visible";if(this.curAction==="mouseout"){a="hidden";}this.div.style.visibility=a;this.site.s.cnRe(this.tab,this.curAction);}},startMove:function(a){if(this.curAction===a.action){return;}this.curAction=a.action;this.startTime=(new Date()).getTime();this.dir=1;if(this.curAction==="mouseout"){this.dir=-1;}var b=parseInt(this.div.style.height,10);this.checkClosed(b);if(this.bAnim){this.startHeight=this.curHeight;this.curHeight=this.iHeight;this.duration=this.curTime;this.bStart=false;}else{this.bAnim=true;this.startHeight=b;this.curHeight=this.iHeight;this.duration=500;this.bStart=true;this.animTO=this.site.u.TO(this,"animate",{},100,true);}},animate:function(){var b=(new Date()).getTime();this.curTime=b-this.startTime;if(this.curTime>=this.duration){this.curTime=this.duration;this.bAnim=false;clearTimeout(this.animTO);}var a=(this.site.easing.exp2UpDown(this.curTime,0,this.curHeight,this.duration,this.bStart,true))*this.dir;var c=(this.startHeight+a);if((this.startHeight+a)>this.curHeight){c=this.curHeight;this.bAnim=false;clearTimeout(this.animTO);}this.checkClosed(c);this.div.style.height=c+"px";},inish:td_site.inish};td_site.page.easing={exp2UpDown:function(f,a,i,h,g,e){if(f===0){return a;}if(f===h){return a+i;}f=f/(h*0.5);if((!g&&!e)||(f<1&&!g)||(f>=1&&!e)){return f*(i*0.5);}if(f<1){return i*0.5*Math.pow(2,10*(f-1))+a;}return(i*0.5)*(-Math.pow(2,-10*--f)+2)+a;},inish:td_site.inish};td_site.page.pricing=(function(){var m=getPackageForName("com.forddirect.ng.util");var e=YAHOO.util.Cookie;var b="price";var k="plan";var c="AXZ_MESSAGE_SHOWN";var a="model.planApplicability";var n="model.trims";var l="";var q="/pricing/VehiclePrices.json";var j=[];var i,h,g;if(typeof AXZAuthenticator!=="undefined"){i=new AXZAuthenticator();h=i.getPlanType();g=i.getPlanTypeForDisplay();}else{i={};h="MSRP";}var p=false;var o=function(u,t,r,s){j.push({id:u,key:r,prices:t,calcFn:s});};var d=function(r){return parseInt(r.replace(",",""),10);};var f=function(){var s,v;for(s=0,v=j.length;s<v;s++){var u=j[s];var x;var r=u.prices;var w=d(u.prices.msrp);var t=w;if(h===i.AZ_PLAN&&u.prices.az){t=d(u.prices.az);}else{if((h===i.FNX_PLAN||h===i.PRX_PLAN||h===i.SPX_PLAN)&&u.prices.x){t=d(u.prices.x);}}switch(u.key){case k:x=(t===w)?i.MSRP:g;break;case b:if(u.calcFn){t=u.calcFn(t);}x=m.formatWithComma(t);break;}document.getElementById(u.id).innerHTML=x;}};if(typeof i!=="undefined"&&h!==i.MSRP){_instances.bsLoader.initCompleteEvent.subscribe(f);}return{PRICE:b,PLAN:k,planTypes:{AZ:"AZ",X:"X",MSRP:"MSRP"},getAuthenticator:function(){return i;},init:function(r){l=r;},registerPrice:function(t,s,r){o(t,s,b,r);},registerAllPrices:function(u){var r,t;for(r=0,t=u.length;r<t;r++){var s=u[r];this.registerPrice(s.id,{msrp:s.msrp,az:s.az,x:s.x});}},registerPlan:function(t,s,r){o(t,s,k);},registerAllPlans:function(u){var r,t;for(r=0,t=u.length;r<t;r++){var s=u[r];this.registerPlan(s.id,{msrp:s.msrp,az:s.az,x:s.x});}},getPlanType:function(){var r=this.planTypes.MSRP;var s=_widgets.context.SelectedContext.get(a);if(h===i.AZ_PLAN&&s.aZ){r=this.planTypes.AZ;}else{if((h===i.FNX_PLAN||h===i.PRX_PLAN||h===i.SPX_PLAN)&&(s.pRX||s.fNX||s.sPX)){r=this.planTypes.X;}}return r;},getPlanTypeDisplay:function(s,t){if(!s||!t){return g;}if(s<t){return"MSRP";}var r=this.getPlanType();if(r===td_site.pricing.planTypes.AZ){return"A/Z Plan";}if(r===td_site.pricing.planTypes.X){return"X Plan";}return"MSRP";},getTrimPlanType:function(t){if(t){var s=this.planTypes.MSRP;var r=_widgets.context.SelectedContext.get(n);var u=r[t].price.planApplicability;if(h===i.AZ_PLAN&&u.aZ){s=this.planTypes.AZ;}else{if((h===i.FNX_PLAN||h===i.PRX_PLAN||h===i.SPX_PLAN)&&(u.pRX||u.fNX||u.sPX)){s=this.planTypes.X;}}return s;}},getTrimPlanTypeDisplay:function(t,u,s){if(!t||!u){return g;}if(t<u){return"MSRP";}var r=this.getTrimPlanType(s);if(r===td_site.pricing.planTypes.AZ){return"A/Z Plan";}if(r===td_site.pricing.planTypes.X){return"X Plan";}return"MSRP";},getPlanTypeForServices:function(){return h;},getSupplierCode:function(){if(this.getPlanType()===this.planTypes.X){return ngbs.u.cookie.get("AXZAuthCookie").split(":")[2];}return null;},messageHeaderCookiePresent:function(){return e.get(c);},shouldShowMessage:function(){if((h!==i.MSRP)&&(location.href.indexOf("welcomeMessage=true")!==-1)){if(!this.messageHeaderCookiePresent()){return true;}}return false;},setMessageShown:function(){e.set(c,"true");},inish:td_site.inish};}());td_site.inish("td_site",td_site,0);td_site.nav.build();var evt_future;(function(){var a=function(){this.TO=0;this.NH=0;this.show=function(b,d){var c;if(d){c="hidden";this.NH=0;}else{c="visible";this.NH=this.getNH();}document.getElementById(b).style.visibility=c;};this.getNH=function(){return parseInt(document.getElementById("globalnav-content").style.height,10);};this.mouse=function(b,c){clearTimeout(this.TO);if(this.NH!==this.getNH()){this.show(b.id,1);}else{if(c.type==="mouseout"){this.TO=setTimeout("evt_future.show('"+b.id+"', 1)",50);}}};};evt_future=new a();}());(function(){_instances.bsLoader.initCompleteEvent.subscribe(function(){var a=getPackageForName("com.forddirect.ng.widgets"),c=document.getElementById("gnav-search-endeca");if(c){var b=new a.SiteSearchInput(c,{autocomplete:true,searchType:"search"});}});}());if(window.ngbs&&window.ngbs.legacy){ngbs.legacy(function(a){a.listen(document.body,"close-flips",function(c,b){td_site.nav.extClose();});});}