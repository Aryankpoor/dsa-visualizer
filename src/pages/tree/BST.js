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
              if root is null:
                return new node

              if value &lt; root:
                insert left
              else:
                insert right
          </div>
        </Card>
      </Section>

      <Section title="Start Example">
        <Button text="Start" onClick={start} />
        <Button text="Next Step" onClick={() => setIndex(index + 1)} />

        {steps.length > 0 && index < steps.length && (
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

            {steps[index].tree.map((level, i) => (
  <div key={i} style={{ marginBottom: "14px" }}>
    <strong>Row {i + 1}:</strong>

    {level.root !== null && (
  <div
    style={{
      marginTop: "6px",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <span className="tree-box">{level.root}</span>
  </div>
)}

    {(level.left.length > 0 || level.right.length > 0) && (
      <div
        style={{
          marginTop: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div>
          {level.left.map((val, idx) => (
            <span key={idx} className="tree-box">
              {val}
            </span>
          ))}
        </div>

        <div className="tree-separator"></div>

        <div>
          {level.right.map((val, idx) => (
            <span key={idx} className="tree-box">
              {val}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>
))}
          </Card>
        )}
      </Section>
    </div>
  );
}