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

            function prevSlideFn(){
                cnt--;
                mainSlideFn();
            };            

            function nextSlideFn(){
                cnt++;
                mainSlideFn();
            };
            
            function mainSlideFn(){
/*                 $(".slide-wrap").stop().animate({ left:-1920*cnt },0,function(){
                    if(cnt<0){cnt=3;}
                    if(cnt>3){cnt=0;}
                    $(".slide-wrap").stop().animate({ left:-1920*cnt },0)
                }) */
                $(".slide-wrap li").eq(cnt).css({ zIndex:1 }).stop().animate({ opacity:0 },500,function(){
                    if(cnt<0){cnt=3;}
                    if(cnt>3){cnt=0;}
                    $(".slide-wrap li").eq(cnt).css({ zIndex:2 }).stop().animate({ opacity:1 },0)
                })
                pageBtnFn(cnt);
            }

//#main #section1 .slide-container .slide-view .slide-wrap li:nth-child(1){z-index:1;}
//#main #section1 .slide-container .slide-view .slide-wrap li:nth-child(2){z-index:2;opacity:0;transform:opacity .5;}
//#main #section1 .slide-container .slide-view .slide-wrap li:nth-child(3){z-index:1;opacity:1;}
//#main #section1 .slide-container .slide-view .slide-wrap li:nth-child(4){z-index:1;}

// 필요한 변수 : nth-child (cnt) cnt 1 2 3 4 5
// cnt번째 슬라이드가 opacity 1일때, 나머지 슬라이드는 opacity 0으로 설정한다
// each 함수 사용

            // cnt++; //증감수라서 처음이 -1로 시작해야 0부터 나옴
            // if(cnt > 3){
            //     cnt = -1; //마지막 슬라이드를 0으로 셋팅, (마지막이전 마지막)
            // }
            // $(".notice-list li").stop().animate({top:24/* css에서 li top값이 24니까} */},0).css({zIndex:2}); //롤링 대상이 되는 요소를 앞에 쓰면됨
            // //👆 모두 초기화 24픽셀 아래에서 대기
            // $(".notice-list li").eq(cnt<0? 4:cnt).stop().animate({top:0},0)/* 기다리는 요소들은 무조건 0초해야 일시정지함 */.css({zIndex:1}); //롤링 대상이 되는 요소를 앞에 쓰면됨
            // //👆 첫번째만 화면에서 대기
            // $(".notice-list li").eq(cnt+1).stop().animate({top:24},0)/* top 24에서 일시정지 */.animate({top:0},1000/* 올라오는데 걸리는 시간 1초 */).css({zIndex:3}); //롤링 대상이 되는 요소를 앞에 쓰면됨
            // //👆 24픽셀 아래에서 위로 부드럽게 올라온다.

            // function fadeSlideFn(){
            //     $(".slide-wrap").(400,function(){
            //         if(cnt<0){cnt=4;}
            //         if(cnt>4){cnt=0;}
            //         $(".slide-wrap").hide(400,"swing")
            //     })
            // }   

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
                    }
                })
            });

            function pageBtnFn(z){
                z>3? z=0 : z;
                $(".page").removeClass("addPage");
                $(".page").eq(z).addClass("addPage");
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