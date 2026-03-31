import { useState } from "react";
import Section from "../../components/common/Section";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import ArrayTable from "../../components/common/ArrayTable";
import { quickSortSteps } from "../../core/algorithms/sorting/quickSort";

export default function QuickSort() {
  const [array] = useState([10, 7, 8, 9, 1, 5]);
  const [steps, setSteps] = useState([]);
  const [index, setIndex] = useState(0);

  const start = () => {
    setSteps(quickSortSteps(array));
    setIndex(0);
  };

  return (
    <div>
      <h1>Quick Sort</h1>

      <Section title="Introduction">
        <Card>
          Quick Sort selects a pivot element and partitions the array into
          elements smaller and larger than the pivot, then recursively sorts them.
        </Card>
      </Section>

      <Section title="Time Complexity">
        <Card>
          Best: O(n log n)<br />
          Average: O(n log n)<br />
          Worst: O(n²)
        </Card>
      </Section>

      <Section title="Space Complexity">
        <Card>O(log n)</Card>
      </Section>

      <Section title="Pseudocode">
        <Card>
          choose pivot<br />
          partition array<br />
          recursively sort left and right
        </Card>
      </Section>

      <Section title="Start Example">
        <Button text="Start" onClick={start} />
        <Button text="Next Step" onClick={() => setIndex(index + 1)} />

        {steps.length > 0 && index < steps.length && (
          <>
            <ArrayTable array={steps[index]} />
            <p>Step {index + 1}</p>
          </>
        )}
      </Section>
    </div>
  );
}