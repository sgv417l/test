$(document).ready(function(){
$(".close").click(function(){  $(".modle").css("display","none"); });  //关闭按钮

});
    //请求数据
	 $.ajax({
	 	url:"http://localhost:3000/source/pro2data.js",
	 	type:"get",
	 	dataType:"jsonp",
	 	jsonpCallback:"datap",
	 	success:function (data){
	 	  alert("Welcome");
	 	  datap = data;
	 	  drawPagination();
	 	  drawPage(1);
	 	},
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        }
	 });
//显示大图
function showBigPic(n){
    var $TSrc = $("#"+n).find("img").attr("src")
    $(".imgwarpper").children("img").attr("src",$TSrc)
     $(".modle").css("display","block");
}
//绘制页码按钮
function drawPagination(){
	var paghtml = '';
  allpage = Math.ceil(datap.purl.length/ pagesize);
for (var i=0;i<allpage;i++){
    paghtml += '<li class="page-item" onclick="drawPage('+ (i+1) +')"><a class="page-link" href="javascript:void(0);">' + (i+1) + '</a></li>'
}
$("#pagnav").html(paghtml);

}
/*
var callback = function(){
	alert("saolima!");
}
*/
//绘制图片页面
function drawPage(c){
   curpage = c;
   if(curpage>pagesize){   //判断当前页是不是过大或者过小
   curpage=pagesize;
   alert("到头啦");
   return
   }else if(curpage<1){
    curpage=1;
       alert("到头啦");
   return
   }
$("#pm").html('');
   var pmhtml = '';
   for (var i=0;i<pagesize;i++){
    if(datap.purl[((curpage-1)*pagesize+i)]){  //判断数据是否存在
     pmhtml +='   <div id="p' + (i+1) + '" class="picture-modle col-md-6" onclick="showBigPic(\'p' + (i+1) + '\')"><div class="pwarpper"><img class="col-md-12" src="' + datap.purl[((curpage-1)*pagesize+i)].url + '"></div></div>'
    }else{
     pmhtml +=''
    }
   }
$("#pm").html(pmhtml);
}
//前进后退按钮
function backforward(n){
    curpage += n;
    drawPage(curpage);
}
//一些变量
var pagesize = 4;
var curpage = 0;
var alllist;
var allpage;



