//Login Button
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function() {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})
//Deposit area

const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function() {
    const depositAmount = getInputId('depositAmount');
    getSpanValue('currentDeposit', depositAmount);
    getSpanValue('currentbalance',depositAmount);

    document.getElementById('depositAmount').value = ""


})

//withdraw area

const withdrawBtn = document.getElementById('addwithdraw');
withdrawBtn.addEventListener('click',function() {
    const withdrawAmount = getInputId('withdrawamount');

    getSpanValue('currentwithdraw',withdrawAmount);
    getSpanValue('currentbalance',-1*withdrawAmount);

    document.getElementById('withdrawamount').value = "";
})

//Get input amount
function getInputId(id) {
    amount = document.getElementById(id).value;
    amountNumber = parseFloat(amount);
    return amountNumber;
}
//get span tage id amount
function getSpanValue(id,amount) {
    const current = document.getElementById(id).innerText;
    const currenNumber = parseFloat(current);
    const total = currenNumber + amount;
    document.getElementById(id).innerText = total;
}