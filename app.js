const btn1 = document.querySelector('#click')
const btn2 = document.querySelector('#click2')

const menu =document.querySelector('.list')
btn1.addEventListener('click',(e)=>{

    menu.style.right='0'
   
})
btn2.addEventListener('click',(e)=>{

    menu.style.right='-800px'
   
})