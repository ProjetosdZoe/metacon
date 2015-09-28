$(function() {
    
    $.scrollIt();
    
     function stickyHeader(offset)
    {
        
        if( offset > 125 )
        {
            $("header").addClass("sticky");
        }
        if( offset < 125 )
        {
            $("header").removeClass("sticky");
        }
    }
    
    function scrollTop(offset)
    {
        
        var slider = $(".slides"),
            topbtn = $(".scroll-top"),
            toggleH = (slider.height()/4);
        
        if( offset > toggleH )
        {            
            topbtn.css({
                'opacity' : 1
            });            
        }
        if( offset < toggleH )
        {
            topbtn.css({
                'opacity' : 0
            });         
        }
        
    }
    
    function heroBackground(offset)
    {
        var hero = $("section.hero");
        
        if (offset <= hero.height() )
        {
            
            $("section.hero").css({
                'background-position' : " 0px  -"+ (offset * 8 ) / 5 +"px "
            });

        }
        
    }
    
    $('.slides').superslides({
        hashchange: false,
        slide_speed: 5000,
        pagination: false,
        play: 5000
    });
    
    //  SLIDER NAVIGATION
    $('nav.slides-navigation a').on('click', function(){
        
        if( $(this).hasClass('prev') )
        {
            $('.slides').superslides('animate', 'prev');
        }
        if( $(this).hasClass('next') )
        {
            $('.slides').superslides('animate', 'next');
        }
        
    });
    
    $('.search-toggle').on('click', function(){
        
        var $this = this,
            $menu = $('.menu-container'),
            $logo = $('.logo-container'),
            $search = $('.search-container');
        
        if( $search.hasClass('active') )
        {
            
            $menu.css({
            'opacity' : 1
            });

            $logo.css({
                'opacity' : 1
            });

            $search.css({
                'opacity' : 0,
                'pointer-events' : 'none'
            }).removeClass('active');
            
        }
        else
        {
            
            $menu.css({
            'opacity' : 0
            });

            $logo.css({
                'opacity' : 0
            });

            $search.css({
                'opacity' : 1,
                'pointer-events' : 'all'
            }).addClass('active');
            
        }
        
    }); 
    
    $('.menu-toggle').on('click', function(){
        
        var $this = this,
            $menu = $('.menu-container.mobile');
        
        $menu.toggle();
        
    }); 
    
    $("#carousel").owlCarousel({
 
        autoPlay: 3000,
        stopOnHover : true,
        items : 3,
        responsiveBaseWidth:$("#carousel")

    });
    
    $("#carousel-next").on("click", function(){
        
        var owl = $("#carousel").data('owlCarousel');
        owl.next();
        
    });
    
    $("#contact").submit(function(){
        
        $(this).find("input").each(function(){
            
            
            
        });
        
        return false;
    });
    
    $("#contact input, #contact textarea").focus(function(){
        
        if( $(this).hasClass("error") ){
            $(this).removeClass("error");
            $(this).siblings().css({
                'opacity' : 0
            });
        }
        
    });
    
    $(".scroll-top").on("click", function(){
       
        $('html, body').animate({
            scrollTop : 0
        },800);
        
        return false;
    });
    
    $("#map-coords area").hover(function(){
        
        var i           = $(this).data("info"),
            mapinfo     = $(".map-info"),
            stats_01    = $("[data-stats='1']"),
            stats_02    = $("[data-stats='2']"),
            stats_03    = $("[data-stats='3']");
        
        var info = [
            
            { title : "Paraná"             , sub : "Londrina, Cambé, Rolândia, Arapongas, Guaratuba, Ortigueira" , _1 : 24 , _2 : 02 , _3: 05 },
            { title : "SÃO PAULO"          , sub : "Aparecida, São Paulo, Campinas, Araçariguama, Serra Negra" , _1 : 05 , _2 : 00 , _3: 06 },
            { title : "RIO DE JANEIRO"     , sub : "Rio de Janeiro" , _1 : 00 , _2 : 00 , _3: 02 },
            { title : "MINAS GERAIS"       , sub : "Uberaba" , _1 : 00 , _2 : 01 , _3: 00 },
            { title : "RIO GRANDE DO SUL"  , sub : "Canoas" , _1 : 00 , _2 : 00 , _3: 01 },
            { title : "SANTA CATARINA"     , sub : "Lages" , _1 : 00 , _2 : 00 , _3: 01 },
            { title : "BAHIA"              , sub : "Lauro de Freitas" , _1 : 00 , _2 : 00 , _3: 01 },
            { title : "PARAGUAI"           , sub : "Salto del Guairá" , _1 : 00 , _2 : 00 , _3: 01 }
            
        ];
        
        mapinfo.find("span.title").text( info[i].title );
        mapinfo.find("span.sub").text( info[i].sub );
        stats_01.find("span").text( info[i]._1 );
        stats_02.find("span").text( info[i]._2 );
        stats_03.find("span").text( info[i]._3 );
        
    },function(){});
    
    if( $("#map-coords").length )
    {
        $("#map-coords area[data-info='0']").mouseover();
    }
    
    $(window).scroll(function(){
    
        var offset = $(window).scrollTop();
        
        heroBackground(offset);
        stickyHeader(offset);
        scrollTop(offset);
        
    }).scroll();
    
});