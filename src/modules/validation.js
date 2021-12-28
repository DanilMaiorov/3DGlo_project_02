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
        const arrayInputText = [...nameForm, secondFormMessage]; //массив с инпутами с текстом
    const emailForm = document.querySelectorAll('.form-email'); //массив с инпутами с мылом
    const telForm = document.querySelectorAll('.form-phone'); //массив с инпутами с телефонами 

    arrayInputText.forEach(inputTextItem => {
        inputTextItem.addEventListener('blur', (e) => {
            let testText = /[^а-яА-я\-\s]+/gi;
            if(testText.test(inputTextItem.value) === false){
                inputTextItem.value = inputTextItem.value/*.replace(/^ +/gm, '') .replace(/^-+/gm, '') */.slice(0, 1).toUpperCase(0) + inputTextItem.value.slice(1).toLowerCase(0).replace(/[^а-яА-я]+/gi, '').replace(/\s+/g, ' ').replace(/\-+/g, '-');
        
            }  else {
                inputTextItem.value = inputTextItem.value.replace(/[^а-яА-я]+/gi, '').slice(0, 1).toUpperCase(0) + inputTextItem.value.slice(1).toLowerCase(0).replace(/[a-zA-Z]/gi, '').replace(/\s+/g, ' ').replace(/\-+/g, '-').replace(/[^а-яА-я\-\s]+/gi, '');
            } 
        });
    //    inputTextItem.addEventListener('input', (e) => {
    //        e.target.value = e.target.value.replace(/[^а-яА-я\-\s]+/gi, '');
    //    });
    });
    emailForm.forEach(emailItem => {
        emailItem.addEventListener('blur', () => {
            let testEmail = /^[^-a-zA-Z0-9!\*.\-_~'\@]+/gim;
            if (testEmail.test(emailItem.value) === false){
                emailItem.value = emailItem.value.replace(/[^-a-zA-Z0-9!\*.\-_~'\@]/g, '');
            }  else {
                emailItem.value = emailItem.value.replace(/[^-a-zA-Z0-9!\*.\-_~'\@]/g, '');
                emailItem.value = emailItem.value.replace(/^[^-a-zA-Z0-9!\*.\-_~'\@]/g, '');
            } 
        });
    // emailItem.addEventListener('input', (e) => {
    //      e.target.value = e.target.value.match(/^[-a-zA-Z0-9!\*.\-_~'\@]+/gim);
    //      e.target.value = e.target.value.match(/^[-a-zA-Z-!\*\.\-\_~\']+@[\w]+\.[\w]+/g);
    });

    telForm.forEach(telItem => {
        telItem.addEventListener('blur', () => {
            let testTel = /^[^0-9()-]+/gi;
            if (testTel.test(telItem.value) === false){
                telItem.value = telItem.value/* .replace(/[^0-9()-]+/gi, ''); */
            } else {
                telItem.value = telItem.value.replace(/[^0-9()-]/gi, '');
            }
        });
    //    telItem.addEventListener('input', (e) => {
    //        e.target.value = e.target.value.match(/^[0-9()-]+/gi);
    //    });
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