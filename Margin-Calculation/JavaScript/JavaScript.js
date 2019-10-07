var inputSum = document.querySelector('#input-sum');            //Сохраняем инпуты
var inputDiscount = document.querySelector('#input-discount');  //Сохраняем инпуты
var inputBonuses = document.querySelector('#input-bonuses');    //Сохраняем инпуты

function calculate () {                                         //Функция подсчета
    var sum = document.querySelector('.sum').value;
    var discount = document.querySelector('.discount').value;  //Записываем значение полей
    var bonuses = document.querySelector('.bonuses').value;   
    var percent = sum / 100 * discount;                         //Получаем %скидки
    var total = sum - percent - bonuses;                        //Сумма - скидка - бонусы
    var perc25 = total / 100 * 25;                              // 25% скидка
    var perc30 = total / 100 * 30;                              // 30% скидка
    var perc40 = total / 100 * 40;                              // 40% скидка
    var perc50 = total / 100 * 50;                              // 50% скидка
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