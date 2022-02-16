

function totalPrice() {
    const food = document.getElementById("Food").value;
    const rent = document.getElementById("Rent").value;
    const cloth = document.getElementById("Clothes").value;
    const total =parseFloat(food)+parseFloat(rent)+parseFloat(cloth)
    
  return total;
    
  }


  

document.getElementById('calc-button').addEventListener('click',function(){
    // totalPrice()
    const totalExpense=document.getElementById('total-expenses')
    
    totalExpense.innerText=totalPrice();

    // --balnce
    let income=document.getElementById('Income').value;
  let  toTalIncome=parseFloat(income)
    
    let balance=document.getElementById('total-balance')
  
    balance.innerText=toTalIncome-totalPrice();
})

// function getSavings(){
    
// }



document.getElementById('save-button').addEventListener('click',function(){
    const savings=document.getElementById('saving-amount')
    const reamingBalance=document.getElementById('remaining-balance')
    const save=document.getElementById('Save').value;
    const savePercent=parseFloat(save)

    let income=document.getElementById('Income').value;
    let  toTalIncome=parseFloat(income)
    let exp=totalPrice();
      
    //   let savings=document.getElementById('saving-amount')
      savings.innerText=(toTalIncome*savePercent)/100
      reamingBalance.innerText=((toTalIncome-exp)-(toTalIncome*savePercent)/100)


})