import { useState } from "react";
import Section from "../../components/common/Section";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import GraphMatrix from "../../components/common/GraphMatrix";
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
    <div className="container">
      <Section title="Introduction">
        <Card>BFS explores nodes level by level using a queue.</Card>
      </Section>

      <Section title="Time Complexity">
        <Card>O(V + E)</Card>
      </Section>

      <Section title="Graph (Adjacency Matrix)">
        <GraphMatrix graph={graph} />
      </Section>

      <Section title="Example Traversal">
        <Button text="Start" onClick={start} />
        <Button text="Next Step" onClick={() => setIndex(index + 1)} />

        {steps.length > 0 && index < steps.length && (
          <>
            <p>Current Node: {steps[index].current}</p>
            <p>Queue: {steps[index].queue.join(", ")}</p>
            <p>
              Visited:{" "}
              {steps[index].visited
                .map((v, i) => (v ? i : null))
                .filter(v => v !== null)
                .join(", ")}
            </p>
          </>
        )}
      </Section>

    </div>
  );
}