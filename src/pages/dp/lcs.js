import { useState } from "react";
import Section from "../../components/common/Section";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import DPTable from "../../components/common/DPTable";
import { lcsSteps } from "../../core/algorithms/dp/lcs";

export default function LCS() {
  const [str1] = useState("ABCBDAB");
  const [str2] = useState("BDCAB");

  const [steps, setSteps] = useState([]);
  const [index, setIndex] = useState(0);

  const start = () => {
    const s = lcsSteps(str1, str2);
    setSteps(s);
    setIndex(0);
  };

  return (
    <div className="container">
      <Section title="Introduction">
        <Card>
          Longest Common Subsequence finds the longest sequence present in both strings.
        </Card>
      </Section>

      <Section title="Purpose">
        <Card>
          Used in DNA matching, text comparison, and diff tools.
        </Card>
      </Section>

      <Section title="Time Complexity">
        <Card>O(m × n)</Card>
      </Section>

      <Section title="Example">
        <p>String 1: {str1}</p>
        <p>String 2: {str2}</p>

        <Button text="Start" onClick={start} />
        <Button text="Next Step" onClick={() => setIndex(index + 1)} />

        {steps.length > 0 && index < steps.length && (
          <>
            <DPTable table={steps[index].table} current={steps[index]} />

            <p>
              Comparing: {steps[index].char1} vs {steps[index].char2}
            </p>

            <p>Step {index + 1}</p>
          </>
        )}
      </Section>
    </div>
  );
}