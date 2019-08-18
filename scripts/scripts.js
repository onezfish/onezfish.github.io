var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth;
var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight;

var left = document.getElementById("left-menu");
left.style.height = height+"px";

var right = document.getElementById("right-menu");
right.style.height = height+"px";

var style = 1

// 数据源
var datas = [
	{
		title: "iOS 区分UDID与UUID", 
		titleLink: "https://www.jianshu.com/p/0337bff29bfb", 
		content: "UDID 是一串由40位16进制数组成的字符串，用以标识唯一的设备。苹果从 iOS 5 开始就移除了通过代码访问 UDID 的权限，所以我们无法从代码中获取用户设备的 UDID。如果我们想查看自己设备的 UDID，可以通过 iTunes 来查看。通常开发者需要知道你的 UDID，才可以让你的手机安装访问测试中的应用，在增加 Provisioning Profile 文件时会用到 ...", 
		time: "2019.06.20 字数 719"
	},
	{
		title: "iOS 音视频开发-AVPlayer播放本地、远程视频（六）", 
		titleLink: "https://www.jianshu.com/p/3df9b6fe5d57", 
		content: "AVPlayer 属于 AVFoundation 框架，使用时需要先导入<AVFoundation/AVFoundation.h>框架头文件。在开发中，单纯使用AVPlayer类是无法显示视频的 要将视频层添加至AVPlayerLayer中，这样才能将视频显示出来。1、先将在线视频链接存放在NSURL中，然后初始化AVPlayerItem对象，AVPlayerItem是管理资源的对象。2、然后监听AVPlayerItem的 status 和 loadedTimeRange 属性，status 属性有三种状态 ...", 
		time: "2019.05.28 字数 963"
	},
	{
		title: "iOS 音视频开发-AVPlayer播放本地、远程音频（五）", 
		titleLink: "https://www.jianshu.com/p/19f3d5212b1a", 
		content: "AVAudioPlayer、AVPlayer 属于 AVFoundation 框架，使用时需要先导入 <AVFoundation/AVFoundation.h> 框架头文件。AVAudioPlayer 只能播放本地文件，X流式媒体 ...", 
		time: "2019.05.28 字数 423"
	},
	{
		title: "iOS 音视频开发-MediaPlayer播放本地、远程视频（四）", 
		titleLink: "https://www.jianshu.com/p/f4d75c71fbf6", 
		content: "使用 MediaPlayer 时需要先导入<MediaPlayer/MediaPlayer.h> 框架头文件。MediaPlayer 框架是 iOS 平台上一个用于音频和视频播放的高层级接口，它包含了一个你可以在应用中直接使用的默认的用户界面。你可以使用它来播放用户在 iPod 库中的项目，或者播放本地文件以及网络流。另外，这个框架也包括了查找用户媒体库中内容的 API，同时还可以配置像是在锁屏界面或者控制中心里的音频控件 ...", 
		time: "2019.05.28 字数 474"
	},
	{
		title: "iOS 音视频开发-MediaPlayer播放本地、远程音频（三）", 
		titleLink: "https://www.jianshu.com/p/ec3533549aa6", 
		content: "使用 MediaPlayer 时需要先导入 <MediaPlayer/MediaPlayer.h> 框架头文件。MediaPlayer 框架是 iOS 平台上一个用于音频和视频播放的高层级接口，它包含了一个你可以在应用中直接使用的默认的用户界面。你可以使用它来播放用户在 iPod 库中的项目，或者播放本地文件以及网络流。另外，这个框架也包括了查找用户媒体库中内容的 API，同时还可以配置像是在锁屏界面或者控制中心里的音频控件 ...", 
		time: "2019.05.28 字数 392"
	},
	{
		title: "Swift 静态方法", 
		titleLink: "https://www.jianshu.com/p/63620f808814", 
		content: "方法是与某些特定类型相关联的函数。类、结构体、枚举都可以定义实例方法;实例方法为给定类型的实例封装了具体的任务与功能。类型方法与类型本身相关联。Swift 类型方法 Objective-C 中的类方法(class methods)相似 ...", 
		time: "2019.04.30 字数 393"
	},
];

var container = document.getElementById("container");
var mobilecontainer = document.getElementById("mobile-container");

var ulList = document.getElementById("list");
var mobUlList = document.getElementById("mobile-list-ul");

var isMobile = /Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent)
if (isMobile) {
    // 当前网页在手机端打开
    showMobile()
} else {
    // 当前网页在PC端打开
    if (width > 900) {
		showPc();
	} else {
		showMobile();
	}

	window.onresize = function() {
		height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight;

		left.style.height = height+"px";
		right.style.height = height+"px";

		changeWidth();
	}
}

function changeWidth() {
	width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth;

	if (width > 900 && style == 0) {
		showPc();
	} else if (width <= 900 && style == 1) {
		showMobile();
	}

	// console.log(width);
}

function showMobile() {
	style = 0;
	container.style.display = "none";
	mobilecontainer.style.display = "block";

	for (var i = 0; i < datas.length; i++) {
		var obj = datas[i];
		var title = obj.title;
		var titleLink = obj.titleLink;
		var content = obj.content;
		var time = obj.time;

		var li = document.createElement("li");
		mobUlList.appendChild(li);

		var text = "<a href=" + titleLink + " target='_blank'>" + title + "</a>";
		text += "<p>" + content + "</p>";
		text += "<div class='time'>" +  time + " <a class='read' href=" + titleLink + " target='_blank'>阅读</a></div>";
		text += "<div class='line'></div>"

	    li.innerHTML = text;
	}
}

function showPc() {
	style = 1;
	container.style.display = "flex";
	mobilecontainer.style.display = "none";

	for (var i = 0; i < datas.length; i++) {
		var obj = datas[i];
		var title = obj.title;
		var titleLink = obj.titleLink;
		var content = obj.content;
		var time = obj.time;

		var li = document.createElement("li");
		ulList.appendChild(li);

		var text = "<a href=" + titleLink + " target='_blank'>" + title + "</a>";
		text += "<p>" + content + "</p>";
		text += "<div class='time'>" +  time + " <a class='read' href=" + titleLink + " target='_blank'>阅读</a></div>";
		text += "<div class='line'></div>"

	    li.innerHTML = text;
	}
}
