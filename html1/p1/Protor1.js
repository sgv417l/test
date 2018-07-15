      <!--初始构造页码--> 

    window.onload=function change(){document.getElementById("currentPage").innerHTML = '1';
                                fen();

//幻灯片 
    var slidehtml = '';
    var dothtml= '';
    for (var i=0;i<datax.slideDate.length;i++){
    slidehtml += '<div class="slidewarpper fade"><div class="slide_number">' + datax.slideDate[i].slideNumber + '</div><div class="slide"><img class="slide_img" src=' + datax.slideDate[i].imgSrc + ' ></div><div class="slide_text">' + datax.slideDate[i].slideText + '</div></div>'
;   dothtml += ' <span class="dot" onclick="clickdot(' + (i+1) + ')"></span>';
     }
  document.getElementById("slidecontent").innerHTML = slidehtml;
  document.getElementById("dotwarpper").innerHTML = dothtml;
   showKps(kpIndex);


//menubar
   var menubarhtml = '';
    for (var i=0;i<datax.menubarbtn.length;i++){
      if(datax.menubarbtn[i].sublist){
          var  htmltemp = '';
          for(var j=0;j<datax.menubarbtn[i].sublist.length;j++){
              htmltemp += '<li class="submenu_li"><a href="#">'+ datax.menubarbtn[i].sublist[j].sublistname + '</a></li>'
             }
      menubarhtml += '<li id="menubarbtn"class="menubar-btn"><a href="#">'+ datax.menubarbtn[i].btnname + '</a><ul class=submenu2>' + htmltemp + '</ul></li>'
       }else{
        menubarhtml += '<li id="menubarbtn"class="menubar-btn"><a href="#">'+ datax.menubarbtn[i].btnname + '</a> </li>'
       }
    document.getElementById("menubar").innerHTML = menubarhtml;

   }

//tab
var tabtophtml = '';
 for (var i=0;i<datax.tabtoplist.length;i++){
  tabtophtml += '<li class="tab_top_btn" > <a class="tabcolor" href="javascript:void(0);" onclick="tabchange(' + i + ')" >'+ datax.tabtoplist[i].listname + '</a> </li>'
}
document.getElementById("tabtop").innerHTML = tabtophtml;

var tabcontenthtml = '';
 for (var i=0;i<datax.tabtoplist.length;i++){
    var contenthtml ='';
    for (var j=0;j<datax.tabtoplist[i].content.length;j++){
      contenthtml += '<li class="tabcontentWarpper"><a href="#">' + datax.tabtoplist[i].content[j].texe + '</a></li>'
    }
  tabcontenthtml += '<div class="tabid"><ul>' + contenthtml + '</ul></div>'
}
document.getElementById("tabcontent").innerHTML = tabcontenthtml;
   tabchange(cindex);

//Foldingbar
   var foldinghtml = '';
    for (var i=0;i<datax.foldingbar.length;i++){
      if(datax.foldingbar[i].module){
          var  moduletemp = '';
          for(var j=0;j<datax.foldingbar[i].module.length;j++){
              moduletemp += '<div class="area_contentModule"><div class="contentImg"><img src=' + datax.foldingbar[i].module[j].imgsrc + ' ></div><div class="content_taxt"><span> <a href="#" class="content_taxt_type1">' + datax.foldingbar[i].module[j].textt1 + '</a> <br><strong class="content_taxt_type2">' + datax.foldingbar[i].module[j].textt2 + '</strong> <br><span > <a href="#" class="content_taxt_type3">' + datax.foldingbar[i].module[j].textt3 + '</a></span> </span></div><div class="content_taxt2"><div style="margin-top: 10px;"> <a href="#" class="content_taxt2_type1">' + datax.foldingbar[i].module[j].text2t1 + ' </a></div> <br><div> <a href="#" class="content_taxt2_type1">' + datax.foldingbar[i].module[j].text2t2 + '</a></div></div></div>'
             }
      foldinghtml += '<div class="area_bar bar1" onclick="zdf(\'zd' +[i]+ '\')" ><div class="bar-title" >' + datax.foldingbar[i].barname + '</div></div><div id="zd' + [i] + '">' + moduletemp + '</div>'
       }else{
        foldinghtml += '<div class="area_bar bar1" onclick="zdf(\'zd' +[i]+ '\')" ><div class="bar-title" >' + datax.foldingbar[i].barname + '</div></div><div id="zd' + [i] + '"></div>'
       }
   }
   document.getElementById("channelarea").innerHTML = foldinghtml +='<div class="clear"></div>';


    }



<!--引入数据--> 
 var datap = function(data) {
  //alert('数据已获取');
  window.datax = data;
 };
var url = "./data/ky.js";
var script = document.createElement("script");
    script.setAttribute("src", url);
