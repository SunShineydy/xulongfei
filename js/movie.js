window.onload = function() {
    // 定义导航栏的搜索图标，移上去显示输入框
    let searchImg = document.getElementById("movieSearch");
    let searchInput = searchImg.nextElementSibling.firstChild;

    console.log(searchInput);
    // 给图标添加鼠标移入事件，显示输入框
    searchImg.onmouseover = function() {
        searchInput.style.display = "inline-block";
        searchInput.classList.add("inputBorderBottom");
        searchInput.setAttribute("placeholder","请输入")
    }
    // 点击图标进行搜索
    searchImg.addEventListener('click',function() {
        // 获取input输入框中的值
        let inputValue = searchInput.value;
        let reg = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？ ]");
        //判断字符串是否为非法字符
        //如果用户输入的不是字符串就把改变值设置为原始值
        if(reg.test(inputValue)){
            // 如果输入非法字符，先把原来内容清空，再设置提示：”存在非法字符
　　　　　　 searchInput.value = "";
            searchInput.setAttribute("placeholder","存在非法字符");
        }   
    })
    // 鼠标从input移走，不显示输入框
    searchInput.onmouseleave = function() {
        searchInput.style.display = "none";
        searchInput.classList.remove("inputBorderBottom");
        searchInput.setAttribute("placeholder","")
    }


    // 轮播图内容
    // 电影图片列表
    let movieImgList = [
        "imgs/电影/loop/夺冠.jpg",
        "imgs/电影/loop/肖申克的救赎.jpg","imgs/电影/loop/加百列的地狱.jpg","imgs/电影/loop/你的名字.jpg",
        "imgs/电影/loop/寄生虫.jpg","imgs/电影/loop/汉密尔顿.jpg","imgs/电影/loop/声之形.jpg",
        "imgs/电影/loop/星际穿越2.jpg","imgs/电影/loop/傲慢与偏见.jpg",
        "imgs/电影/loop/徐福.jpg",
    ];

    let sidebarImgList = [
        "imgs/电影/loop/夺冠_sidebar.jpg",
        "imgs/电影/loop/肖申克的救赎_sidebar.jpg","imgs/电影/loop/加百列的地狱_sidebar.jpg","imgs/电影/loop/你的名字_sidebar.jpg",
        "imgs/电影/loop/寄生虫_sidebar.jpg","imgs/电影/loop/汉密尔顿_sidebar.jpg","imgs/电影/loop/声之形_sidebar.jpg",
        "imgs/电影/loop/星际穿越_sidebar.jpg","imgs/电影/loop/傲慢与偏见_sidebar.jpg",
        "imgs/电影/loop/徐福_sidebar.jpg",
    ];
    // 电影名称列表
    let movieNameList = [
        "《夺冠》",
        "《肖申克的救赎》","《加百列的地狱》","《你的名字》",
        "《寄生虫》","《汉密尔顿》","《声之形》",
        "《星际穿越》","《傲慢与偏见》",
        "《徐福》"
    ];
    // 电影类型列表
    let movieKindList = [
        "类型: 剧情 / 历史",
        "类型：剧情 / 犯罪","类型：爱情","类型：爱情 / 动画 / 剧情",
        "类型：喜剧 / 惊悚 /剧情","类型：音乐 / 历史 / 剧情","类型：动画 / 剧情",
        "类型：冒险 / 剧情 / 科幻","类型：剧情 / 爱情",
        "类型：科幻 / 动作"
    ];
    // 电影评级列表
    let movieStarList = [
        " 9.9",
        " 9.5 "," 8.7"," 8.6",
        " 8.5"," 8.5"," 8.5",
        " 8.3"," 8.3"," 8.1",
        " 9.0"
    ];
    // 电影时长列表
    let movieTimeList = [
        " 135mins",
        " 142mins"," 122mins"," 106mins",
        " 132mins"," 160mins"," 130mins",
        " 169mins"," 139mins"," 129mins",
        " 114mns"
    ];
    // 电影简介列表
    let movieSummaryList = [
        "重温新中国70年的峥嵘岁月，感悟\"我\"与中国的血脉相连，唤醒人们内心最朴素的爱国情怀。",
        "恐惧会囚禁灵魂，而希望能让你自由。","一个迷人的探索诱惑，禁止的爱，和救赎，一个迷人和激情的故事，一个人从他自己的地狱，因为他试图赢得不可能的宽恕和爱。","相逢有缘亦无缘，相会无期亦有期。",
        "Act like you own the place.","Five Founding Fathers, Three Sisters - Over A Decade, in One Night.","Sometimes the answer is as simple as learning to listen.",
        "人类生于此,却未必死于此。","夭矫慕清颜，野村出少年。行伍多龃龉，矢志不为迁。百死身未远，侠骨锻烽烟。黄沙葬焦骨，孰叹孰疯癫。","A romance ahead of its time.",
        "Live the Moment"
    ];

    let loopNum = 0 ;   // 轮播图下标
    let length = movieImgList.length;   // 轮播图有多少张
    let movieImg = document.querySelector(".movieImg");
    let movieName = document.querySelector(".movieName");
    let moiveKind = document.querySelector(".movieKind");
    // let movieLevel = document.querySelector(".movieLevel");
    let movieStar = document.querySelector(".movieLevel").children[1];
    let movieTime = document.querySelector(".movieLevel").children[3];
    let movieSummary = document.querySelector(".movieSummary");

    let con2 = document.getElementById("con2");
    let main = document.getElementById("main");
    // 每3s换一次图片和内容
    function loopCon1(){
        loopNum = ++loopNum % length;
        console.log("loopNum = "+loopNum);

        movieImg.setAttribute("src",movieImgList[loopNum]);
        movieName.innerHTML = movieNameList[loopNum];
        moiveKind.innerHTML = movieKindList[loopNum];
        movieStar.innerHTML = movieStarList[loopNum];
        movieTime.innerHTML = movieTimeList[loopNum];
        movieSummary.innerHTML = movieSummaryList[loopNum];

        con2.style.backgroundImage = "url("+sidebarImgList[loopNum]+")";
        main.style.backgroundImage = "url("+movieImgList[loopNum]+")";
    }
    setInterval(loopCon1,3000);

    // 推荐栏轮播，手动切换
    let recmovieImgList = [
        "imgs/电影/recommand/阳光普照.webp","imgs/电影/recommand/八佰.webp","imgs/电影/recommand/1917.jpg",
        "imgs/电影/recommand/疯狂动物城.jpg","imgs/电影/recommand/饥饿站台.jpg","imgs/电影/recommand/头号玩家.jpg",
        "imgs/电影/recommand/少年的你.jpg","imgs/电影/recommand/千与千寻.jpg","imgs/电影/recommand/切尔诺贝利.jpg","imgs/电影/recommand/釜山行.jpg"
    ];
    let removieNameList = [
		"阳光普照","八佰","1917",
		"疯狂动物城","饥饿站台","头号玩家",
		"少年的你","千与千寻","切尔诺贝利","釜山行"
	];
    let removieKindList = [
		"类型: 剧情 / 家庭 / 犯罪","类型: 剧情 / 历史 / 战争","类型: 剧情 / 战争",
		"类型: 喜剧 / 动画 / 冒险","类型: 科幻 / 惊悚","类型: 动作 / 科幻 / 冒险",
		"类型: 剧情 / 爱情 / 犯罪","类型: 剧情 / 动画 / 奇幻","类型：剧情","类型: 动作 / 惊悚 / 灾难"
	];

    // 给推荐栏的左右箭头绑定事件
    let reArrow = document.getElementById("con3_1").querySelectorAll(".arrow");
    var reNum1 = 0;
    var reNum2 = 1;
    var reNum3 = 2;
    var reNum4 = 3;
    
    let reImg = document.getElementById("recommandUl").querySelectorAll("img");
    let reLength = recmovieImgList.length;
    // 左箭头所有 图片向左移动
    reArrow[0].addEventListener("click",function(){
        reNum1 = ++reNum1 % reLength;
        reNum2 = ++reNum2 % reLength;
        reNum3 = ++reNum3 % reLength;
        reNum4 = ++reNum4 % reLength;

        recommandChange(reNum1,reNum2,reNum3,reNum4);

    })
    // 图片向右移动
    reArrow[1].addEventListener("click",function(){

        reNum1 = reNum1 > 0 ? --reNum1 % reLength : (--reNum1 + reLength) % reLength;
        reNum2 = reNum2 > 0 ? --reNum2 % reLength : (--reNum2 + reLength) % reLength;
        reNum3 = reNum3 > 0 ? --reNum3 % reLength : (--reNum3 + reLength) % reLength;
        reNum4 = reNum4 > 0 ? --reNum4 % reLength : (--reNum4 + reLength) % reLength;

        // 调用方法
        recommandChange(reNum1,reNum2,reNum3,reNum4);
    })
    // 点击左右图标，图片和内容一起改变
    function recommandChange(reNum1,reNum2,reNum3,reNum4){
        console.log("reNum1="+reNum1+",reNum2="+reNum2+",reNum3="+reNum3+",reNum4="+reNum4);
        // 设置图片的src属性使用setAttribute属性
        reImg[0].setAttribute("src",recmovieImgList[reNum1]);
        // 电影介绍随图片一起改变
        reImg[0].nextElementSibling.children[0].innerHTML = removieNameList[reNum1];
        reImg[0].nextElementSibling.children[1].innerHTML = removieKindList[reNum1];

        reImg[1].setAttribute("src",recmovieImgList[reNum2]);
        reImg[1].nextElementSibling.children[0].innerHTML = removieNameList[reNum2];
        reImg[1].nextElementSibling.children[1].innerHTML = removieKindList[reNum2];

        reImg[2].setAttribute("src",recmovieImgList[reNum3]);
        reImg[2].nextElementSibling.children[0].innerHTML = removieNameList[reNum3];
        reImg[2].nextElementSibling.children[1].innerHTML = removieKindList[reNum3];

        reImg[3].setAttribute("src",recmovieImgList[reNum4]);
        reImg[3].nextElementSibling.children[0].innerHTML = removieNameList[reNum4];
        reImg[3].nextElementSibling.children[1].innerHTML = removieKindList[reNum4];
    }

    // 鼠标移到图片，显示文字
    let reLi = document.getElementById("recommandUl").querySelectorAll("li");
    let reP = document.getElementById("recommandUl").querySelectorAll("p");
    console.log("reP:"+reP.length);
    for(let i = 0 ; i < reLi.length; i++){
        // 移到图片上，文字显示
        reImg[i].onmouseover = function(){
            reP[i].style.opacity = "1";
        }
        // 从图片移走，文字消失
        reImg[i].onmouseout = function(){
            reP[i].style.opacity = "0";
        }
    }
   
    // 设置"我的喜欢"栏背景图片
    let favImgList = [
        "imgs/电影/favourite/刺杀小说家.jpg","imgs/电影/favourite/红海行动.jpg","imgs/电影/favourite/流浪地球.jpg",
        "imgs/电影/favourite/你好，李焕英.jpg","imgs/电影/favourite/攀登者2.jpg"
    ];

    // 电影名称列表
    let favNameList = [
        "红海行动","中国机长","攀登者","战狼Ⅱ",
        "你好，李焕英","大鱼海棠","刺杀小说家","流浪地球"
    ];
    // 电影简介列表
    let favSummaryList = [
        "索马里海域外，中国商船遭遇劫持，船员全数沦为阶下囚。蛟龙突击队沉着应对，潜入商船进行突袭，成功解救全部人质。 返航途中，非洲北部伊维亚共和国发生政变，恐怖组织连同叛军攻入首都， 当地华侨面临危险，海军战舰接到上级命令改变航向，前往执行撤侨任务。海军战舰及蛟龙突击队深入伊维亚。前方路途险恶，即将遭遇的，远不止人质营救那么简单。",
        "根据2018年5月14日川航3U8633航班成功备降的真实事件改编：机组执行航班任务时，在万米高空突遇驾驶舱风挡玻璃爆裂脱落、座舱释压的极端罕见险情，生死关头，他们临危不乱、果断应对、正确处置，确保了机上全部人员的生命安全，创造了世界民航史上的奇迹。",
        "1960年5月。珠穆朗玛峰，第二台阶绝壁下。中国珠峰攀登突击队四名队员正在向最艰险、也是最难逾越的“第二台阶”发起冲击，这是他们的第五次突击，前四次的失败已经耗费了他们太多的体力。",
        "在非洲附近的大海上。主人公冷锋遭遇人生滑铁卢，被“开除军籍”。本想漂泊一生的他却被一场突如其来的意外打破了他的计划，他被卷入了一场非洲国家叛乱。本可以安全撤离却因无法忘记曾经为军人的使命，孤身犯险冲回沦陷区，带领身陷屠杀中的同胞和难民展开生死逃亡。随着斗争的持续，体内的狼性逐渐复苏，最终孤身闯入战乱区域为同胞而战斗。",
        "2001年的某一天，刚刚考上大学的贾晓玲经历了人生中的一次大起大落。一心想要成为母亲骄傲的她却因母亲突遭严重意外，而悲痛万分。在贾晓玲情绪崩溃的状态下，竟意外的回到了1981年，并与年轻的母亲李焕英相遇，二人形影不离，宛如闺蜜。与此同时，也结识了一群天真善良的好朋友。晓玲以为来到了这片“广阔天地”，她可以凭借自己超前的思维，让母亲“大有作为”，但结果却让晓玲感到意外。",
        "所有活着的人类，都是海里一条巨大的鱼；出生的时候他们从海的此岸出发。他们的生命就像横越大海，有时相遇，有时分开……死的时候，他们便到了岸，各去各的世界。 四十五亿年前，这个星球上，只有一片汪洋大海，和一群古老的大鱼。在与人类世界平行的空间里，生活着一个规规矩矩、遵守秩序的族群，他们为神工作，掌管世界万物运行规律，也掌管人类的灵魂。他们的天空与人类世界的大海相连。他们既不是神，也不是人，他们是“其他人”。 少女椿，作为生家族的继承人，掌管着海棠花的生长。不惜违背族人戒律，逆天而行，在海底世界秘密饲养人类少年的灵魂——一条拇指大的小鱼。",
        "异世界皇都，天神赤发鬼残暴统治，滥杀无辜。少年空文因被赤发鬼追杀，决定奋起反击。在黑甲的指引下，踏上了凡人弑神之路。这是小说家路空文笔下的奇幻世界。没想到小说的进程，竟然影响着现实世界。这时一名男子接下了刺杀他的任务。",
        "太阳即将毁灭，人类在地球表面建造出巨大的推进器，寻找新家园。然而宇宙之路危机四伏，为了拯救地球，为了人类能在漫长的2500年后抵达新的家园，流浪地球时代的年轻人挺身而出，展开争分夺秒的生死之战。"
                
    ];

    let con4 = document.getElementById("con4");
    let favLength = favImgList.length;
    let con4Num = 0;
    // 3s换一次背景
    function cont4BgChange(){
        con4Num = ++con4Num % favLength;
        con4.style.backgroundImage = "url(" + favImgList[con4Num] + ")";
    }
    setInterval(cont4BgChange,3000);

    // 点击每一个电影，就显示详情信息
    let favImgs = document.getElementById("con4").querySelectorAll("img");
    let infoName = document.querySelector(".infoName");
    let infoIntro = document.querySelector(".infoIntro");
    for(let i = 0; i < favImgs.length; i++){
        // 每次鼠标移入，就显示对应信息
        favImgs[i].onmouseover = function (){
            infoName.innerHTML = favNameList[i];
            infoIntro.innerHTML = favSummaryList[i];
        }
        favImgs[i].onmouseout = function (){
            infoName.innerHTML = ""
            infoIntro.innerHTML = "";
        }
    }
}