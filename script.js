//login
const loginbtn = document.getElementById("login_btn");
const transactionarea = document.getElementById("transaction_area");
loginbtn.addEventListener("click", function(){
    const loginarea = document.getElementById("login_area");
    loginarea.style.display = "none";
    transactionarea.style.display = "block";
})

//transaction
const deposit_btn = document.getElementById("deposit");
deposit_btn.addEventListener("click", function(){
    const deposit_amount = parseFloat(document.getElementById("deposit-form").value);
    const deposit_number = parseFloat(document.getElementById("deposit-number").innerText);
    const balance_amount = parseFloat(document.getElementById("balance-number").innerText);
    const total_deposit = deposit_amount + deposit_number;
    const total_balance = balance_amount + deposit_amount;

    document.getElementById("deposit-number").innerText = total_deposit;
    document.getElementById("balance-number").innerText = total_balance;

})
const withdraw_btn = document.getElementById("withdraw");
withdraw_btn.addEventListener("click", function(){
    const withdraw_number = parseFloat(document.getElementById("withdraw-form").value);
    const withdraw_amount = parseFloat(document.getElementById("withdraw-number").innerText);
    const balance_amount = parseFloat(document.getElementById("balance-number").innerText);

    const total_withdraw = withdraw_number + withdraw_amount;
    const total_balance = balance_amount - withdraw_number;

    document.getElementById("withdraw-number").innerText = total_withdraw;
    document.getElementById("balance-number").innerText = total_balance;

})
