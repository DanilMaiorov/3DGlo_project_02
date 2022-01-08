//модуль для отправки форм

const sendForm = ({ formId, someElem = [] }) => { //сразу примем id
    const form = document.getElementById(formId) //получим эту форму со страницы

    const statusBlock = document.createElement('div') //создадим новый блок, который будет оповещать нас о том, что загрузка началась
    //и несколько вариантов текста
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо! Наш менеджер с вами свяжется'

    //создадим новую функцию validate()
    /****ПЕРВЫЙ ВАРИАНТ КАК МОЖНО СДЕЛАТЬ ПРОВЕРКУ НА ВВОДИМЫЕ ЗНАЧЕНИЯ
         * 
    const validate = (list) => {
        let success = true // создаем изменяемую переменную для проверки правильности вводимых данных
        
        list.forEach(input => { //переберем весь нодЛист с инпутами в данной форме и дадим условие
            if(!input.classList.contains('success')) { // если класс хотябы одного из инпутов не имеет success
                success = false //то success = false и отправка не произойдёт
            }
        })
        return success //делаем возврат success
        ****/
        /****ВТОРОЙ ВАРИАНТ КАК МОЖНО СДЕЛАТЬ ПРОВЕРКУ НА ВВОДИМЫЕ ЗНАЧЕНИЯ
         * ****/
    const validate = (list) => {
        let success = false // создаем изменяемую переменную для проверки правильности вводимых данных

            const testPhone = /^[0-9()-\+]+/;
            const testName = /^[а-яё ]+$/i
            const testMessage =/^[а-яё0-9 \-\?!.,;:]+$/gi //создаем регулярки

            let nameInput //создаю переменные на каждый инпут для дальнейшей работы
            let testNameInput //создаю перемунную теста инпута
/*             let emailInput
            let testEmailInput  */
            let phoneInput
            let testPhoneInput
            let messageInput
            let testMessageInput

          list.forEach(input => { //делаю перебор всех инпутов для того, что бы с ними работать

            if(input.closest('[name=user_name]')) { //ищу инпут методом клосест по нахождению в его имени нужных слов
                nameInput = input.closest('[name=user_name]')
                nameInput = nameInput.value
            }
/*             if(input.closest('[name=user_email]')) {
                emailInput = input.closest('[name=user_email]')
                emailInput = emailInput.value
            } */
            if(input.closest('[name=user_phone]')) {
                phoneInput = input.closest('[name=user_phone]')
                phoneInput = phoneInput.value
            }
            if(input.closest('[name=user_message]')) {
                messageInput = input.closest('[name=user_message]')
                messageInput = messageInput.value
            }
        })

        testNameInput = testName.test(nameInput) //делаю тест значения инпута на валидность
        console.log(testNameInput)
        testPhoneInput = testPhone.test(phoneInput)
        console.log(testPhoneInput)
        testMessageInput = testMessage.test(messageInput)
        console.log(testMessageInput)

        if (messageInput === undefined && testNameInput && testPhoneInput) { //в первой форме и модалках значения инпутов сообщения и телефона норм, а меседж undefined
            success = true
            console.log('Отправка из первой формы и модального успешна') // то тру
        } else if (messageInput && testMessageInput && testNameInput && testPhoneInput) { // в нижней форме значения инпутов сообщения и телефона и меседжа норм
            success = true //то тру
            console.log('Отправка из второй формы с заполненным меседжем успешна') 
        } else if (messageInput === '') {// в нижней форме значения инпутов сообщения и телефона норм а меседжа пустое
            success = true // то тру
            console.log('Отправка из второй формы с пустым меседжем успешна') 
        } 
         else {
            console.log(success)
        }
        return success //делаем возврат success
    }
    //релизуем функцию sendData()

    const sendData = (data) => { //примет тот объект, который мы будем отправлять
        return fetch('https://jsonplaceholder.typicode.com/posts', { //настроим параметры
            method: 'POST', //метод отправки будет ПОСТ
            body: JSON.stringify(data), //для отправки меняем формат в JSON
            headers: {
                "Content-Type": "application/json" //для отправки в формате JSON
                //"Content-Type": "multipart/form-data" //для отправки в формате формДата
            }
        }).then(res => res.json()) //обработаем данные 
    }
    const submitForm = () => {
        //переменная для получения всех элементов формы
        const formElements = form.querySelectorAll('input') //соберем Нод лист из элементов формы и передадим его в вызов функции validate

        //console.log(formElements)
        //Для того, что бы собрать все данные из формы нужно воспользоваться FormData
        const formData = new FormData(form) //передадим в неё форму, которую хотим отправить (если  в инпуте формы нет name, то не будет корректного отображения)
        const formBody = {} //создадим пустой объект для сбора данных с формДаты
        statusBlock.textContent = loadText 
        form.append(statusBlock)// в самый конец формы вставляется блок с текстом loadText
        formData.forEach((value, key) => { //переберем полученные значения с formData
            formBody[key] = value //добавляем значения в объект
        })
        someElem.forEach(elem => { //переберем массив, который передавали в качестве данных
        //в этом действии мы можеи вытащить его текстовое содержимое если это блок или значение если это инпут
        const element = document.getElementById(elem.id)
            //console.log(element)
        if (elem.type === 'block') { //условие о том, что тип элемента блок,
            formBody[elem.id] = element.textContent // то добавляем его текстКонтент к телу запроса
        } else if (elem.type === 'input') {//условие о том, что тип элемента инпут,
            formBody[elem.id] = element.value// то добавляем его значение к телу запроса
        }
        })
        console.log('submit')
    
        /***ПЕРВЫЙ ВАРИАНТ ВАЛИДАЦИИ 

        //для реализации функции validate необходимо сделать условие, что
        if(validate(formElements)) { //если функция validate будет true
            sendData(formBody).then(data => {//при отправке формы нужно указать передаваемую formBody или формДата
                console.log(data)
            }) //вызовем функцию после нажатия на кнопку отправить - сюда придут уже обработанные данные

            //ТО ПРОИЗВОДИМ ОТПРАВКУ ДАННЫХ
            //это проверка на заполненность полей или отсутствие класса success
        } else { //иначе ругаемся алертом 
            alert ('Данные не валидные')
        }       
        ***/

        /***ВТОРОЙ ВАРИАНТ ВАЛИДАЦИИ***/

        if(validate(formElements)) { //если функция validate будет true
            sendData(formBody).then(data => {//при отправке формы нужно указать передаваемую formBody или формДата
            //после того, как данные улетели, нам нужно перебрать все инпуты и почистить их value
                statusBlock.textContent = successText //вставляет текст успеха в случае успеха
                formElements.forEach(input => { //перебираем 
                    input.value = '' // чистим поля
                })
            }) //вызовем функцию после нажатия на кнопку отправить - сюда придут уже обработанные данные

            //ТО ПРОИЗВОДИМ ОТПРАВКУ ДАННЫХ
            //это проверка на заполненность полей или отсутствие класса success
            .catch (error => {
                statusBlock.textContent = errorText //вставляет текст ошибки в случае ошибки
            })
            alert ('Данные отправлены')
        } else { //иначе ругаемся алертом 
            alert ('Данные не валидные')
        }       
    }

    //создадим функцию submitForm() и вынесем всю логику по отправку в эту функцию и вызовем её в обработчике 

    //ДЛЯ ТОГО, ЧТОБЫ ОБЕЗОПАСИТЬ КОД ИСПОЛЬЗУЕМ СТРУКТУРУ TRY CATCH

    try {
        //и сделаем проверку
        if(!form) { //если форма пропадает, то выбрасываем ошибку
            throw new Error('Верните форму на место!')
        }
        form.addEventListener('submit', (e) => { //повешаем слушатель sumbit
            e.preventDefault() //отменим стандартное поведение кнопки
            
            submitForm()
        })
    } catch (error) {
        console.log(error.message)
    }
}

export default sendForm