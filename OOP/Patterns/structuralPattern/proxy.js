//* With a Proxy object, we get more control over the interactions with certain objects. A proxy object can determine the behavior whenever we’re interacting with the object, for example when we’re getting a value, or setting a value.Instead operating with needed object, we will operate with proxy, where we can set or get a value from our needed object.

function networkFetch(url) {
    return `${url} - Response from server`;
}

const cache = new Set();
const proxiedFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args) {
        const url = args[0];
        if(cache.has(url)) {
            return `${url} - Response from cache`
        } else {
            cache.add(url);
            return Reflect.apply(target, thisArg, args);
            // Reflect invokes interceptable JS object internal methods
        }
    }
})

console.log(proxiedFetch('angular.io')) // From server
console.log(proxiedFetch('angular.io')) // From cache