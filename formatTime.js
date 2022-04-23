function formatDate(val , str) {
    let date = new Date(val)
    let obj = {
        yyyy : date.getFullYear(),
        yy : date.getFullYear().toString().slice(-2),
        MM : padZero(date.getMonth() + 1),
        M : date.getMonth() + 1,
        dd : padZero(date.getDate()),
        d : date.getDate(),
        HH : padZero(date.getHours()),
        H : date.getHours(),
        hh : padZero(date.getHours() % 12),
        h : date.getHours() % 12,
        mm : padZero(date.getMinutes()),
        m : date.getMinutes(),
        ss : padZero(date.getSeconds()),
        s : date.getSeconds(),
        w : ['日', '一', '二', '三', '四', '五', '六'][date.getDay()]
    }
    return str.replace(/([a-z]+)/ig,function(match){ return obj[match] })
}
function padZero(num) {
    if(num < 10) {
        return '0' + num
    }else return num
}
var localOffset = new Date().getTimezoneOffset()*60*1000; 
var sResult = formatDate(new Date(1409894060000+localOffset), 'yyyy-MM-dd HH:mm:ss 星期w');
console.log(sResult);