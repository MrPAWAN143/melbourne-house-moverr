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

   for (i = 0; i <= dropdownMenu.length; i++) {



      let open = true;
      dropdownMenu[i].addEventListener('click', function (e) {

         let darrow = this.childNodes[0].childNodes[1].querySelector('svg')




         if (open === true) {



            this.style.fontWeight = '700'
            this.style.height = 'fit-content'
            this.style.backgroundColor = '#1b1b1b'
            this.childNodes[2].style.display = 'block'
            darrow.style.transform = 'rotate(-180deg)'

            open = false

         } else {
            this.style.height = '50px'
            this.style.backgroundColor = '#000000'
            this.childNodes[2].style.display = 'none'
            darrow.style.transform = 'rotate(0deg)'
            open = true
         }




      })

   }


})



let getaquote = document.querySelectorAll('.getaquote')
for (i = 0; i <= getaquote.length; i++) {

   let main_container = document.querySelector('.main_container')

   getaquote[i].addEventListener('click', function (e) {

      let popHeading = document.querySelector('.popHeading')
      popHeading.innerHTML = 'Request A FREE Quote Now'


      let popupform = document.querySelector('.popupForm')
      if (e.clientX > 850) {

         popupform.style.visibility = 'visible'
         popupform.style.width = '700px'
         popupform.style.height = 'auto'
         popupform.style.position = 'fixed'
         popupform.style.top = '50%'
         popupform.style.left = '50%'
         popupform.style.zIndex = '100'
         popupform.style.backgroundColor = '#aaaaaa'
         popupform.style.transform = 'tranlateX(-50%)tranlateY(-50%)'
         popupform.style.transition = '500ms'
         popupform.style.boxShadow = 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
         let body = document.querySelector('body')
         body.style.overflowY = 'hidden'
         main_container.style.filter = 'blur(2px)'
         // body.style.filter = 'blur(1px)'

         let cross = document.querySelector('.cross')
         cross.addEventListener('click', function () {
            popupform.style.visibility = 'hidden'
            popupform.style.transition = '0ms'
            body.style.overflowY = 'initial'
            main_container.style.filter = 'blur(0)'

         })





      } else if (e.clientX > 300 && e.clientX < 850) {
         popupform.style.visibility = 'visible'
         popupform.style.width = '90%'
         popupform.style.height = 'auto'
         popupform.style.position = 'fixed'
         popupform.style.top = '50%'
         popupform.style.left = '50%'
         popupform.style.zIndex = '100'
         popupform.style.backgroundColor = '#aaaaaa'
         popupform.style.transform = 'tranlateX(-50%)tranlateY(-50%)'
         popupform.style.transition = '500ms'
         popupform.style.boxShadow = 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'

         let body = document.querySelector('body')
         body.style.overflowY = 'hidden'
         main_container.style.filter = 'blur(2px)'

         let cross = document.querySelector('.cross')
         cross.addEventListener('click', function () {
            popupform.style.visibility = 'hidden'
            popupform.style.transition = '0ms'
            body.style.overflowY = 'initial'
            main_container.style.filter = 'blur(0px)'
         })


      } else {



      }






   })




}












