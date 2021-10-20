
console.log(`WELCOME TO MTA Railways Melbourne`);
console.log(`/////////////////////////////////`);
console.log(`Please kindly choose a line: ---> nLine <---> lLine <---> rLine <---`);
console.log(`Enjoy your trip`);
const lineAll = {
 lineN:  ["Line N:", "34th", "28th North Epping", "23rd Tomastown", "Union Square", "8th Monash"],
 lineL:  ["Line L: ", "8th Mcity", "6th", "Union Square", "3rd", "1st"],
 line6:  ["Line 6: ", "Grand Central", "33th","28th Watergardens","23rd Albion", "Union Square", "Astor"]
};

const n = lineAll.lineN;
const l = lineAll.lineL;
const r = lineAll.line6;

const nLine = function (){
  console.log(`You choose ${n}`);
for (let i = 0; i < n.length - 1; i ++){
  console.log(`You arrived at ${n[i]}`);{
  if ( n[i] === "Union Square" ){
    const nOne = "8th Monash";
    console.log(`You arrived at Union Square please wait 10 minutes and your next destination is : ${nOne}`);
  }
}
}console.log(`Your journey ${n} --- > is Finished and it has ${n.length - 1} Stops`);
}
// nLine();

const lLine = function (){
  console.log(`You choose ${l}`);
for (let j = 0; j < n.length - 2; j ++){
  console.log(`You arrived at ${l[j]}`);{
  if ( l[j] === "Union Square" ){
    const lOne = ["Station 3rd"," Station 1st"];
    console.log(`You arrived at Union Square please wait 5 minutes and your next destination is : ${lOne}`);
  }
}
}console.log(`Your journey ${l} --- > is Finished and it has ${l.length - 1} Stops`);
}
// lLine();

const rLine = function (){
  console.log(`You choose ${r}`);
for (let x = 0; x < r.length - 1; x ++){
  console.log(`You arrived at ${r[x]}`);{
  if ( r[x] === "Union Square" ){
    const rOne = ["Astor"];
    console.log(`You arrived at Union Square please wait 7 minutes and your next destination is : ${rOne}`);
  }
}
}console.log(`Your journey ${r} --- > is Finished and it has ${r.length - 1} Stops`);
}
// rLine();
