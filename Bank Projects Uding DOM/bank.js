//Banking System Development
document.getElementById('depoButton').addEventListener('click',()=>{

    // Get Input Value
    const newDepoAmount = document.getElementById('newDepoAmount');
    const newDepoAmountValue = newDepoAmount.value;

    
    // Get Old value
    const depoAmount = document.getElementById('depoAmount');
    const depoAmountValue = depoAmount.innerText;

    
    //Total Amount
    const totalAmount = document.getElementById('totalAmount');
    const totalAmountValue = totalAmount.innerText; 
    
    
    // Add Two Values {using function later}
    const addDeposite = parseFloat(newDepoAmountValue) + parseFloat(depoAmountValue);
    const addTotal = parseFloat(totalAmountValue) + parseFloat(newDepoAmountValue);
    
    depoAmount.innerText = addDeposite;
    totalAmount.innerText = addTotal;
});

document.getElementById('widthdralButton').addEventListener('click',()=>{

    //New Entry Amount
    const newIdthralAmountValue = document.getElementById('newIdthralAmount').value;

    // widthdral Amount
    const widthdralAmount = document.getElementById('widthdralAmount'); 
    const widthdralAmountValue = widthdralAmount.innerText;
    
    
    //Total Amount
    const totalAmount = document.getElementById('totalAmount');
    const totalAmountValue = totalAmount.innerText; 
    
    const subTotal = parseFloat(totalAmountValue) - parseFloat(newIdthralAmountValue);
    
    totalAmount.innerText = subTotal;
    
    
    // Widthdral Amount Value
    const addWidthdral = parseFloat(widthdralAmountValue) + parseFloat(newIdthralAmountValue);
    
    widthdralAmount.innerText = addWidthdral;
});

