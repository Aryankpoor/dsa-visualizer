export function linearSearch(arr, target) {
  let steps = [];

  for (let i = 0; i < arr.length; i++) {
    steps.push({ type: "check", index: i });

    if (arr[i] === target) {
      steps.push({ type: "found", index: i });
      break;
    }
  }

  return steps;
}