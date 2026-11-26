function climbStairs(totalSteps){
let counter = 0
 for (let climb = 0; climb <= totalSteps; climb++ ){
 counter += 1;
 }
 for (let climbTwo = 0; climbTwo <= totalSteps; climbTwo +=2 ){
 counter += 1;
 }
 return "Number of Distinct ways to climb the stairs is " + counter;
}

console.log(climbStairs(5));
