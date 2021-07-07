window.onload = function() {
    // 改变contain1中歌曲的信息：背景图片、歌名、专辑、歌手名
    // 歌名列表、专辑列表、歌手名列表，歌曲背景图片
    let songNameList = ["平凡之路", "星辰大海", "海底", "南山南", "还是分开", "Waiting for love", "你要的全拿走", "为你我受冷风吹", "越来越不懂", "再也没有", "Because of you", "Please Don't Go", "忘记时间", "偏爱", "杀破狼", "一吻天荒",  "此生不换", "起风了", "天高路远"]
    let songAlbumList = ["猎户星座", "星辰大海", "海底", "孤岛", "还是分开", "Waiting for love", "覅忒好", "太歌", "【电台】王贰浪", "再也没有", "Wonders", "please dont go", "仙剑奇侠传三 电视剧原声带", "破天荒", "遇见未来", "轩辕剑之天之痕 电视剧原声带",  "仙剑奇侠传三 电视剧原声带", "起风了", "天高路远"]
    let singerNameList = ["朴树", "黄霄雲", "一支榴莲", "马頔", "王巨星", "Avicii", "胡彦斌", "胡彦斌", "王贰浪", "永彬Ryan.B", "The Piano Guys", "Joel Adams", "胡歌", "张芸京", "JS", "胡歌", "青鸟飞鱼", "买辣椒也用券", "南征北战NZBZ"]
    let songBgList = ["imgs/音乐/con1/平凡之路.jpg", "imgs/音乐/con1/星辰大海.jpg", "imgs/音乐/con1/海底.jpg", "imgs/音乐/con1/南山南.png", "imgs/音乐/con1/还是分开.jpg", "imgs/音乐/con1/Waiting for love.jpg", "imgs/音乐/con1/你要的全拿走.jpg", "imgs/音乐/con1/为你我受冷风吹.jpg", "imgs/音乐/con1/越来越不懂.jpg", "imgs/音乐/con1/再也没有.jpg", "imgs/音乐/con1/Because of you.jpg", "imgs/音乐/con1/Please Don't Go.jpg", "imgs/音乐/con1/忘记时间.jpg", "imgs/音乐/con1/偏爱.jpg", "imgs/音乐/con1/杀破狼.jpg", "imgs/音乐/con1/一吻天荒.jpg", "imgs/音乐/con1/此生不换.jpg", "imgs/音乐/con1/起风了.jpg", "imgs/音乐/con1/天高路远.jpg"]


    // 定义歌曲长度，以及当前歌曲下标songNum
    let songListLength = songNameList.length;
    let songNum = 0;

    // 歌曲名和歌手名有两个，左侧和右上侧
    let songName = document.querySelectorAll(".songName");
    let singerName = document.querySelectorAll(".singerName");
    // 专辑名只有一个，
    let songAlbum = document.querySelector(".album");
    // 获取专辑背景图片元素
    let songBg = document.getElementById("con1").querySelector("img");
    
    let songBg2 = document.getElementById("con2_2").querySelector("img");
    let songBg2List = ["imgs/音乐/con2/bg1.jpeg", "imgs/音乐/con2/bg10.jpeg", "imgs/音乐/con2/bg11.jpeg", "imgs/音乐/con2/bg2.jpeg", "imgs/音乐/con2/bg3.jpeg", "imgs/音乐/con2/bg4.jpeg", "imgs/音乐/con2/bg5.jpeg", "imgs/音乐/con2/bg6.jpeg", "imgs/音乐/con2/bg7.jpeg", "imgs/音乐/con2/bg8.jpeg", "imgs/音乐/con2/bg9.jpeg"];

    
    let songNum2 = 0;
    let bg2Length = songBg2List.length;

    // 定义5s改变一次歌曲
    function con1Song(){
        // 循环播放
        songNum = ++songNum % songListLength;
        // 歌曲名和歌手名有多个，所以需要循环把两个地方的内容都设置为相同的
        for(let i = 0; i < songName.length; i++){
            let songname = songNameList[songNum];
            let singername = singerNameList[songNum];
            if(i == 1 ){    // 如果是右上方的，就加一些信息
                songname =   "Song - "+songname;
                singername = "Singer - "+singername;
            }             
            songName[i].innerHTML = songname;
            singerName[i].innerHTML = singername;
        }
        // 专辑名只有一个地方有，不需要设置循环
        songAlbum.innerHTML = "Album - "+songAlbumList[songNum];
        // 专辑图片
        songBg.setAttribute("src",songBgList[songNum]);
        
    }
    setInterval(con1Song,5000);
    // 7s改变一次背景
    function con2Song(){
        songNum2 = ++songNum2 % bg2Length;
        songBg2.setAttribute("src",songBg2List[songNum2])
    }
    setInterval(con2Song,7000);
    
    // 侧边栏推荐，10s换一次背景
    let con4 = document.getElementById("con4");
    let con4SideList = ["imgs/音乐/con4/像风一样.jpg","imgs/音乐/con4/你若成风.png", "imgs/音乐/con4/像我这样的人.jpg", "imgs/音乐/con4/像风一样2.jpg", "imgs/音乐/con4/往后余生.png", "imgs/音乐/con4/泡沫.jpg", "imgs/音乐/con4/烟花易冷.jpg", "imgs/音乐/con4/虚拟.png"];
    let con4SideNum = 0;
    let con4SideLength = con4SideList.length;
    function con4SideListChange(){
        con4SideNum = ++con4SideNum % con4SideLength;
        con4.style.backgroundImage = "url("+con4SideList[con4SideNum]+")";
    }
    setInterval(con4SideListChange,25000);


    // 音乐推荐栏，歌曲选中时旋转
    let reBg = document.getElementById("recommand").querySelectorAll(".reBg img");
    let rePlay = document.getElementById("recommand").querySelectorAll(".play");
    
    let reLi = document.getElementById("recommand").querySelectorAll("li");
    let roll = false;   // 图片是否旋转
    let click = false;  // 图片是否被点击
    for(let i = 0 ; i < reBg.length; i++){
        // 鼠标移入，如果没有被点击，确定播放
        reBg[i].onmouseover = function(){
            this.style.cursor = "pointer";  
            
            // 如果图片也没有旋转，而且图片没有被点击，鼠标移上去就旋转  
            if(roll == false && click == false){
                this.classList.add("reImgRoll");
                roll = true;    // 开始旋转
                rePlay[i].style.display = "block";  // 旋转时就显示播放图片
            }
        } 
        // 是否移除，如果没有被点击，就停止播放
        reBg[i].onmouseleave = function(){
            // 图片正在旋转，而且没有被点击过，那么就移除旋转，
            if(roll == true && click == false){
                this.classList.remove("reImgRoll");
                roll = false;   // 停止旋转
                rePlay[i].style.display = "none";   // 暂停时不显示播放图片
            }
           
        }
        // 添加点击事件，如果被点击过了，再点击就要停止播放
        reBg[i].addEventListener("click", function(){
            // 如果没有被点击，点击以后，图片变为点击状态，且开始旋转
            if(click == false){
                
                roll = true;    // 开始旋转
                click = true;   // 图片被点击

                // musicPlayerNum = ++musicPlayerNum % musicPlayerList.length;
                audio.src = musicPlayerList[i];    // 图片被点击，开始放音乐
                audio.play();
                // 当前音乐播放，其他音乐全部暂停
                for(let j = 0 ; j < reBg.length ; j++){
                    rePlay[j].style.display = "none";
                    albumPause.style.display = "none";
                    albumPlay.style.display = "block";
                    if(reBg[j].classList.contains("reImgRoll")){
                        reBg[j].classList.remove("reImgRoll");
                    }
                }
                if(!con3Album.classList.contains("reImgRoll")){
                    con3Album.classList.add("reImgRoll");
                }
              
                this.classList.add("reImgRoll");
                rePlay[i].style.display = "block";  // 旋转时就显示播放图片
            }
            // 如果已经被点击过，再点击，图片变为未点击状态，停止旋转
            else{
                
                roll = false;    // 开始旋转
                click = false;   // 图片被点击
                albumPause.style.display = "block";
                albumPlay.style.display = "none";
                rePlay[i].style.display = "none";   // 暂停时不显示播放图片
                if(con3Album.classList.contains("reImgRoll")){
                    con3Album.classList.remove("reImgRoll");
                }
                this.classList.remove("reImgRoll");
                audio.paused();   // 图片已经被点击，再点击就暂停
            }
        })

    }
    
    // 给con3 10s换一次背景图片
    // let con3PlayImgList = ["imgs/音乐/con3/像风一样.jpg","imgs/音乐/con3/像我这样的人.jpg","imgs/音乐/con3/像我这样的人2.jpg"];
    // var con3PlayNum = 0;
    // let con3 = document.getElementById("con3");
    // function con3PlayChange(){
    //     con3PlayNum = ++con3PlayNum % con3PlayImgList.length;
    //     con3.style.backgroundImage = "url("+con3PlayImgList[con3PlayNum] + ")";
    // }
    // setInterval(con3PlayChange,10000);

    // 音乐播放器，点击播放，再点击暂停
    let con3Album = document.querySelector(".con3Album");
    let albumPlay = document.querySelector(".albumPlay");
    let albumPause = document.querySelector(".albumPause");
    let albumLast = document.querySelector(".albumLast");
    let albumNext = document.querySelector(".albumNext");

    // 音乐播放器可以播放的音乐
    let musicPlayerList = [
        "imgs/音乐/con3/可惜没如果.mp3","imgs/音乐/con3/耗尽.mp3",
        "imgs/音乐/con3/夜空中最亮的星.mp3","imgs/音乐/con3/身骑白马.mp3"
    ];

    let audio = document.getElementById("music1");
    var musicPlayerNum = 0;
    // 添加监听时间，音乐结束，换下一曲播放
    audio.addEventListener("ended",function() {
        musicPlayerNum = ++musicPlayerNum % musicPlayerList.length;
        audio.src = musicPlayerList[musicPlayerNum];
        audio.play();

    })

    let play = false;
    // 如果正在播放时，点击图片，就会暂停
    albumPlay.addEventListener("click",function(){
         // 当前处于播放状态，点击以后暂停播放，暂停图片出现，播放图片消失
        play = false;
        albumPause.style.display = "block";
        albumPlay.style.display = "none";
        audio.pause();
        
        if(con3Album.classList.contains("reImgRoll")){
            con3Album.classList.remove("reImgRoll");
        }
    })
    // 如果暂停使点击图片就会播放，
    albumPause.addEventListener("click",function(){
        // 初始状态是暂停，点击以后开始播放，暂停图片消失，播放图片出现
        play = true;
        audio.play();
        albumPause.style.display = "none";
        albumPlay.style.display = "block";
        if(!con3Album.classList.contains("reImgRoll")){
            con3Album.classList.add("reImgRoll");
        }
    })
    albumLast.addEventListener("click", function(){
        musicPlayerNum = musicPlayerNum > 0 ?--musicPlayerNum % musicPlayerList.length : (--musicPlayerNum + musicPlayerList.length) % musicPlayerList.length;
        audio.src = musicPlayerList[musicPlayerNum];
        audio.play();
        albumPause.style.display = "none";
        albumPlay.style.display = "block";

        lastAndNext(musicPlayerNum);
      
    })
    albumNext.addEventListener("click", function(){
        musicPlayerNum = ++musicPlayerNum % musicPlayerList.length;
        audio.src = musicPlayerList[musicPlayerNum];
        audio.play();
        albumPause.style.display = "none";
        albumPlay.style.display = "block";

        lastAndNext(musicPlayerNum);
    })
    function lastAndNext(musicPlayerNum){
        for(let i = 0; i < musicPlayerList.length; i++) {
            if(reBg[i].classList.contains("reImgRoll")){
                reBg[i].classList.remove("reImgRoll");
            }
        }
        reBg[musicPlayerNum].classList.add("reImgRoll");
    }

}
    