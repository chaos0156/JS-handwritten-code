function shuffle(input) {
    for (let i = input.length - 1; i > 0; i--) {
        const k = Math.floor(Math.random() * (i + 1));
        [input[k], input[i]] = [input[i], input[k]]
    }
}
let arr = [1, 2, 3, 4, 5, 6]
shuffle(arr)
console.log(arr);