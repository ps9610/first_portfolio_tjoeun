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

        },
        section1Fn  :function(){

            var cnt = 0;
            var setId = 0;
        
            function prevSlideFn(){
                cnt--;
                mainSlideFn();
                fadeSlideFn();
            };
            
            function nextSlideFn(){
                cnt++;
                mainSlideFn();
                fadeSlideFn();
            };
            
            function mainSlideFn(){
                $(".slide-wrap").stop().animate({ left:-1920*cnt },0,function(){
                    if(cnt<0){
                        cnt=4;
                    }
                    if(cnt>4){
                        cnt=0;
                    }
                    // $(".slide-wrap").stop().animate({ left:-1920*cnt },0)
                })
                pageBtnFn(cnt);
            };
            
            // function fadeSlideFn(){
            //     // $(".slide-wrap").stop().animate({ opacity:0.7 },0,"easeinCirc",function(){
            //     $(".slide-wrap").fadeOut(0,function(){
            //         if(cnt<0){
            //             cnt=4;
            //         }
            //         if(cnt>4){
            //             cnt=0;
            //         }
            //     $(".slide-wrap").fadeIn(300)
            //         // $(".slide-wrap").stop().animate({ opacity:1 },1100)
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

        function initFn(){
            setId = setInterval(nextSlideFn,5000);
        }
        initFn();

        $(".page").each(function(index){
            $(this).on({
                click : function(){
                    cnt = index;
                    mainSlideFn();
                }
            })
        });

        function pageBtnFn(z){
            z>4? z=0 : z;
        $(".page").removeClass("addPage");
        $(".page").eq(z).addClass("addPage");
        }

        $(".play-pause-btn").on({
            click : function(){
                var t=0;

                    if(t == 0){
                        t=1;
                        $(this).addClass("addPlay");
                    }
                    if( t == 1){
                        t=0;
                        $(this).removeClass("addPlay");
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