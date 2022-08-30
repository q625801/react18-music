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