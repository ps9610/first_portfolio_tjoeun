;(function(window,document,$,undefinded){
    var hotel = {

        init        :function(){

            var that = this;
            that.headerFn();
            that.section1Fn();
            that.section2Fn();
            that.section3Fn();
            that.section4Fn();
            that.section5Fn();
            that.section6Fn();
            that.section7Fn();
            that.footerFn();
        },

        headerFn    :function(){
            //#header .wrap .h-right .row1 .language
            // 헤더의 langKo 박스를 클릭하면 addclass된다.
            
            $(".langKo").on({
                click : function(){
                    $("#header ul").addClass(".addLang");
                    $(".addLang").css("visibility","visible");
                }
            });
            $(".L-korea a ").on({
                click : function(){
                    $("#header ul").removeClass(".addLang");
                    $(".addLang").css("visibility","hidden");
                }
            })
        },

        section1Fn  :function(){

            var cnt = 0;
            var setId = 0;

            function nextSlideFn(){
                cnt++;
                mainSlideFn();
            };

            function prevSlideFn(){
                cnt--;
                mainSlideFn();
            };            

            function mainSlideFn(){
/*                 $(".slide-wrap").stop().animate({ left:-1920*cnt },0,function(){
                    if(cnt<0){cnt=3;}
                    if(cnt>3){cnt=0;}
                    $(".slide-wrap").stop().animate({ left:-1920*cnt },0)
                }) */
                $(".slide-wrap li").eq(cnt).css({ zIndex:1 }).stop().animate({ opacity:0 },0,function(){
                    if( cnt>4 ){ cnt=0; }
                    if( cnt<0 ){ cnt=4; }
                    $(".slide-wrap li").eq(cnt).css({ zIndex:2 }).stop().animate({ opacity:1 },500)
                    console.log(cnt);
                })
                pageBtnFn(cnt);
            }

//#main #section1 .slide-container .slide-view .slide-wrap li:nth-child(1){z-index:1;}
//#main #section1 .slide-container .slide-view .slide-wrap li:nth-child(2){z-index:2;opacity:0;transform:opacity .5;}
//#main #section1 .slide-container .slide-view .slide-wrap li:nth-child(3){z-index:1;opacity:1;}
//#main #section1 .slide-container .slide-view .slide-wrap li:nth-child(4){z-index:1;}

            $(".prev-btn").on({
                click:function(){
                    if( !$(".slide-wrap").is(":animated") ){
                        prevSlideFn();
                    }
                }
            });
            
            $(".next-btn").on({
                click:function(){
                    if( !$(".slide-wrap").is(":animated") ){
                        nextSlideFn();
                    }
                }
            });

            // function initFn(){
            //     setId = setInterval(nextSlideFn,5000);
            // }

            // initFn();

            $(".page").each(function(index){
                $(this).on({
                    click : function(){
                        cnt = index;
                        mainSlideFn();
                        //console.log(cnt);
                    }
                })
            });

            function pageBtnFn(z){
                z>4? z=0 : z;
                $(".page").removeClass("addPage");
                $(".page").eq(z).addClass("addPage");
                console.log(z);
            }  
        },

        section2Fn  :function(){},
        section3Fn  :function(){},
        section4Fn  :function(){},
        section5Fn  :function(){},
        section6Fn  :function(){},
        section7Fn  :function(){},
        footerFn    :function(){}
}

hotel.init();    

})(window,document,jQuery);