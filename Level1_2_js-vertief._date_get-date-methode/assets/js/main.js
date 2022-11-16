let monate = [
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

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

let date = new Date();

console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth() + " Monat");
console.log(date.getDay() + " Tag");
console.log(date.getHours() + " Stunde");
console.log(date.getMinutes() + " Minuten");
console.log(wochenTag[date.getDay()]);
console.log(monate[date.getMonth()]);

document.getElementById("dayOfWeek").innerHTML = wochenTag[date.getDay()].slice(0, 3);
document.getElementById("hours").innerHTML = date.getHours();
document.getElementById("minutes").innerHTML = date.getMinutes();
document.getElementById("seconds").innerHTML = date.getSeconds();
document.getElementById("periodOfDay").innerHTML = date.toLocaleString("en-US").slice(-2);
