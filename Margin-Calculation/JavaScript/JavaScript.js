const inputSum = document.querySelector('#input-sum');            //Сохраняем инпуты
const inputDiscount = document.querySelector('#input-discount');  //Сохраняем инпуты
const inputBonuses = document.querySelector('#input-bonuses');    //Сохраняем инпуты

function calculate () {                                         //Функция подсчета
    const sum = document.querySelector('.sum').value;
    const discount = document.querySelector('.discount').value;  //Записываем значение полей
    const bonuses = document.querySelector('.bonuses').value;   
    let percent = sum / 100 * discount;                         //Получаем %скидки
    let total = sum - percent - bonuses;                        //Сумма - скидка - бонусы
    let perc25 = total / 100 * 25;                              // 25% скидка
    let perc30 = total / 100 * 30;                              // 30% скидка
    let perc40 = total / 100 * 40;                              // 40% скидка
    let perc50 = total / 100 * 50;                              // 50% скидка
    document.querySelector('.Total_25').innerHTML = '25%:' + ' ' + ' ' +  perc25;   //Выводим конечную сумму и делим ее на 25%
    document.querySelector('.Total_30').innerHTML = '30%:' + ' ' + ' ' +  perc30;
    document.querySelector('.Total_40').innerHTML = '40%:' + ' ' + ' ' +  perc40;
    document.querySelector('.Total_50').innerHTML = '50%:' + ' ' + ' ' +  perc50;
}

inputSum.oninput = calculate;        //Получаем значение сразу после ввода чисел в строке суммы
inputDiscount.oninput = calculate;   //Получаем значение сразу после ввода чисел в строке скидок
inputBonuses.oninput = calculate;    //Получаем значение сразу после ввода чисел в строке бонусов

function clearText () {              //Функция обнуляет значения полей
    inputSum.value = '';
    inputDiscount.value = '';
    inputBonuses.value = '';
}

setInterval(clearText, 60000);       //Каждые 60 секунд обнуляем данные полей
