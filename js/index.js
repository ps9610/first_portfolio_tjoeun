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

            $(".find-h").on({
                click : function(){
                    $("html").addClass("addModal");
                    $(".modal").show();
                    $(".modal-bg").show()
                }
            })
            $(".close").on({
                click : function(){
                    $("html").removeClass("addModal");
                    $(".modal").hide();
                    $(".modal-bg").hide();
                }
            })
            //go-top btn
            $(window).scroll(function(){
                if( $(this).scrollTop()>=30 ){
                    $(".go-top").addClass("addGotop");
                    $(".quick").stop().animate({opacity:1},300);
                }
                else{
                    $(".go-top").removeClass("addGotop");
                    $(".quick").stop().animate({opacity:0},0);

                }
            })
        },

        section1Fn  :function(){

            var cnt = 0;
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
                //다음 슬라이드가 현재 슬라이드(z-index:2)를 덮어 없앤다. fadeIn
                $(".slide").css({ zIndex : 1 }).stop().animate({ opacity:1 },0)
                $(".slide").eq( cnt==0? 4:cnt-1  /* 4 3 2 1 0 4 */ ).css({ zIndex : 2 })
                $(".slide").eq( cnt             /* 0 4 3 2 1 0*/ ).css({ zIndex : 3 }).stop().animate({ opacity:1 },0).animate({ opacity:0 },800) 
                // 현재 슬라이드 : cnt-1
                // 원래 있던 슬라이드 opacity=1,가 천천히 사라짐 opacity:0; = 있었는데 없어지게함
                // slide는 가장 나중에 배치한 4번부터 4 3 2 1 0의 순서로 zIndex 되어있음
                // 슬라이드 0번이 있었는데 사라지고 4번이 나타남
                // 슬라이드 4번이 있었는데 사라지고 3번이 나타남
                // 슬라이드 3번이 있었는데 사라지고 2번이 나타남
                // 슬라이드 2번이 있었는데 사라지고 1번이 나타남
                // 슬라이드 1번이 있었는데 사라지고 0번이 나타남
                pageBtnFn(cnt);
            }
            function mainPrevSlideFn(){
                //현재 슬라이드가 걷어지고 이전 슬라이드가 나타난다. fadeOut
                $(".slide").css({ zIndex : 1 }).stop().animate({ opacity:1 },0)
                $(".slide").eq( cnt /* 0 4 3 2 1 0 */ ).css({ zIndex : 2 })
                $(".slide").eq( cnt==4? 0:cnt+1 /* 4 3 2 1 0 4 */ ).css({ zIndex : 3 }).stop().animate({ opacity:0 },0).animate({ opacity:1 },800) 
                //지금 현재 보이는 슬라이드는 cnt-1, cnt의 opacity가 1이 되면서 cnt번, 현재 슬라이드가 없어지고 opacity=0;
                // slide는 가장 나중에 배치한 4번부터 4 3 2 1 0의 순서로 zIndex 되어있음
                // css에서 z-index 순서 조절 -> 0 4 3 2 1로 포개져있음 (초기화상태)
                // 슬라이드 1번을 보고싶으면(zIndex=2, zIndex=3으로 하면 opacity때문에 없어짐) 2번을 1번 위로 놓고 없어지게 해야 1번이 보임
                // 슬라이드 2번을 보고싶으면(zIndex=2, zIndex=3으로 하면 opacity때문에 없어짐) 3번을 2번 위로 놓고 없어지게 해야 2번이 보임
                // 슬라이드 3번을 보고싶으면(zIndex=2, zIndex=3으로 하면 opacity때문에 없어짐) 4번을 3번 위로 놓고 없어지게 해야 3번이 보임
                // 슬라이드 4번을 보고싶으면(zIndex=2, zIndex=3으로 하면 opacity때문에 없어짐) 0번을 4번 위로 놓고 없어지게 해야 4번이 보임
                // 슬라이드 0번을 보고싶으면(zIndex=2, zIndex=3으로 하면 opacity때문에 없어짐) 1번을 0번 위로 놓고 없어지게 해야 0번이 보임
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

            $(".page").each(function(index){
                $(this).on({
                    click : function(){
                        cnt=index;
                        nextSlideFn();
                        console.log(cnt)
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
        section3Fn  :function(){
            var t = 0;
            var s1H = $("#section1").offset().top;
            //console.log(s1H) = 90
            function initS3Title(){
                $("#section3 .title-wrap").stop().animate({ opacity:1 },500)
                $("#section3 .photo-wrap").stop().animate({ opacity:1 },500)
                $("#section3 .title-wrap").stop().animate({ top:-20 },500)
                //$("#section3 .title-wrap").offset().top-20;
            }
            function animateS3Title(){
                $("#section3 .title-wrap").stop().animate({ opacity:0 },0)
                $("#section3 .photo-wrap").stop().animate({ opacity:0 },0)
                $("#section3 .title-wrap").stop().animate({ top:0 });
                //$("#section3 .title-wrap").offset().top+0;
            }

            $(window).scroll(function(){
                if( $(this).scrollTop() >= s1H ){ 
                    if( t = 0 ){
                        // console.log( $("#section3 .title-wrap").offset().top); 886
                        t = 1;
                        initS3Title();

                    }
                }
                if( $(this).scrollTop() < s1H ){ 
                    if( t = 1 ){
                        // console.log( $("#section3 .title-wrap").offset().top); 886
                        t = 0;
                        animateS3Title();
                    }
                }
            })
        },
        section4Fn  :function(){},
        section5Fn  :function(){},
        section6Fn  :function(){},
        section7Fn  :function(){},
        footerFn    :function(){},

}

hotel.init();    

})(window,document,jQuery);