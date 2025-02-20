<template>
  <div class="not-found">
    <h1>404 - 页面未找到</h1>
    <p>您访问的页面不存在</p>
    <router-link to="/">返回首页</router-link>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 2rem;
}

h1 {
  color: #ff4757;
  margin-bottom: 1rem;
}

a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
}
</style>