const form= document.querySelector('.form');
const msg=document.querySelector('.message');
form.addEventListener('submit', onFormSubmit);
  function createPromise(position, delay) {
    return new Promise((res, rej) => {
      const shouldResolve = Math.random() > 0.3;
      setTimeout(()=>{
      if (shouldResolve) {
        res({position, delay});
      } else {
        rej({position, delay});}
      },delay);
    });}

  function onFormSubmit(evt){
    evt.preventDefault();
    let firstDelay=Number(evt.currentTarget.delay.value);
    let step=Number(evt.currentTarget.step.value);
    let amount=Number(evt.currentTarget.amount.value);
    for (let i=1; i<=amount; i+=1){
createPromise(i, firstDelay)
  .then(({position, delay}) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({position, delay})  => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  firstDelay += step;
};
evt.currentTarget.reset();
};

