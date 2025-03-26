function binarySearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid; // Target found
        } else if (arr[mid] < target) {
            // grows from the half util found the target
            low = mid + 1; // Discard the left half
        } else {
            // decrease from the half util found the target
            high = mid - 1; // Discard the right half
        }
    }

    return -1; // Target not found
}

// basic steps
// [1,2,3,4,5,6,7]
// target : 4
// algo cut the list in half ( and round )
// if target is on right (or is greater) grow
// if target is on the left ( or is smaller) decrease
// if not found returns -1



// *** NOTE *** this is only good for Sorted Arrays


