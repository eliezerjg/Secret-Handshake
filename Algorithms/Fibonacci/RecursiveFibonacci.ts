export default class RecursiveFibonacci{
    // the recursiveFibonacci function the fib is the sum of the last 2 numbers
    doFibonacci(num : number): number{
        if(num == 0){
            return 0;
        }

        if (num == 1){
            return 1;
        }

        return this.doFibonacci(num -1) + this.doFibonacci(num -2);
    }
}

const recursiveFibonacci : RecursiveFibonacci = new RecursiveFibonacci();
console.log(recursiveFibonacci.doFibonacci(15));