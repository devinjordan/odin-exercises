function fibs(n) {
  let sequence = [];
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === 1) {
      sequence.push(1);
    } else {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }
  return sequence;
}

function fibsRec(n) {
  // base case(s)
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  // recursive case
  } else {
    let lastFib = fibsRec(n - 1);
    nextFib = lastFib[lastFib.length - 1] + lastFib[lastFib.length - 2];
    lastFib.push(nextFib);
    return lastFib;
  }
}

function mergeSort(array) {
  // error handling
  if (!Array.isArray(array)) {
    throw console.error("Error: This function requires an array.");;
  } else if (array.length == 0) {
    return console.log("This function requires an array");

    // base case
  } else if (array.length == 1) {
    return array;
  }

  // recursive case
  let mid = Math.round(array.length / 2);
  let firstHalf = mergeSort(array.slice(0, mid));
  let lastHalf = mergeSort(array.slice(mid, array.length));
  let sorted = merge(firstHalf, lastHalf);
  return sorted;
}

function merge(left, right) {
  let sorted = [];
  let i= 0;
  let j = 0;
  let k = 0;
  do {
    //stuff
    if (left[i] <= right[j] || isNaN(right[j])) {
      sorted[k] = left[i];
      i++;
      k++;
    } else {
      sorted[k] = right[j];
      j++;
      k++;
    };
  } while (k < left.length + right.length);
  return sorted;
}

console.log(merge([1, 3, 5, 49, 71], [2, 8, 50])); // sorts pre-sorted arrays
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // basic case
console.log(mergeSort([12])); // single item
console.log(mergeSort([12, 15, 23, 4 , 6, 10, 35, 28, 100, 130, 500, 1000, 235, 554, 75, 345, 800, 222, 333, 888, 444, 111, 666, 777, 60])); // many items
console.log(mergeSort([35, 28, 23, 15, 12, 10, 6, 4])); // descending
console.log(mergeSort([12, 15, -23, -4 , 6, 10, -35, 28])); // negative elements
console.log(mergeSort([42, 42, 42, 42, 42])) // duplicate elements
