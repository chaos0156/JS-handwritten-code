function formatDate(str) {
    const date = new Date(str)
    const YYYY = date.getFullYear()
    const MM = padLeftZero(date.getMonth() + 1)
    const DD = padLeftZero(date.getDate())
    const hh = padLeftZero(date.getHours())
    const mm = padLeftZero(date.getMinutes())
    const ss = padLeftZero(date.getSeconds())
    return `${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}`
}

function padLeftZero(num) {
    const str = '' + num
    return str.length < 2 ? '0' + str : str
}

let d = formatDate(Date.now())
console.log(d)