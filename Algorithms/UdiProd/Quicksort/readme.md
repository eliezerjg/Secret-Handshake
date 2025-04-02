# Quick Sort

A little bit confusing implementation using recursion
Objective: Divide in the smallest ordered unit and merge the ordered sub groups

## How Quick Sort Works

Quick Sort is a **divide and conquer** algorithm that sorts an array by:
1. Selecting a pivot (usually the last element).
2. Partitioning the array into two sub-arrays:
    - Elements smaller than the pivot.
    - Elements greater than or equal to the pivot.
3. Recursively sorting the sub-arrays.
4. Combining the sorted sub-arrays with the pivot.

## Example Execution

Given the input array: `[1, 4, 6, 7, 2, 4, 688, 9]`

### Recursive Calls Breakdown

```
quickSort([1, 4, 6, 7, 2, 4, 688, 9])
  → Pivot: 9
  → Calls quickSort([1, 4, 6, 7, 2, 4]) // Left partition
  → Calls quickSort([688]) // Right partition

quickSort([1, 4, 6, 7, 2, 4])
  → Pivot: 4
  → Calls quickSort([1, 2]) // Left partition
  → Calls quickSort([6, 7, 4]) // Right partition

quickSort([1, 2])
  → Pivot: 2
  → Calls quickSort([1]) // Left partition
  → Calls quickSort([]) // Right partition (empty)

quickSort([6, 7, 4])
  → Pivot: 4
  → Calls quickSort([]) // Left partition (empty)
  → Calls quickSort([6, 7]) // Right partition

quickSort([6, 7])
  → Pivot: 7
  → Calls quickSort([6]) // Left partition
  → Calls quickSort([]) // Right partition (empty)
```

### Merging Process

```
[1] + [2] → [1, 2]
[1, 2] + [4] → [1, 2, 4]
[1, 2, 4] + [4] → [1, 2, 4, 4]
[1, 2, 4, 4] + [6, 7] → [1, 2, 4, 4, 6, 7]
[1, 2, 4, 4, 6, 7] + [9] → [1, 2, 4, 4, 6, 7, 9]
[1, 2, 4, 4, 6, 7, 9] + [688] → [1, 2, 4, 4, 6, 7, 9, 688]
```

### Final Sorted Array

```
[1, 2, 4, 4, 6, 7, 9, 688]
```

## Time Complexity

- **Best/Average Case:** O(n log n)
- **Worst Case:** O(n^2) (when the array is already sorted in reverse order)

## Notes

- The pivot is crucial in determining efficiency.
- Choosing the median pivot helps avoid worst-case scenarios.
- Quick Sort is an **in-place** sorting algorithm but not **stable** (relative order of equal elements may change).

---

This explanation provides a detailed breakdown of Quick Sort with recursive calls, partitioning, and merging steps.

