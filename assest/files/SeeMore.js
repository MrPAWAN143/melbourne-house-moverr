let seeMore = document.querySelectorAll('.seeMore')
let main_container = document.querySelector('.main_container')
let popHeading = document.querySelector('.popupForm2 .popHeading')
let popupform = document.querySelector('.popupForm2')
let cross = document.querySelector('.popupForm2 .cross')
let body = document.querySelector('body')



window.addEventListener('load', function () {
    let popup = document.querySelector('.popupZZ')
    let inputsall = document.querySelectorAll('input')



    setTimeout(() => {

        for (m = 0; m <= inputsall.length; m++) {

            if (inputsall[m].value == "" || inputsall[m].value == null) {
                popup.style.display = "block"
                 body.style.overflowY = 'hidden'
        main_container.style.filter = 'blur(3px)'
            }




        }

    }, 2000);

    let popupCross = document.querySelector('.popupCross')
    popupCross.addEventListener('click', function () {
        popup.style.display = "none"
           body.style.overflowY = 'initial'
            main_container.style.filter = 'blur(0px)'
        
    })


})









for (i = 0; i <= seeMore.length; i++) {



    seeMore[i].addEventListener('click', function (e) {
        popHeading.innerHTML = 'Get Quick Quote'

        popupform.style.visibility = 'visible'
        if (e.view.innerWidth <= 500) {
            popupform.style.width = '95%'

        } else {
            popupform.style.width = '400px'

        }
        popupform.style.height = 'auto'
        popupform.style.position = 'fixed'
        popupform.style.top = '50%'
        popupform.style.left = '50%'
        popupform.style.zIndex = '100'
        popupform.style.backgroundColor = "#4F5355"
        popupform.style.border = "1.5px solid #58C819"
        popupform.style.borderRadius = "10px"

        popupform.style.transform = 'tranlateX(-50%)tranlateY(-50%)'
        popupform.style.transition = '500ms'
        body.style.overflowY = 'hidden'
        main_container.style.filter = 'blur(3px)'


        cross.addEventListener('click', function () {
            popupform.style.visibility = 'hidden'
            popupform.style.transition = '0ms'
            body.style.overflowY = 'initial'
            main_container.style.filter = 'blur(0px)'
        })







    })



    // seeMore[1].addEventListener('click', function (e) {
    //     popHeading.innerHTML = 'Furniture Removalists'

    //     popupform.style.visibility = 'visible'
    //     if(e.view.innerWidth <= 500){
    //         popupform.style.width = '95%'
    //     }else{
    //         popupform.style.width = '400px'

    //     }
    //     popupform.style.height = 'auto'
    //     popupform.style.position = 'fixed'
    //     popupform.style.top = '50%'
    //     popupform.style.left = '50%'
    //     popupform.style.zIndex = '100'
    //     popupform.style.backgroundColor = '#8b8d90'
    //     popupform.style.transform = 'tranlateX(-50%)tranlateY(-50%)'
    //     popupform.style.transition = '500ms'
    //     popupform.style.boxShadow = 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
    //     body.style.overflowY = 'hidden'
    //     main_container.style.filter = 'blur(2px)'

    //     cross.addEventListener('click', function () {
    //         popupform.style.visibility = 'hidden'
    //         popupform.style.transition = '0ms'
    //         body.style.overflowY = 'initial'
    //         main_container.style.filter = 'blur(0px)'
    //     })







    // })


    // seeMore[2].addEventListener('click', function (e) {
    //     popHeading.innerHTML = 'Office Removalists'

    //     popupform.style.visibility = 'visible'
    //     if(e.view.innerWidth <= 500){
    //         popupform.style.width = '95%'
    //     }else{
    //         popupform.style.width = '400px'

    //     }
    //     popupform.style.height = 'auto'
    //     popupform.style.position = 'fixed'
    //     popupform.style.top = '50%'
    //     popupform.style.left = '50%'
    //     popupform.style.zIndex = '100'
    //     popupform.style.backgroundColor = '#8b8d90'
    //     popupform.style.transform = 'tranlateX(-50%)tranlateY(-50%)'
    //     popupform.style.transition = '500ms'
    //     popupform.style.boxShadow = 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
    //     body.style.overflowY = 'hidden'
    //     main_container.style.filter = 'blur(2px)'

    //     cross.addEventListener('click', function () {
    //         popupform.style.visibility = 'hidden'
    //         popupform.style.transition = '0ms'
    //         body.style.overflowY = 'initial'
    //         main_container.style.filter = 'blur(0px)'
    //     })







    // })


    // seeMore[3].addEventListener('click', function (e) {
    //     popHeading.innerHTML = 'Hire 2 Men & turck'

    //     popupform.style.visibility = 'visible'
    //     if(e.view.innerWidth <= 500){
    //         popupform.style.width = '95%'
    //     }else{
    //         popupform.style.width = '400px'

    //     }
    //     popupform.style.height = 'auto'
    //     popupform.style.position = 'fixed'
    //     popupform.style.top = '50%'
    //     popupform.style.left = '50%'
    //     popupform.style.zIndex = '100'
    //     popupform.style.backgroundColor = '#8b8d90'
    //     popupform.style.transform = 'tranlateX(-50%)tranlateY(-50%)'
    //     popupform.style.transition = '500ms'
    //     popupform.style.boxShadow = 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
    //     body.style.overflowY = 'hidden'
    //     main_container.style.filter = 'blur(2px)'

    //     cross.addEventListener('click', function () {
    //         popupform.style.visibility = 'hidden'
    //         popupform.style.transition = '0ms'
    //         body.style.overflowY = 'initial'
    //         main_container.style.filter = 'blur(0px)'
    //     })







    // })


}








