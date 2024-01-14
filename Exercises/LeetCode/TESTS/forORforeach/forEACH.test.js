function noway(arr, fn){
    let result = []

  arr.forEach((item, index) => {
        result.push(fn(item, index))
  })

    return result
}

let arr = [1,2,3]

let fn = function plusone(n) {
    return n + 1;
}

describe('Test Function Execution Time', () => {
    test('Execution Time of test function', () => {
        const arr = Array.from({ length: 10000 }, (_, index) => index + 1); // Sample array

        const start = performance.now();
        noway(arr, fn);
        const end = performance.now();

        const executionTime = end - start;
        console.log(`Execution time: ${executionTime} milliseconds`);

        expect(executionTime).toBeLessThan(50); // Set the threshold time here
    });
});