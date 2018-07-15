<template>
  <div>
  <home-header></home-header>
  <home-swiper :swiperdata="swiperdata"></home-swiper>
  <home-goods-list :goodslistdata="goodslistdata"></home-goods-list>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeGoodsList from './components/GoodsList.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper,
    HomeGoodsList: HomeGoodsList
  },
  data(){
   return{
     swiperdata:[],
     goodslistdata:[]
   }
  },
   methods:{
     getHomeInfo(){
       axios.get('/static/mock/index.json')
       .then(this.getHomeInfoSucc)
     },
     getHomeInfoSucc (res){
       res = res.data
       if(res.ret && res.data){
        this.swiperdata = res.data.swiperimg
        this.goodslistdata = res.data.goodslist
       }
     }
   },
  mounted(){
    this.getHomeInfo()
  }
}
</script>

<style lang="less" scoped>


</style>
