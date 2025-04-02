/*
*
*
* The Quick Sort algorithm is another example of a 'divide and conquer' algorithm that takes an un-sorted array and,
* you guessed it, sorts it! It works by selecting a pivot (usually the last element in the array)
* and then adding the remaining elements in the array to 2 sub-arrays - 1 that will contain all the elements
* smaller than the pivot, and the other that will contain the elements greater than, or equal to, the pivot.
* We then recurse this step on the sub arrays until the entire array is sorted.
* This algorithm has an average time complexity of O(nlogn) but its worst case is O(n^2) when the array is
* already sorted but in reverse order.
*
*
* */

// 1st entry [1,4,6,7,2,4,688,9]
function quickSort(arr: number[]): number[] {
    // base case
    if (arr.length <= 1) {
        return arr;
    }

    // 9
    // select our pivot -- the last element in the array
    const pivot = arr[arr.length - 1];

    // create 2 sub-arrays
    const leftArr: number[] = [];
    const rightArr: number[] = [];

    // loop through the array
    for (let i = 0; i < arr.length - 1; i++) {
        // if the current item is less than the value of our pivot
        // add the item to our leftArr, otherwise, add it to our
        // rightArr

        // n < 9
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        }
        // n > 9
        else {
            rightArr.push(arr[i]);
        }
    }

    // repeat/recurse this process for our sub arrays
    // merge the recursion
    // l: quickSort [n <9] = (1,4,6,7,2,4) , 1st pivot, quicksort [n>9] = (688)
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}


console.log(quickSort([1,4,6,7,2,4,688,9]));


// reference : https://dev.to/kaxmoglan/the-quick-sort-algorithm-2anl
// reference : https://www.youtube.com/watch?v=aXXWXz5rF64&list=PL2aHrV9pFqNS79ZKnGLw-RG5gH01bcjRZ