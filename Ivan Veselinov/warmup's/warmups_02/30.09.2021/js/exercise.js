
const prizes = [" 🚗 new car", "🌴 Holiday", "🥁 Drum machine", "❌ YOU LOSE!"];


const weel = function (){
    let winner = prizes[Math.floor(Math.random()*prizes.length)];

    console.log(`the Winner is ${winner}`);
}


weel();

//////////BONNUS 1///////////////////////////////
let prizewon = [];

const spinPrizeWeel2 = function(){

  prizewon.length ?

  "So far ive won:" + prizewon.toString() : 'no prizez yet..'

}

setTimeout (function(){
  console.log("....");
}, 500);


setTimeout (function(){
  console.log("....");
}, 1000);

setTimeout (function(){
  console.log("its landing on ....");
}, 1500);



setTimeout (getPrize, 2000);

const getPrize = function(){
  let winner = prizes[Math.floor(Math.random()*prizes.length)];

  console.log(`the Winner is ${winner}`);

  if ( prize === `❌ YOU LOSE!`){
    prizewon=[];
    console.log(`You lost everything, now you have 0 prizes`);
  }else{
    console.log(`You won` + prize);
    prizewon.push(prize);
    console.log(`You have ${prizewon.length}`)
  }

}


// const prizes = [" 🚗 new car", "🌴 Holiday", "🥁 Drum machine", "❌ YOU LOSE!"];
//
//
// const weel = function (){
//   console.log(`Spinning the weel`);
//     const equal = [];
//     let winner = prizes[Math.floor(Math.random()*prizes.length)];
//     if ( winner !== "❌ YOU LOSE!"){
//       winner.push(equal);
//       console.log(`the Winner is ${winner}`);
//
//       console.log(equal);
//   }else{
//   console.log("❌ YOU LOSE!");
// }
// }
//
//
// weel();
