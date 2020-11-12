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
            var setId = 0;
            
            
            function prevSlideFn(){
                    cnt--;
                    if(cnt<0){cnt=3}
                    if(cnt+1>3){cnt=0}
                    if (cnt<0){cnt=3}
                    //if(cnt-1<0){cnt-1==3}
                    mainPrevSlideFn();
                }
                
                function nextSlideFn(){
                    cnt++;
                    if(cnt-1<0){cnt=3}
                    if(cnt>3){cnt=0}
                    mainNextSlideFn();
                    }
                //$(".slide").eq(3).stop().animate({opacity:1},0).css({zIndex:2})
                //$(".slide").eq(0).stop().animate({opacity:1},2000).css({zIndex:3})
    
                //$(".slide").eq(0).stop().animate({opacity:1},0).css({zIndex:2})
                //$(".slide").eq(1).stop().animate({opacity:1},2000).css({zIndex:3})
                
                //$(".slide").eq(1).stop().animate({opacity:1},0).css({zIndex:2})
                //$(".slide").eq(2).stop().animate({opacity:1},2000).css({zIndex:3})
                
                //$(".slide").eq(2).stop().animate({opacity:1},0).css({zIndex:2})
                //$(".slide").eq(3).stop().animate({opacity:1},2000).css({zIndex:3})
                    
                    // .slide-wrap .slide3 {z-index:2;opacity:0;}
                    // .slide-wrap .slide0 {z-index:3;opacity:1;}
                function mainNextSlideFn(){
                    $(".slide").stop().animate({opacity:0},0).css({zIndex:1})
                    $(".slide").eq(cnt).stop().animate({opacity:1},0).css({zIndex:2})    
                    $(".slide").eq(cnt+1).stop().animate({opacity:1},500).css({zIndex:3})
                    //console.log( cnt )
                    pageFn(cnt);
                    
                    //$(".slide").eq(3).stop().animate({opacity:1},0).css({zIndex:2})
                }
                //mainNextSlideFn();

                // setInterval(prevSlideFn,1000);
                 setTimeout(prevSlideFn,1000);

                function mainPrevSlideFn(){
                    $(".slide").stop().animate({opacity:0},0).css({zIndex:1})
                    $(".slide").eq(cnt).stop().animate({opacity:1},0).css({zIndex:2})                         
                    $(".slide").eq(cnt).stop().animate({opacity:1},0).animate({opacity:0},500).css({zIndex:3})
                    // 3 2 1 0 3 2 1
                    console.log( cnt )
                    //pageFn(cnt);
                    }   
                    // 3 6 5 4  3 6 5 4  3 ... 6=2 5=1 4=0 
                    // 0 3 2 1  0 3 2 1  0 ...
                    
                    // 3 
                    // 0 3



                    //$(".slide").eq(3).stop().animate({opacity:1},0).css({zIndex:2})
                    //$(".slide").eq(0).stop().animate({opacity:1},2000).css({zIndex:3})
                    
                    //$(".slide").eq(2).stop().animate({opacity:1},0).css({zIndex:2})
                    //$(".slide").eq(3).stop().animate({opacity:1},2000).css({zIndex:3})
                    
                    //$(".slide").eq(1).stop().animate({opacity:1},0).css({zIndex:2})
                    //$(".slide").eq(2).stop().animate({opacity:1},2000).css({zIndex:3})
                    
                    //$(".slide").eq(0).stop().animate({opacity:1},0).css({zIndex:2})
                    //$(".slide").eq(1).stop().animate({opacity:1},2000).css({zIndex:3})

            $(".next-btn").on({
                click : function(){
                    if(!$(".slide").is(":animated")){
                        nextSlideFn();
                    }
                }
            })

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
                        mainSlideFn();
                    }
                })
            })
        },

        section2Fn  :function(){},
        section3Fn  :function(){
            
            var cnt = -1;
            var t = 0;
            var s1H = $("#section1").offset().top;
            //console.log(s1H) = 90
            //parallax scrolling
            //스크롤이 s1H의 값을 가질때 제자리로 오는거니까 초기값은 멀어져있는게 맞음
            function initS3Title(){
                $("#section3 .title-wrap").stop().animate({ top:38, opacity:0 },0)
                $("#section3 .photo-wrap").stop().animate({ top:25, opacity:0 },0)
                //$("#section3 .title-wrap").offset().top+0;
            }
            function animateS3Title(){
                $("#section3 .title-wrap").stop().animate({ top:-8, opacity:1 },500)
                $("#section3 .photo-wrap").stop().animate({ top:0, opacity:1 },700)
                //$("#section3 .title-wrap").offset().top-20;
            }

            $(window).scroll(function(){
                if( $(this).scrollTop() >= s1H ){ 
                    if( t=0 ){ t= 1; }
                    animateS3Title();
                    //console.log( s1H );
                }
                if( $(this).scrollTop() < s1H ){ 
                    if( t = 1 ){ t=0; }
                    // console.log( $("#section3 .title-wrap").offset().top); 886
                    initS3Title();
                }
            })

            setInterval(rollingFn,3000);
            //setTimeout(rollingFn,1000);
            
            function rollingFn(){
                cnt++;
                if(cnt>3){cnt=0};
                // .notice-content > ul:nth-child(4) {top:0px;}
                // $(".notice-content ul").stop().animate({top:24},0).css({zIndex:2});
                // $(".notice-content ul").eq(cnt).stop().animate({top:0},0).css({zIndex:1});
                // $(".notice-content ul").eq(cnt==3?0:cnt+1).stop().animate({top:24},0).animate({top:0},1000).css({zIndex:3});
                $(".notice-content ul").stop().animate({top:24},0);
                $(".notice-content ul").eq(cnt).stop().animate({top:0},0);
                $(".notice-content ul").eq(cnt==3?0:cnt+1).stop().animate({top:24},0).animate({top:0},1000);
                // eq(0) (1) (2) (3) (0) cnt>3?0:cnt
                // eq(1) (2) (3) (0) (1) cnt==3?0:cnt+1
                //console.log(cnt);   
            }
            // rollingFn();
            // rollingFn();
            // rollingFn();
            // rollingFn();

            //롤링 애니메이션 짤 때는 꼭 backgroundColor 설정해주고 zIndex 설정 해주기

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
            //console.log( $("#section3 .photo-wrap").offset().top )
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