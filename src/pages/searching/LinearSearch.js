import { useState } from "react";
import Section from "../../components/common/Section";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import Footer from "../../components/layout/Footer";
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
    <div className="container">
      <Section title="Introduction">
        <Card>Linear Search checks each element sequentially.</Card>
      </Section>

      <Section title="Time Complexity">
        <Card>O(n)</Card>
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

            <p>
              Checking index {steps[index].current}
              {steps[index].found && " → Found!"}
            </p>
          </>
        )}
      </Section>

      <Footer />
    </div>
  );
}