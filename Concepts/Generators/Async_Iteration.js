// async iteration with @@asyncIterator
// Asynchronously iterate over Star Wars API endpoints for characters, planets, and ships.

helperFunc = (endpoint) =>
    async function* () {
        let nextUrl = `https://swapi.dev/api/${endpoint}`
        while (nextUrl) {
            const response = await fetch(nextUrl)
            const data = await response.json()
            nextUrl = data.next
            yield* data.results
        }
    }

starWars = ({
    characters: {
        [Symbol.asyncIterator]: helperFunc("people")
    },
    planets: {
        [Symbol.asyncIterator]: helperFunc("planets")
    },
    ships: {
        [Symbol.asyncIterator]: helperFunc("starships")
    }
})

async function asynchronous() {
    for await (const character of starWars.characters) {
        console.log(character);
    }

    for await (const planet of starWars.planets) {
        console.log(planet);
    }

    for await (const ship of starWars.ships) {
        console.log(ship);
    }
}

asynchronous().catch(error => console.error(error));

//our data is comming in as it was an array

//* yeild is a two edge sword
// it can pass a value as to get a value

function* listener() {
    console.log('listening')
    while(true){
        let msg = yield
        console.log('heard:',msg)
    }
}

let l = listener()
l.next('are you there?') // listening
// the message in the first next() is ignored
// bcuz it initializes the generator 
// and runs until the first yield
l.next('how about now?') //how about now
l.next('blah blah') // blah blah