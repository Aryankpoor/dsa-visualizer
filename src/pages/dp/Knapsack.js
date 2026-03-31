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
    <div className="container">
      <Section title="Introduction">
        <Card>
          0/1 Knapsack determines the maximum value achievable within a weight limit.
        </Card>
      </Section>

      <Section title="Purpose">
        <Card>
          Used in resource allocation, budgeting, and optimization problems.
        </Card>
      </Section>

      <Section title="Time Complexity">
        <Card>O(n × W)</Card>
      </Section>

      <Section title="Example">
        <p>Weights: {weights.join(", ")}</p>
        <p>Values: {values.join(", ")}</p>
        <p>Capacity: {capacity}</p>

        <Button text="Start" onClick={start} />
        <Button text="Next Step" onClick={() => setIndex(index + 1)} />

        {steps.length > 0 && index < steps.length && (
          <>
            <DPTable table={steps[index].table} current={{ i: steps[index].i, j: steps[index].w }} />

            <p>
              Item: {steps[index].item} | Capacity: {steps[index].w}
            </p>

            <p>
              Include: {steps[index].include} | Exclude: {steps[index].exclude}
            </p>

            <p>
              Chosen Value: <strong>{steps[index].chosen}</strong>
            </p>

            <p>Step {index + 1}</p>
          </>
        )}
      </Section>

    </div>
  );
}