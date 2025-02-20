<template>
        <div class="TokenAnalyse">
            <div class="leftTokenAnalyse">
                <h5>代币简介</h5>
                <div class="leftTokenAnalyseInfo">
                    <div class="AnalyseInfo">
                        <p>{{ GetTokenMetaInfo.metadata.name || '' }}</p>
                        <el-image style="width: 82px; height: 82px;border-radius: 50%;" :src="GetTokenMetaInfo.metadata.image" fit="cover" />
                    </div>
                    <div class="infoMeta">
                        <p>{{ timeDiff(GetTokenMetaInfo.first_mint_time|| '0' )}}</p>
                        <p>{{formatAmount(GetTokenMetaInfo.holder)|| '0' }} 持有</p>
                        <p>${{formatAmount(GetTokenMetaInfo.market_cap|| '0') }} 市值</p>
                        <p>${{formatAmount(GetTokenMetaInfo.price)|| '0' }} 价格</p>
                    </div>
                    <div class="dev">
                        <span>DEV地址：</span>
                        <span class="click" @click="gotoAddress">{{ GetTokenMetaInfo.creatorShow || 'J3TqbUgH*****drkpump'}}</span>
                        <MyIcon name="icon-copy" class="copy" @click="copyText"></MyIcon>
                    </div>
                    <div class="Introduction">
                        叙事待更新
                    </div>
                </div>
                
            </div>
            <div class="rightTokenAnalyse">
                <h5>k线</h5>
                <iframe :key="random"  class="Analyse" :src="'https://www.gmgn.cc/kline/sol/'+url"   frameborder="0" allowtransparency="true"></iframe>
            </div>
        </div>
</template>
    
<script setup lang='ts'>
    import { GetTokenMeta } from './TokenAnalyseHttp';
    import { timeDiff,formatAmount } from '../../tool/tool';
    import { useStore } from 'vuex';
    import { Picture as IconPicture } from '@element-plus/icons-vue'

    const url = ref('J3TqbUgHurQGNxWtT88UQPcMNVmrL875pToQZdrkpump')
    // const store = useStore()
    const router = useRouter();
    let random = Math.random()
    const address = reactive({address:'J3TqbUgHurQGNxWtT88UQPcMNVmrL875pToQZdrkpump'})
    const GetTokenMetaInfo = reactive({creator:'1wPWMo*****857Hkq'})

    const GetTokenMetaHttp = async()=>{
        try {
        const result = await GetTokenMeta(address)
        Object.assign(GetTokenMetaInfo,result)
        GetTokenMetaInfo.creatorShow = GetTokenMetaInfo.creator.slice(0, 6) + '*****' + GetTokenMetaInfo.creator.slice(-6)
        // store.state.creator = result.creator
        sessionStorage.setItem('creator',result.creator)
        }catch(err){
        console.log(err)
        }
    }
    GetTokenMetaHttp()

    const copyText = async ()=>{
        try{
        await navigator.clipboard.writeText(GetTokenMetaInfo.creator)
        }catch(err){}
    }
    watch(()=> router.currentRoute.value.query.q,(newRouter)=>{
    console.log(newRouter)
      url.value = newRouter
    })
    const gotoAddress = ()=>{
      router.push({
        name: 'AddressLink',
      });
    }
</script>
    
<style scoped>
    .TokenAnalyse{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 430px;
    }
    .leftTokenAnalyse{
        width: 380px;
        height: 100%;
        position: relative;
        margin-right: 20px;
    }
    .leftTokenAnalyseInfo{
        width: 100%;
        height: 400px;
        position: absolute;
        bottom: 0px;
        border: 1px solid #0000001a;
        padding: 20px 15px;
        overflow: hidden;
    }
    .rightTokenAnalyse{
        flex: 1;
        height: 100%;
        position: relative;
    }
    .infoMeta>p{
        text-align: right;
        margin-bottom: 20px;
        font-size: 1rem;
        color: #000000;
    }
    .copy{
        margin-left: 10px;
        cursor: pointer;
    }
    .dev{
        margin-top: 50px;
        font-size: 17px;
        text-align: center;
    }
    .Introduction{
        margin: 15px 26px 0px 26px;
    }
    .AnalyseInfo{
        position: absolute;
        left: 30px;
    }
    .AnalyseInfo>p{
        color: #444444;
        font-size: 18px;
        text-transform: capitalize;
        margin-bottom: 10px;
        font-weight: 600;
    }
    .Analyse{
        min-width: 400px;
        width: 100%;
        height: 400px;
        position: absolute;
        bottom: 0px;
    }
    .click{
        cursor: pointer;
    }
</style>