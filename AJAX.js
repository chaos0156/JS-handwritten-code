function getJSON(url){
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest()
        xhr.open('GET',url)
        xhr.onreadystatechange = function(){
            if(xhr.readyState !== 4) return
            if(xhr.status == 200 || xhr.status == 304){
                resolve(xhr.responseText)
            }else{
                reject(new Error(xhr.responseText))
            }
        }
        //设置客户端接收响应的数据类型
        xhr.responseType ='json'
        //设置请求头信息，Accept字段表示客户端可识别的响应内容类型
        xhr.setRequestHeader('Accept','application/json')
        xhr.send()
    })
}