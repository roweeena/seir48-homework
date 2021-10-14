$(document).ready(function () { 

  const handleZero = (account) => { 

    const balance = +$(`#${account}-balance`).text().slice(1); 

    if (balance === 0) { 

        $(`#${account}-balance`).addClass("zero"); 

    } else { 

        $(`#${account}-balance`).removeClass("zero"); 

    } 
  };

  handleZero("checking"); 
  handleZero("savings"); 
  
  const handleDeposit = (account) => { 

    const depositAmount = +$(`#${account}-amount`).val(); 
    const currentBalance = +$(`#${account}-balance`).text().slice(1); 

    const newBalance = currentBalance + depositAmount; 

    $(`#${account}-balance`).text("$" + newBalance); 

    handleZero(account); 

}; 
  
  const handleWithdraw = (account) => { 

    const withdrawAmount = +$(`#${account}-amount`).val(); 
    const targetAccountBalance = +$(`#${account}-balance`).text().slice(1); 

    if (withdrawAmount <= targetAccountBalance) { 

      const newBalance = targetAccountBalance - withdrawAmount; 
      $(`#${account}-balance`).text("$" + newBalance); 

      handleZero(account); 

    } else { 
      
        const otherAccount = account === "checking" ? "savings" : "checking"; 
      
        const otherAccountBalance = +$(`#${otherAccount}-balance`) 
            .text() 
            .slice(1); 
      
        const totalBalance = targetAccountBalance + otherAccountBalance; 
      
        if (withdrawAmount <= totalBalance) { 
            $(`#${otherAccount}-balance`).text( 
            "$" + (otherAccountBalance - (withdrawAmount - targetAccountBalance)) 
            ); 
            $(`#${account}-balance`).text("$0"); 

            handleZero(account); 

            handleZero(otherAccount); 
      } else { 

            window.alert("Insufficent Funds!"); 

        } 
    } 
  }; 
  
  $("#checking-deposit").on("click", () => handleDeposit("checking")); 
  $("#checking-withdraw").on("click", () => handleWithdraw("checking")); 
  $("#savings-withdraw").on("click", () => handleWithdraw("savings")); 
  $("#savings-deposit").on("click", () => handleDeposit("savings")); 

});