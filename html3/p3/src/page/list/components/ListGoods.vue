<template>
   <div class="goods" ref="wrapper">
   	<div class="content">
	     <div class="glistwarpper"
	      v-for='item of goodslistdata'
	       :key='item.id'
	       >
	     	<div class="glist">
			       <div class="img-warpper">
			        <img :src="item.goodsimgUrl">
			       </div>
		      <div class="bottom-content">
		       <button @click="addtocart(item.id,item.goodsimgUrl)">add</button>
		      </div>
		    </div>
	     </div>
	    </div> 
    </div>
</template>

<script>

export default {
  name: 'ListGoods',
  props:{
    goodslistdata: Array
  },
   methods:{  
   addtocart(e,f){
    let  arr = this.$store.state.CartTableList
    var idExist = this.$store.state.CartTableList.find((n)=>{
      return n.id == e
    })
    if(idExist){
    	 var changeIndex = this.$store.state.CartTableList.findIndex((n)=>{
      return n.id == e
    })  
      this.$store.dispatch('ChangeAmount',changeIndex)
    } else{
        	var amount =1 
   	var price = 101
    var add = {"id":e,"imgUrl":f,"amount":1,"price":101,"subtotal":amount*price,"name":e}

     this.$store.dispatch('addcart',add)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.goods{
	    overflow: hidden;
	    position: absolute;
	    left: 0;
	    right: 0;
	    top:.4rem;
	    bottom: 0;
	    z-index:1;
	    background-color: #d4cfb0;
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
</style>