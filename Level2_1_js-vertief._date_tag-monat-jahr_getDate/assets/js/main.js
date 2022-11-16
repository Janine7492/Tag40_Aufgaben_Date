let format;
let currentDate;

const button = document.getElementById("submitFormat");
const outputDate = document.getElementById("outputDate");

button.addEventListener("click", (event) => {
    event.preventDefault();

    currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    let day = currentDate.getDay();

    if (document.getElementById("slashFormat").checked) {
        format = 2;
    } else {
        format = 1;
    }

    let choice = format === 2 ? day + "/" + month + "/" + year : day + "-" + month + "-" + year;

    outputDate.innerHTML = choice;
})