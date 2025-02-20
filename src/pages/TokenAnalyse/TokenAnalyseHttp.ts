import http from '../../api/http'

export const  GetTokenMeta = (params)=>{
    return  http.get('/api/token/meta',{
        params:params
    })
}