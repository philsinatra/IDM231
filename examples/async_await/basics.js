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
const doSomethingAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('I did something'), 3000);
  });
};

const doSomething = async () => {
  console.log(await doSomethingAsync());
};

console.log('before');
doSomething();
console.log('after');
