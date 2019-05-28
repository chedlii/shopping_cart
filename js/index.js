let btnsIncrement = document.querySelectorAll('.btn-increment')
let btnsDecrement = document.querySelectorAll('.btn-decrement')
let total = document.querySelector('.span-total-price')
let deleteBtns = document.querySelectorAll('.btn-delete')
let likeBtns = document.querySelectorAll('.btn-like')


for(let btn of  btnsIncrement) {
  
  btn.addEventListener('click',()=>{
   
    btn.previousElementSibling.innerHTML = parseInt( btn.previousElementSibling.innerHTML)+1;
    
    tot();
  })
  
}

for(let btn of btnsDecrement) {
  
  btn.addEventListener('click',()=>{
   
    if(parseInt( btn.nextElementSibling.innerHTML)>0){
    btn.nextElementSibling.innerHTML = parseInt( btn.nextElementSibling.innerHTML)-1;
      
      tot();
    
    }
  })
  
}


function tot (){
  
 let articleQuantite =document.querySelectorAll('.quantite')
let artcilePrice = document.querySelectorAll('.span-price')
 
 let sum = 0;
  
  for (let i=0 ; i<articleQuantite.length; i++){
    sum+= parseInt(articleQuantite[i].innerHTML) * parseInt(artcilePrice[i].innerHTML)
  }
 
 total.innerHTML = sum
  
}


for (let i of deleteBtns){
  
  i.addEventListener('click',()=>{   
  i.parentElement.parentElement.parentElement.remove();
  tot();
  })
   
}