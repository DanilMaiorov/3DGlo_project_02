//LESSON24
//САМОЕ ВАЖНОЕ ПРИ НАПИСАНИИ КАЛЬКУЛЯТОРА ЯВЛЯЮТСЯ ФОРМУЛЫ ДЛЯ РАСЧЁТА
//РЕАЛИЗАЦИЯ РАСЧЁТА ТИПОВ ПЛОЩАДИ

 const calc = (price = 100) => { 
        const calcBlock = document.querySelector('.calc-block');
        const calcType = document.querySelector('.calc-type');
        const calcSquare = document.querySelector('.calc-square');
        const calcCount = document.querySelector('.calc-count');
        const calcDay = document.querySelector('.calc-day');
        const total = document.querySelector('#total');
        let totalValue = 0; 
        let interval;

        const countCalc = () => { 

            const calcTypeValue = +calcType.options[calcType.selectedIndex].value; 
            const calcSquareValue = calcSquare.value;
                        
            let calcCountValue = 1; 
            let calcDayValue = 1; 
            
            if (calcCount.value > 1) { 
                calcCountValue += +calcCount.value / 10;
            }
            if (calcDay.value && calcDay.value < 5) { 
                calcDayValue = 2; 
            } else if (calcDay.value && calcDay.value < 10) {
                calcDayValue = 1.5;
            }
            if (calcType.value && calcSquare.value) { 
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;       
            } else { 
                totalValue = 0;
            }
            return totalValue;
        };
        calcBlock.addEventListener('change', (e) => { 
            if (e.target === calcType || e.target === calcSquare ||
                e.target === calcCount || e.target === calcDay) { 
                clearInterval(interval);
                countCalc();
                    const time = 1500;
                    const step = 100;                
                    let n = 0;
                    let count = Math.round(time / (totalValue / step));
                        if (totalValue !== 0) {
                        interval = setInterval(() => {
                            n += step;
                            if (n === totalValue || n > totalValue) {
                                clearInterval(interval);
                                n = totalValue;
                            }
                            total.textContent = n;
                        }, count);
                    }  
                    console.log(totalValue);
                }
        });  
};

export default calc;

/*
const calc = (price = 100) => { //примем параметр, который передали в вызове функции, будет приниматься если мы не будем передавать значение в вызове

     //РАБОТАТЬ БУДЕМ ЧЕРЕЗ ДЕЛЕГИРОВАНИЕ
    const calcBlock = document.querySelector('.calc-block'); //получим блок калькулятора
    const calcType = document.querySelector('.calc-type'); //получим поле ввода селекта
    const calcSquare = document.querySelector('.calc-square');//получим поле ввода площади
    const calcCount = document.querySelector('.calc-count');//получим поле ввода количества помещений
    const calcDay = document.querySelector('.calc-day');//получим поле ввода срока
    const total = document.querySelector('#total');

    //анимация перебор цифр

    const time = 200;  //ремя за которое будет выводиться число
    const step = 100;   // шаг, с которым будет выводиться число

    const countCalc = () => { //создадим функцию, которая будет считать итоговую стоимость
        // первым делом создаем переменную, в которую вносим значения нашего селекта
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value; 
        //options это коллекция(массив), поэтому обращаемся к индексу в котором прописываем то свойство, которое хотим получить
        //и уже после мы можем дотянуться к свойству value для расчёта
        //console.dir(calcType.options[calcType.selectedIndex].value) и вставим это всё в переменную

        // переменная значения площади
        const calcSquareValue = calcSquare.value;
        
        let totalValue = 0 //создадим изеняемую переменную, которую буде заносить этот тотал в спан
        let calcCountValue = 1 //создадим изеняемую переменную значения количества помещений, которая по умолчанию равна 1 и добавим еще одно условие согласно ТЗ
        let calcDayValue = 1 //создадим изеняемую переменную значения количества дней, для которой нужно условие
        if (calcCount.value > 1) { // условие для количества помещений
            calcCountValue += +calcCount.value / 10;
        }
        if (calcDay.value && calcDay.value < 5) { // условие для количества дней, если значение дней существует и равно определенному количеству
            calcDayValue = 2; //то принимаем значение для расчёта
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }
        if (calcType.value && calcSquare.value) { //проверка на то, что эти данные у нас существуют и если они существуют 
        totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;//то мы ведем расчёт
        outNum (totalValue, total); //вызовем функцию анимации   
        } else { //в ином случае в totalValue будет заноситься 0
            totalValue = 0
        }
        total.textContent = totalValue; //значение totalValue будет заноситься в текстовое содержимое спана total
    };
    //повешаем на весь блок калькулятора обработчик события, можно выбрать или change или input

    calcBlock.addEventListener('input', (e) => { //для начала выберем инпут, так удобнее в плане тестирования, потом изменим на change
        //countCalc(); //при каждом изменении в поле ввода будем вызывать функцию подсчета
        if (e.target === calcType || e.target === calcSquare
           || e.target === calcCount || e.target === calcDay) { //только в том случае, если e.target = calcType и остальным полям ввода мы будем вызывать функцию countCalc, если появятся другие поля, то они не будут отрабатывать
            countCalc();
        }
    const outNum = (num, elem) => { //num - число, которое будем выводить, elem - куда будем выводить
        //let e = document.querySelector('#total'); //переменная, куда будем выводить число,
        let n = 0; //переменная, которая говорит о том, с какого числа начинаем считать
        let count = Math.round(time / (num / step));//нужно посчитать сколько шагов от начального числа до конечного
        let interval = setInterval(() => {
            n += + step //наращиваем наше число
            if (n === num) { //если n равно введенному числу, то заканчиваем интервал
                clearInterval(interval);
            }
            total.textContent = n
        }, count); //задаем интервал
    }
    });  
};
export default calc; */