//********************* CREATING A MAP *******************/
// using the constructor
let myMap = new Map()
let anotherMap = new Map([
    ['key1', 'value1']
    ['key2', 'value2']
])

//********************* ADDING and REMOVING Entries *******************/

myMap.set('key1', 'value1')
myMap.set('key2', 'value2')
myMap.delete('key1')


//********************* GETTING and CHECKING for Entries *******************/

console.log(myMap.get('key2')) // output : value2
console.log(myMap.has('key1')) // false


//********************* ITERATING over Entries *******************/
for(let [key,value] of myMap) {
    console.log(`${key}: ${value}`)
}

// using forEach
myMap.forEach((value,key) => {
    console.log(`${key}: ${value}`)
})


//********************* GETTING THE SIZE *******************/

console.log(myMap.size)


//********************* Key Flexibility *******************/

let objKey = {}
myMap.set(objKey, 'value3')
// in Map, keys can be of any data type unlike in objects


