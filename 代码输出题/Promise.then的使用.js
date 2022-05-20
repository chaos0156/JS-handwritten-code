const p1 = new Promise((resolve, reject) => {
  console.log('promise1'); //1
  resolve();
})
  .then(() => {
    console.log('then11');  //2
    new Promise((resolve, reject) => {
      console.log('promise2');  //3
      resolve();
    })
      .then(() => {
        console.log('then21'); //4
      })
      .then(() => {
        console.log('then23'); //6
      });
  })
  .then(() => {
    console.log('then12');  //5
  });

  const p2 = new Promise((resolve, reject) => {
    console.log('promise1'); // 1
    resolve();
  })
    .then(() => {
      console.log('then11'); // 2
      return new Promise((resolve, reject) => {
        console.log('promise2'); // 3
        resolve();
      })
        .then(() => {
          console.log('then21'); // 4
        })
        .then(() => {
          console.log('then23'); // 5
        });
    })
    .then(() => {
      console.log('then12'); //6
    });
