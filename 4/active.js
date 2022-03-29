const deleteComment = document.getElementById('delete__comment');
const commentHead = document.getElementById('comment__head');
const inputArea = document.getElementById('input__area');
 
//Delete Text
deleteComment.addEventListener('click', ()=>{
    commentHead.style.display = 'none';
    inputArea.value = '';
})

//Input Focus
inputArea.addEventListener('focus', ()=>{
    document.body.style.backgroundColor = 'Tomato';
})

//Input Blur
inputArea.addEventListener('blur', ()=>{
    document.body.style.backgroundColor = 'White';
})

// //Input Keypress
// inputArea.addEventListener('keypress', ()=>{
//     const deleteField = inputArea.value;
//     console.log(deleteField);
// })

// //Input Keydown
// inputArea.addEventListener('keydown', ()=>{
//     const deleteField = inputArea.value;
//     console.log(deleteField);
// })

//Input Keyup
inputArea.addEventListener('keyup', (event)=>{
    // const deleteField = inputArea.value;
    // console.log(deleteField);
    // console.log(event);
    if(event.target.value == 'delete'){
        deleteComment.removeAttribute('disabled');
    }
    else{
        deleteComment.setAttribute('disabled', true);
    }
})

//Input Change
//***Note: Working only in Blur not in foucs area
inputArea.addEventListener('change', ()=>{
    const deleteField = inputArea.value;
    // console.log(deleteField);
})

