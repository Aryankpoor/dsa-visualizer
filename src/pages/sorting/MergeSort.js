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
          into halves, sorts them recursively until each subarray contains only one element, and then merges them back together.
          <br />
          <br />
          It guarantees a time complexity of <strong>O(n log n)</strong> in all cases, making it very
efficient for large datasets. However, it requires additional memory for merging,
which makes it less space-efficient compared to some other sorting algorithms.
        </Card>
      </Section>

      <Section title="Time Complexity">
  <Card>
    <strong>Best Case:</strong> O(n log n) <br />
    <strong>Average Case:</strong> O(n log n) <br />
    <strong>Worst Case:</strong> O(n log n)
  </Card>
</Section>

<Section title="Space Complexity">
  <Card>
    <strong>Space Complexity:</strong> O(n)
  </Card>
</Section>

<div className="pseudocode">
  <Section title="Pseudocode">
        <Card>
          divide array into halves<br />
          recursively sort both halves<br />
          merge sorted halves
        </Card>
      </Section>
</div>
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