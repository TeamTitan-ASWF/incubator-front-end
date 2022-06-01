export const convertMonthNameToDigits = (name) => {
    switch (name.toLowerCase()) {
        case "jan":
            return "01";
        case "feb":
            return "02";
        case "mar":
            return "03";
        case "apr":
            return "04";
        case "may":
            return "05";
        case "jun":
            return "06";
        case "jul":
            return "07";
        case "aug":
            return "08";
        case "sep":
            return "09";
        case "oct":
            return "10";
        case "nov":
            return "11";
        case "dec":
            return "12";
        default:
            return "";
    }
};

export const formatDate = (unformattedDate) => {

    //console.log(unformattedDate);
    //console.log(new Date());

    if (unformattedDate.toString().length > 30) {
        //Wed Jan 04 1995 18:00:00 GMT-0600 (Central Standard Time)
        const newYear = unformattedDate.toString().substring(11, 15);
        const newMonth = convertMonthNameToDigits(unformattedDate.toString().substring(4, 7));
        const newDay = unformattedDate.toString().substring(8, 10);

        return newYear + "-" + newMonth + "-" + newDay;

        //console.log(unformattedDate + ", got to first");
        //return unformattedDate.toString  + "-" + (unformattedDate.getMonth() + 1).toString().padStart(2, "0") + "-" + (unformattedDate.getDay() + 1).toString().padStart(2, "0")
        //return moment(Date.parse(unformattedDate) - 28800000).format('YYYY-MM-DD');
    } else if (unformattedDate.toString().length > 10) {
        return unformattedDate.substring(0,10);
    } else {
        return unformattedDate.toString();
    }
}