//? Asynchronous Programming , promise => to solve problem(callback hell) ,async / await

//TODO>> setTimeout to wait the result some times
console.log('First: you start the convo with your 🧑')

const orderSoup = () => console.log('Second: soup is ready 🍲')
//* Start you request
setTimeout(orderSoup ,2000) //! 2s wait

console.log('Third: Still speaking ❗')

//TODO>> soupApp with Promise
//* you order 🍅 tomato soup
//* RESOLVED - 🍲 soup is ready
//* REJECTED -  ❌ NO soup today
const Promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    isReady = [true, false][Math.floor(Math.random() * 2)];
    isReady ? resolve("✅ soup is ready 🍲") : reject("❌ NO soup today");
  }, 2000);
});
console.log(
  Promise1
  .then((success) => console.log({ success }))
  .catch((error) =>console.log({ error }))
);

//TODO>> fetch with Promise
console.log(
  "fetch: ",
  fetch(" https://dog.ceo/api/breeds/image/random")
    // .then(res =>  res.json() )
    .then((data) => console.log(data))
);

//TODO>> async / await
//* Rules for using async / await
//* 1. You must create a function
//* 2. You must use the keyword async
//* 3. use the keyword async
const getDog = async () => {
  const url = " https://dog.ceo/api/breeds/image/random";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};
getDog();

//TODO>> more details for soupApp
//* RESOLVED - if waiter brings you soup
//* tip the waiter
//* you pay for soup
//* but good rating and review
//* REJECTED -  bad review and review, no tip , no pay 
const getSoup = async () => {
  // null / undefined
  const data = { rating: null, tip: null, pay: undefined, review: null };
  try {
    const soup = await Promise1;
    console.log(soup)
    data.rating = 5;
    data.tip = 0.2;
    data.pay = 10;آ
    data.review = 5;
    return data ;
  } catch (error) {
    data.rating = 1;
    data.tip = 0;
    data.pay = 0;
    data.review = 1;
    return data;
  }
};
getSoup().then((value) => console.log(value));

//TODO>> more Exercises for async / await to show the return data in console.log()
const sum = async (a,b) => await a+b
console.log(sum(1,2).then(value => console.log(value)), ' sum')