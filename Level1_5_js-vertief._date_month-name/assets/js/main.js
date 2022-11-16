let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let newDate;
let currentMonth;

function monatsName(year, month, day) {
    newDate = new Date(year, (month - 1), day);
    currentMonth = newDate.getMonth();
    return list[currentMonth];
}


console.log(monatsName(2001, 3, 4));
console.log(monatsName(2019, 12, 24));
console.log(monatsName(1410, 07, 15));
