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
          order.After each pass, the largest unsorted element "bubbles up" to its
correct position at the end of the array. This process is repeated until the array becomes sorted.
          <br></br>
          <br></br>
          Although it is easy to understand and implement, Bubble Sort is not efficient
for large datasets due to its quadratic time complexity. However, it is useful
for educational purposes and for understanding the basic concept of sorting
through comparisons and swaps.
        </Card>
      </Section>

      <Section title="Time Complexity">
  <Card>
    <strong>Best Case:</strong> O(n) (Already sorted) <br />
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
          &nbsp;&nbsp;for j from 0 to n-i-1:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;if arr[j] &gt; arr[j+1]:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swap(arr[j], arr[j+1])
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