<template>
  <div>
   <div  v-for='(item,index) in detailList'
       :key='index'
   class="tablewarpper">
     <div class="imgwarpper">
       <img :src="item.imgUrl">
     </div>
     <div class="detail">
       <div>商品名称:{{item.name}}</div>
       <div>数量：{{item.amount}}</div>
       <div>单价：{{item.price}} ￥ </div>
       <div>小计：{{item.subtotal}} ￥ </div>
       <div @click="handleDelete(item.name)"class="delete"><p class="iconfont">&#xe658;</p></div>
     </div>
   </div>
   <div class="total" >
      <div>总数：{{total.allcount}}</div>
      <div>总计：{{total.allprice}}</div>
   </div>
   <div class="button-group">
    <button @click="$router.back(-1)">返回</button>
    <button @click="aa">确认</button>
   </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'CartTable',
  data(){
   return{

        }
  },
  methods:{
  	aa(){
         console.log("aa")
  	},
  	handleDelete(name){
   this.$store.dispatch('handleDelete',name)
  	}
  },
  computed:{
   ...mapGetters(['total']),
   detailList(){
    return this.$store.state.CartTableList
   }
  }
}
</script>

<style lang="less" scoped>
.tablewarpper{
  margin-bottom: .02rem;
  width: 100%;
  height: 0;
  display: inline-flex;
  background-color:#e0e0e0;
  overflow: hidden;
  padding-bottom:35%;
  .imgwarpper{
   background-color:#f5eaea;
   width:30%;
    padding-bottom:35%;
    img{
     width: 100%;
     margin-top: .08rem;
    }
  }
  .detail{
  	 width:70%;
  	  padding-bottom:35%;
      background-color:#ecf7e9;
     div{
       line-height: .24rem;
       padding-top: .04rem;
       padding-left:.08rem;
     }
   .delete{position:absolute;
        padding: 0;
        margin: 0;
        p{ position:relative;
        	padding: 0;
        margin: 0;
          left:1.9rem;
         bottom:1.1rem;
        }
   }
  }
}
.total{
  padding-left: .1rem;
  margin-top: .2rem;
}
.button-group{
   
  button{
    margin-left:.4rem;
    margin-top: .3rem;
    width: 30%;
    line-height: .5rem;
   border-radius: .1rem;
   outline:none;
  }
}

</style>
