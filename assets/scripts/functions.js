!function(a){a(document).ready(function(){function b(b){b>125&&a("header").addClass("sticky"),125>b&&a("header").removeClass("sticky")}function c(a){var b=A.height();b>=a&&A.css({"background-position":" 50% "+Math.round(100*a/b*3)+"%"})}function d(a){var b=y.height()/4;a>b&&H.css({opacity:1}),b>a&&H.css({opacity:0})}function e(){H.on("click",function(){return a("html, body").animate({scrollTop:0},800),!1})}function f(){G.on("click",function(){F.hasClass("active")?(C.css({opacity:1}),B.css({opacity:1}),F.css({opacity:0,"pointer-events":"none"}).removeClass("active")):(C.css({opacity:0}),B.css({opacity:0}),F.css({opacity:1,"pointer-events":"all"}).addClass("active"))})}function g(){D.on("click",function(){E.toggle()})}function h(){J.on("mouseover",function(){var b=a(this).data("info"),c=a("[data-stats='1']"),d=a("[data-stats='2']"),e=a("[data-stats='3']"),f=[{title:"Paraná",sub:"Londrina, Cambé, Rolândia, Arapongas, Guaratuba, Ortigueira",_1:24,_2:2,_3:5},{title:"SÃO PAULO",sub:"Aparecida, São Paulo, Campinas, Araçariguama, Serra Negra",_1:5,_2:0,_3:6},{title:"RIO DE JANEIRO",sub:"Rio de Janeiro",_1:0,_2:0,_3:2},{title:"MINAS GERAIS",sub:"Uberaba",_1:0,_2:1,_3:0},{title:"RIO GRANDE DO SUL",sub:"Canoas",_1:0,_2:0,_3:1},{title:"SANTA CATARINA",sub:"Lages",_1:0,_2:0,_3:1},{title:"BAHIA",sub:"Lauro de Freitas",_1:0,_2:0,_3:1},{title:"PARAGUAI",sub:"Salto del Guairá",_1:0,_2:0,_3:1}];K.find("span.title").text(f[b].title),K.find("span.sub").text(f[b].sub),c.find("span").text(f[b]._1),d.find("span").text(f[b]._2),e.find("span").text(f[b]._3)})}function i(){for(var a=[{title:"Metacon Engenharia",phone:"43 3377.1600",lat:-23.3178821,lng:-51.1645811}],b=new google.maps.Map(document.getElementById("googleMap"),{center:{lat:-23.3178821,lng:-51.1645811},mapTypeId:google.maps.MapTypeId.ROADMAP,zoomControlOptions:{style:google.maps.ZoomControlStyle.LARGE},scrollwheel:!1,draggable:!1,zoom:18}),c=0;c<a.length;c++){var d=new google.maps.InfoWindow,e=new google.maps.LatLng(a[c].lat,a[c].lng),f=new google.maps.Marker({position:e,map:b,title:"Metacon Engenharia",icon:{url:"assets/images/marker.png",origin:new google.maps.Point(0,0),anchor:new google.maps.Point(40,68)}});google.maps.event.addListener(f,"click",function(c,e){return function(){d.setContent("<div class='marker'><div class='marker-title'>"+a[e].title+"</div><div class='marker-phone'><h3>Telefone: </h3><span>"+a[e].phone+"</span></div></div>"),d.open(b,c)}}(f,c))}}function j(){}function k(b){a(b).on("focus",function(){a(this).parent().find("label").css({top:"-5px"})}).on("blur",function(){a(this).parent().find("label").css({top:"26px"})})}function l(b){X.removeClass("active"),a(b).addClass("active")}function m(b){W.each(function(){0==b?a(this).show():a(this).data("type")!=b?a(this).hide():a(this).show()})}function n(b,c){1==c?a(b).find("figure span").css({right:"0%"}):a(b).find("figure span").css({right:"-100%"})}function o(b){$.children("[data-pane!='"+b+"']").each(function(){a(this).css({display:"none",opacity:"0"})}),$.find(".pane[data-pane='"+b+"']").css({display:"block",opacity:"1"}),2==b&&google.maps.event.addDomListener(window,"load",p(_))}function p(a){var b={lat:a.data("lat"),lng:a.data("lng")},c=new google.maps.Map(document.getElementById("portfolioMap"),{center:b,zoom:18}),d=new google.maps.Marker({position:b,map:c,title:a.data("title"),icon:{url:"assets/images/marker.png",origin:new google.maps.Point(0,0),anchor:new google.maps.Point(40,68)}}),e=new google.maps.InfoWindow({content:"<div id='map-marker'>"+a.data("title")+"</div>"});google.maps.event.addListener(d,"click",function(){e.open(c,d)})}function q(a){Z.removeClass("active"),a.addClass("active")}function r(b){ca.removeClass("active"),a(b).addClass("active")}function s(b){ba.each(function(){a(this).show(),0==b?a(this).show():a(this).data("type")!=b&&a(this).hide()})}function t(b,c){1==c?a(b).find("figure span").css({bottom:"0%"}):a(b).find("figure span").css({bottom:"-100%"})}function u(b){fa.removeClass("active"),a(b).addClass("active")}function v(b){ea.each(function(){a(this).show(),0==b?a(this).show():a(this).data("type")!=b&&a(this).hide()})}function w(b,c){1==c?a(b).find("figure span").css({right:"0%"}):a(b).find("figure span").css({right:"-100%"})}function x(){var b={xs:Math.ceil(W.length/1),sm:Math.ceil(W.length/4),md:Math.ceil(W.length/6),lg:Math.ceil(W.length/8),vp:null,nb:null};y.width()<640?(b.vp=b.xs,b.nb=1):y.width()>640&&y.width()<960?(b.vp=b.sm,b.nb=3):y.width()>960&&y.width()<1280?(b.vp=b.md,b.nb=5):y.width()>=1280&&(b.vp=b.lg,b.nb=7);for(var c=0;c<b.vp;c++){var d=document.createElement("div");a(d).addClass("page").attr("data-page",c+1).appendTo(T),U.find(W).each(function(d){d<=b.nb&&a(this).detach().appendTo(T.find("[data-page='"+(c+1)+"']"))})}null!=ja.owlPortfolio}var y=a(window),z=a(".slides ul"),A=a("section.hero"),B=a(".logo-container"),C=a(".menu-container"),D=a(".menu-toggle"),E=a(".menu-container.mobile"),F=a(".search-container"),G=a(".search-toggle"),H=a(".scroll-top"),I=a("#map-coords"),J=a("#map-coords area"),K=a(".map-info"),L=a(".carousel"),M=a(".carousel-prev"),N=a(".carousel-next"),O=a("#googleMap"),P=a(".contact-form form"),Q=P.find("[id*='contact']"),R=a(".login-container form"),S=R.find("input"),T=a(".portfolio-pages"),U=a(".portfolio-placeholder"),V=a(".portfolio-filter"),W=a(".portfolio-item"),X=V.find("li"),Y=a(".portfolio-nav"),Z=Y.find("[data-tab]"),$=a(".portfolio-panes"),_=a("#portfolioMap"),aa=a(".obra-filter"),ba=a(".obra-item"),ca=aa.find("li"),da=a(".investimento-filter"),ea=a(".investimento-item"),fa=da.find("li"),ga=a(".popup-overlay"),ha=a(".popup"),ia={autoPlay:!0,navigation:!1,slideSpeed:300,pagination:!1,paginationSpeed:400,singleItem:!0,stopOnHover:!1,addClassActive:!1},ja={owlPortfolio:null};a(window).scroll(function(){var e=a(window).scrollTop();b(e),c(e),d(e)}),(-1!=navigator.userAgent.indexOf("Windows")||-1!=navigator.userAgent.indexOf("Linux"))&&a.scrollSpeed(100,800),z.length&&z.owlCarousel(ia),I.length&&(h(),a("#map-coords area[data-info='0']").mouseover()),L.length&&L.each(function(){a(this).owlCarousel({navigation:!1,slideSpeed:300,pagination:L.data("pagination"),autoHeight:L.data("resize"),paginationSpeed:400,singleItem:!0});var b=a(this).data("owlCarousel");N.on("click",function(){b.next()}),M.on("click",function(){b.prev()})}),O.length&&google.maps.event.addDomListener(window,"load",i),P.length&&(P.on("submit",j()),a.each(Q,function(){k(this)})),R.length&&a.each(S,function(){k(this)}),V.length&&X.on("click",function(){l(this),m(a(this).data("filter"))}),W.length&&(x(),W.on("mouseenter",function(){n(this,1)}).on("mouseleave",function(){n(this,2)})),Y.length&&(Z.on("click",function(){q(a(this)),o(a(this).data("tab"))}),Z.eq(0).trigger("click")),aa.length&&ca.on("click",function(){r(this),s(a(this).data("filter"))}),ba.length&&ba.on("mouseenter",function(){t(this,1)}).on("mouseleave",function(){t(this,2)}),da.length&&fa.on("click",function(){u(this),v(a(this).data("filter"))}),ea.length&&ea.on("mouseenter",function(){w(this,1)}).on("mouseleave",function(){w(this,2)}),ha.length&&ha.find("form").on("submit",function(){return ha.css({display:"none"}),ga.css({display:"none"}),window.location=a(this).attr("action"),!1}),a.scrollIt(),f(),g(),e()})}(jQuery);