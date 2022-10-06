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

export const reload = () => {
    window.location.reload();
};
