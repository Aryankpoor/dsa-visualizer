export function bstInsertSteps(values) {
  let steps = [];

  function insert(root, value, logs) {
    if (!root) {
      logs.push(`${value} inserted here`);
      return { value, left: null, right: null };
    }

    if (value < root.value) {
      logs.push(`${value} < ${root.value} → go left`);
      root.left = insert(root.left, value, logs);
    } else {
      logs.push(`${value} > ${root.value} → go right`);
      root.right = insert(root.right, value, logs);
    }

    return root;
  }

  function buildLevels(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length) {
      let size = queue.length;
      let row = [];

      for (let i = 0; i < size; i++) {
        let node = queue.shift();
        row.push(node.value);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }

      result.push(row);
    }

    return result;
  }

  let root = null;

  for (let val of values) {
    let logs = [];

    root = insert(root, val, logs);

    steps.push({
      inserted: val,
      explanation: logs.join(" → "),
      root: root ? root.value : null,
      leftSubtree: buildLevels(root?.left),
      rightSubtree: buildLevels(root?.right),
    });
  }

  return steps;
}