//step-1
document.getElementById('btn-diposit').addEventListener('click',function(){
    const dipositFeird= document.getElementById('diposit-input');
    const newdipositAmountString= dipositFeird.value;
    const newDipositAmount = parseFloat(newdipositAmountString);
    //step3
    //diposit parts
    const dipositTotalAmount = document.getElementById('diposit-totals');
    const previousdipositTotalString = dipositTotalAmount.innerText;
    const previousdipositTotal = parseFloat(previousdipositTotalString);
    const currentDepositTotal = previousdipositTotal + newDipositAmount;
    dipositTotalAmount.innerText = currentDepositTotal;
    //total balance parts
    const balanceTotalElement =document.getElementById('total-balane');
    const previousBalanceTotalString=balanceTotalElement.innerText;
    const previoucBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previoucBalanceTotal+newDipositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
    dipositFeird.value='';
})