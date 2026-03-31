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
      <h1>Insertion Sort</h1>

      <Section title="Introduction">
        <Card>
          Insertion Sort builds the sorted array one element at a time by
          inserting each element into its correct position in the already
          sorted portion of the array.
        </Card>
      </Section>

      <Section title="Time Complexity">
        <Card>
          Best: O(n) (Nearly sorted)<br />
          Average: O(n²)<br />
          Worst: O(n²)
        </Card>
      </Section>

      <Section title="Space Complexity">
        <Card>O(1)</Card>
      </Section>

      <Section title="Pseudocode">
        <Card>
          for i from 1 to n:<br />
          &nbsp;&nbsp;key = arr[i]<br />
          &nbsp;&nbsp;j = i - 1<br />
          &nbsp;&nbsp;while j ≥ 0 and arr[j] &gt; key:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;arr[j+1] = arr[j]<br />
          &nbsp;&nbsp;&nbsp;&nbsp;j--<br />
          &nbsp;&nbsp;arr[j+1] = key
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