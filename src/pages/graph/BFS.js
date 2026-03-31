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
          BFS explores a graph level by level using a queue, visiting all
          neighbors before moving deeper.
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
          enqueue start<br />
          while queue not empty:<br />
          &nbsp;&nbsp;node = dequeue<br />
          &nbsp;&nbsp;visit node<br />
          &nbsp;&nbsp;enqueue neighbors
        </Card>
      </Section>

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