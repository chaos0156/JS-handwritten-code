Promise.all([]).then((res) => {
    console.log('all');         // all
});
Promise.race([]).then((res) => {
    console.log('race');    // Promise {<pending>}
});