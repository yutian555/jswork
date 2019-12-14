function animate(obj, option) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var flag = true;
        for(var k in option) {
        
        var leader = option[k];
        var target = option[k];
        var step = (target - leader) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;
        obj.style[k] = leader + 'px';
        if (leader != target) {
            flag = false;
        }
        }
        if(flag){
            clearInterval(obj, timer);
        }
    }, 15);
}
function getStyle(obj, Attr){
                if (window,getComputedStyle){
                    return window.getComputedStyle(obj, null)[Attr];
                }else{
                    return obj.currenStyle[attr];
                }
            }
            var obj = document.getElementById('box');
obj.onclick = function() {
    animate(obj, {'left':200, 'top': 50});
};