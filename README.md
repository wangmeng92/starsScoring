# starsScoring
简单易懂 星星评分插件，可任意设置星星数量及初始分数

$('.stars02').stars({
    starsNum: 6,
    initNum: 1,
    returnFraction: function( frac ){
        console.log( frac );
    }
});

starsNum: 星星数量
initNum: 初始化分数
returnFraction(): 返回最终分数
