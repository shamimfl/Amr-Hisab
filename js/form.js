document.getElementById('submit-button').addEventListener('click', function(){
    const nameFiled = document.getElementById('email-feild');
    const email = nameFiled.value;    
    nameFiled.value=''


    const passwordFiled = document.getElementById('password-filed');
    const password = passwordFiled.value;
    passwordFiled.value=''

    if (email == 'kopila@gmail.com' && password == 'kopila'){
        document.body.style.backgroundColor='green'
        window.location.href ='js/bank-page.html'
    }
    
    else{
        document.body.style.backgroundColor='red'
    }


});
 

