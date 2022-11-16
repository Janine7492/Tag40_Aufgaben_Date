let date = new Date();

date.setFullYear(2222);
console.log(date);

date.setFullYear(2123);
date.setDate(24);
date.setMonth(1);
console.log(date);

date.setMonth(2);
console.log(date);

date.setDate(03);
console.log(date);

date = new Date();
date.setDate(date.getDate() + 30);
console.log(date);