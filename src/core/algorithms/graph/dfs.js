export function dfsSteps(graph, start) {
  let visited = new Array(graph.length).fill(false);
  let steps = [];

  function dfs(node) {
    visited[node] = true;

    steps.push({
      current: node,
      visited: [...visited],
    });

    for (let i = 0; i < graph.length; i++) {
      if (graph[node][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  }

  dfs(start);
  return steps;
}