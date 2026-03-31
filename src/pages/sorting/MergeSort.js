import { useState } from "react";
import Section from "../../components/common/Section";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import ArrayTable from "../../components/common/ArrayTable";
import { mergeSortSteps } from "../../core/algorithms/sorting/mergeSort";

export default function MergeSort() {
  const [array] = useState([38, 27, 43, 3, 9, 82, 10]);
  const [steps, setSteps] = useState([]);
  const [index, setIndex] = useState(0);

  const start = () => {
    setSteps(mergeSortSteps(array));
    setIndex(0);
  };

  return (
    <div>
      <h1>Merge Sort</h1>

      <Section title="Introduction">
        <Card>
          Merge Sort is a divide-and-conquer algorithm that splits the array
          into halves, sorts them recursively, and then merges them back together.
        </Card>
      </Section>

      <Section title="Time Complexity">
        <Card>
          Best: O(n log n)<br />
          Average: O(n log n)<br />
          Worst: O(n log n)
        </Card>
      </Section>

      <Section title="Space Complexity">
        <Card>O(n)</Card>
      </Section>

      <Section title="Pseudocode">
        <Card>
          divide array into halves<br />
          recursively sort both halves<br />
          merge sorted halves
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