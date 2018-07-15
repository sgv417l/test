<template>
  <div>
    <div class="wrapper" @click="handleSwiperClick($event)">
        <swiper :options="swiperOption" v-if="swiperdata.length">
            <!-- slides -->
            <swiper-slide v-for= 'item of swiperdata' :key='item.id' >
              <img :id="item.id" class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
    </div>
    <common-gallary
     :subUrl="subUrl"
     v-show="showGallary"
     @closegallary="handleGallaryClose"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary.vue'
export default {
  name: 'HomeSwiper',
  props: {
    swiperdata: Array
  },
  components:{
    CommonGallary: CommonGallary
  },
  data(){
    return {
      subUrl:"",
      showGallary: false,
     swiperOption:{
      pagination:'.swiper-pagination',
      loop:true,
      observer:true,
    observeParents:true
     }
    }
  },
  methods:{
    handleSwiperClick(e){
      console.log(e.target) 
      var s=""
        for(var i=0; i<this.swiperdata.length;i++){
          if(this.swiperdata[i].id === e.target.id){
              s=i
          }
        }
     this.subUrl = this.swiperdata[s].subImg
      this.showGallary= true
    },
    handleGallaryClose(){
      this.showGallary= false
    }
  }
}
</script>

<style  lang="less" scoped>
.wrapper{ 
 overflow:hidden;
 width:100%; height:0;
padding-bottom: 23.3%;
    .swiper-img{
      width:100%;
    }
}
</style>

<style lang="less">
.wrapper  .swiper-pagination-bullet-active {
  background: #6cb9f1 !important;
}
</style>