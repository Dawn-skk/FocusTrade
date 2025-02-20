import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import store from '../store';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = to.meta.title || 'FocusTrade';
  
  // 权限验证示例
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next({ name: 'NotFound' });
  } else {
    next();
  }
});

// 模拟认证状态
function isAuthenticated() {
  // 这里可以替换为实际的认证检查逻辑
  return false;
}

// 全局后置钩子
router.afterEach((to, from) => {
  // 示例：可以在这里添加页面访问统计
 
});

export default router;