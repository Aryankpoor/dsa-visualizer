export function lcsSteps(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  let dp = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0)
  );

  let steps = [];

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }

      steps.push({
        table: dp.map(row => [...row]),
        i,
        j,
        char1: str1[i - 1],
        char2: str2[j - 1],
      });
    }
  }

  return steps;
}