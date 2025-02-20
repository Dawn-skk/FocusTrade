import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import Components from 'unplugin-vue-components/vite'; // 自动导入组件
import AutoImport from 'unplugin-auto-import/vite'; // 自动导入 API
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'; // Element Plus 解析器

export default defineConfig({
  plugins: [
    // Vue 支持
    vue(),
    // 自动导入 API
    AutoImport({
      resolvers: [ElementPlusResolver()], // 自动导入 Element Plus API
      imports: ['vue', 'vue-router', 'pinia'], // 自动导入 Vue 核心 API 和插件
      dts: 'src/auto-imports.d.ts' // 自动生成类型声明文件
    }),
    // 自动导入组件
    Components({
      dirs: ['src/components'], // 自动导入 src/components 目录中的组件
      resolvers: [ElementPlusResolver()], // 自动导入 Element Plus 组件
      dts: 'src/components.d.ts' // 自动生成类型声明文件
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 将 @ 指向 src 目录
      '@assets': path.resolve(__dirname, 'src/assets'), // 资源目录别名
      '@components': path.resolve(__dirname, 'src/components') // 组件目录别名
    }
  },
  
  server: {
    port: 3000, // 开发服务器端口
    open: true, // 自动打开浏览器
    proxy: {
      '/api': {
        // target:"http://1.94.243.219:11111/v2.0/",
        target:'https://pro-api.solscan.io/v2.0/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // 去除 `/api` 前缀
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "@/styles/variables.less";` // 自动引入全局 Less 变量
      }
    }
  },
  build: {
    outDir: 'dist', // 打包输出目录
    sourcemap: false, // 是否生成 sourcemap 文件
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    }
  },
  optimizeDeps: {
    include: ['element-plus'] // 优化依赖，预打包 Element Plus
  },
  define: {
    'process.env': process.env // 让 `process.env` 在代码中可用
  }
});
