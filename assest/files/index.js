let toggal = document.querySelector('.toggal')

toggal.addEventListener('click', function () {
   toggal.style.display = 'block'
   let phonenav = document.querySelector('.phonenav')
   phonenav.style.display = 'none'

   let toggalMenu = document.querySelector('.toggalMenu')
   //    let body = document.querySelector('body')




   toggalMenu.style.display = 'block'


   let close = document.querySelector('.close')

   close.addEventListener('click', function () {
      toggalMenu.style.display = 'none'
      phonenav.style.display = 'block'

   })






   let dropdownMenu = document.querySelectorAll('.dropdownMenu')
   let dropdown_item = document.querySelectorAll('.dropdown_item')
   let downArrow = document.querySelectorAll('.downArrow')

   let open = true;


   for (i = 0; i <= dropdownMenu.length; i++) {
      dropdownMenu[i].addEventListener('click', function () {

         let darrow = this.childNodes[0].childNodes[1].querySelector('svg')
         if (open === true) {
            this.style.fontWeight = '700'
            this.style.height = 'fit-content'
            this.style.backgroundColor = '#1b1b1b'
            this.childNodes[2].style.display = 'block'
            darrow.style.transform = 'rotate(-180deg)'

            open = false


         }else {
            this.style.height = '50px'
            this.style.backgroundColor = '#000000'
            this.childNodes[2].style.display = 'none'
            darrow.style.transform = 'rotate(0deg)'
            open = true
         }


 
      })

   }


   // dropdownMenu.addEventListener('click',function(){
   //   if(open == true){
   //    dropdownMenu.style.height = '230px'
   //    dropdown_item.style.display = 'block'
   //    downArrow.style.transform = 'rotate(-180deg)'

   //    open = false
   //   }else{
   //    dropdownMenu.style.height = '50px'
   //    dropdown_item.style.display = 'none'
   //    downArrow.style.transform = 'rotate(0deg)'

   //    open = true
   //   }
   // })







})