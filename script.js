const togglebutton =document.getElementById("toggle");
const nav=document.getElementById("navi-list");
togglebutton.addEventListener('click',()=>{
  nav.classList.toggle('active');
})


document.getElementById("conform").onsubmit=function(){alert("The form was submitted");location.reload()}

