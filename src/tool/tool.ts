import { el } from "element-plus/es/locales.mjs";

export function timeDiff(timestamp) {
    // 将秒时间戳转换为毫秒时间戳
    const timestampInMs = timestamp * 1000;
    
    // 获取当前时间戳（毫秒）
    const currentTime = Date.now();
    
    // 计算时间差（毫秒）
    const timeDiffInMs = currentTime - timestampInMs;
    
    // 计算天数
    const days = Math.floor(timeDiffInMs / (1000 * 60 * 60 * 24));
    
    // 计算小时数
    const hours = Math.floor((timeDiffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    return days +'Day ' + hours+'H 前' 
  }
  
export function formatAmount(amount) {
    if (amount >= 1000000000) {
      // 如果金额超过 1亿，使用 B（亿）
      return (amount / 1000000000).toFixed(2) + 'B';  // 保留两位小数
    } else if (amount >= 1000) {
      // 如果金额超过 1000，使用 K（千）
      return (amount / 1000).toFixed(2) + 'K';  // 保留两位小数
    } else {
      // 小于 1000 的金额直接返回
      if(amount<1 ) return Number(amount).toFixed(10)
      else return amount;
    }
  }
  