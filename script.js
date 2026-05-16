const buttons=document.querySelectorAll(".filter-btn");

const items=document.querySelectorAll(".gallery-item");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

const filter=button.dataset.filter;

items.forEach(item=>{

if(filter==="all"){

item.style.display="block";

}

else{

if(item.classList.contains(filter)){

item.style.display="block";

}

else{

item.style.display="none";

}

}

});

});

});