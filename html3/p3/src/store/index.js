import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
    CartTableList:[]   
   },
  getters: {
     iconshow: state => {   // 根据数据数组是否有长度 返回 treu/false  用于判断显示隐藏 的方法
       if(state.CartTableList.length){
       	return true
       } else { return false}
    },
    total: state =>{  // 循环数据数组 累加总数量和总价  生成总数量和总价 
         let s=0
         let t=0
        for( var i=0; i<state.CartTableList.length;i++){
            s += state.CartTableList[i].amount ;
            t +=state.CartTableList[i].subtotal;
           }
         var obj=new Object()
         obj={"allcount":s,"allprice":t};
        return obj
    }
  },
   actions:{
     addcart(ctx,add){
       ctx.commit('add',add)
     },
     handleDelete(handle,name){
       handle.commit('MhandleDelete',name)
     },
     ChangeAmount(ChangeA,changeIndex){
       ChangeA.commit('RealChangeAmount',changeIndex)
     }
   },
   mutations:{
   	add(state,add){
      this.state.CartTableList.push(add)
      console.log(this.state.CartTableList)
   	},
   	MhandleDelete(state,name){   //删除数据的 mutation 操作 
       var DeleteIndex = this.state.CartTableList.findIndex((n)=>{
      return n.name == name
    })  
       this.state.CartTableList.splice(DeleteIndex,1)
   	},
   	RealChangeAmount(state,changeIndex){   // 更改数据里“数量”的 mutation 操作
   			var am = this.state.CartTableList[changeIndex].amount
    	    am++
    	   this.state.CartTableList[changeIndex].amount = am
    	   this.state.CartTableList[changeIndex].subtotal = am * this.state.CartTableList[changeIndex].price 
   	}
   }
})