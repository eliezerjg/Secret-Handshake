export default class MinAlgorithm {
    public min(myList : Array<number>){
        var minNumber = null;

        for(let currentNumber of myList){
            if(minNumber === null){
                minNumber = currentNumber
            }

            if(currentNumber < minNumber){
                minNumber = currentNumber;
            }
        }

        return minNumber;
    }
}

let minNumberResult = new MinAlgorithm().min([10,30,5,75,25,2,1]);
console.info("the result is, complexity O(n): " + minNumberResult);