export function bfsSteps(graph, start) {
  let visited = new Array(graph.length).fill(false);
  let queue = [start];
  let steps = [];

  visited[start] = true;

  while (queue.length > 0) {
    let node = queue.shift();

    steps.push({
      current: node,
      visited: [...visited],
      queue: [...queue],
    });

    for (let i = 0; i < graph.length; i++) {
      if (graph[node][i] === 1 && !visited[i]) {
        visited[i] = true;
        queue.push(i);
      }
    }
  }

  return steps;
}