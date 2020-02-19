// Basic Promise Example
const checkAnswer = new Promise((resolve, reject) => {
  const myBool = true;

  setTimeout(() => {
    if (myBool) resolve('success');
    else reject('failure');
  }, 2000);
});

checkAnswer
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });

// Basic Async/Await Example
const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject('Numbers must be non-negative');
      }

      resolve(a + b);
    }, 2000);
  });
};

const doWork = async () => {
  const sum = await add(1, 99);
  const sum2 = await add(sum, 50);
  const sum3 = await add(sum2, 3);
  return sum3;
};

doWork()
  .then(result => {
    console.log('result', result);
  })
  .catch(err => {
    console.log('error: ', err);
  });
