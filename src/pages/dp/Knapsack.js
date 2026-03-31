import { useState } from "react";
import Section from "../../components/common/Section";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import DPTable from "../../components/common/DPTable";
import { knapsackSteps } from "../../core/algorithms/dp/knapsack";

export default function Knapsack() {
  const [weights] = useState([1, 3, 4, 5]);
  const [values] = useState([1, 4, 5, 7]);
  const [capacity] = useState(7);

  const [steps, setSteps] = useState([]);
  const [index, setIndex] = useState(0);

  const start = () => {
    setSteps(knapsackSteps(weights, values, capacity));
    setIndex(0);
  };

  return (
    <div>
      <h1>0/1 Knapsack</h1>

      <Section title="Introduction">
        <Card>
          The 0/1 Knapsack problem determines the maximum value that can be
          obtained within a given weight capacity by either including or
          excluding items. Each item can either be included or excluded <strong>(hence 0/1)</strong>.
        </Card>
      </Section>

      <Section title="Time Complexity">
  <Card>
    <strong>Best Case:</strong> O(n × W) <br />
    <strong>Average Case:</strong> O(n × W) <br />
    <strong>Worst Case:</strong> O(n × W)
  </Card>
</Section>

<Section title="Space Complexity">
  <Card>
    <strong>Space Complexity:</strong> O(n × W)
  </Card>
</Section>

<div className="pseudocode">
  <Section title="Pseudocode">
        <Card>
          for i from 1 to n:<br />
          &nbsp;&nbsp;for w from 0 to capacity:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;if weight[i] ≤ w:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dp[i][w] = max(include, exclude)<br />
          &nbsp;&nbsp;&nbsp;&nbsp;else:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dp[i][w] = exclude
        </Card>
      </Section>
</div>

      

      <Section title="Start Example">
        <p>Weights: {weights.join(", ")}</p>
        <p>Values: {values.join(", ")}</p>
        <p>Capacity: {capacity}</p>

        <Button text="Start" onClick={start} />
        <Button text="Next Step" onClick={() => setIndex(index + 1)} />

        {steps.length > 0 && index < steps.length && (
          <>
            <DPTable table={steps[index].table} current={{ i: steps[index].i, j: steps[index].w }} />
            <p>Chosen Value: {steps[index].chosen}</p>
          </>
        )}
      </Section>
    </div>
  );
}