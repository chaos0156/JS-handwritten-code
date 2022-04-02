function parseParam(url) {
  //const paramsStrsss = /\?(.+)$/.exec(url)
  //console.log('paramsStrsss', paramsStrsss);
  const paramsStr = /\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串取出来
  //console.log('paramsStr', paramsStr);
  const paramsArr = paramsStr.split('&'); // 将字符串以 & 分割后存到数组中
  //console.log('paramsArr', paramsArr);
  let paramsObj = {};
  // 将 params 存到对象中
  paramsArr.forEach(param => {
    if (/=/.test(param)) { // 处理有 value 的参数
      let [key, val] = param.split('='); // 分割 key 和 value
      //console.log(key);
      val = decodeURIComponent(val); // 中文解码
      //console.log(typeof val)
      val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为number类型
      //console.log(typeof val);
      if (paramsObj.hasOwnProperty(key)) { // 如果对象有 key，则添加一个值
        //console.log(key)
        paramsObj[key] = [].concat(paramsObj[key], val);
      } else { // 如果对象没有这个 key，创建 key 并设置值
        paramsObj[key] = val;
      }
    } else { // 处理没有 value 的参数
      paramsObj[param] = true;
    }
  })
  return paramsObj;
}
let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&uId=778&city=123%E5%8C%97%E4%BA%AC&enabled';
let urlObj = parseParam(url)
console.log(urlObj);
// {
//   user: 'anonymous',
//   id: [ 123, 456 ],  // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
//   uId: 778,
//   city: '123北京', // 中文需解码
//   enabled: true // 未指定值的 key 约定为 true
// }