const tabs = () => {

const tabPanel = document.querySelector('.service-header');
const tabs = document.querySelectorAll('.service-header-tab');
const tabContent = document.querySelectorAll('.service-tab');  //изначально скрыли табы, добавили класс d-none потому что чрезе бутстрап




tabPanel.addEventListener('click', (e) => {
    if(e.target.closest('.service-header-tab')) { //внутри был спан, поэтому использовали этот метод
        const tabBtn = e.target.closest('.service-header-tab'); //задали новую переменную для того, что бы указывать её в условии, и тот клик по спану будет давать кнопку и соответственно менять класс
        console.log(tabBtn);
        tabs.forEach((tab, index) => { //перебираем с индексом, что бы при клике полкчать этот индекс и спользовать его для получения нужного таба, чтобы его отобразить при переключении кнопок
            if(tab === tabBtn) {
                tab.classList.add('active');
                tabContent[index].classList.remove('d-none'); // при переключении кнопок тот или иной Таб появлется
            } else {
                tab.classList.remove('active');
                tabContent[index].classList.add('d-none'); // при переключении кнопок тот или иной Таб скрывается
            }
        });
    }
});
};

export default tabs;
