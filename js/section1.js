;(function(window,document,$,undefinded){
    var cnt = 0;

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
    };

    function fadeSlideFn(){
        $(".slide-wrap").stop().animate({ opacity:0.7 },0,function(){
            if(cnt<0){
                cnt=4;
            }
            if(cnt>4){
                cnt=0;
            }
            $(".slide-wrap").stop().animate({ opacity:1 }, 700)
        })    
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
    

})(window,document,jQuery);