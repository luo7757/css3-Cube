$(function(){
    var num = 0;
    var str = '';
    $('.item').map(function(){
        num ++;
        var c1 = ~~(Math.random() * 255);
        var c2 = ~~(Math.random() * 255);
        var c3 = ~~(Math.random() * 255);
        str += ` .item:nth-of-type(${num}) div{
            background : rgb(${c1},${c2},${c3}) url(img/${num}.png) no-repeat center;
        }`;
        $('style').html(str);
    })

    var dirArr = ['rotateX(-180deg)','rotateY(-180deg)','rotateX(180deg)','rotateY(180deg)'];
    $('.item').on('mouseenter',function(e){
        // getDir计算进入的方向 返回0，1，2，3四个值
        // 0(top)   1(right)  2(bottom)   3(left) 
        // console.log($(e).offsetWidth())
        var d = getDir(e,this);
        console.log($(this))
        $(this).css({
            'transform' : 'translateZ(150px)' + dirArr[d]
        })
        var c1 = ~~(Math.random() * 255);
        var c2 = ~~(Math.random() * 255);
        var c3 = ~~(Math.random() * 255);
        $('body').css({
            'background-color' : `rgb(${c1},${c2},${c3})`
        })
    }).on('mouseleave',function(){
        $(this).css({
            transform : ''
        })
    })

    function getDir(e,box){
        // console.log(e);
        var w = box.offsetWidth;
        var h = box.offsetHeight;
        var l = box.getBoundingClientRect().left;
        var t = box.getBoundingClientRect().top;
        var x = e.clientX - l - w / 2;
        var y = e.clientY - t - h / 2;
        // console.log(x,y)

        var deg = Math.atan2(y,x) / (Math.PI / 180);
        var d = (Math.round((deg + 180) / 90) + 3) % 4;
        return d;
    }

    $(document).on('mousemove',function(e){
        var x = (0.5 - e.clientY / window.innerHeight) * 15;
        var y = (e.clientX / window.innerWidth - 0.5) * 15; 
        $('.wrapper').css({

            transform : `rotateX(${x}deg) rotateY(${y}deg)`
        })
    })
})