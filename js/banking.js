// function getInputValue(inputId) {
//     const input = document.getElementById(inputId)
//     const inputText = input.value
//     const inputAmount = parseFloat(inputText)
//     // input clear
//     input.value = ''
//     return inputAmount
// }
// function getTotalAmount(totalId, amount, isAdd) {
//     const total = document.getElementById(totalId)
//     const totalText = total.innerText
//     const totalAmount = parseFloat(totalText)
//     // update
//     if(isAdd == true) {
//         total.innerText = totalAmount + amount
//     } else {
//         total.innerText = totalAmount - amount
//     }
// }

// // event handler for deposite button
// document.getElementById('deposit-btn').addEventListener('click', function(){
//     const inputAmount = getInputValue('deposit-input')
//     if(inputAmount > 0) {
//         depositUpdate = getTotalAmount('deposit-total', inputAmount, true)
//         balanceUpdate = getTotalAmount('balance-total', inputAmount, true)
//     } 
// })
// // event handler for withdrow button
// document.getElementById('withdrow-btn').addEventListener('click', function(){
//     const withdrowInputAmount = getInputValue('withdrow-input')
//     if(withdrowInputAmount > 0) {
//         withdrowUpdate = getTotalAmount('withdrow-total', withdrowInputAmount, true)
//         withdrowUpdate = getTotalAmount('balance-total', withdrowInputAmount, false)  
//     }
    
// })