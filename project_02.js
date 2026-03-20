const parent=document.getElementById('parent');

parent.addEventListener('click',(e)=>{    // (e)=> this line of code i can say event object
    const child=e.target;    // this line of target the value in child element like all the value to target know;
    const body =document.querySelector('body'); 
    body.style.backgroundColor= child.id ;      
})