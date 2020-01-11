


$(function () {
  // $(document).pjax('a', '#main-container')
  initScroll();

  $('.nav-header .menu').click(function () {
    var $s = $('#app-sidebar');
    if ($s.hasClass('show')) {
      $s.removeClass('show');
    }else{
      $s.addClass('show');
    }
  });

  $('.nav-header .search').click(function () {
    var $s = $('#header-nav-panel');
    if ($s.hasClass('show')) {
      $s.removeClass('show');
    }else{
      $s.addClass('show');
    }
  });

  $('#main-container').click(function(){
    var $s = $('#app-sidebar');
    if ($s.hasClass('show')) {
      $s.removeClass('show');
    }
  });


  $('.row-box.flex').click(function () {
    var $p = $(this).parent('li');
    var $r = $(this).find('i.angle');
    if ($p.hasClass('active')) {
      $p.removeClass('active');

      $r.removeClass('fa-angle-down');
      $r.addClass('fa-angle-right');
    }else{
      $p.addClass('active');
      $r.removeClass('fa-angle-right');
      $r.addClass('fa-angle-down');
    }
  });

  initMainSidebar();
});

function initMainSidebar() {
  $('.nav-tabs span').click(function () {
    $(this).parentsUntil("ul.nav-tabs").find(".active").removeClass("active");
    $(this).addClass("active");
    var $d = $($(this).attr('data-tab'));
    var $n = $d.parent().children();
    if (!$d.hasClass('active')) {
      $n.removeClass('active');
      $d.addClass('active');
    }
  });
}






function initScroll() {
  $("#main-container").scroll(function() {
    if ($("#main-container").scrollTop() > 100) {
      $("#backToTop").fadeIn(1000);
    } else {
      $("#backToTop").fadeOut(1000);
    }
  });
  $("#article-toc").navScrollSpy({
      container: '#main-container',
      current:"active",
      scrollSpeed: 50
  });

  $("#panel-article-toc").navScrollSpy({
    container: '#main-container',
    current:"active",
    scrollSpeed: 50
  });
}




function backToTop() {
  $('#main-container').stop().animate({scrollTop: 0}, 1000);
}


function showToc() {
  var $s = $('#fixed-panel .toc-panel');
  if ($s.hasClass('show')) {
    $s.removeClass('show');
  }else{
    $s.addClass('show');
  }
}

function siteTime(t1) {
  window.setTimeout(()=>{
   siteTime(t1)
  }, 1000);
  var diff = getSiteTime(t1);
  // document.getElementById("sitetime").innerHTML="本站已勉强存活 "+(diff.years>0 ? diff.years+" 年 ":"")+diff.days+" 天 "+diff.hours+" 小时 "+diff.minutes+" 分钟 "+diff.seconds+" 秒";
  // document.getElementById("siteDate").innerHTML=(diff.years>0 ? diff.years+"年":"")+diff.days+"天";
  $("#sitetime").text("本站已勉强存活 "+(diff.years>0 ? diff.years+" 年 ":"")+diff.days+" 天 "+diff.hours+" 小时 "+diff.minutes+" 分钟 "+diff.seconds+" 秒")
  $("#siteDate").text((diff.years>0 ? diff.years+"年":"")+diff.days+"天");
}

function lastActiveTime(t1) {
  window.setTimeout(()=>{
    lastActiveTime(t1)
  }, 1000);
  var diff = getSiteTime(t1);
  // document.getElementById("lastActive").innerHTML= (diff.years>0 ? diff.years+"年":"")+diff.days+"天前";
  $("#lastActive").text((diff.years>0 ? diff.years+"年":"")+diff.days+"天前");
}


function getSiteTime(t1){
  var seconds = 1000;
  var minutes = seconds * 60;
  var hours = minutes * 60;
  var days = hours * 24;
  var years = days * 365;
  var today = new Date();
  var todayYear = today.getFullYear();
  var todayMonth = today.getMonth()+1;
  var todayDate = today.getDate();
  var todayHour = today.getHours();
  var todayMinute = today.getMinutes();
  var todaySecond = today.getSeconds();
  /* Date.UTC() -- 返回date对象距世界标准时间(UTC)1970年1月1日午夜之间的毫秒数(时间戳)
  year - 作为date对象的年份，为4位年份值
  month - 0-11之间的整数，做为date对象的月份
  day - 1-31之间的整数，做为date对象的天数
  hours - 0(午夜24点)-23之间的整数，做为date对象的小时数
  minutes - 0-59之间的整数，做为date对象的分钟数
  seconds - 0-59之间的整数，做为date对象的秒数
  microseconds - 0-999之间的整数，做为date对象的毫秒数 */
  // var t1 = Date.UTC(2018,02,13,15,00,00); //北京时间2018-2-13 00:00:00
  var t2 = Date.UTC(todayYear,todayMonth,todayDate,todayHour,todayMinute,todaySecond);
  var diff = t2-t1;
  var diffYears = Math.floor(diff/years);
  var diffDays = Math.floor((diff/days)-diffYears*365);
  var diffHours = Math.floor((diff-(diffYears*365+diffDays)*days)/hours);
  var diffMinutes = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours)/minutes);
  var diffSeconds = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours-diffMinutes*minutes)/seconds);
  return {
      years : diffYears,
      days :  diffDays,
      hours : diffHours,
      minutes : diffMinutes,
      seconds : diffSeconds
  }
  // document.getElementById("sitetime").innerHTML="本站已勉强存活"+diffYears+" 年 "+diffDays+" 天 "+diffHours+" 小时 "+diffMinutes+" 分钟 "+diffSeconds+" 秒";
  // document.getElementById("siteDate").innerHTML=diffYears+"年"+diffDays+"天";
}/*因为建站时间还没有一年，就将之注释掉了。需要的可以取消*/




