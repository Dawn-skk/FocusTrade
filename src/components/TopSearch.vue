<template>
    <div class="header">
        <el-input
        v-model="searchQuery"
        style="max-width: 700px"
        size="large"
        :placeholder="placeholderVal"
        :prefix-icon="Search"
        :clearable="true"
        @keyup.enter.native="searchInfo"
        />
        <div class="user">
            <el-image style="width: 40px; height: 40px" :src="userInfo.url" fit="cover">
            </el-image>
            <span class="userName">{{ userInfo.userName }}</span>
            <MyIcon name="icon-setting" class="setting"></MyIcon>
        </div>
    </div>
    
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'
    import { Search } from '@element-plus/icons-vue'
    import { useRouter } from 'vue-router';

    const router = useRouter()
    const searchQuery = ref('')
    const pageName = ref('')
    const placeholderVal = ref('搜索代币地址')
    const userInfo = ref({
        url:'http://188.239.19.185:5759/HqFSE2.png',
        userName: "未登录"
    })

    const searchInfo = () =>{
        if(!!searchQuery.value){
            router.push({
                name: pageName.value,
                query: { q: searchQuery.value }
            });
        }
    }
</script>
    
<style scoped>
    .header{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        border-bottom: 1px solid #f0f0f0;
        padding-bottom: 5px;
    }
    .user{
        margin-left: 10px;
        width: 150px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .userImg{
        width: 40px;
        height: 40px;   
    }
    .userName{
        color: rgb(79, 79, 79);
        color-scheme: light;
        flex-shrink: 0;
        font-family: Montserrat;
        font-weight: 600;
        font-size: 14.08px;
    }
    .setting{
        font-size: 1.3em;
        cursor: pointer;
    }
</style>