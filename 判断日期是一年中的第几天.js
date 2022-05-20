
//输入日期，判断这个日期是这一年的第几天?
console.log(getDays(2022, 1, 1));

function getDays(year, month, day) {
    var arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (var i = 0; i < month - 1; i++) {
        day += arr[i];
    }
    if (month > 2 && isLeap(year)) {
        day++;
    }
    return day;
}
// 判断是否是闰年
function isLeap(year) {
    if (year % 400 == 0 || year % 4 === 0 && year % 100 !== 0) {
        return true;
    } else {
        return false;
    }
}
