// The Generator object is returned by a generator function
// and conforms to both the iterable and iterator protocols

//*Generator is a subclass of the hidden Iterator class

const foo = function* () {
    yield 'a';
    yield 'b';
    yield 'c';
}

let str = ''
for(const val of foo()){
    str = str + val
}

console.log(str) // abcd

//Examples 

cardDeck = ({
    suits:["H", "D","C","S"],
    court:["J", "Q", "K","A"],
    [Symbol.iterator]: function* (){
        for(let suit of this.suits) {
            for(let i = 2; i <= 10; i++) yield suit + i;
            for(let c of this.court) yield suit + c
        }
    }
})

console.log(...cardDeck)