export function knapsackSteps(weights, values, capacity) {
  const n = weights.length;

  let dp = Array.from({ length: n + 1 }, () =>
    Array(capacity + 1).fill(0)
  );

  let steps = [];

  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      let include = 0;
      let exclude = dp[i - 1][w];

      if (weights[i - 1] <= w) {
        include =
          values[i - 1] +
          dp[i - 1][w - weights[i - 1]];
      }

      dp[i][w] = Math.max(include, exclude);

      steps.push({
        table: dp.map(row => [...row]),
        i,
        w,
        include,
        exclude,
        chosen: dp[i][w],
        item: i - 1,
      });
    }
  }

  return steps;
}