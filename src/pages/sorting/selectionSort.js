import { useState } from "react";
import Section from "../../components/common/Section";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import ArrayTable from "../../components/common/ArrayTable";
import Footer from "../../components/layout/Footer";
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
      <Section title="Introduction">
        <Card>Selection Sort repeatedly selects the minimum element.</Card>
      </Section>

      <Section title="Purpose">
        <Card>Simple but inefficient sorting algorithm.</Card>
      </Section>

      <Section title="Time Complexity">
        <Card>O(n²) in all cases</Card>
      </Section>

      <Section title="Example">
        <Button text="Start" onClick={start} />
        <Button text="Next Step" onClick={() => setIndex(index + 1)} />

        {steps.length > 0 && index < steps.length && (
          <>
            <ArrayTable array={steps[index]} />
            <p>Step {index + 1}</p>
          </>
        )}
      </Section>

      <Footer />
    </div>
  );
}