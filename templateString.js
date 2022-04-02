function templateString(str,obj){
    return str.replace(/\$\{([\s\S]*?)\}/g,(_,p1,offset,string)=>{
        console.log(p1);
        console.log('offset',offset);
        console.log('key',string);
        return obj[string]
    })
}
let str = 'My name is ${name},i am ${age} years old,my gender is ${gender},my Id is ${id}'
let person = {
    name:'chaos',
    age:12,
    gender:'male',
}
console.log(templateString(str,person));