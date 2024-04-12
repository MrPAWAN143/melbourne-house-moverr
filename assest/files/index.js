let toggal = document.querySelector('.toggal')

toggal.addEventListener('click',function(){
   toggal.style.display = 'block'
   
   let toggalMenu = document.querySelector('.toggalMenu')
//    let body = document.querySelector('body')

   


   toggalMenu.style.display = 'block'


   let close = document.querySelector('.close')

   close.addEventListener('click',function(){
    toggalMenu.style.display = 'none'
   })


})