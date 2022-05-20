function getJSON(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', url,true)
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return
            if (xhr.status == 200 || xhr.status == 304) {
                resolve(xhr.responseText)
            } else {
                reject(new Error(xhr.responseText))
            }
        }
        //设置客户端接收响应的数据类型
        xhr.responseType = 'json'
        //设置请求头信息，Accept字段表示客户端可识别的响应内容类型
        xhr.setRequestHeader('Accept', 'application/json')
        xhr.send(null)
    })
}
// 模拟表单提交
function formPost(url) {
    let xhr = new XMLHttpRequest()
    xhr.open("post", url, true)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                console.log(xhr.responseText)
            } else {
                console.log(xhr.responseText)
            }
        }
    }
    xhr.setRequestHeader('Content-Type', 'application/x-www-formurlencoded')
    let form = document.forms[0]
    xhr.send(serialize(form))
}

//使用FormData模拟表单提交
function formPPost(url) {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                console.log(xhr.responseText)
            } else {
                console.log(xhr.responseText)
            }
        }
    }
    xhr.open('post', url, true)
    let form = new FormData(document.forms[0])
    xhr.send(form)
}