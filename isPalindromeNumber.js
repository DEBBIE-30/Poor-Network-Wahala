function isPalindromeNumber(number){

let numberStill = number
let reversedNumber = 0
while (number !== 0){
reversedNumber = (reversedNumber * 10) + number %10;
number = Math.floor(number/10);
}

if (reversedNumber==numberStill){
return true;
}
else{
return false;
}
}
console.log(isPalindromeNumber(753));
console.log(isPalindromeNumber(121));

