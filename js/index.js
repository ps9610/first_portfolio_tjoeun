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
                $(".go-top").on({
                    click : function(e){
                        e.preventDefault();
                        $("html, body").stop().animate({ scrollTop : $("#header").offset().top },500)
                    }
                })
            })
        },

        section1Fn  :function(){

            var cnt = 0;
            var cnt2 = 0;
            var setId = 0;
            var setId2 = 0;
            
            
            function prevSlideFn(){
                    cnt--;
                    mainPrevSlideFn();
                }
                
            function nextSlideFn(){
                cnt++;
                if(cnt>3){cnt=0}
                mainNextSlideFn();
            }
                    
            function mainNextSlideFn(){
                $(".slide").stop().animate({opacity:1},0).css({zIndex:1})
                $(".slide").eq(cnt==0?3:cnt-1).stop().animate({opacity:1},0).css({zIndex:2})
                $(".slide").eq(cnt).stop().animate({opacity:0},0).animate({opacity:1},500).css({zIndex:3})
                console.log( cnt )
                pageFn(cnt);
            }
            function mainPrevSlideFn(){
                $(".slide").stop().animate({opacity:0},0).css({zIndex:1})
                $(".slide").eq(cnt).stop().animate({opacity:1},0).css({zIndex:2})                         
                $(".slide").eq(cnt==3?0:cnt+1).stop().animate({opacity:1},0).animate({opacity:0},500).css({zIndex:3})
                console.log( cnt )
                pageFn(cnt);
            }
            
            $(".next-btn").on({
                click : function(){
                    if(!$(".slide").is(":animated")){
                        nextSlideFn();
                        timerControlFn();
                    }
                }
            })

            $(".prev-btn").on({
                click : function(){
                    if(!$(".slide").is(":animated")){
                        prevSlideFn();
                        timerControlFn();
                    }
                }
            })

            function initFn(){
                setId = setInterval(nextSlideFn,5000)
            }
            initFn();

            function pageFn(z){
                z>3? z=0:z;
                $(".page").removeClass("addPage")
                $(".page").eq(z).addClass("addPage")
                console.log(z);
            }

            $(".page").each(function(index){
                $(this).on({
                    click : function(){
                        cnt = index;
                        mainPrevSlideFn();
                        mainNextSlideFn();
                        timerControlFn();
                    }
                })
            })
            function timerControlFn(){
                clearInterval(setId);
                clearInterval(setId2);
                $(".play-pause-btn").addClass("addPlay");

                //멈춘 상태에서 5초뒤 실행
                setId2 = setInterval(function(){
                        cnt2++;
                        if(cnt2>4){
                            nextSlideFn();
                            $(this).removeClass("addPlay");
                            clearInterval(setId2);
                            initFn();
                        }
                    console.log(cnt2)
                    }
                    ,1000)
            }
            $(".play-pause-btn").on({
                click : function(){
                    var x = null;
                    x = $(this).hasClass("addPlay"); // hasClass는 논리형
                    if(x==false){
                        $(this).addClass("addPlay");
                        clearInterval(setId);
                }
                else if(x==true){
                    nextSlideFn();
                    clearInterval(setId);
                    clearInterval(setId2);
                    $(this).removeClass("addPlay");
                    initFn();
                }
                }
            })
        },

        section2Fn  :function(){},
        section3Fn  :function(){
            
            var cnt = -1;
            var t = 0;
            var s1H = $("#section1").offset().top;

            //parallax scrolling
            function initS3Title(){
                $("#section3 .title-wrap").stop().animate({ top:38, opacity:0 },0)
                $("#section3 .photo-wrap").stop().animate({ top:25, opacity:0 },0)
            }
            function animateS3Title(){
                $("#section3 .title-wrap").stop().animate({ top:-8, opacity:1 },500)
                $("#section3 .photo-wrap").stop().animate({ top:0, opacity:1 },700)
            }

            $(window).scroll(function(){
                if( $(this).scrollTop() >= s1H ){ 
                    if( t=0 ){ t= 1; }
                    animateS3Title();
                }
                if( $(this).scrollTop() < s1H ){ 
                    if( t = 1 ){ t=0; }
                    initS3Title();
                }
            })

            setInterval(rollingFn,3000);
            
            function rollingFn(){
                cnt++;
                if(cnt>3){cnt=0};

                $(".notice-content ul").stop().animate({top:24},0);
                $(".notice-content ul").eq(cnt).stop().animate({top:0},0);
                $(".notice-content ul").eq(cnt==3?0:cnt+1).stop().animate({top:24},0).animate({top:0},1000);
            }

        },
        section4Fn  :function(){
            $(window).scroll(function(){
                var t=0;
                var S3PhotoH = $("#section3 .photo-wrap").offset().top
                if( $(this).scrollTop() >= S3PhotoH ){
                    if(t=0){t=1}
                    $("#section4").stop().animate({ top:0, opacity:1 },600)
                }
                if( $(this).scrollTop() < S3PhotoH ){
                    if(t=1){t=0}
                    $("#section4").stop().animate({ top:30, opacity:0 },0)
                } 
            })
        },
        section5Fn  :function(){
            var t=0;
            var S3PhotoH = $("#section3 .photo-wrap").offset().top
            $(window).scroll(function(){
                if( $(this).scrollTop() >= S3PhotoH+450 ){
                    if(t=0){t=1}
                    $("#section5 h2").stop().animate({top:0, opacity:1},600)
                    $("#section5 span").stop().animate({top:0, opacity:1},900)
                }
                if( $(this).scrollTop() < S3PhotoH+450 ){
                    if(t=1){t=0}
                    $("#section5 h2").stop().animate({top:30, opacity:0},0)
                    $("#section5 span").stop().animate({top:45, opacity:0},0)
                }
            })
        },
        footerFn    :function(){},

}

hotel.init();    

})(window,document,jQuery);