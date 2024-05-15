//Deposit Section
document.getElementById('btn-deposit').addEventListener('click', function () {
  const depositField = document.getElementById('deposit-text');
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  depositField.value = '';

  const depositTotalElement = document.getElementById('deposit-total');

  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = currentDepositTotal;

  //Balance total deposit
  const balanceTotalDeposit = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalDeposit.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

  balanceTotalDeposit.innerText = currentBalanceTotal;
});

document.getElementById('btn-withdraw').addEventListener('click', function () {
  const withdrawField = document.getElementById('withdraw-field');
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  withdrawField.value = '';
});
