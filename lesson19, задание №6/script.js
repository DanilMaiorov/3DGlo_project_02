'use sctrict';

const dayTime = document.getElementById('day-time');
const weekDay = document.getElementById('week-day');
const currentTime = document.getElementById('current-time');
const newYearTimer = document.getElementById('new-year-countdown');

const timer = (newYear) => {

const newYearTimer1 = () => {
    let dateStop = new Date(newYear).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);

        return { days };
};
let clock = setInterval(() => {
     
    const date = new Date();
    const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
        let weekDayToday = week[date.getDay() - 1]
    const getDays = newYearTimer1();
    const hours = date.getHours();
        let greeting 
        if (hours >= 5 && hours < 12) {
            greeting = "Доброе утро"; 
        } else if (hours >=12 && hours < 18) { 
            greeting = "Добрый день"; 
        } else if (hours >= 18 && hours < 24) {
            greeting = "Добрый вечер"; 
        } else if (hours >= 0 && hours < 5) {
            greeting = "Доброй ночи"; 
        }

    dayTime.innerHTML = greeting;
    weekDay.innerHTML = '<span>Сегодня: </span>' + weekDayToday;
    currentTime.innerHTML = '<span>Текущее время: </span>' + date.toLocaleTimeString('en-US');
    newYearTimer.innerHTML = '<span>До нового года осталось </span>' + getDays.days + dayForms(getDays.days, textFormsDays);

    if (getDays.days < 0) {
        clearInterval(clock)
        newYearTimer.innerHTML = '<span>Новый, 2022 год, наступил!</span>';
    }

}, 1000);

newYearTimer1();
};

let textFormsDays = [' день ', ' дня ', ' дней '];
    function dayForms (days, textFormsDays) {
        let n1 = days % 10
        if(days > 10 && days < 20) {
            return textFormsDays[2];
        } else if (n1 > 1 && n1 < 5) {
            return textFormsDays[1];
        } else if(n1 == 1) {
            return textFormsDays[0];
        }
        return textFormsDays[2];
    }

timer ('01 january 2022');