export function linearSearchSteps(arr, target) {
  let steps = [];

  for (let i = 0; i < arr.length; i++) {
    steps.push({
      array: [...arr],
      current: i,
      found: arr[i] === target,
    });

    if (arr[i] === target) break;
  }

  return steps;
}