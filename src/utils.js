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
    var d = date.getDate();
    var m = date.getMonth() + 1;
    return "" + (m <= 9 ? "0" + m : m) + "-" + (d <= 9 ? "0" + d : d);
}