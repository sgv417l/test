<template>
  <div>
   <div class="header">
    <div class="nav">
       <ul>
        <li><a href="#">home</a></li>
        <li id="list1" v-on:click="listshow($event)"><a href="#">clothing&nbspVV</a>
             <div id="list2" v-show="show" class="navList">
               <div>AngelySuga</div>
               <div>FuturingGirl</div>
               <div>SpicyAgeha</div>
             </div>
        </li>
        <li><a href="#">about</a></li>
        <li><a href="#">contact&nbspus</a></li>

        <router-link tag='li' to='/cart' class="iconfont">
        <a href="#">&#xe61b; 
        <div v-show="iconshow" class="NumIcon"><span>{{ListNum}}</span></div>
        </a>
        </router-link>
       </ul>
    </div>
   </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'HomeHeader',
 data() {
    return{
    show:false,
    }
  },
  computed:{
   ...mapGetters(['iconshow']),
    ListNum(){
    return this.$store.state.CartTableList.length
   }
  },
  methods:{
   listshow: function(e){
     this.show=!this.show;
      }
   }
}
</script>

<style  lang="less" scoped>
.header{background-color: red;  width: 100%;
 .nav{
   ul{margin: 0;padding:0;
       height: .4rem;
       display:flex;
       flex-direction: row;
    li{list-style:none;
       background-color:#263526;
       text-align:center;
       width:25%;
       padding-left:.01rem;
       padding-right:.01rem;
       border-right: .01rem solid black;

	      a{font-size: .11rem;
	       color:#fff;
	       text-decoration:none;
	       line-height: .4rem;
	       padding-left:.08rem;
	       padding-right:.1rem;
	       position: relative;
             .NumIcon{
                bottom:.05rem;
                left: -.03rem;
                width: .13rem;
                height: .13rem;
                border-radius:50%;
                position:absolute;
                z-index:3;
                background-color: red;
                line-height: .12rem;
                font-weight:bold;
                 span{
                   margin-left:-.01rem;
                 }
             }
	       }
	        .navList{position:relative;background-color:#609660; 
	        	     min-width:2rem;  z-index:2;
               div{ color:#fff;
                    padding: .08rem;
                     border: .01rem solid black;
                            &{
                           border-bottom: none;
                          }
                   }

             }
            &:last-child.aa{
          border-right: none;
                          }
       }
   }
 }
}
</style>