document.getElementsByTagName("head")[0].appendChild(script);
document.getElementsByTagName("head")[0].removeChild(script);





      <!--页码判断--> 
        function fen(){                           
          var currentPage=Number(document.getElementById("currentPage").innerHTML);   
                         
         //   var  currentPage=document.getElementById("btn2").innerHTML;
            var allPage=Number(document.getElementById("allPage").innerHTML);   
             //  alert(currentPage==allPage-3);
            document.getElementById("btn2").innerHTML=currentPage-2;
            document.getElementById("btn3").innerHTML=currentPage-1;
            document.getElementById("btn4").innerHTML=currentPage;
            document.getElementById("btn5").innerHTML=currentPage+1;
            document.getElementById("btn6").innerHTML=currentPage+2;
            document.getElementById("btn7").innerHTML=allPage;
               
               if(currentPage==1){ document.getElementById("prePage").style.display="none" ; 
                                   document.getElementById("btn1").style.display="none" ;
                                   document.getElementById("btn2").style.display="none" ;
                                   document.getElementById("btn3").style.display="none" ;
                                                  
                }else{ document.getElementById("prePage").style.display="block"}
                
              
                if(currentPage>=4&&currentPage<=allPage-3){document.getElementById("prePoint").style.display="block";
                                                       document.getElementById("nextPoint").style.display="block";
                                                      document.getElementById("btn1").style.display="none" ;
                                   document.getElementById("btn2").style.display="block" ;
                                   document.getElementById("btn3").style.display="block";
                                   document.getElementById("btn5").style.display="block" ;
                                     document.getElementById("btn6").style.display="block" ; }
                                                       else{document.getElementById("prePoint").style.display="none" ;
                                                       document.getElementById("nextPoint").style.display="none";}
                
                 if(currentPage==allPage){document.getElementById("nextPage").style.display="none" ;
                                     document.getElementById("btn5").style.display="none" ;
                                     document.getElementById("btn6").style.display="none" ;
                                     document.getElementById("btn7").style.display="none" ;
                                     document.getElementById("btn2").style.display="block" ;
                                   document.getElementById("btn3").style.display="block";
                                     
                                     }else{document.getElementById("nextPage").style.display="block" ;}                                        
                 
                if(currentPage==2){document.getElementById("btn2").style.display="none" ;
                                   document.getElementById("btn3").style.display="none" ;
                                     document.getElementById("btn1").style.display="block";
                                     }
              if(currentPage==3){document.getElementById("btn3").style.display="block" ;
                               
                                 }

           if(currentPage==allPage-1){ document.getElementById("btn5").style.display="none" ;
                                       document.getElementById("btn6").style.display="none" ;
                                       document.getElementById("btn7").style.display="block" ;
                                      }
            if(currentPage==allPage-2){document.getElementById("btn6").style.display="none" ;
                                       document.getElementById("btn7").style.display="block";
                                       document.getElementById("btn5").style.display="block" ;
                                       }                      
                                      
           }
           
           
           
  
  <!--分页码绑定的方法 -->     

  function gettextP(){document.getElementById("currentPage").innerHTML = parseInt(document.getElementById("currentPage").innerHTML)-1; fen();}
  function gettext1(){document.getElementById("currentPage").innerHTML = document.getElementById("btn1").innerHTML; fen();} 
  function gettext2(){document.getElementById("currentPage").innerHTML = document.getElementById("btn2").innerHTML; fen();}
  function gettext3(){document.getElementById("currentPage").innerHTML = document.getElementById("btn3").innerHTML; fen();}
  function gettext4(){document.getElementById("currentPage").innerHTML = document.getElementById("btn4").innerHTML; fen();}
  function gettext5(){document.getElementById("currentPage").innerHTML = document.getElementById("btn5").innerHTML; fen();}
  function gettext6(){document.getElementById("currentPage").innerHTML = document.getElementById("btn6").innerHTML; fen();} 
  function gettext7(){document.getElementById("currentPage").innerHTML = document.getElementById("btn7").innerHTML; fen();}  
  function gettextN(){document.getElementById("currentPage").innerHTML = parseInt(document.getElementById("currentPage").innerHTML)+1; fen();}



       //tab 及内容 切换
        var cindex = 0;
       function tabchange(val){
        var tabs=document.getElementsByClassName('tabid');
        var tcolors=document.getElementsByClassName('tabcolor');
        var i;
        for(i=0;i<tabs.length;i++)
        { tabs[i].style.display="none";}
          for(i=0;i<tcolors.length;i++)
         { tcolors[i].classList.remove("tcolors");}
          tabs[val].style.display="block";
          tcolors[val].classList.add("tcolors");
       }

//隐藏折叠开关
function zdf(n) {
     if(document.getElementById(n).classList.length== 0){ document.getElementById(n).classList.add("showorhide")
     }else if(!document.getElementById(n).classList.length== 0){ document.getElementById(n).classList.remove("showorhide")}
}

      


        

     //幻灯片
       var kpIndex=1;

      function backforward(n){
       showKps(kpIndex += n);
      }
      
      function clickdot(n){
        showKps(kpIndex = n);
      
      }
      
    
        function showKps(n){
        var i;
        var kps=document.getElementsByClassName("slidewarpper");
        var dots=document.getElementsByClassName("dot");
        if(n>kps.length){kpIndex=1}
        if(n<1){kpIndex=kps.length}
     
        for(i=0;i<kps.length;i++)
        { kps[i].style.display="none";
        }
        for(i=0;i<dots.length;i++)
        { dots[i].className=dots[i].className.replace("active","");   
        }
         
           if(kpIndex>kps.length){kpIndex = 1}
           kps[kpIndex-1].style.display="block";
         dots[kpIndex-1].className += " active";
                         }
      
       function haha(){showKps(); kpIndex++ }
          
       setInterval("haha()",5000);
