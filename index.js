"use strict"

let salaries = [10000, 25000, 50000, 100000]; // зарплаты сотрудников
let workers = [5, 15, 40, 10]; // кол-во сотрудников
let taxSum = 0;
let workersSum = 0;
let allTaxes = 0;

for (let i = 0; i < salaries.length; i++) {
   if (salaries[i] <= 10000) {
     taxSum = 0;
     allTaxes += taxSum
   } else if (10000 < salaries[i] <= 20000) {
     taxSum = Math.floor((salaries[i] - 10000) * 0.1 * workers[i]);
     allTaxes += taxSum
   } else if (20000 < salaries[i] <= 70000) {
     taxSum = Math.floor(10000 * 0.1 + (salaries[i] - 20000) * 0.2 * workers[i]);
     allTaxes += taxSum
   } else if (salaries[i] > 70000) {
     taxSum = Math.floor(10000 * 0.1 + 50000 * 0.2 + (salaries[i] - 70000) * 0.5 * workers[i]);
     allTaxes += taxSum
   }
   workersSum = workersSum + workers[i];
 }
 let midTaxes = Math.floor(allTaxes / workersSum);

 console.dir(`Суммарные налоговые отчисления со всех зарплат равны ${allTaxes}`);
 console.dir(`Средние налоговые отчисления на человека в рублях равны ${midTaxes}`);