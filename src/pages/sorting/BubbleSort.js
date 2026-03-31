import { useState } from "react";
import Section from "../../components/common/Section";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import ArrayTable from "../../components/common/ArrayTable";
import { bubbleSortSteps } from "../../core/algorithms/sorting/bubbleSort";

export default function BubbleSort() {
  const [array] = useState([5, 3, 8, 4, 2]);
  const [steps, setSteps] = useState([]);
  const [index, setIndex] = useState(0);

  const start = () => {
    setSteps(bubbleSortSteps(array));
    setIndex(0);
  };

  return (
    <div>
      <h1>Bubble Sort</h1>

      <Section title="Introduction">
        <Card>
          Bubble Sort is a simple comparison-based sorting algorithm where
          adjacent elements are compared and swapped if they are in the wrong
          order. This process is repeated until the array becomes sorted.
        </Card>
      </Section>

      <Section title="Time Complexity">
        <Card>
          Best Case: O(n) (Already sorted)<br />
          Average Case: O(n²)<br />
          Worst Case: O(n²)
        </Card>
      </Section>

      <Section title="Space Complexity">
        <Card>O(1)</Card>
      </Section>

      <Section title="Pseudocode">
        <Card>
          for i from 0 to n:<br />
          &nbsp;&nbsp;for j from 0 to n-i-1:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;if arr[j] &gt; arr[j+1]:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swap(arr[j], arr[j+1])
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