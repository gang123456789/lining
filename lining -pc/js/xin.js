window.onload = function(){
    /* onload 事件会在整个页面或图像加载完成后立即发生。 */
    
        (function(){ //避免全局变量被污染,原理通过立即调用函数将全局变量转为局部变量.
            //var oImgs = document.getElementById("imgs");
            //var oImg = oImgs.getElementsByTagName("img");//图片数组
            
            var container=document.getElementById("container");
            //#imgs img
            var oImgs = document.getElementById("imgs").getElementsByTagName("img");
            var oLis = document.getElementById("nav").getElementsByTagName("li");
            var oLeft = document.getElementById("left");
            var oRight = document.getElementById("right");
            
            var now = 0;//动态控制(图片/li)数组下标,完成图片切换
            var timer = null;
            
            //鼠标经过li按钮组时 切换图片
            for(var i=0; i<oLis.length; i++){//li按钮组切换图片
                oLis[i].index = i;
                oLis[i].onmouseover = function(){
                now = this.index;//建立li按钮组与图片组之间 一一对应的关系
                  play();
                }
            }
            function play(){
                show();  
            
                now++;
                if(now == oImgs.length) now = 0;
            }
            
            function show(){//实现图片/li按钮切换功能
                for(var i=0; i<oImgs.length; i++){
                    oImgs[i].className = ""; //图片
                    oLis[i].className = ""; //li
                }
                oImgs[now].className = "on";
                oLis[now].className = "on";
            }
            
            function go(){//主函数
                timer=setInterval(play, 1000);
            }
            go();
            
            
            baner.onmouseover = function(){
                clearInterval(timer);
            }
            
            baner.onmouseout = function(){
                go();
            }
            
            //左右按钮控制轮播图片显示
            oLeft.onclick = oRight.onclick = function(){
               if( this==oLeft ){
                    now--; //3 2 1 0 -1
                    if( now==-1 ) now = oLis.length-1;
               }else{
                    now++; // 0 1 2 3 4
                    if(now == oLis.length) now = 0;
               }    
               show();
            }
            
            
            })();
    }
    