import { useState } from "react";
import Section from "../../components/common/Section";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import ArrayTable from "../../components/common/ArrayTable";
import { selectionSortSteps } from "../../core/algorithms/sorting/selectionSort";

export default function SelectionSort() {
  const [array] = useState([64, 25, 12, 22, 11]);
  const [steps, setSteps] = useState([]);
  const [index, setIndex] = useState(0);

  const start = () => {
    setSteps(selectionSortSteps(array));
    setIndex(0);
  };

  return (
    <div>
      <h1>Selection Sort</h1>

      <Section title="Introduction">
        <Card>
          Selection Sort repeatedly finds the minimum element from the
          unsorted portion and places it at the beginning. It works by dividing the array into two parts: a sorted portion
and an unsorted portion. It repeatedly selects the smallest element from the
unsorted part and moves it to the beginning of the sorted portion.
          <br></br>
          <br></br>
          Unlike Bubble Sort, it minimizes the number of swaps, but still performs a large
number of comparisons, making it inefficient for large datasets. It is mainly
used for teaching sorting concepts and understanding in-place algorithms.
        </Card>
      </Section>

      <Section title="Time Complexity">
  <Card>
    <strong>Best Case:</strong> O(n²) <br />
    <strong>Average Case:</strong> O(n²) <br />
    <strong>Worst Case:</strong> O(n²)
  </Card>
</Section>

<Section title="Space Complexity">
  <Card>
    <strong>Space Complexity:</strong> O(1)
  </Card>
</Section>

      <div className="pseudocode">
        <Section title="Pseudocode">
        <Card>
          for i from 0 to n:<br />
          &nbsp;&nbsp;find minimum from i to n <br />
          &nbsp;&nbsp;swap with i
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