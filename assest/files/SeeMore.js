



let seeMore = document.querySelectorAll('.seeMore')
let main_container = document.querySelector('.main_container')

for (i = 0; i <= seeMore.length; i++) {


    let popHeading = document.querySelector('.popupForm2 .popHeading')
    let popupform = document.querySelector('.popupForm2')
    let cross = document.querySelector('.popupForm2 .cross')
    let body = document.querySelector('body')

    seeMore[0].addEventListener('click', function (e) {
        popHeading.innerHTML = 'House Removal'





        console.log(e.clientX)

        popupform.style.visibility = 'visible'
        popupform.style.width = '400px'
        popupform.style.height = 'auto'
        popupform.style.position = 'fixed'
        popupform.style.top = '50%'
        popupform.style.left = '50%'
        popupform.style.zIndex = '100'
        popupform.style.backgroundColor = '#8b8d90'
        popupform.style.transform = 'tranlateX(-50%)tranlateY(-50%)'
        popupform.style.transition = '500ms'
        popupform.style.boxShadow = 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
        body.style.overflowY = 'hidden'
        main_container.style.filter = 'blur(2px)'


        cross.addEventListener('click', function () {
            popupform.style.visibility = 'hidden'
            popupform.style.transition = '0ms'
            body.style.overflowY = 'initial'
            main_container.style.filter = 'blur(0px)'
        })







    })



    seeMore[1].addEventListener('click', function (e) {
        popHeading.innerHTML = 'Furniture Removalists'
        console.log(e.clientX)

        popupform.style.visibility = 'visible'
        popupform.style.width = '450px'
        popupform.style.height = 'auto'
        popupform.style.position = 'fixed'
        popupform.style.top = '50%'
        popupform.style.left = '50%'
        popupform.style.zIndex = '100'
        popupform.style.backgroundColor = '#8b8d90'
        popupform.style.transform = 'tranlateX(-50%)tranlateY(-50%)'
        popupform.style.transition = '500ms'
        popupform.style.boxShadow = 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
        body.style.overflowY = 'hidden'
        main_container.style.filter = 'blur(2px)'

        cross.addEventListener('click', function () {
            popupform.style.visibility = 'hidden'
            popupform.style.transition = '0ms'
            body.style.overflowY = 'initial'
            main_container.style.filter = 'blur(0px)'
        })







    })


    seeMore[2].addEventListener('click', function (e) {
        popHeading.innerHTML = 'Office Removalists'
        console.log(e.clientX)

        popupform.style.visibility = 'visible'
        popupform.style.width = '400px'
        popupform.style.height = 'auto'
        popupform.style.position = 'fixed'
        popupform.style.top = '50%'
        popupform.style.left = '50%'
        popupform.style.zIndex = '100'
        popupform.style.backgroundColor = '#8b8d90'
        popupform.style.transform = 'tranlateX(-50%)tranlateY(-50%)'
        popupform.style.transition = '500ms'
        popupform.style.boxShadow = 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
        body.style.overflowY = 'hidden'
        main_container.style.filter = 'blur(2px)'

        cross.addEventListener('click', function () {
            popupform.style.visibility = 'hidden'
            popupform.style.transition = '0ms'
            body.style.overflowY = 'initial'
            main_container.style.filter = 'blur(0px)'
        })







    })


    seeMore[3].addEventListener('click', function (e) {
        popHeading.innerHTML = 'Hire 2 Men & turck'
        console.log(e.clientX)

        popupform.style.visibility = 'visible'
        popupform.style.width = '400px'
        popupform.style.height = 'auto'
        popupform.style.position = 'fixed'
        popupform.style.top = '50%'
        popupform.style.left = '50%'
        popupform.style.zIndex = '100'
        popupform.style.backgroundColor = '#8b8d90'
        popupform.style.transform = 'tranlateX(-50%)tranlateY(-50%)'
        popupform.style.transition = '500ms'
        popupform.style.boxShadow = 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
        body.style.overflowY = 'hidden'
        main_container.style.filter = 'blur(2px)'

        cross.addEventListener('click', function () {
            popupform.style.visibility = 'hidden'
            popupform.style.transition = '0ms'
            body.style.overflowY = 'initial'
            main_container.style.filter = 'blur(0px)'
        })







    })


}





