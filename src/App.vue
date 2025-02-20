<template>
  <div class="common-layout">
    <el-container>
      <el-aside >
        <left-menu></left-menu>
      </el-aside>
      <el-container>
        <el-header>
          <TopSearch></TopSearch>
        </el-header>
        <el-main>
          {{  }}
          <router-view v-if="$route.fullPath"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
  import leftMenu from './components/leftMenu.vue';
  import TopSearch from './components/TopSearch.vue';
  // let activeDate = new Date().toString()
  
</script>

<style scoped>
.el-container {   
    height: 100%;    
  }

</style>
