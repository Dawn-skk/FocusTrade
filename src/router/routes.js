
export default [
    {
        path: '/',
        name:'home',
        // component: () => import('../App.vue'),
        redirect:'/TokenAnalyse',
        children:[{
            path: '/TokenAnalyse',
            name: 'TokenAnalyse',
            component: () => import('../pages/TokenAnalyse/TokenAnalyse.vue'),
            meta: {
            title: '代币分析',
            searchVal:"搜索代币地址",
            requiresAuth: false,
            id:1
            }
        },{
        path: '/AddressLink',
        name: 'AddressLink',
        component: () => import('../pages/AddressLink/AddressLink.vue'),
        meta: {
          title: '地址关联',
          searchVal:"搜索钱包地址",
          requiresAuth: false,
          id:2
        }
      },]
    },{
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../pages/NotFound.vue'),
        meta: {
            title: '页面未找到',
            requiresAuth: false
        }
    }
]