/**
 * 获取雷达数据时间
 *
 * @param {any}
 * @return {array} 6Min Split Radar Time
 */
export const RadarTimeSlider = () => {
    const formattedDate = (Hours, SplitPoint) => {
        let dateObj = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), Hours, parseInt(SplitPoint)));
        return dateObj.toISOString().slice(0, 17).replace('T', '').replace(/[-:]/g, '') + '00'
    }
    const timeSplit = ["00", "06", "12", "18", "24", "30", "36", "42", "48", "54"]
    const dateArr = [];
    const now = new Date();
    const Hours = now.getUTCHours()
    const Minutes = now.getUTCMinutes()
    const currentSplitPoint = Minutes - Minutes % 6
    const currentIndex = timeSplit.findIndex(item => item == currentSplitPoint) // 本时次有效时间点长度 

    for (let i = 0; i <= currentIndex; i++) {
        dateArr.push(formattedDate(Hours, timeSplit[i]))
    }
    if (currentIndex < 9 & Hours != 12) {
        for (let i = 9; i > currentIndex; i--) {
            dateArr.push(formattedDate(Hours - 1, timeSplit[i]))
        }
    }
    return dateArr
};