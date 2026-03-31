export function binarySearchSteps(arr, target) {
  let steps = [];
  let a = [...arr].sort((x, y) => x - y);

  let left = 0;
  let right = a.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    steps.push({
      array: [...a],
      left,
      right,
      mid,
      found: a[mid] === target,
    });

    if (a[mid] === target) break;
    else if (a[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return steps;
}