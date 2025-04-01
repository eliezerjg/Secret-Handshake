/*
*  Fibonacci is a sequence of two last numbers
*   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, ...
*
* */
export default class ImperativeFibonacci {
    doFibonacci(num: number): number {
        // Base case: Fibonacci of 0 is 0
        if (num === 0) return 0;

        // Initialize first two Fibonacci numbers
        let a = 0;  // Represents fib(0)
        let b = 1;  // Represents fib(1)

        // Calculate Fibonacci from 2 up to 'num'
        for (let i = 2; i <= num; i++) {

            // Calculate next Fibonacci number
            const next = a + b;
            console.log(next);

            // Shift values for next iteration
            a = b;      // Current becomes previous
            b = next;    // Next becomes current
        }

        // Return the computed Fibonacci number
        return b;
    }
}

const fibonacci = new ImperativeFibonacci();
console.log("result:",fibonacci.doFibonacci(15));  // Output: 610