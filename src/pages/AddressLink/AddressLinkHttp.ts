import http from "../../api/http";

export const getAccountTransfer = (params)=>{
    return http.get('/api/account/transfer',{
        params:params
    })
}
export const getAccountTokenAccounts = (params)=>{
    return http.get('/api/account/token-accounts',{
        params:params
    })
}

export const getAccountBalanceChange = (params)=>{
    return http.get('/api/account/balance_change',{
        params:{ ...params }
    })
}