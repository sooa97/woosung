//section.news
$(function(){
    $('.news .list').slick({
        autoplay: true,
        infinite: true,
        autoplaySpeed: 4000,
        speed: 1000,
        slidesToShow: 3,
        arrows: true,
        responsive: [
            {  
              breakpoint: 1399, //화면 사이즈
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              } 
            },
            {  
                breakpoint: 700, //화면 사이즈
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                } 
              }
        ]
    });
});

//section.farm
$(function(){
    $('.slide').slick({
        autoplay: true,
        infinite: true,
        autoplaySpeed: 4000,
        speed: 1000
    });
});

//header
$(function(){
    var scrollNum=0;
            scrollNum=$(document).scrollTop();
            fixHeader();

            function fixHeader(){
                if(scrollNum>150){
                    $(".innerheader").addClass("on");
                } else{
                    $(".innerheader").removeClass("on");
                }
            };

             //윈도우 창 조절 시 이벤트
            $(window).on('scroll resize',function(){
                scrollNum=$(document).scrollTop();
                fixHeader();
            });
});

//submenu.open
$(function(){
    setGnb();

    function setGnb(){
        $('.gnb a').on("mouseenter focus",function(){
            $(".innerheader").addClass("on");
            $(".subMenu").addClass("on");
        });
        $("header").on("mouseleave",function(){
            $(".innerheader").removeClass("on");
            $(".subMenu").removeClass("on");
        });
    };
});