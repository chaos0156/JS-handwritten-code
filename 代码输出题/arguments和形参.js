function check(day,isWeekend) {
    arguments[0] = 'Sunday';
    console.log(day,arguments[0])   // Sunday Sunday
    isWeekend = 'true'
    console.log(isWeekend,arguments[1]);    // true undefined 
}
check('Friday')


//一般模式下
// 形参空间和arguments在内存中的空间是不重叠的，
// 形参缺省的话，则二者的值是不同步的，是隔离开的
// 如果没有形参缺省的情况，则二者的值是同步的


function checkTwo(A,B){
    'use strict'
    arguments[0] = 'Sunday'
    console.log(A,arguments[0]);    // Monday Sunday
    B = 'true'
    console.log(B,arguments[1]);    // true undefined
}
checkTwo('Monday')

//严格模式下 'use strict'
// 形参和arguments始终是隔离的，不是同步的。