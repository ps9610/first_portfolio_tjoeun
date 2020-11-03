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

            // function mainSlideFn(){
            //     $(".slide-wrap").stop().animate({ left:-1920*cnt },0,function(){
            //         if(cnt<0){cnt=4;}
            //         if(cnt>4){cnt=0;}
            //         $(".slide-wrap").stop().animate({ left:-1920*cnt },0)
            //     })
            //     pageBtnFn(cnt);
            // }

            function mainSlideFn(){
                $(".slide-wrap").css({ zIndex:cnt+1 },0,function(){
                    if(cnt<0){cnt=4;}
                    if(cnt>4){cnt=0;}
                    $(".slide-wrap").stop().animate({ left:-1920*cnt },0)
                })
                pageBtnFn(cnt);
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