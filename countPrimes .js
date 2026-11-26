function countPrimes(upperLimit){
let count = 0;

for (let number = 2; number < upperLimit; number++){
let isPrime = true;

for (let numberr = 2; numberr < number; numberr++){
if (number % numberr === 0){
is prime = false;
}
}
if (isPrime){
count++}
}
return count;
}
