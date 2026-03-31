import { useState } from "react";
import Section from "../../components/common/Section";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import { linearSearchSteps } from "../../core/algorithms/searching/linearSearch";

export default function LinearSearch() {
  const [array] = useState([4, 2, 7, 1, 9]);
  const [target] = useState(7);
  const [steps, setSteps] = useState([]);
  const [index, setIndex] = useState(0);

  const start = () => {
    setSteps(linearSearchSteps(array, target));
    setIndex(0);
  };

  return (
    <div>
      <h1>Linear Search</h1>

      <Section title="Introduction">
        <Card>
          Linear Search scans each element one by one until the target value
          is found or the array ends. It's the simplest searching algorithm where each element in the array
          is checked sequentially until the target value is found or the end of the array
          is reached.
          <br />
          <br />
          It does not require the array to be sorted, making it flexible but inefficient
          for large datasets. Its performance depends directly on the size of the input,
          making it slower compared to more advanced searching techniques.
        </Card>
      </Section>

      <Section title="Time Complexity">
  <Card>
    <strong>Best Case:</strong> O(1) <br />
    <strong>Average Case:</strong> O(n) <br />
    <strong>Worst Case:</strong> O(n)
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
          &nbsp;&nbsp;if arr[i] == target:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;return i
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
                      className={i === steps[index].current ? "active" : ""}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
            <p>Checking index {steps[index].current}</p>
          </>
        )}
      </Section>
    </div>
  );
}