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
          unsorted portion and places it at the beginning.
        </Card>
      </Section>

      <Section title="Time Complexity">
        <Card>
          Best: O(n²)<br />
          Average: O(n²)<br />
          Worst: O(n²)
        </Card>
      </Section>

      <Section title="Space Complexity">
        <Card>O(1)</Card>
      </Section>

      <Section title="Pseudocode">
        <Card>
          for i from 0 to n:<br />
          &nbsp;&nbsp;find minimum from i to n <br />
          &nbsp;&nbsp;swap with i
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