<template>
  <el-row >
    <el-col>
      <el-menu
        default-active="TokenAnalyse"
        @open="handleOpen"
        @close="handleClose"
        @click="changePage"
        router
      >
      <div class="top">
        <img src="../assets/Logo.png" alt="">
        <h2 class="top-name">FocusTrade</h2>
      </div>
        <el-menu-item index="TokenAnalyse">
          <MyIcon name="icon-btc-line" class="line"></MyIcon>
          <span class="items">代币分析</span>
        </el-menu-item>
        <el-menu-item index="AddressLink">
          <MyIcon name="icon-link" class="link"></MyIcon>
          <span class="items">地址关联</span>
        </el-menu-item>
        <el-menu-item index="3">
          <MyIcon name="icon-shoucang" class="shoucang"></MyIcon>
          <span class="items">收藏夹</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
    
<script setup lang='ts'>
    const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
    }
    const changePage =(key:string,keyPath)=>{
      // console.log(key, keyPath)
    }
</script>
    
<style scoped>
.el-menu{
    height:100vh
}
.line,.link,.shoucang{
  margin-right: 10px;
  font-size: 1.3em;
}
.top{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.top>img{
  margin-right: 10px;
}
</style>