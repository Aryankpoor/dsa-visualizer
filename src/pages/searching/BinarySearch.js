import { useState } from "react";
import Section from "../../components/common/Section";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import Footer from "../../components/layout/Footer";
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
    <div className="container">
      <Section title="Introduction">
        <Card>Binary Search works on sorted arrays.</Card>
      </Section>

      <Section title="Time Complexity">
        <Card>O(log n)</Card>
      </Section>

      <Section title="Example">
        <p>Target: {target}</p>

        <Button text="Start" onClick={start} />
        <Button text="Next Step" onClick={() => setIndex(index + 1)} />

        {steps.length > 0 && index < steps.length && (
          <>
            <table>
              <tbody>
                <tr>
                  {steps[index].array.map((val, i) => {
                    let cls = "";
                    if (i === steps[index].mid) cls = "active";
                    return <td key={i} className={cls}>{val}</td>;
                  })}
                </tr>
              </tbody>
            </table>

            <p>
              Left: {steps[index].left}, Mid: {steps[index].mid}, Right: {steps[index].right}
              {steps[index].found && " → Found!"}
            </p>
          </>
        )}
      </Section>

      <Footer />
    </div>
  );
}