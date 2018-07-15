<template>
  <div>
   <div class="header">
    <ul class="h-warpper">
      <router-link to='/' tag='li'>
      <li class="h-left">返回</li>
      </router-link>
      <li class="h-middle">
       <input type="text" name="search-text" placeholder="???">
      </li>
      <router-link tag='li' to='/cart' class="h-right">
        <span class="iconfont">&#xe61b; 
            <div v-show="iconshow" class="NumIcon"><span>{{ListNum}}</span></div>
        </span>
       </router-link>
    </ul>
   </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'ListHeader',
  computed:{
   ...mapGetters(['iconshow']),
    ListNum(){
    return this.$store.state.CartTableList.length
   }
  }
}
</script>

<style lang="less" scoped>
.h-warpper{
  margin: 0;
  padding:0;
  width: 100%;
 background-color:#3882b5;
 color: white;
   display: inline-block;
   list-style:none;
  .h-left{
    float: left;
    line-height: .4rem;
    padding:0 .08rem;
  }
  .h-middle{
   float: left;
   margin-top: .04rem;
   width:67%;
    input{
    	width: 100%;
      line-height: .24rem;
      border-radius: .1rem;
       outline:none;
    }
  }
  .h-right{
  	float: right;
  	 line-height: .4rem;
  	 padding:0 .1rem;
  	span{
  		position: relative;
  		.NumIcon{ bottom:.05rem;
                left: -.16rem;
                width: .15rem;
                height: .15rem;
                border-radius:50%;
                position:absolute;
                z-index:2;
                background-color: red;
                line-height: .14rem;
                font-weight:bold;
                font-size:.13rem;
                text-align: center;
  			span{
                margin-left:-.02rem;
  			}
  		}
  	}
  }

}

</style>