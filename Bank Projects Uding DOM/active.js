//Login System
document.getElementById('logInBtn').addEventListener('click',()=>{
    const emailAddr = document.getElementById('userEmailField').value;
    // console.log(emailAddr);
    const secretPass = document.getElementById('userPassField').value;
    
    
    //Never Use that things :P {Just for Beginings}
    if(emailAddr == 'abc@abc.com' && secretPass == 'abc'){
        // console.log('working');
        window.location.href = 'account.html';
        
    }
});