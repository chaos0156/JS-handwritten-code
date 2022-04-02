// const imgList = document.querySelectorAll('img')
// console.log(typeof imgList);
// window.addEventListener('scroll',(e)=>{
//     imgList.forEach(image=>{
//         const imageTop = image.getBoundingClientRect().top
//         if(imageTop<window.innerHeight){
//             image.src = image.dataset.src
//             // const data_src = image.getAttribute('data-src')
//             // image.setAttribute('src',data_src)
//         }
//         console.log('scroll触发');
//     })
// })
// let imgList = [...document.querySelectorAll('img')]
// //console.log(imgList);
// let length = imgList.length
// const imgLazyLoad = (function () {
//     let count = 0
//     return function () {
//         let deleteIndexList = []
//         imgList.forEach((img, index) => {
//             let rect = img.getBoundingClientRect()
//             //console.log(rect);
//             if (rect.top < window.innerHeight) {
//                 console.log('index',index);
//                 img.src = img.dataset.src
//                 deleteIndexList.push(index)
//                 //console.log(deleteIndexList);
//                 count++
//                 if (count === length) {
//                     document.removeEventListener('scroll', imgLazyLoad)
//                 }
//             }
//             //console.log('scroll触发了');
//         })
//          imgList = imgList.filter((img, index) => {
//              console.log(index);
//             return !deleteIndexList.includes(index)})
//         //console.log(imgList);
//     }
// })()
// // // 这里最好加上防抖处理
// document.addEventListener('scroll', imgLazyLoad)

const imageList = document.querySelectorAll('img')

const callback = entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const image = entry.target
            const data_src = image.getAttribute('data-src')
            image.setAttribute('src', data_src)
            observer.unobserve(image)
            console.log('触发');
        }
    })
}

const observer = new IntersectionObserver(callback)

imageList.forEach(image=>{
    observer.observe(image)
})

// var imgs = document.querySelectorAll('img');

// //offsetTop是元素与offsetParent的距离，循环获取直到页面顶部
// function getTop(e) {
//     var T = e.offsetTop;
//     while(e = e.offsetParent) {
//         T += e.offsetTop;
//     }
//     return T;
// }

// function lazyLoad(imgs) {
//     var H = document.documentElement.clientHeight;//获取可视区域高度
//     var S = document.documentElement.scrollTop || document.body.scrollTop;
//     for (var i = 0; i < imgs.length; i++) {
//         if (H + S > getTop(imgs[i])) {
//             imgs[i].src = imgs[i].getAttribute('data-src');
//         }
//     }
// }

// window.onload = window.onscroll = function () { //onscroll()在滚动条滚动的时候触发
//     lazyLoad(imgs);
// }

// var imgs = document.querySelectorAll('img');
// //console.log(imgs.length);
// //用来判断bound.top<=clientHeight的函数，返回一个bool值
// function isIn(el) {
//     var bound = el.getBoundingClientRect();
//     var clientHeight = window.innerHeight;
//     return bound.top <= clientHeight;
// } 
// //检查图片是否在可视区内，如果不在，则加载
// function check() {
//     imgs.forEach(function(el){
//         if(isIn(el)){
//             loadImg(el);
//         }
//     })
// }
// function loadImg(el) {
//     if(!el.src){
//         var source = el.dataset.src;
//         el.src = source;
//     }
// }
// window.onload = window.onscroll = function () { //onscroll()在滚动条滚动的时候触发
//     check();
// }