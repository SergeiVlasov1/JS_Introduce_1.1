
let salarys = [10000, 25000, 50000, 100000];
let peoples = [5, 15, 40, 10];
let percent = 0.2;

let allpeople = 0;
let sum = 0;
let average = 0;


for (let i = 0; i < salarys.length; i++) {
  sum = sum + salarys[i] * peoples[i] * percent;
  allpeople = allpeople + peoples[i];
}

average = sum / allpeople;

console.log("суммарные налоговые отчисления: " + sum);
console.log("средние налоговые отчисления на человека: " + Math.floor(average));