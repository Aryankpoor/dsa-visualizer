import { useState } from "react";
import Section from "../../components/common/Section";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import { binarySearchSteps } from "../../core/algorithms/searching/BinarySearch";

export default function BinarySearch() {
  const [array] = useState([8, 3, 5, 1, 9, 2]);
  const [target] = useState(5);
  const [steps, setSteps] = useState([]);
  const [index, setIndex] = useState(0);

  const start = () => {
    setSteps(binarySearchSteps(array, target));
    setIndex(0);
  };

  return (
    <div>
      <h1>Binary Search</h1>

      <Section title="Introduction">
        <Card>
          Binary Search is an efficient searching algorithm that works on
          sorted arrays. It repeatedly divides the search space into half
          comparing the target
          value with the middle element to decide which half to continue searching in until the target element is found.
          <br />
          <br />
          This significantly reduces the number of comparisons, resulting in a logarithmic
          time complexity. However, it requires the data to be sorted beforehand, which is
          a key limitation.
        </Card>
      </Section>

      <Section title="Time Complexity">
  <Card>
    <strong>Best Case:</strong> O(1) <br />
    <strong>Average Case:</strong> O(log n) <br />
    <strong>Worst Case:</strong> O(log n)
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
          sort array <br />
          set left = 0, right = n-1 <br />
          while left ≤ right:<br />
          &nbsp;&nbsp;mid = (left + right) / 2 <br />
          &nbsp;&nbsp;if arr[mid] == target → found <br />
          &nbsp;&nbsp;if arr[mid] &lt; target → left = mid + 1 <br />
          &nbsp;&nbsp;else → right = mid - 1
        </Card>
      </Section>
</div>
      

      <Section title="Start Example">
        <p>Target: {target}</p>

        <Button text="Start" onClick={start} />
        <Button text="Next Step" onClick={() => setIndex(index + 1)} />

        {steps.length > 0 && index < steps.length && (
          <>
            <table>
              <tbody>
                <tr>
                  {steps[index].array.map((val, i) => (
                    <td
                      key={i}
                      className={i === steps[index].mid ? "active" : ""}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>

            <p>
              Left: {steps[index].left}, Mid: {steps[index].mid}, Right: {steps[index].right}
            </p>
          </>
        )}
      </Section>
    </div>
  );
}