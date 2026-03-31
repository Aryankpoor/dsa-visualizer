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
    setSteps(lcsSteps(str1, str2));
    setIndex(0);
  };

  return (
    <div>
      <h1>Longest Common Subsequence (LCS)</h1>

      <Section title="Introduction">
        <Card>
          The Longest Common Subsequence problem finds the longest sequence
          that appears in both strings in the same order, but not necessarily
          contiguously.
          <br />
          <br />
          It is a classic dynamic programming problem where a table is used to store
          intermediate results, avoiding repeated calculations. LCS is widely used in
          applications like DNA sequence analysis, text comparison, and version control systems.
        </Card>
      </Section>

      <Section title="Time Complexity">
  <Card>
    <strong>Best Case:</strong> O(m × n) <br />
    <strong>Average Case:</strong> O(m × n) <br />
    <strong>Worst Case:</strong> O(m × n)
  </Card>
</Section>

<Section title="Space Complexity">
  <Card>
    <strong>Space Complexity:</strong> O(m × n)
  </Card>
</Section>
<div className="pseudocode">
  <Section title="Pseudocode">
        <Card>
          for i from 1 to m:<br />
          &nbsp;&nbsp;for j from 1 to n:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;if str1[i-1] == str2[j-1]:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dp[i][j] = 1 + dp[i-1][j-1]<br />
          &nbsp;&nbsp;&nbsp;&nbsp;else:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dp[i][j] = max(dp[i-1][j], dp[i][j-1])
        </Card>
      </Section>
</div>
      

      <Section title="Start Example">
        <p>String 1: {str1}</p>
        <p>String 2: {str2}</p>

        <Button text="Start" onClick={start} />
        <Button text="Next Step" onClick={() => setIndex(index + 1)} />

        {steps.length > 0 && index < steps.length && (
          <>
            <DPTable table={steps[index].table} current={steps[index]} />
            <p>Comparing: {steps[index].char1} vs {steps[index].char2}</p>
          </>
        )}
      </Section>
    </div>
  );
}