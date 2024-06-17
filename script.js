let string="";

//jinka button class hao wo select ho jayenge
let buttons=  document.querySelectorAll('.button');
//yek array bano buttons ke liye
Array.from(buttons).forEach((button)=>{
//jinpe click liya jaye to wo print ho
button.addEventListener('click', (e) =>{
    if(e.target.innerHTML=='='){
        string = eval(string);
        document.querySelector('input').value = string;
    }
   else  if(e.target.innerHTML=='AC'){
        string = " ";
        document.querySelector('input').value = string;
    }
else{
console.log(e.target);
string = string+e.target.innerHTML;
// input ko tag karna hai aur usko string me convert kar do
document.querySelector('input').value = string;
}
})
})