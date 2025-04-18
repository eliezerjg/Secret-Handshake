function quickSort(numbers: number[]) : number[]{
    // o(1) solution for 1 item array
    if(numbers.length <= 1){
        return numbers;
    }

    const pivot = numbers[numbers.length - 1];


    let leftArray: number[] = [];
    let rightArray: number[] = [];

    // we split by the pivot into left and right
    for(let index = 0; index < numbers.length - 1; index++){
        var number = numbers[index];

        if(number < pivot){
            leftArray.push(number);
        }else{
            rightArray.push(number);
        }
    }

    // we merge the recursion, the pivot will guide this into small ordered arrays
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

console.log(quickSort([1,4,6,7,2,4,688,9]));