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
          Quick Sort is a highly efficient divide-and-conquer sorting algorithm that works
          by selecting a pivot element and partitioning the array into two parts:
          elements smaller than the pivot and elements greater than the pivot.
          It selects a pivot element and partitions the array into
          elements smaller and larger than the pivot, then recursively sorts them.
          <br />
          <br />
          It then recursively sorts the partitions. Quick Sort is widely used in practice
          due to its excellent average-case performance, although its worst-case time
          complexity can degrade to <strong>O(n²)</strong> if the pivot is poorly chosen.
        </Card>
      </Section>

      <Section title="Time Complexity">
  <Card>
    <strong>Best Case:</strong> O(n log n) <br />
    <strong>Average Case:</strong> O(n log n) <br />
    <strong>Worst Case:</strong> O(n²) (Poor pivot selection)
  </Card>
</Section>

<Section title="Space Complexity">
  <Card>
    <strong>Space Complexity:</strong> O(log n)
  </Card>
</Section>

<div className="pseudocode">
  <Section title="Pseudocode">
        <Card>
          choose pivot<br />
          partition array<br />
          recursively sort left and right
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