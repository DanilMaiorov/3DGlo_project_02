const timer = (deadline) => {

    /* const timerDays = document.getElementById('timer-days'); */
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

const getTimeRemaining = () => {
    
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
/*     let days = Math.floor(timeRemaining / 60 / 60 / 24); */
    let hours = Math.floor((timeRemaining / 60 / 60) /* % 24 */);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return { timeRemaining, /* days, */ hours, minutes, seconds };
};
/*     let text_forms_days = [' день ', ' дня ', ' дней '];
    function dayForms (days, text_forms_days) {
        let n1 = days % 10
        if(days > 10 && days < 20) {
            return text_forms_days[2];
        }
        if(n1 > 1 && n1 < 5) {
            return text_forms_days[1];
        }
        if(n1 == 1) {
            return text_forms_days[0];
        }
        return text_forms_days[2];
    } */

    let updateClock = setInterval(() => {
        let getTime = getTimeRemaining();
        console.log(getTime);
/*         timerDays.textContent = getTime.days + dayForms(getTime.days, text_forms_days); */
        timerHours.textContent = (getTime.hours < 10) ? '0' + getTime.hours : getTime.hours;
        timerMinutes.textContent = (getTime.minutes < 10) ? '0' + getTime.minutes : getTime.minutes;
        timerSeconds.textContent = (getTime.seconds < 10) ? '0' + getTime.seconds : getTime.seconds;
            if (getTime.timeRemaining === 0 || getTime.timeRemaining < 0) {
                clearInterval(updateClock)
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
    }, 1000);
};
export default timer;


//1) сначала нужно задать время до которого будет досчитывать таймер - дедлайн

//благодаря объекту date можем высчитать количество миллисекунд до дедлайна и вычитаем из будущего до текущей даты