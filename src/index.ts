import { binarySearch } from "./binarySearch";

console.log(
  binarySearch(
    Array.from({ length: 128 }, (_, i) => i + 1),
    63
  )
);
