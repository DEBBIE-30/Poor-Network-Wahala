function reverseInteger(number){

let reversedNumber = 0
while (number !== 0){
reversedNumber = (reversedNumber * 10) + number %10;
number = Math.floor(number/10)
}
return reversedNumber
}
console.log(reverseInteger(753));
console.log(reverseInteger(121));

