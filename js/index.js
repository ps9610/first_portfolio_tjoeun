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
                cnt++;
                mainSlideFn();
                //fadeSlideFn();
            };            

            function nextSlideFn(){
                cnt--;
                mainSlideFn();
                //fadeSlideFn();
            };          

            // function mainSlideFn(){
            //     $(".slide-wrap").stop().animate({ left:-1920*cnt },0,function(){
            //         if(cnt<0){cnt=4;}
            //         if(cnt>4){cnt=0;}
            //         $(".slide-wrap").stop().animate({ left:-1920*cnt },0)
            //     })
            //     pageBtnFn(cnt);
            // }

//.slide-wrap li:nth-child(5) {opacity:1;}
//.slide-wrap li:nth-child(4) {opacity:0;}
//.slide-wrap li:nth-child(3) {opacity:0;}
//.slide-wrap li:nth-child(2) {opacity:0;}
//.slide-wrap li:nth-child(1) {opacity:0;}

//.slide-wrap li:nth-child(5) {opacity:0;}
//.slide-wrap li:nth-child(4) {opacity:1;}
//.slide-wrap li:nth-child(3) {opacity:0;}
//.slide-wrap li:nth-child(2) {opacity:0;}
//.slide-wrap li:nth-child(1) {opacity:0;}
 
//.slide-wrap li:nth-child(5) {opacity:0;}
//.slide-wrap li:nth-child(4) {opacity:0;}
//.slide-wrap li:nth-child(3) {opacity:1;}
//.slide-wrap li:nth-child(2) {opacity:0;}
//.slide-wrap li:nth-child(1) {opacity:0;}

//.slide-wrap li:nth-child(5) {opacity:0;}
//.slide-wrap li:nth-child(4) {opacity:0;}
//.slide-wrap li:nth-child(3) {opacity:0;}
//.slide-wrap li:nth-child(2) {opacity:1;}
//.slide-wrap li:nth-child(1) {opacity:0;}

//.slide-wrap li:nth-child(5) {opacity:0;}
//.slide-wrap li:nth-child(4) {opacity:0;}
//.slide-wrap li:nth-child(3) {opacity:0;}
//.slide-wrap li:nth-child(2) {opacity:0;}
//.slide-wrap li:nth-child(1) {opacity:1;}

// 필요한 변수 : nth-child (cnt) cnt 1 2 3 4 5
// cnt번째 슬라이드가 opacity 1일때, 나머지 슬라이드는 opacity 0으로 설정한다
// each 함수 사용

                function mainSlideFn(){
                    cnt = 5;
                    $(".slide-wrap lix").each(function(cnt){
                        cnt<0? cnt=4 : cnt;
                        cnt>4? cnt=0 : cnt;
                    })
                
                //pageBtnFn(cnt);
            }

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

            /*$(".page").each(function(index){
                $(this).on({
                    click : function(){
                        cnt = index;
                        mainSlideFn();
                    }
                })
            });

            function pageBtnFn(z){
                z<0? z=5 : z;
                $(".page").removeClass("addPage");
                $(".page").eq(z).addClass("addPage");
            }*/

            
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