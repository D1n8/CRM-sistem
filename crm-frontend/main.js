(() => {
    let counterId = 1

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

    function btnContactErase(btnEraseId, contactId){
        let btnErase = document.getElementById(btnEraseId)
        let contact = document.getElementById(contactId)

        btnErase.addEventListener('click', function() {
            contact.remove()
        })
    }

    function setContactId() {
        return `contact_${counterId}`
    }

    function setBtnEraseId() {
        return `btnErase_${++counterId}`
    }

    function btnAddContact(nameBtn, nameBox){
        let btn = document.querySelector(`.${nameBtn}`)
        let box = document.querySelector(`.${nameBox}`)
        btn.addEventListener('click', function() {
            let newContact = document.createElement('div')
            let select = document.createElement('select')
            let opt1 = document.createElement('option')
            let opt2 = document.createElement('option')
            let opt3 = document.createElement('option')
            let opt4 = document.createElement('option')
            let input = document.createElement('input')
            let btnBox = document.createElement('div')
            let img = document.createElement('img')

            opt1.setAttribute('value', 'tel')
            opt1.textContent = 'Телефон'
            opt2.setAttribute('value', 'vk')
            opt2.textContent = 'VK'
            opt3.setAttribute('value', 'email')
            opt3.textContent = 'Email'
            opt4.setAttribute('value', 'facebook')
            opt4.textContent = 'Facebook'

            newContact.classList.add('new-contact')
            newContact.setAttribute('id', setContactId())
            select.classList.add('select')
            select.setAttribute('name', 'contact')

            input.classList.add('input-contact')
            input.setAttribute('type', 'text')
            input.setAttribute('placeholder', 'Введите данные')
            btnBox.classList.add('btn-erase')
            btnBox.setAttribute('id', setBtnEraseId())
            img.setAttribute('style', 'margin-bottom: 5px;')
            img.setAttribute('src', '/images/erase.svg')
            img.setAttribute('alt', 'delete')

            select.append(opt1, opt2, opt3, opt4)
            btnBox.appendChild(img)
            newContact.append(select, input, btnBox)
            box.append(newContact)

            btnContactErase(btnBox.getAttribute('id'), newContact.getAttribute('id'))
        })
    }

    function validationForm(surname, name, contactsArr=[]) {
        for (let contact of contactsArr) {
            if (contact.type === 'Телефон' && /^\d+$/.test(contact.value)){
                return false
            }

            if (contact.type === 'VK' && contact.value.includes('vk')){
                return false
            }

            if (contact.type === 'Facebook' && contact.value.includes('facebook')){
                return false
            }

            if (contact.type === 'Email' && contact.value.includes('@')){
                return false
            }
        }

        return surname.trim() ==! '' && name.trim() ==! ''
    }

    function startCRM(){
        let clientName = document.getElementById('new-name')
        let clientSurname = document.getElementById('new-surname')
        let clientLastName = document.getElementById('new-lastname')

        addPopupToBtn('add-client-btn', 'popup_new-client', 'btn-close-new-client')
        addPopupToBtn('btn-change', 'popup_change-client', 'btn-close-change-client')
        addPopupToBtn('btn-delete', 'popup_delete-client', 'btn-close-delete-client')

        btnAddContact('add-new-client-contact', 'box-contacts')
        btnContactErase('btnErase_0', 'contact_0')

        // validationForm(clientSurname.value, clientName.value)
    }

    window.startCRM = startCRM
})()
