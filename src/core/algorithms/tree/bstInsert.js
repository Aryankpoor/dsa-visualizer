export function bstInsertSteps(values) {
  let steps = [];

  function insert(root, value) {
    if (!root) {
      return { value, left: null, right: null };
    }

    if (value < root.value) {
      root.left = insert(root.left, value);
    } else {
      root.right = insert(root.right, value);
    }

    return root;
  }

  function buildLevels(root) {
    if (!root) return [];

    let result = [];
    let queue = [{ node: root, side: "root" }];

    while (queue.length) {
      let size = queue.length;

      let left = [];
      let right = [];
      let rootVal = null;

      for (let i = 0; i < size; i++) {
        let { node, side } = queue.shift();

        if (side === "root") rootVal = node.value;
        else if (side === "left") left.push(node.value);
        else right.push(node.value);

        if (node.left) queue.push({ node: node.left, side: "left" });
        if (node.right) queue.push({ node: node.right, side: "right" });
      }

      result.push({ root: rootVal, left, right });
    }

    return result;
  }

  let root = null;

  for (let val of values) {
    if (!root) {
      root = insert(root, val);

      steps.push({
        inserted: val,
        explanation: `${val} added as root`,
        tree: buildLevels(root),
      });
    } else {
      let explanation = "";

      if (val < root.value) {
        explanation = `${val} added to left subtree as it is smaller than root (${root.value})`;
      } else {
        explanation = `${val} added to right subtree as it is greater than root (${root.value})`;
      }

      root = insert(root, val);

      steps.push({
        inserted: val,
        explanation,
        tree: buildLevels(root),
      });
    }
  }

  return steps;
}