export function binarySearch(list: number[], item: number) {
  let lowest = 0;
  let highest = list.length - 1;
  while (lowest <= highest) {
    const mid = Math.floor((lowest + highest) / 2);
    const shot = list[mid];
    if (item === shot) return mid;
    if (item < shot) highest = mid - 1;
    else lowest = mid + 1;
  }
  return null;
}
