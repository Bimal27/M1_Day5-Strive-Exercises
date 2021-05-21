/*EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
let area = function(l1,l2){
    console.log(l1*l2)
}
area(4,5)


/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
 let crazySum = function (a,b){
     if(a === b){
         console.log(3*(a+b))
     }else{
         console.log(a + b)
     }
 }
    crazySum(3,4)
/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
let crazyDiff = function(c,d){
    if(c>19){
        console.log(Math.abs(3*(c - d)))
    }else{
        console.log(Math.abs(c -d))
    }
}
crazyDiff (18,19)

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
function boundry(n){
        if((n>=20 && n<=100) || (n===400)) {
            console.log(true)
        }else{
            console.log(false)
        }
}
boundry(300)


/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
 let strivify = function(str){
     console.log(str.includes("Strive"))
 }
 strivify("Welcome to Strive")

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
function check3and7(x){
    if(x%3==0 || x%7 == 0){
        return true
    }else{
        return false
    }
    
}
console.log(check3and7(76))


/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/
function reverseString(str){
    return str.split("").reverse().join("")
    
}
console.log(reverseString("Bimal"))

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/
function upperFirst(str){
    console.log(str.charAt(0).toUpperCase() + str.slice(1))

}
upperFirst("bimal")

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

let cutString = function(str){
    return str.substring(1, str.length - 1)
}
console.log(cutString("Strive"))

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
function giveMeRandom(min,max){
    return Math.floor(Math.random() * (max - min )) + min
}
console.log(giveMeRandom(0,10))