 const form=document.querySelector('form'); // this line of select the form table 

 form .addEventListener('submit', (e)=>{    // submit k uper listener karna hai;

    e.preventDefault();
    const Boy=document.getElementById("Boy");  // this line of code select the id of boy;
    const Girl=document.getElementById("Girl");  // this is sam think;

    
    // select the all value in name;
    const l1=Boy.value.length;
    const l2=Girl.value.length; 

    const result=Math.pow(l1+l2,3)%101;  // this line of all the charecter is add one by one;
    document.querySelector('h2').textContent= `Result: ${result}%`;
    form.reset();

 });  

