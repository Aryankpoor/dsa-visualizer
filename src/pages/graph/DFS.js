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
          Depth First Search (DFS) is a graph traversal algorithm that explores as far as
possible along a branch before backtracking. It dives deep into the graph before
visiting neighboring nodes.

          DFS can be implemented using recursion or a stack. It is useful in applications
such as cycle detection, topological sorting, and solving puzzles like mazes.
        </Card>
      </Section>

      <Section title="Time Complexity">
  <Card>
    <strong>Time Complexity:</strong> O(V + E)
  </Card>
</Section>

<Section title="Space Complexity">
  <Card>
    <strong>Space Complexity:</strong> O(V)
  </Card>
</Section>
<div className="pseudocode">
  <Section title="Pseudocode">
        <Card>
          DFS(node):<br />
          &nbsp;&nbsp;mark visited<br />
          &nbsp;&nbsp;for each neighbor:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;if not visited → DFS(neighbor)
        </Card>
      </Section>
</div>
      

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