import { useState } from "react";
import Section from "../../components/common/Section";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import ArrayTable from "../../components/common/ArrayTable";
import { insertionSortSteps } from "../../core/algorithms/sorting/insertionSort";

export default function InsertionSort() {
  const [array] = useState([5, 2, 9, 1, 5]);
  const [steps, setSteps] = useState([]);
  const [index, setIndex] = useState(0);

  const start = () => {
    setSteps(insertionSortSteps(array));
    setIndex(0);
  };

  return (
    <div>
      <Section title="Introduction">
        <Card>Insertion Sort builds sorted array step-by-step.</Card>
      </Section>

      <Section title="Purpose">
        <Card>Efficient for small or nearly sorted data.</Card>
      </Section>

      <Section title="Time Complexity">
        <Card>
          Best: O(n) <br />
          Worst: O(n²)
        </Card>
      </Section>

      <Section title="Example">
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