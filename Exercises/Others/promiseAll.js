function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        const finishedPromises = []
        let secondIndex = 0
        for(let index in promises) {
            promises[index]
            .then((data) => {
                finishedPromises[index] = data
                secondIndex++
                if(secondIndex == promises.length) resolve(finishedPromises)
            })
        .catch((rej) => reject(rej))
        }
    })
}

const resolve = (value, timeout) => 
 new Promise((res) => setTimeout(res, timeout, value))
const reject = (value, timeout) =>
 new Promise((_, rej) => setTimeout(rej, timeout, value))

 promiseAll([resolve(1, 200), resolve(2, 300), resolve(3, 100)])
        .then(console.log)

promiseAll([reject(1, 100), reject(2, 500), reject(3, 1000)])
    .catch(console.error)