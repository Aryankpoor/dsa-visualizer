import { useState } from "react";
import Section from "../../components/common/Section";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import { bfsSteps } from "../../core/algorithms/graph/bfs";

export default function BFS() {
  const [graph] = useState([
    [0, 1, 1, 0],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0],
  ]);

  const [steps, setSteps] = useState([]);
  const [index, setIndex] = useState(0);

  const start = () => {
    setSteps(bfsSteps(graph, 0));
    setIndex(0);
  };

  return (
    <div>
      <h1>Breadth First Search (BFS)</h1>

      <Section title="Introduction">
        <Card>
          Breadth First Search (BFS) is a graph traversal algorithm that explores nodes
level by level. Starting from a source node, it visits all its immediate neighbors
before moving on to nodes at the next level. It explores a graph level by level using a queue, visiting all
          neighbors before moving deeper. 
          <br />
          <br />
          Breadth First Search (BFS) is a graph traversal algorithm that explores nodes
level by level. Starting from a source node, it visits all its immediate neighbors
before moving on to nodes at the next level.
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
          enqueue start<br />
          while queue not empty:<br />
          &nbsp;&nbsp;node = dequeue<br />
          &nbsp;&nbsp;visit node<br />
          &nbsp;&nbsp;enqueue neighbors
        </Card>
      </Section>
</div>
      

      <Section title="Start Example">
        <Button text="Start" onClick={start} />
        <Button text="Next Step" onClick={() => setIndex(index + 1)} />

        {steps.length > 0 && index < steps.length && (
          <>
            <p>Current Node: {steps[index].current}</p>
            <p>Queue: {steps[index].queue.join(", ")}</p>
          </>
        )}
      </Section>
    </div>
  );
}