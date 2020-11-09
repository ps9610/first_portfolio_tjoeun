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

            var cnt = -1;
            var setId = 0;

            function nextSlideFn(){
                cnt++;
                if(cnt>4){cnt=0};
                mainNextSlideFn();
            };

            function prevSlideFn(){
                cnt--;
                if(cnt<0){cnt=4};
                mainPrevSlideFn();
            };            

            function mainNextSlideFn(){
                $(".slide").css({ zIndex : 1 }).stop().animate({ opacity:1 },0)
                $(".slide").eq( cnt ).css({ zIndex : 3 }).stop().animate({ opacity:0 },1000)         //  0   1   2  3   4   (5)0
                console.log(cnt)
                $(".slide").eq( cnt==4? 0:cnt+1 ).css({ zIndex : 2 }).stop().animate({ opacity:1 },0)//  1   2   3  4  (5)0   1
                console.log(cnt)
                pageBtnFn(cnt);
            }
            function mainPrevSlideFn(){
                $(".slide").css({ zIndex : 1 }).stop().animate({ opacity:1 },0)
                $(".slide").eq( cnt==4? 0:cnt+1 ).css({ zIndex : 3 }).stop().animate({ opacity:0 },1000)         //  0   4   3   2   1   0
                console.log(cnt+1)
                $(".slide").eq( cnt ).css({ zIndex : 2 }).stop().animate({ opacity:1 },0)//  4   3   2   1   0   4
                console.log(cnt)
            }
            
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
                        mainNextSlideFn();
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