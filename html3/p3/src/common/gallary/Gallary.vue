<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
       <img :src="subUrl">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props:{
    subUrl: String
  },
  methods:{
    handleGallaryClick(){
      this.$emit('closegallary')
    }
  }
}
</script>

<style  lang="less" scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  position:fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;
  .wrapper{
    overflow:hidden;
    height: 0;
    width:100%;
    padding-bottom:4.5rem;
    background: #fff;
    img{
      width:100%;
    }
  }

}
</style>
