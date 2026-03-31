export function insertionSortSteps(arr) {
  let steps = [];
  let a = [...arr];

  steps.push([...a]);

  for (let i = 1; i < a.length; i++) {
    let key = a[i];
    let j = i - 1;

    while (j >= 0 && a[j] > key) {
      a[j + 1] = a[j];
      j--;
      steps.push([...a]);
    }

    a[j + 1] = key;
    steps.push([...a]);
  }

  return steps;
}