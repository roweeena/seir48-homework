$(document).ready(function (){

////////////////////////////////////////////////////////////////////////////////////
////////////////////////// TOTAL DEPOSIT CHECKINGS /////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

$(`#checking-deposit`).on(`click`,function(){
let deposit = $(`#checking-amount`).val();
console.log(deposit);
let amountValue = $(`#checking-balance`).html();
console.log(amountValue);
let total = parseInt(deposit) + parseInt(amountValue.slice(1));
console.log(total);
$(`#checking-balance`).removeClass(`zero`);
$(`#checking-balance`).addClass(`balance`).text(`$` + total);
$(`#checking-amount`).val("");

});

////////////////////////////////////////////////////////////////////////////////////
////////////////////////// TOTAL Withdraw CHECKINGS ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
$(`#checking-withdraw`).on(`click`, function(){
let withdraw = $(`#checking-amount`).val();
let amontWithdraw = $(`#checking-balance`).html();
const savings = $(`#savings-balance`).html();
let total = parseInt(amontWithdraw.slice(1)) - parseInt(withdraw);

  if ( total < 0 && savings ){
    const checking = $(`#checking-balance`).html();
    console.log(`THIS ACCOUNT` + checking);

    total = parseInt(savings.slice(1)) - parseInt(withdraw);
    // console.log(`OTHER - THIS `+ total);
    $(`#checking-balance`).text(`$` + withdraw);
    $(`#checking-amount`).val("");
    $(`#savings-balance`).text(`$` + total);

}else if ( total === 0 && parseInt(savings.slice(1)) === 0){
    $(`#checking-balance`).addClass(`zero`);
    $(`#savings-balance`).addClass(`zero`);
    $(`#checking-balance`).text(`$` + total);
    $(`#checking-amount`).val("");
  }else{
    $(`#checking-balance`).text(`$` + total);
    $(`#checking-amount`).val("");

  }


});


/**********************************************************************************/
///////////////////////// SAVEINGS BALANCE /////////////////////////////////////////
/**********************************************************************************/


////////////////////////////////////////////////////////////////////////////////////
////////////////////////// TOTAL DEPOSIT SAVINGS ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

$(`#savings-deposit`).on(`click`,function(){
let depositAmout = $(`#savings-amount`).val();
console.log(depositAmout);
let valueAmout = $(`#savings-balance`).addClass(`account`).html();
console.log(valueAmout);
let totalSavings = parseInt(depositAmout) + parseInt(valueAmout.slice(1));
console.log(totalSavings);
$(`#savings-balance`).removeClass(`zero`);
$(`#savings-balance`).text(`$` + totalSavings);
$(`#savings-amount`).val("");

});

////////////////////////////////////////////////////////////////////////////////////
////////////////////////// TOTAL Withdraw SAVEINGS ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

$(`#savings-withdraw`).on(`click`, function(){
let enterValue = $(`#savings-amount`).val();
let getValue = $(`#savings-balance`).addClass(`balance`).html();
let checking = $(`#checking-balance`).html();
let total = parseInt(getValue.slice(1)) - parseInt(enterValue);
if ( total < 0 ){
  total = parseInt(checking.slice(1)) - parseInt(enterValue);
  $(`#savings-balance`).text(`$` + enterValue);
  $(`#savings-amount`).val("");
  $(`#checking-balance`).text(`$` + total);
}else if ( total === 0 && parseInt(checking.slice(1)) === 0 ) {
  $(`#savings-balance`).addClass(`zero`);
  $(`#checking-balance`).addClass(`zero`)
  $(`#savings-balance`).text(`$` + total);
  $(`#savings-amount`).val("");
}else{
  $(`#savings-balance`).text(`$` + total);
  $(`#savings-amount`).val("");
}

});


});
