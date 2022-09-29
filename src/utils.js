/**
 * @param {Date} now 
 */
export const getDayOfYear = (now) => {
    var start = new Date(now.getFullYear(), 0, 0)
    var diff = now - start
    var oneDay = 1000 * 60 * 60 * 24
    return Math.floor(diff / oneDay)
}
