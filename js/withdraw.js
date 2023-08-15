// withdraw feird
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawFeird = document.getElementById('withdraw-feird');
    const newWithdrawAmountString = withdrawFeird.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previoucWithdrawTotal = parseFloat(previousWithdrawTotalString);
     //step-4

     const currentWithdrawTotal = previoucWithdrawTotal + newWithdrawAmount;
     withdrawTotalElement.innerText = currentWithdrawTotal;
     //step-5
     const balanceTotalElement = document.getElementById('total-balane');
     const previoucBalanceTotalString = balanceTotalElement.innerText;
     const previoucBalanceTotal = parseFloat(previoucBalanceTotalString);
     //step-6
     const newBalanceTotal = previoucBalanceTotal - newWithdrawAmount;
     balanceTotalElement.innerText = newBalanceTotal;

     //step-7
     withdrawFeird.value='';

})