Promise
.reject('a') // Creates a rejected promise with value 'a'
.then(p=>p+'1', p=>p+'2') // Resolved 'a' with '2'
.catch(p=>p+'b') // No effect due to the resolved promise before 
.catch(p=>p+'c') // No effect, cause the first 'then' worked
.then(p=>p+'d1') //Resolved '2b' with '2bd1'
.then('d2') // No effect, 'd2' is not a function
.finally(p=>p+'d3') // No effect on the value, returns the same value
.then(p=>console.log(p))