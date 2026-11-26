function checkPerfectNumber(number) {

    let sumOfFactors =0;
    for (let count=1; count <number; count++) {
     if (number % count == 0) {
    sumOfFactors= sumOfFactors + count;
    }
}

  if ( sumOfFactors == number){
    return true ;
}
  else{
    return false;
}
}
console.log(checkPerfectNumber(28));
console.log(checkPerfectNumber(16));
