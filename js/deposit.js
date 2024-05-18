document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('btn-deposit').addEventListener('click',function(){
       const currentDepositAmountEelement = document.getElementById('user-deposit');
       const currentDepositAmount = parseFloat(currentDepositAmountEelement.value);
       currentDepositAmountEelement.value = null;
       if(isNaN(currentDepositAmount))
        {
          alert('Please provide a valid number');
          return;
        }
       const prevDepositAmountElement = document.getElementById('user-deposit-amount');
       const prevDepositAmount = parseFloat(prevDepositAmountElement.innerText);
       
       prevDepositAmountElement.innerText = (prevDepositAmount+currentDepositAmount).toFixed(2);

      const userBalanceAmountElement = document.getElementById('user-balance-amount');
      const userBalanceAmount = parseFloat(userBalanceAmountElement.innerText);
      userBalanceAmountElement.innerText = (userBalanceAmount + currentDepositAmount).toFixed(2);
    })
})

//  document.addEventListener('DOMContentLoaded', function() {
//     // Retrieve and display stored values on page load
//     const userDepositAmountElement = document.getElementById('user-deposit-amount');
//     const userBalanceAmountElement = document.getElementById('user-balance-amount');

//     const storedDepositAmount = localStorage.getItem('depositAmount');
//     const storedBalanceAmount = localStorage.getItem('balanceAmount');

//     if (storedDepositAmount !== null) {
//         userDepositAmountElement.innerText = parseFloat(storedDepositAmount).toFixed(2);
//     }

//     if (storedBalanceAmount !== null) {
//         userBalanceAmountElement.innerText = parseFloat(storedBalanceAmount).toFixed(2);
//     }

//     document.getElementById('btn-deposit').addEventListener('click', function() {
//         // Get the current deposit amount entered by the user
//         const currentDepositAmountElement = document.getElementById('user-deposit');
//         const currentDepositAmount = parseFloat(currentDepositAmountElement.value);

//         // Ensure the entered value is a valid number
//         if (isNaN(currentDepositAmount) || currentDepositAmount <= 0) {
//             alert("Please enter a valid deposit amount.");
//             return;
//         }

//         // Get and update the previous deposit amount
//         let prevDepositAmount = parseFloat(userDepositAmountElement.innerText);
//         if (isNaN(prevDepositAmount)) {
//             prevDepositAmount = 0;
//         }
//         const newDepositAmount = prevDepositAmount + currentDepositAmount;
//         userDepositAmountElement.innerText = newDepositAmount.toFixed(2);
//         localStorage.setItem('depositAmount', newDepositAmount.toFixed(2));

//         // Get and update the user balance
//         let userBalanceAmount = parseFloat(userBalanceAmountElement.innerText);
//         if (isNaN(userBalanceAmount)) {
//             userBalanceAmount = 0;
//         }
//         const newBalanceAmount = userBalanceAmount + currentDepositAmount;
//         userBalanceAmountElement.innerText = newBalanceAmount.toFixed(2);
//         localStorage.setItem('balanceAmount', newBalanceAmount.toFixed(2));

//         // Clear the input field
//         currentDepositAmountElement.value = '';
//     });
// });
