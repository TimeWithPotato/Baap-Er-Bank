document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn-withdraw').addEventListener('click', function () {
        //1. Get the value from withdraw input field
        const userWithDrawAmountElement = document.getElementById('user-withdraw');
        const userWithDrawAmount = parseFloat(userWithDrawAmountElement.value);
        userWithDrawAmountElement.value = null;


        //2. Get the value from balance
        const userBalanceAmountElement = document.getElementById('user-balance-amount');
        const userBalanceAmount = parseFloat(userBalanceAmountElement.innerText);
        //3. Compare the input and the balance and check is it NaN or not
        if (userWithDrawAmount > userBalanceAmount) {
            alert('Can\'t withdraw because insufficient balance');
            return;
        }
        else if (isNaN(userWithDrawAmount) || userWithDrawAmount <= 0) {
            alert('Please provide a valid number');
            return;
        }

        //4. Update the withdraw 
        const prevUserWithdrawAmountElement = document.getElementById('user-withdraw-amount');
        const prevUserWithdrawAmount = parseFloat(prevUserWithdrawAmountElement.innerText);

        prevUserWithdrawAmountElement.innerText = prevUserWithdrawAmount + userWithDrawAmount;

        //5. Adjust the balance
        userBalanceAmountElement.innerText = userBalanceAmount - userWithDrawAmount;
    })

})





// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('btn-withdraw').addEventListener('click', function() {
//         // 1. Get the value from withdraw input field
//         const userWithDrawAmountElement = document.getElementById('user-withdraw');
//         const userWithDrawAmount = parseFloat(userWithDrawAmountElement.value);
//         userWithDrawAmountElement.value = null;

//         // 2. Get the value from balance
//         const userBalanceAmountElement = document.getElementById('user-balance-amount');
//         let userBalanceAmount = parseFloat(userBalanceAmountElement.innerText);

//         // 3. Compare the input and the balance and check if it is NaN or not
//         if (isNaN(userWithDrawAmount) || userWithDrawAmount <= 0) {
//             alert('Please provide a valid withdrawal amount');
//             return;
//         }

//         if (isNaN(userBalanceAmount)) {
//             alert('Balance amount is invalid');
//             return;
//         }

//         if (userWithDrawAmount > userBalanceAmount) {
//             alert('Can\'t withdraw because of insufficient balance');
//             return;
//         }

//         // 4. Update the balance after withdrawal
//         userBalanceAmount -= userWithDrawAmount;
//         userBalanceAmountElement.innerText = userBalanceAmount.toFixed(2);
//         localStorage.setItem('balanceAmount', userBalanceAmount.toFixed(2));

//         // Optionally, update the withdraw amount displayed (if you are tracking total withdrawals)
//         const prevWithdrawAmountElement = document.getElementById('user-withdraw-amount');
//         let prevWithdrawAmount = parseFloat(prevWithdrawAmountElement.innerText);
//         if (isNaN(prevWithdrawAmount)) {
//             prevWithdrawAmount = 0;
//         }
//         prevWithdrawAmount += userWithDrawAmount;
//         prevWithdrawAmountElement.innerText = prevWithdrawAmount.toFixed(2);
//         localStorage.setItem('withdrawAmount', prevWithdrawAmount.toFixed(2));
//     });

//     // Retrieve and display stored values on page load
//     const userBalanceAmountElement = document.getElementById('user-balance-amount');
//     const storedBalanceAmount = localStorage.getItem('balanceAmount');
//     if (storedBalanceAmount !== null) {
//         userBalanceAmountElement.innerText = parseFloat(storedBalanceAmount).toFixed(2);
//     }

//     const prevWithdrawAmountElement = document.getElementById('user-withdraw-amount');
//     const storedWithdrawAmount = localStorage.getItem('withdrawAmount');
//     if (storedWithdrawAmount !== null) {
//         prevWithdrawAmountElement.innerText = parseFloat(storedWithdrawAmount).toFixed(2);
//     }
// });
