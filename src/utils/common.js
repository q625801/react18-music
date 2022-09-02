export const myDate = (data) => {
    let now = data ? new Date(data) : new Date();                                                                                                     
    let year = now.getFullYear(); //得到年份
    let month = now.getMonth();//得到月份
    let date = now.getDate();//得到日期
    month = month + 1;
    if (month < 10){
        month = "0" + month
    }
    if (date < 10) date = "0" + date;
    let time = year + "-" + month + "-" + date;    //（格式化"yyyy-MM-dd"）     
    return time
}

export const formatPlaycount = (playCount) => {
    return playCount > 100000000 ? (playCount/100000000).toString().split(".")[0] + "亿" : playCount > 10000 ? (playCount/10000).toString().split(".")[0] + "万" : playCount
}

export const minutes = (times) => {
    var minutes = Math.floor(times / (1000 * 60)) % 60; //计算剩余的分钟
    if (minutes < 10) {
      return "0" + minutes;
    } else {
      return minutes;
    }
  }
export const seconds = (times) => {
    var seconds = Math.floor(times / 1000) % 60; //计算剩余的秒数
    if (seconds < 10) {
      return "0" + seconds;
    } else {
      return seconds;
    }
}
export const playtime = (time) => {
    return minutes(time) + ":" + seconds(time)
}
export const Shuffle = (arr) => {
  let res = [],random
  while (arr.length > 0) {
    random = Math.random() * arr.length
    res.push(arr.splice(random,1)[0])
  }
  return res
}