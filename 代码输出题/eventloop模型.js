var a = 0
async function print() {
    let res =  a + await 10
    console.log(res);       // 10
}
print()
a++

var b = 0
async function Pprint() {
    let res =  await 10 + b
    console.log(res);       // 11
}
Pprint()
b++