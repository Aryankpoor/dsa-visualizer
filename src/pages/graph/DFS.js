import { useState } from "react";
import Section from "../../components/common/Section";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import { dfsSteps } from "../../core/algorithms/graph/dfs";

export default function DFS() {
  const [graph] = useState([
    [0, 1, 1, 0],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0],
  ]);

  const [steps, setSteps] = useState([]);
  const [index, setIndex] = useState(0);

  const start = () => {
    setSteps(dfsSteps(graph, 0));
    setIndex(0);
  };

  return (
    <div>
      <h1>Depth First Search (DFS)</h1>

      <Section title="Introduction">
        <Card>
          DFS explores as far as possible along a branch before backtracking.
        </Card>
      </Section>

      <Section title="Time Complexity">
        <Card>O(V + E)</Card>
      </Section>

      <Section title="Space Complexity">
        <Card>O(V)</Card>
      </Section>

      <Section title="Pseudocode">
        <Card>
          DFS(node):<br />
          &nbsp;&nbsp;mark visited<br />
          &nbsp;&nbsp;for each neighbor:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;if not visited → DFS(neighbor)
        </Card>
      </Section>

      <Section title="Start Example">
        <Button text="Start" onClick={start} />
        <Button text="Next Step" onClick={() => setIndex(index + 1)} />

        {steps.length > 0 && index < steps.length && (
          <>
            <p>Current Node: {steps[index].current}</p>
          </>
        )}
      </Section>
    </div>
  );
}