document.getElementById('deposit-button').addEventListener('click', function(){
    const depositFiled = document.getElementById('deposit-filed');
    
    const depositFiledAmount = depositFiled.value;

const totalDeposite = document.getElementById('Blance');

const oldBlance = totalDeposite.innerText;


const carrentBlance = parseInt(depositFiledAmount) + parseFloat(oldBlance)



console.log(carrentBlance)


    const blanceInput = document.getElementById('deposit-filed');
    const newBlance = blanceInput.innerText;
    const oldBlance = document.getElementById('Blance');

    oldBlance.innerText=newBlance;







   
     







    // depositFiled.value=''
});

document.getElementById('withdrow-button').addEventListener('click', function(){
    const inputFiled = document.getElementById('withdrow-filed');
    const inputFiledAmount = inputFiled.value;

    const withdrowBlance = document.getElementById('withdrow-filed');
    const newblance = withdrowBlance.value;

    const totalblance = document.getElementById('dicressblance');
    totalblance.innerText=newblance;






    inputFiled.value=''
})