function getIp() {
    var getOSAndBrowser = function () {
      var os = navigator.platform;
      var userAgent = navigator.userAgent;
      var info = "";
      var tempArray = "";
      if (os.indexOf("Win") > -1) {
        if (userAgent.indexOf("Windows NT 5.0") > -1) {
          info += "Win2000"
        } else if (userAgent.indexOf("Windows NT 5.1") > -1) {
          info += "WinXP"
        } else if (userAgent.indexOf("Windows NT 5.2") > -1) {
          info += "Win2003"
        } else if (userAgent.indexOf("Windows NT 6.0") > -1) {
          info += "WindowsVista"
        } else if (userAgent.indexOf("Windows NT 6.1") > -1 || userAgent.indexOf("Windows 7") > -1) {
          info += "Win7"
        } else if (userAgent.indexOf("Windows NT 6.2") > -1 || userAgent.indexOf("Windows 8") > -1) {
          info += "Win8"
        } else if (userAgent.indexOf("Windows NT 6.3") > -1 || userAgent.indexOf("Windows 8.1") > -1) {
          info += "Win8.1"
        } else if (userAgent.indexOf("Windows NT 10.0") > -1 || userAgent.indexOf("Windows 10") > -1) {
          info += "Win10"
        } else {
          info += "Other"
        }
      } else if (os.indexOf("Mac") > -1) {
        info += "Mac"
      } else if (os.indexOf("X11") > -1) {
        info += "Unix"
      } else if (os.indexOf("Linux") > -1) {
        info += "Linux"
      } else {
        info += "Other"
      }
      info += "/";
      var isOpera = userAgent.indexOf("Opera") > -1;
      var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera;
      var isEdge = userAgent.toLowerCase().indexOf("edge") > -1 && !isIE;
      var isIE11 = (userAgent.toLowerCase().indexOf("trident") > -1 && userAgent.indexOf("rv") > -1);
      if (/[Ff]irefox(\/\d+\.\d+)/.test(userAgent)) {
        tempArray = /([Ff]irefox)\/(\d+\.\d+)/.exec(userAgent);
        info += tempArray[1] + tempArray[2]
      } else if (isIE) {
        var version = "";
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
          version = "IE7"
        } else if (fIEVersion == 8) {
          version = "IE8"
        } else if (fIEVersion == 9) {
          version = "IE9"
        } else if (fIEVersion == 10) {
          version = "IE10"
        } else {
          version = "0"
        }
        info += version
      } else if (isEdge) {
        info += "Edge"
      } else if (isIE11) {
        info += "IE11"
      } else if (/[Cc]hrome\/\d+/.test(userAgent)) {
        tempArray = /([Cc]hrome)\/(\d+)/.exec(userAgent);
        info += tempArray[1] + tempArray[2]
      } else if (/[Vv]ersion\/\d+\.\d+\.\d+(\.\d)* *[Ss]afari/.test(userAgent)) {
        tempArray = /[Vv]ersion\/(\d+\.\d+\.\d+)(\.\d)* *([Ss]afari)/.exec(userAgent);
        info += tempArray[3] + tempArray[1]
      } else if (/[Oo]pera.+[Vv]ersion\/\d+\.\d+/.test(userAgent)) {
        tempArray = /([Oo]pera).+[Vv]ersion\/(\d+)\.\d+/.exec(userAgent);
        info += tempArray[1] + tempArray[2]
      } else {
        info += "unknown"
      }
      return info
    };
    $("#visitors-info").html("欢迎来自" + returnCitySN["cname"] + "的朋友"+"<br>您的 IP 是：" + returnCitySN["cip"]+"<br>您使用的是：" + getOSAndBrowser());
}

function hitokoto(){
  var xhr = new XMLHttpRequest();
  xhr.open('get', 'https://v1.hitokoto.cn');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var data = JSON.parse(xhr.responseText);
      var $content = $("#header-blog-motto");
      // var $content = document.getElementById('header-blog-motto');
      // $content.innerHTML = data.hitokoto; 
      $("#header-blog-motto").text(data.hitokoto);
      // var $author = document.getElementById('header-blog-motto-author');
      //     $author.innerHTML ="——— "+(data.type==="e"||data.type==="f"||data.type==="g"?data.from:"《"+data.from+"》");
      $("#header-blog-motto-author").text("——— "+(data.type==="e"||data.type==="f"||data.type==="g"?data.from:"《"+data.from+"》"));
    }
  }
  xhr.send();
}

function jinrishici() {
  jinrishici.load(function(result) {
    $("#header-blog-motto").text(result.data.content);
    $("#header-blog-motto-author").text( "———《"+result.data.origin.title +"》- "+ result.data.origin.dynasty +" - "+result.data.origin.author);
    // var content = result.data.content;
    // document.getElementById('header-blog-motto').innerHTML=content;
    // var author = "———《"+result.data.origin.title +"》- "+ result.data.origin.dynasty +" - "+result.data.origin.author
    // document.getElementById('header-blog-motto-author').innerHTML=author;
  });
}

function favqs() {
  var xhr = new XMLHttpRequest();
  xhr.open('get', 'https://favqs.com/api/qotd');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var data = JSON.parse(xhr.responseText);
       $("#header-blog-motto").text(data.quote.body);
        $("#header-blog-motto-author").text("——— "+data.quote.author);
      // var $content = document.getElementById('header-blog-motto');
      // $content.innerHTML = data.quote.body; 
      // var $author = document.getElementById('header-blog-motto-author');
      // $author.innerHTML ="——— "+data.quote.author;
    }
  }
  xhr.send();
}