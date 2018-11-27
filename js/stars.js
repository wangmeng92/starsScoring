
(function ($) {
    $.fn.stars = function( data ){
        var option = {
            starsNum: 5,
            initNum: 0,
            returnFraction: function(){}
        };
        $.extend(option, data);

        var _view = $(this).find(".wm-view");
        initStarsFun(option.starsNum);

        var _stars = $(this).find(".wm-stars");
        forDom(option.initNum);

        _stars.click(function(){
            var index = $(this).attr("index") * 1 + 1;
            forDom(index);
        });
        
        function initStarsFun( stars ){
            var htmlVal = "";
            for(var i=0; i<stars; i++){
                htmlVal += '<div class="wm-stars wm-gray" index="' + i + '"></div>';
            }
            _view.html( htmlVal );
        };
        function forDom(num){
            _stars.each(function(index,element){
                if(index < num){
                    _stars.eq(index).removeClass("wm-gray");
                    _stars.eq(index).addClass("wm-yellow");
                }else{
                    _stars.eq(index).removeClass("wm-yellow");
                    _stars.eq(index).addClass("wm-gray");
                }
            });
            
            var starsFinish = option.returnFraction;
            starsFinish.call( this, num );
        };
    }
})(window.jQuery)
