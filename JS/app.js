

function totalPrice() {
    const food = document.getElementById("Food").value;
    const rent = document.getElementById("Rent").value;
    const cloth = document.getElementById("Clothes").value;
    const total =parseFloat(food)+parseFloat(rent)+parseFloat(cloth)
    
  return total;
    
  }

  function ErrorMessageCalcButton(){
let totalCost=totalPrice();
    let Eincome=document.getElementById('Income').value;
    let  toTalIncome=parseFloat(Eincome)

    
    const food = document.getElementById("Food").value;
    const rent = document.getElementById("Rent").value;
    const cloth = document.getElementById("Clothes").value;
    if(Eincome=='' || Eincome==null ){
      alert("Please Input Income")
      return false
      
    }

   else if(Eincome<0 ){
      alert("Please Input Positive number")
      return false
      
    }
    else if(food=='' || food==null){
alert("Please input food cost")
return false;
    }
    else if(food<0){
      alert("Please input positive number")
      return false;
          }

    else if(rent=='' || rent==null){
      alert("Please input rent cost")
      return false;
    }

    else if(rent<0){
      alert("Please input positve number")
      return false;
    }
          else if(cloth=='' || cloth==null){
            alert("Please input cloth cost")
            return false;
     }

     
     else if(cloth<0){
      alert("Please input positive number")
      return false;
}

     

          else if(toTalIncome<totalCost){
        alert("Income can't be less than total expenses")
        return false;
          }

          else{

            const totalExpense=document.getElementById('total-expenses')
    
            totalExpense.innerText=totalPrice();
        
            // --balnce
            let income=document.getElementById('Income').value;
        
      
        
          let  toTalIncome=parseFloat(income)
            
            let balance=document.getElementById('total-balance')
          
            balance.innerText=toTalIncome-totalPrice();
          }
     
    
  }


  

document.getElementById('calc-button').addEventListener('click',function(){
 
  ErrorMessageCalcButton();
   
    
})



function balanceCheck(){
  let totalCost=totalPrice();
    let Eincome=document.getElementById('Income').value;
    let  toTalIncome=parseFloat(Eincome)
    let balance=toTalIncome-totalCost
   return balance
    
 }


function SavingsCheck(){

  let totalCost=totalPrice();
     let Eincome=document.getElementById('Income').value;
     let  toTalIncome=parseFloat(Eincome)

    
   const checkBalance=balanceCheck();

  const save=document.getElementById('Save').value;
  const savePercent=parseFloat(save)
  let totalSaving=(toTalIncome*savePercent)/100
  if(save==''|| save==null){
    alert("Plese input savings")
    return false;
  }

  if(save<0){
    alert("Plese input positive number")
    return false;
  }

  else if(checkBalance<totalSaving){
  alert("You have no sufficient balance to save")
  return false;
  }
  else{
    const savings=document.getElementById('saving-amount')
    const reamingBalance=document.getElementById('remaining-balance')
    const save=document.getElementById('Save').value;
    const savePercent=parseFloat(save)

    let income=document.getElementById('Income').value;
    let  toTalIncome=parseFloat(income)
    let exp=totalPrice();
      
   
      savings.innerText=(toTalIncome*savePercent)/100
      reamingBalance.innerText=((toTalIncome-exp)-(toTalIncome*savePercent)/100)

  }

}


document.getElementById('save-button').addEventListener('click',function(){
  SavingsCheck();


})




