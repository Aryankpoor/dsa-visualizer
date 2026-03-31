export function selectionSortSteps(arr) {
  let steps = [];
  let a = [...arr];

  steps.push([...a]);

  for (let i = 0; i < a.length; i++) {
    let min = i;

    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < a[min]) min = j;
    }

    if (min !== i) {
      [a[i], a[min]] = [a[min], a[i]];
      steps.push([...a]);
    }
  }

  return steps;
}