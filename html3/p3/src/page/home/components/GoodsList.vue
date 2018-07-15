<template>
   <div class="goods" ref="wrapper">
   	<div class="content">
	     <div class="glistwarpper"
	      v-for='item of goodslistdata'
	       :key='item.id'
	       >
	     	<div class="glist">
                <router-link :to="'/list?'+ item.id">
			       <div class="img-warpper">
			        <img :src="item.goodsimgUrl">
			       </div>
		        </router-link> 
		      <div class="bottom-content">
		       <button @click="addtocart(item.id,item.goodsimgUrl)">add</button>
		      </div>
		    </div>
	     </div>
	    </div> 
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'HomeGoodsList',
  props:{
    goodslistdata: Array
  },
  methods:{ 
  	//点击事件 传入点击事件的参数
   addtocart(e,f){
    let  arr = this.$store.state.CartTableList
    var idExist = this.$store.state.CartTableList.find((n)=>{   //通过传入的参数和store的数据对比 判断是否已存在相同数据
      return n.id == e
    })
    if(idExist){    //如果是相同数据  向vuex的action 发送 请求修改数据的请求
    	 var changeIndex = this.$store.state.CartTableList.findIndex((n)=>{
      return n.id == e
    })  
      this.$store.dispatch('ChangeAmount',changeIndex)
    } else{             //不是相同数据  整理要发送的数据  向vuex的action 发送 添加数据的请求
        	var amount =1 
   	var price = 101
    var add = {"id":e,"imgUrl":f,"amount":1,"price":101,"subtotal":amount*price,"name":e}

     this.$store.dispatch('addcart',add)

    }


    }
  }, 
  mounted (){
    this.scroll = new BScroll(this.$refs.wrapper,{  click: true})

  }
}
</script>

<style  lang="less" scoped>
		.goods{
		    overflow: hidden;
		    position: absolute;
		    left: 0;
		    right: 0;
		    top:1.15rem;
		    bottom: 0;
		    z-index:1;
		    .content{ overflow: hidden;
				  .glistwarpper{
				    float: left;
				    overflow: hidden;
				    width:49%;
				    height: 0;
				    padding-bottom: 50%;
				    background-color: #f3f3f3;
				    margin:.01rem .01rem;
						     .glist{ position:relative;
						        width:90%;
						        display: block;
				                margin: .1rem auto;
						    .img-warpper{
						      position:relative;
						      width:100%;
						      height:0;
						      padding-bottom: 80%;
						      background-color: green;
						        overflow: hidden;
						        img{
						        	width: 100%;
						        }
						    }
						    .bottom-content{
						        position: relative;
						        width:100%;
						        height:0;
						        padding-bottom:20%;
						     //   background-color: yellow;
								    button{
						            position:absolute;
								      width: 50%;
								      height:90%;
								      left: .35rem;
								      top: .06rem;
								      border-radius: .1rem;
								      background:#fbc838;
								      outline:none;
								    }
						      }
						    }
				  }
	      }
		}
@media screen and (max-width:1280px) {.goods{top:3.5rem;} }
@media screen and (max-width:1024px) {.goods{top:3rem;} }
@media screen and (max-width:768px) {.goods{top:2.3rem;} }
@media screen and (max-width:414px) {.goods{top:1.4rem;} }
@media screen and (max-width:375px) {.goods{top:1.3rem;} }
@media screen and (max-width:320px) {.goods{top:1.15rem;} }

</style>