(() => {
    const currentDate = new Date()
    let clientsArray = []

    function addPopupToBtn(nameBtn, namePopupClass, nameCloseBtn){
        let btn = document.querySelector(`.${nameBtn}`)
        let popup = document.querySelector(`.${namePopupClass}`)
        let closeBtn = document.querySelector(`.${nameCloseBtn}`)
        btn.addEventListener('click', function() {
            popup.classList.remove(`${namePopupClass}`)
        })
        closeBtn.addEventListener('click', function() {
            popup.classList.add(`${namePopupClass}`)
        })
    }

    function startCRM(){
        addPopupToBtn('add-client-btn', 'popup_new-client', 'btn-close')
    }


    window.startCRM = startCRM
})()
