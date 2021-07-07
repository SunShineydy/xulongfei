window.onload = function () {
// 1. 设置背景音乐
    // p标签：用来存放音乐名
    // var p = document.createElement('p');
    var p = document.getElementById("musicName");
    
    // musicList：音乐数组，存放背景音乐
    var musicList =["music/动物世界-薛之谦.mp3",
                    "music/天后-薛之谦.mp3",
                    "music/iris - Letter.mp3",
                    // "music/Isaiah - It's Gotta Be You.mp3",
                    // "music/Joel Adams - Please Don't Go.mp3",
                    // "music/pazi - 花降らし.mp3",
                    // "music/The Piano Guys - Because of You.flac",
                    // "music/千坂 - At The Edge.mp3"
    ]; //把需要播放的歌曲从后往前排，这里可继续添加多个音乐

    // audio：创建audio元素，并且设置audio的属性，给audio添加src属性
    var audio = document.createElement('audio');
    audio.preload = true;     // 可以预加载
    // audio.controls = true;    // 显示进度
    let num = getMusicNum();
    audio.src = musicList[num];  // 随机播放一首音乐
    // audio.autoplay = true;
    // 让音乐开始播放
    audio.play();    
    
    // 把audio元素和p元素放入div标签下
    document.getElementById("audioBox").appendChild(audio);   
    p.innerHTML = p.innerHTML+getMusicName(musicList[num] ); // p元素的内容就是音乐名称
    document.getElementById("audioBox").appendChild(p);     

    //要让audio元素禁止循环，因为循环状态下是无法触发ended监听事件的
    audio.loop = false; 

// 2. 背景音乐设置监听事件，当音乐播放结束后，自动播放下一首
    // 监听音乐是否结束，如果音乐结束，就执行 处理函数
    /*
        1. 如果音乐结束，就从musicList中获取第一个元素，然后赋值给audio元素
        2. 还需要将第一个元素放入到最后一个位置
    */
    audio.addEventListener('ended', () => {
        let num = getMusicNum();
        audio.src = musicList[num];  // 随机播放一首音乐

        p.innerHTML =  '<img id="musicImg" src="imgs/login/backgroundMusic.png" alt="">'+getMusicName(musicList[num]);
        document.getElementById("audioBox").appendChild(p);

        console.log("p.innerHTML:"+p.innerHTML);
        // audio.play()：开始播放音频
        audio.play(); 
        console.log(getMusicName(musicList[num]));  // 获得音乐的名字
        console.log(musicList.length);          // 列表中元素的个数不变
    }, false);

    
    // 获取歌曲的名字
    function getMusicName(firstMusic){
        let musicName = firstMusic.split("/").pop().split(".")[0];    // 这里的musicName包含了后缀名
        return musicName;
    }
// 3. 随机从musicList中获取一首歌，通过随机数下标来获取
    function getMusicNum(){
        return Math.floor(Math.random() * (musicList.length-1));
    }
   
// 4. 设置歌曲名和图片的动画效果：onmouseoover:鼠标移上暂停动画，onmouseout:鼠标移走继续动画
    // 鼠标移上来，取消图片和歌曲名的动画
    var musicImg = document.getElementById("musicImg")
    p.onmouseover  = function(){
        p.style.animationPlayState = "paused";
        musicImg.style.animationPlayState = "paused";
        // console.log("what happen");
    }
    // 鼠标移走，图片和歌曲名动画继续运行
    p.onmouseout = function(){
        p.style.animationPlayState = "running";
        musicImg.style.animationPlayState = "running";
    }

// 5. 获取当前日期
    let week = {
        1:"星期一",
        2:"星期二",
        3:"星期三",
        4:"星期四",
        5:"星期五",
        6:"星期六",
        0:"星期日"
    }
    function getTime(){
        let pDate = document.getElementById("date");
        let date = new Date();
        pDate.innerHTML = week[date.getDay()] + "  " +date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        console.log(date);
        console.log(date.getDay());
        // console.log(pDate.innerHTML);
    }
    
    setInterval(getTime,1000);

    // 5. 设置随机使用登录界面背景图
    var bgImgList = [
        'imgs/login/2.jpeg',
        'imgs/login/3.jpeg',
        'imgs/login/4.jpeg',
        'imgs/login/6.jpeg',
        'imgs/login/7.jpeg',
    ];
    // 背景图变色时，Form表单也变色
    // 设置body和login背景图片，保持一致
    var bgImg = document.getElementById("backgroundImg");
    var loginImg = document.getElementById("loginWelcome");
    var loginForm = document.getElementById("loginForm");
    // 添加监听事件
    let bgNum = 0;
    bgImg.addEventListener('click', ()=>{
        // let bgNum = getBgNum();
        bgNum = bgNum % bgImgList.length;
        let bgUrl = "url("+bgImgList[bgNum++]+")";
        document.body.style.backgroundImage = bgUrl;
        console.log(bgUrl);
    })

    var form = document.getElementById("loginForm");
    var user = document.getElementById("username");
    var pwd = document.getElementById("password");
    var btn =  document.getElementById("btn");
    var span = document.getElementById("error");
    let transNum = 0;
    btn.addEventListener('click',function(){

        if(user.value == "admin" && pwd.value == "123456"){
            //页面无法跳转的原因：button标签的type应该是button，而不是submit
            window.location.href = "./home.html";
        }else{
            span.innerHTML = "用户名或密码错误";
            span.style.color = "red";

            let bgImg1 = document.getElementById("welcomeWord");
            let bgImg2 = document.getElementById("loginForm");
            if(transNum % 2 == 0){
                transNum += 1;
                bgImg1.style.transform = "translateX(400px)";
                bgImg2.style.transform = "translateX(-500px)";
            }else{
                transNum += 1;
                bgImg1.style.transform = "translateX(0px)";
                bgImg2.style.transform = "translateX(0px)";
            }
            console.log("transNum"+transNum);
            

        }
        
    })
    btn.addEventListener('mouseleave',function(){
        span.innerHTML = "";
    })


}
