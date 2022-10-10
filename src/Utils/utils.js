/**
 * @param {Date} now 
 */

//утилиты для работы с датами

//вычисление номера тукущего дня
export const getDayOfYear = (now) => {
    var start = new Date(now.getFullYear(), 0, 0)
    var diff = now - start
    var oneDay = 1000 * 60 * 60 * 24
    return Math.floor(diff / oneDay)
}

//вычисление даты дня рождения
export const dateToYMD = (date) => {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    return "" + (month <= 9 ? "0" + month : month) + "-" + (day <= 9 ? "0" + day : day);
}

//вычисление количества лет выбранногопользователя
export const getNumberOfYears = (userProfile) => {
    var now = new Date(); //Текущя дата
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
    var dob = new Date(userProfile.birthday); //Дата рождения
    var dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году
    //Возраст = текущий год - год рождения
    let age = today.getFullYear() - dob.getFullYear();
    //Если ДР в этом году ещё предстоит, то вычитаем из age один год
    if (today < dobnow) {
        age = age - 1;
    }
    return age;
};


/**
 * @param {reload} now 
 */

// перезакрузка страници
export const reload = () => {
    window.location.reload();
};
