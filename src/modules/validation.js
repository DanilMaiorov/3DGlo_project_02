const validation = () => {

    const squareForm = document.querySelector('.calc-square');
    const countForm = document.querySelector('.calc-count');
    const dayForm = document.querySelector('.calc-day');

    const onlyNumber = (e) => {
        e.target.value = e.target.value.replace(/\D+/gi, '');
    };
    squareForm.addEventListener('input', onlyNumber);
    countForm.addEventListener('input', onlyNumber); 
    dayForm.addEventListener('input', onlyNumber); 

   //const formBtn = document.querySelectorAll('button[type=submit]'); //кнопки
    const nameForm = document.querySelectorAll('[id$="-name"]'); //инпуты с именем
    const secondFormMessage = document.querySelector('#form2-message'); //инпут с сообщением возле футера
    const emailForm = document.querySelectorAll('.form-email'); //массив с инпутами с мылом
    const telForm = document.querySelectorAll('.form-phone'); //массив с инпутами с телефонами 

    nameForm.forEach(nameItem => {
        nameItem.addEventListener('blur', (e) => {
            let testText = /^[а-яё ]+/gi;
            if (testText.test(e.target.value)) {
                nameItem.value =  e.target.value.slice(0, 1).toUpperCase(0) + e.target.value.replace(/\s+/gm, ' ').replace(/[^а-яё ]+/gi, '').slice(1).toLowerCase().replace(/\s+/gm, ' ')             
                //рабочая вторая часть

                //+ e.target.value.replace(/\-+/gm, '-').replace(/\s+/gm, ' ').slice(1).toLowerCase().replace(/\-+/gm, '-').replace(/\s+/gm, ' ') //рабочая вторая часть
            } else {
                nameItem.value = e.target.value.replace(/^\-+/gm, '').replace(/^\s+/gm, '').replace(/[^а-яА-я]+/gi, '').slice(0, 1).toUpperCase(0).replace(/\s+/gm, '').replace(/\-+/gm, '') + e.target.value.replace(/\s+/gm, ' ').replace(/[^а-яё\- ]+/gi, '').slice(1).toLowerCase(0).replace(/\s+/g, ' ');

                //рабочая вторая часть
               // e.target.value.replace(/\-+/gm, '-').replace(/\s+/gm, ' ').replace(/[^а-яё\- ]+/gi, '').slice(1).toLowerCase().replace(/\-+/gm, '-').replace(/\s+/gm, ' ');//рабочая вторая часть
            }
        });
    //    nameItem.addEventListener('input', (e) => {
    //        e.target.value = e.target.value.replace(/[^а-яА-я\-\s]+/gi, '');
    //    });
    });
    secondFormMessage.addEventListener('input', (e) => {
        e.target.value = e.target.value.match(/[а-яё0-9 \-\.,;:?!]+/gi);
    })
    emailForm.forEach(emailItem => {
            emailItem.addEventListener('blur', (e) => {
            let testEmail = /[a-z0-9~*!'_\-\.]*@[\w-]+\.\w{2,4}/gi;
            if (testEmail.test(e.target.value)){
                emailItem.value = e.target.value
            } else {
                emailItem.value = e.target.value.replace(/[а-яё]+/gi, '').replace(/@+/g, '@').replace(/^[\-\s]+/g, '').replace(/[\-\s]+$/g, '');
            } 
        }); 
    })
    telForm.forEach(telItem => {
          telItem.addEventListener('blur', (e) => {
            let testTel = /(\+7|8)[(]?(\d{3})[)]?(\d{3})[-]?(\d{2})[-]?(\d{2})/g;
            if (testTel.test(e.target.value)){
                telItem.value = e.target.value
            } else {
                telItem.value = e.target.value.replace(/[а-яa-z]+/g, '').replace(/\++/g, '+').replace(/\-+/g, '-').replace(/[^\d\(\)\-\+]+/g, '').replace(/^[\-\s]+/gm, '').replace(/[\-\s]+$/gm, '');
            }
        }); 
    });
    
    /****ПОПЫТКА ЧЕРЕЗ МАССИВ */

     /* formBtn.forEach(itemBtn => itemBtn.addEventListener('submit', (e) => {
        e.preventDefault();
        let isError = false;
        arrayInputText.forEach(inputTextItem => {
            if (!/[^а-яА-я\-\s]+/g.test(inputTextItem.value) && inputTextItem.value !== '') {
            } else {
                isError = true;
            }
        });
        emailForm.forEach(emailItem => {
            let isError = false;
            if (/([a-zA-Z_!*'~\+-.]+(\.[a-zA-Z_!*'~\+-.])*@[a-zA-Z]+(\.[a-zA-Z]+))/gi.test(emailItem.value) && emailItem.value !== '') {
            } else {
                isError = true;
            }
        });
        telForm.forEach(telItem => {
            let isError = false;
            if (/^[0-9()-]{6,}/gi.test(telItem.value) && telItem.value !== '') {
            } else {
                isError = true;
            }
        });
            if (!isError) {
        }
    }));   */

        //first
    //const firstFormName = document.querySelector('#form1-name'); //type text
    //const firstFormEmail = document.querySelector('#form1-email'); //type email
    //const firstFormTel = document.querySelector('#form1-phone'); //type tel
        //second
    //const secondFormName = document.querySelector('#form2-name'); //type text
    //const secondFormEmail = document.querySelector('#form2-email'); //type email
    //const secondFormTel = document.querySelector('#form2-phone'); //type tel
    //const secondFormMessage = document.querySelector('#form2-message'); //type text
       //third
    //const thirdFormName = document.querySelector('#form3-name'); //type text
    //const thirdFormEmail = document.querySelector('#form3-email'); //type email
    //const thirdFormTel = document.querySelector('#form3-phone'); //type tel

/*     const firstFormName = document.querySelector('#form1-name');
    const firstFormEmail = document.querySelector('#form1-email'); //type email
    const firstFormTel = document.querySelector('#form1-phone');
    const formBtn = document.querySelectorAll('button[type=submit]')
    
    
    console.log(formBtn.forEach(itemBtn => itemBtn.addEventListener('submit', (e) => {
        e.preventDefault();
        let isError = false;
            if (!/[^а-яА-я\-\s]/g.test(firstFormName.value) && firstFormName.value !== '') {
            } else {
                isError = true;
            }
            if (/([a-zA-Z_!*'~\+-.]+(\.[a-zA-Z_!*'~\+-.])*@[a-zA-Z]+(\.[a-zA-Z]+))/gi.test(firstFormEmail.value) && firstFormEmail.value !== '') {
            } else {
                isError = true;
            }
            if (/[\d\-\)\(]{6,}/gi.test(firstFormTel.value) && firstFormTel.value !== '') {
            } else {
                isError = true;
            }
            if (!isError) {
            }
        })
    ))  */
};

export default validation;
