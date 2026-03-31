import { useState } from "react";
import Section from "../../components/common/Section";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import ArrayTable from "../../components/common/ArrayTable";
import Footer from "../../components/layout/Footer";
import { bubbleSortSteps } from "../../core/algorithms/sorting/bubbleSort";

export default function BubbleSort() {
  const [array] = useState([5, 3, 8, 4, 2]);
  const [steps, setSteps] = useState([]);
  const [index, setIndex] = useState(0);

  const start = () => {
    const s = bubbleSortSteps(array);
    setSteps(s);
    setIndex(0);
  };

  const next = () => {
    if (index < steps.length - 1) setIndex(index + 1);
  };

  return (
    <div>
      <Section title="Introduction">
        <Card>Bubble Sort is a simple comparison-based algorithm.</Card>
      </Section>

      <Section title="Purpose">
        <Card>Used for teaching and small datasets.</Card>
      </Section>

      <Section title="Time Complexity">
        <Card>
          Best: O(n) <br />
          Average: O(n²) <br />
          Worst: O(n²)
        </Card>
      </Section>

      <Section title="Example">
        <Button text="Start" onClick={start} />
        <Button text="Next Step" onClick={next} />

        {steps.length > 0 && (
          <div style={{ marginTop: "20px" }}>
            <ArrayTable array={steps[index]} />
            <p>Step {index + 1}</p>
          </div>
        )}
      </Section>

      <Footer />
    </div>
  );
}