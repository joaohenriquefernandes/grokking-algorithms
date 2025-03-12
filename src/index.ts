import { binarySearch } from "./binarySearch";
import { insertionSort } from "./insertionSort";

console.log(
  binarySearch(
    Array.from({ length: 128 }, (_, i) => i + 1),
    63
  )
);

console.log(insertionSort([10, 9, 17, 3, 94, 1, 183, 63, 6]));
