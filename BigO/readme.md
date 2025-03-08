

<h1>🕒 Measuring Processing Complexity with Big O Notation</h1>

<table>
    <tr>
        <th>Worst</th>
        <th>Expression</th>
    </tr>
    <tr><td>1</td><td>O(n!)</td></tr>
    <tr><td>2</td><td>O(2^n)</td></tr>
    <tr><td>3</td><td>O(n^2)</td></tr>
    <tr><td>4</td><td>O(n log n)</td></tr>
    <tr><td>5</td><td>O(n)</td></tr>
    <tr><td>6</td><td>O(log n) / O(1)</td></tr>
</table>

<h2>🧩 Understanding Big O Notation with Factorials and Logarithms</h2>
<p>Big O Notation helps to understand <strong>how long an algorithm takes</strong> to run as the input size grows. Let's see this with some simple examples in <strong>TypeScript</strong> using different <strong>data structures</strong>:</p>


<BR/><BR/><BR/>
<strong>TIP:</strong><BR/>
<strong>FACTORIAL GROWS</strong> <BR/>
<strong>LOG DECREASE</strong>
<BR/><BR/><BR/>

<h3>⭐ Example 1: Factorial — O(n!)</h3>
<pre><code>function factorial(n: number): number {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
</code></pre>

<h3>⭐ Example 2: Exponential — O(2^n)</h3>
<pre><code>function fibonacci(n: number): number {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Output: 8
</code></pre>

<h3>⭐ Example 3: Quadratic — O(n²)</h3>
<pre><code>function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5, 2, 9, 1, 5])); // Output: [1, 2, 5, 5, 9]
</code></pre>

<h3>⭐ Example 4: Log-linear — O(n log n)</h3>
<pre><code>function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
    let sorted: number[] = [];
    while (left.length && right.length) {
        sorted.push(left[0] < right[0] ? left.shift()! : right.shift()!);
    }
    return sorted.concat(left, right);
}

console.log(mergeSort([5, 2, 9, 1, 5])); // Output: [1, 2, 5, 5, 9]
</code></pre>

<h3>⭐ Example 5: Linear — O(n)</h3>
<pre><code>function linearSearch(arr: number[], target: number): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

console.log(linearSearch([10, 20, 30, 40], 30)); // Output: 2
</code></pre>

<h3>⭐ Example 6: Logarithmic — O(log n)</h3>
<pre><code>function binarySearch(arr: number[], target: number): number {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        arr[mid] < target ? (left = mid + 1) : (right = mid - 1);
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2
</code></pre>

<h3>⭐ Example 7: Constant — O(1)</h3>
<pre><code>function getFirstItem(arr: number[]): number {
    return arr[0];
}

console.log(getFirstItem([10, 20, 30])); // Output: 10
</code></pre>

<p>These examples show that the smaller the Big O, <strong>the faster and more efficient the algorithm is</strong>! 😎</p>

<BR/>
<strong>Reference:</strong>
https://www.bigocheatsheet.com/