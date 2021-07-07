window.onload = function() {
    // 设置header中滚动字体颜色
    let headerWord = document.getElementById("headerWord");
    let spans = headerWord.children;
    let colorList = ["#E0BBE4","#D291BC","#957DAD","#FEC8D8","#FFDFD3",
        "#929DB3","#FFEFE2","#B0CAC1","#D3DFF6","#FAF4ED",
        "#FAE2DF","#FAD3E9","#DAC9F7","#D0EEEB"
    ];
    // 给每一个span绑定onmouseover事件，随机给一个颜色
    for(let i = 0 ; i < spans.length; i++) {
        spans[i].onmouseover = function(){
            spans[i].style.color = colorList[getRandomNum(spans)];
        }
    }
    


    // 设置Header右侧小飞机，控制Header中文字的动画与颜色
    let imgClickNum = 0;
    let headerImg = document.getElementById("header").children[1];
    headerImg.addEventListener("click", function(){
        // 奇数次，取消颜色，偶数次，恢复颜色
        if(imgClickNum++ % 2 == 0){
            // 点击图标奇数次，去除颜色，暂停动画
            for(let i = 0 ; i < spans.length; i++) {
                spans[i].style.color = "rgb(107, 102, 76)";
                //animationPlayState:设置动画暂停与恢复
                    // paused暂停动画
                    // running恢复动画
                spans[i].style.animationPlayState = "paused";  
            }
        }else{// 偶数次，恢复颜色，恢复动画
            for(let i = 0 ; i < spans.length; i++) {
                // spans[i].style.color = colorList[getColorNum()]; // 恢复动画，但不恢复颜色
                spans[i].style.animationPlayState = "running";  
            }
        }
        console.log(imgClickNum);
    })

    // 设置nav下边框颜色，鼠标移上出现下边框，移走去除下边框
    // 如果点击某个选项，该选项下边框固定，其他选项去除下边框
    let navUl = document.getElementById("navUl");
    let navUlLi = navUl.children;
    for(let i = 0; i < navUlLi.length; i++){
        // 点击当前列表项，去除其他列表项的下边框，字体粗细和字体颜色
        navUlLi[i].addEventListener('click',function(){
            for(let j = 0; j < navUlLi.length; j++){
                navUlLi[j].style.borderBottomWidth = "0";
                navUlLi[j].style.fontWeight = "normal";
               
            }
            // 为当前选中的列表项，设置下边框，字体粗细，字体颜色
            this.style.borderBottomWidth = "3px";
            this.style.borderBottomStyle = "solid";
            this.style.borderBottomColor = "#5F939A";
            this.style.fontWeight = "bold";
            console.log(this);
        })
    }

    // 设置nav子导航，鼠标移入时，显示子导航，鼠标移走，子导航消失
    let navSons = document.querySelectorAll(".navSon");
    let navSonUls = document.querySelectorAll(".navSonUl");
    // console.log(navSons);
    // console.log(navSonUls);
    // 对每一个nav子导航进行onmouseover事件绑定
    for(let i = 0 ; i < navSons.length; i++) {
        // 移入当前导航时，要将其他导航的子导航display设置为none
        navSons[i].onmouseover = function() {
            for(let j = 0 ; j < navSons.length; j++){
                 // 将所有导航的子导航display设置为none
                navSons[j].onmouseout = function() {
                    navSonUls[j].style.display ='none';
                }
            }
            navSonUls[i].style.display = 'block';
        }
    }

    let loopImgs = [
        "imgs/首页/loopImgs/黄鹤楼1.jpg",
        "imgs/首页/loopImgs/南京大屠杀纪念馆1.jpg",
        "imgs/首页/loopImgs/总统府1.jpg",

        "imgs/首页/loopImgs/黄鹤楼2.jpg",
        "imgs/首页/loopImgs/南京大屠杀纪念馆2.jpg",
        "imgs/首页/loopImgs/总统府2.jpg",

        "imgs/首页/loopImgs/黄鹤楼3.jpeg",
        "imgs/首页/loopImgs/南京大屠杀纪念馆3.jpg",
        "imgs/首页/loopImgs/总统府3.jpg",
    ];
    let loopImgsWords = [
        "相逢意气为君饮，系马高楼垂柳边。",
        "天子临轩赐侯印，将军佩出明光宫。",
        "乘风破浪会有时，直挂云帆济沧海。",
        "春风得意马蹄疾，一日看尽长安花。",
        "他年我若为青帝，报与桃花一处开。",
        "鲜衣怒马少年时，倾倒长安又一花。",
    ];

    let imgBoxs = document.querySelectorAll(".loop");
    let box1 = 1;
    let box2 = 2;
    let box3 = 3;

// 改进：将轮播图3个区域变成一个区域
    // 每3s，调用一次slideShow方法，
    // box1，box2，box3分别代表3个盒子应该放的图片
    function slideShow(){//轮播图
        box1 = ++box1 % loopImgs.length;
        box2 = ++box2 % loopImgs.length;
        box3 = ++box3 % loopImgs.length;
        imgBoxs[0].style.backgroundImage = "url("+loopImgs[box1]+")";
        imgBoxs[1].style.backgroundImage = "url("+loopImgs[box2]+")";
        imgBoxs[2].style.backgroundImage = "url("+loopImgs[box3]+")";
    }
    // 每5s调用一次轮播图
    setInterval(slideShow,5000);

    // 设置轮播图下面的文字，每5s换一次文字
    let loopImgWord = document.getElementById("loopImgsWord");
    loopImgWord.innerHTML = loopImgsWords[getRandomNum(loopImgsWords)];
    function slideWord(){
        loopImgWord.innerHTML = loopImgsWords[getRandomNum(loopImgsWords)];
        loopImgWord.style.color = colorList[getRandomNum(colorList)];
    }

    setInterval(slideWord,5000);

    // 设置sidebar边栏区，移入动画暂停
    let sidebar = document.getElementById("sidebarSongs");
    let sidebarLis = sidebar.children;
    for(let i = 0; i < sidebarLis.length; i++){
        sidebarLis[i].onmouseover = function() {
            this.style.animationPlayState = "paused";
        }
        sidebarLis[i].onmouseout = function() {
            this.style.animationPlayState = "running";
        }
    }

    // 根据传入的数组长度，随机生成一个随机数
    function getRandomNum(arrList){
        return Math.floor(Math.random() * (arrList.length));
    }
    

    /*
    设置movies内容，当划到当前位置时，以动画效果出现
        https://blog.csdn.net/qq_31386573/article/details/90288710
        https://cn.bing.com/search?q=js%E5%AE%9E%E7%8E%B0%E4%B8%8B%E6%8B%89%E6%98%BE%E7%A4%BA%E6%9B%B4%E5%A4%9A&qs=n&form=QBRE&sp=-1&pq=js%E5%AE%9E%E7%8E%B0%E4%B8%8B%E6%8B%89%E6%98%BE%E7%A4%BA+&sc=0-9&sk=&cvid=EFC10B3E86C943DC82298F673A80F2DA
        https://blog.csdn.net/weixin_44523717/article/details/96978202
        https://www.cnblogs.com/zimengxiyu/p/9781124.html
        https://blog.csdn.net/u014304657/article/details/76854064
    */
    let trList = document.getElementById("movies").querySelectorAll("tr");
 
    function moviesScroll(){
        let top = getScrollTop();
        let len = Math.ceil(top / 340);
        for(let i = 0; i < trList.length; i++){
            console.log("len:"+len);
            for(let j = 0; j < trList.length; j++){
                // 把动画效果单独放一个类，这样就可以比较方便的添加和删除动画效果了
                if(j <= len && !trList[j].classList.contains("trAnimation")){
                    trList[j].classList.add("trAnimation")            
                // 当浏览器往上移动时，下面所有的tr可以重新加载动画
                }else if(j > len && trList[j].classList.contains("trAnimation")){
                    trList[j].classList.remove("trAnimation");
                }
            }
        }
    }
    setInterval(moviesScroll,100);

    // 477px

    // 194 -> 535

    // 获取滚动条当前的位置 
    function getScrollTop() {
        var scrollTop = 0;
        if(document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
        } else if(document.body) {
            scrollTop = document.body.scrollTop;
        }
        return scrollTop; 
    }

    // 设置详情内容
    let detail = document.getElementById("mainContent3")
    let detailP = detail.querySelectorAll("p");

    let tdList = document.getElementById("movies").querySelectorAll("td");
    console.log(tdList);
    console.log(detailP);

    // 给每一个td绑定监听事件，点击后就跳出详情页
    for(let i = 0; i < tdList.length; i++){
        tdList[i].addEventListener("click", function(){
            // 点击td时，详情页显示并加载动画。先去除详情页的动画，再重新加载

                detail.style.display = "block";
                detail.classList.add("detailAnimation");

            // 将td中的内容赋值给详情页
            detailP[0].firstChild.setAttribute("src",tdList[i].children[0].getAttribute("src"));
            console.log(detailP[0].firstChild.getAttribute("src"));
            detailP[1].innerHTML = tdList[i].children[1].innerHTML;
            detailP[2].innerHTML = tdList[i].children[2].innerHTML;
            detailP[3].innerHTML = tdList[i].children[3].innerHTML;
            detailP[5].innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+tdList[i].children[6].innerHTML;
        })
    }
    // 点击叉叉关闭详情页
    let detailExit = document.querySelector(".detailExit");
    detailExit.addEventListener("click",function(){
        // 点击关闭时，去除动画，关闭详情页
        detail.classList.remove("detailAnimation");
        detail.style.display = "none";
    })
}