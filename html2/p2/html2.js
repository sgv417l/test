
$(document).ready(function() {     
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: true,
     mousewheel: true,
     observer:true,
observeParents:true,
    // 分页器
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },
    // 前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // 滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },

                on: {
                slideChange: function(){
                $(".panel").css("display","none");
                $(".panel").fadeIn(500);
                },
                slideChangeTransitionStart: function(){
                                          var a=this.realIndex
                                          if(a=="0"){      $(".navbar-sub").css("display","none");
                                               $(".navbar-main").fadeIn(500);
                                                    }else{  $(".navbar-main").css("display","none");
                                                            $(".navbar-sub").fadeIn(500);
                                                         }
                                                       },
                     },
             })
       })

$(document).ready(function(){

$(".panel-sidebar").hover(
    function(){
      $(".panel-sidebar").css("left","0px")
      $(".list-group").css("bottom","0px")
              },
    function(){
      $(".list-group").css("bottom","290px") 
      $(".panel-sidebar").css("left","-190px")

              }
                         );
//验证
checkSessionStorage();
});


function checkPw(form){
  if(form.name.value=='123' && form.pw.value=='123'){
   $("#hBtn").css('display','block');
    $('.modal').modal('hide');
      $('.modal').on('hidden.bs.modal', function () {
    sessionStorage.setItem('username','123');
    $(window).attr('location','./page/page1.html');
})
    return false;
  }else{ alert("不对不对！");
    return false;}



}
//验证登陆
function checkSessionStorage(){

  if (sessionStorage.getItem('username')){
     $("#hBtn").css('display','block');
 }

}


