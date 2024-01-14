// || (OR)
//* If any of args are true, returns true, otherwise false
//* It finds the first truthy value
true || true // true
false || true // true
true || false // true
false || false // false


//* && (AND)
//* Finds the first falsy value
true && true // true
true && false // false
false && true // false
false && false // false

//* ?? (Nullish coalescing)
//* Returns the first argument if not null/undefined

let user;

user ?? "Anonymous" // Anonymous (user is undefined)
//We can rewrite it like this

result = (a !== null  && a !== undefined) ? a : b