/**
 * @param {Date} now 
 */
export const getDayOfYear = (now) => {
    var start = new Date(now.getFullYear(), 0, 0)
    var diff = now - start
    var oneDay = 1000 * 60 * 60 * 24
    return Math.floor(diff / oneDay)
}

export const dateToYMD = (date) => {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    return "" + (month <= 9 ? "0" + month : month) + "-" + (day <= 9 ? "0" + day : day);
}