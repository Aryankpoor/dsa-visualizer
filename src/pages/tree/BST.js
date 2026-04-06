import { useState } from "react";
import Section from "../../components/common/Section";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import { bstInsertSteps } from "../../core/algorithms/tree/bstInsert";

export default function BST() {
  const [array] = useState([10, 5, 15, 3, 7, 12, 18, 1, 4, 6, 8]);
  const [steps, setSteps] = useState([]);
  const [index, setIndex] = useState(0);

  const start = () => {
    setSteps(bstInsertSteps(array));
    setIndex(0);
  };

  const nextStep = () => {
    setIndex((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const renderTree = (tree) => {
    return tree.map((row, i) => (
      <div
        key={i}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginBottom: "8px",
        }}
      >
        {row.map((val, idx) => (
          <span key={idx} className="tree-box">
            {val}
          </span>
        ))}
      </div>
    ));
  };

  return (
    <div>
      <h1>Binary Search Tree (Insertion)</h1>

      <Section title="Introduction">
        <Card>
          A Binary Search Tree (BST) is a tree where for each node, values in the
          left subtree are smaller and values in the right subtree are larger.
        </Card>
      </Section>

      <Section title="Time Complexity">
        <Card>
          <strong>Best Case:</strong> O(log n) <br />
          <strong>Average Case:</strong> O(log n) <br />
          <strong>Worst Case:</strong> O(n)
        </Card>
      </Section>

      <Section title="Space Complexity">
        <Card>
          <strong>Space Complexity:</strong> O(n)
        </Card>
      </Section>

      <Section title="Pseudocode">
        <Card>
          <div className="pseudocode">
            insert(root, value):
            <br />
            &nbsp;&nbsp;if root is null:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return new node
            <br />
            <br />
            &nbsp;&nbsp;if value &lt; root:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;insert left
            <br />
            &nbsp;&nbsp;else:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;insert right
          </div>
        </Card>
      </Section>

      <Section title="Start Example">
        <Button text="Start" onClick={start} />
        <Button text="Next Step" onClick={nextStep} />

        {steps.length > 0 && (
          <Card>
            <h3>Step {index + 1}</h3>

            <p>
              <strong>Inserted:</strong> {steps[index].inserted}
            </p>

            <p>
              <strong>Explanation:</strong> {steps[index].explanation}
            </p>

            <hr />

            <h4>Tree:</h4>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <span className="tree-box">{steps[index].root}</span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "flex-start",
              }}
            >
              <div>
                <h4 style={{ textAlign: "center" }}>Left Subtree</h4>
                {steps[index].leftSubtree.length > 0
                  ? renderTree(steps[index].leftSubtree)
                  : <p style={{ textAlign: "center" }}>Empty</p>}
              </div>

              <div>
                <h4 style={{ textAlign: "center" }}>Right Subtree</h4>
                {steps[index].rightSubtree.length > 0
                  ? renderTree(steps[index].rightSubtree)
                  : <p style={{ textAlign: "center" }}>Empty</p>}
              </div>
            </div>
          </Card>
        )}
      </Section>
    </div>
  );
}