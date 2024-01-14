// Just basic examples with operators

let s = "my" + "string" // string concatenation
console.log(s) //mystring

alert("1" + 2) // 12
alert(1 + "2") // 21

alert(2 + 2 + '1') // 41 //because it a number first
alert('1' + 2 +  2) // will get 122, bcuz it is a string first
//* only + works this way, any other convert string -> number

alert(6 - '2') //4
alert('6' / '2') // 3

let apples = '2'
let oranges = '4'
alert( apples + oranges) // "24"
// that is the unary +
// it converts the value to a number
alert(+apples + +oranges) // 6

//Examples

let a = 1, b = 1

let c = ++a
let d = b++

alert(a,b,c,d)
// a = 2 // b = 2 // c = 2 // d = 1



"" + 1 + 0 // "10"

"" - 1 + 0 // -1

true + false // 1

6 / "3" // 2

"2" * "3" // 6 

4 + 5 + "px" // "9px"

"$" + 4 + 5 //$45

"4" - 2 // 2

"4px" - 2 //NaN

"  -9  " + 5 // "  -9  5"

"  -9  " - 5 // -14

null + 1 // 1

undefined + 1 //Nan 

"\t \n" - 2 // -2