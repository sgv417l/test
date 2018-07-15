<template>
  <div>
   <list-header></list-header>
   <list-goods :goodslistdata="goodslistdata"></list-goods>
  </div>
</template>

<script>

import ListHeader from './components/ListHeader.vue'
import ListGoods from './components/ListGoods.vue'
import axios from 'axios'


export default {
  name: 'List',
  components: {
     ListHeader: ListHeader,
     ListGoods: ListGoods
  },
  data(){
   return{
     goodslistdata:[]
   }
  },
  methods:{
    getListInfo(){
      axios.get('../../static/mock/list.json')
      .then(this.getListInfoSucc)
    },
    getListInfoSucc(res){
      res = res.data
      if(res.ret && res.data){
         this.goodslistdata = res.data.goodslist
      }
    }
  },
mounted(){
  this.getListInfo()
}

}
</script>

<style lang="less" scoped>

</style>