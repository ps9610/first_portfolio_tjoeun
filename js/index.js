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

            $(".langKo").on({
                click : function(){
                    $("#header ul").addClass(".addLang")
                    $(".addLang").css("visibility","visible") }
            });

            $(".L-korea a ").on({
                click : function(){
                    $("#header ul").removeClass(".addLang")
                    $(".addLang").css("visibility","hidden") }
            });
        },

        section1Fn  :function(){

            var cnt = -1;
            var setId = 0;

            setTimeout(initFn,100)

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
                $(".slide").eq( cnt ).css({ zIndex : 3 }).stop().animate({ opacity:0 },800)
                $(".slide").eq( cnt==4? 0:cnt+1 ).css({ zIndex : 2 }).stop().animate({ opacity:1 },0)
                pageBtnFn(cnt+1);
            }
            function mainPrevSlideFn(){
                $(".slide").css({ zIndex : 1 }).stop().animate({ opacity:1 },0)
                $(".slide").eq( cnt==4? 0:cnt+1 ).css({ zIndex : 3 }).stop().animate({ opacity:0 },800)
                $(".slide").eq( cnt ).css({ zIndex : 2 }).stop().animate({ opacity:1 },0)
                pageBtnFn(cnt);
            }
            
             $(".prev-btn").on({
                click:function(){ 
                    if( !$(".slide-wrap").is(":animated") ){ 
                        prevSlideFn(); 
                        clearInterval(setId);
                    } 
                }
            });
            
            $(".next-btn").on({
                click:function(){
                    if( !$(".slide-wrap").is(":animated") ){ 
                        nextSlideFn(); 
                        clearInterval(setId);
                    }
                }
            });

            function initFn(){ 
                setId = setInterval(nextSlideFn,5000) }
            //initFn();

            $(".page-btn").each(function(index){
                $(this).on({
                    click : function(){
                        cnt == index;
                        nextSlideFn();
                        console.log(index)
                        //clearInterval(setId);
                    }
                })
            });

            function pageBtnFn(z){
                z>4? z=0 : z;
                $(".page").removeClass("addPage");
                $(".page").eq(z).addClass("addPage");
            }
//.play-pause-btn {display:block;width:9px;height:12px;background:url(../img/main_prom_stop.png) no-repeat 50% 50%;}
//.play-pause-btn.addPlay {background-image:url(../img/main_prom_play.png);}

            var t = 0;

            $(".play-pause-btn").on({
                click : function(){
                    if(t == 0){
                        $(this).addClass("addPlay");
                        t = 1;
                        //setInterval 멈추는 clearInterval 설정 = 
                    clearInterval(setId);
                    }
                    else if (t == 1){
                        $(this).removeClass("addPlay");
                        t = 0;
                        initFn();
                    }
                }
            })
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