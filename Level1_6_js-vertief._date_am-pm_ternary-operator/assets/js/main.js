let newDate;
let hours;

function pmOrAm(currentDate) {
    hours = currentDate.getHours();

    let am = hours < 12 ? "AM" : "PM";


    return am;
}

date1 = new Date(1999, 10, 5, 15);
console.log(pmOrAm(date1));
date2 = new Date();
console.log(pmOrAm(date2));
date3 = new Date(2019, 12, 3, 12);
console.log(pmOrAm(date3));
date4 = new Date(2000, 1, 1, 11);
console.log(pmOrAm(date4));
