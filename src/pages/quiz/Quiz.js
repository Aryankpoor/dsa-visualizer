import { useState } from "react";
import Section from "../../components/common/Section";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

const questions = [
  {
    question: "Which algorithm has worst case O(n²)?",
    options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Binary Search"],
    answer: "Bubble Sort",
  },
  {
    question: "Which algorithm requires a sorted array?",
    options: ["Linear Search", "Binary Search", "DFS", "BFS"],
    answer: "Binary Search",
  },
  {
    question: "What is the best case of Insertion Sort?",
    options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
    answer: "O(n)",
  },
  {
    question: "Which algorithm uses divide and conquer?",
    options: ["Bubble Sort", "Merge Sort", "Linear Search", "BFS"],
    answer: "Merge Sort",
  },
  {
    question: "Which data structure is used in BFS?",
    options: ["Stack", "Queue", "Heap", "Tree"],
    answer: "Queue",
  },
  {
    question: "Which algorithm explores deeply first?",
    options: ["BFS", "DFS", "Binary Search", "Knapsack"],
    answer: "DFS",
  },
  {
    question: "What is time complexity of Binary Search?",
    options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
    answer: "O(log n)",
  },
  {
    question: "Which DP problem compares two strings?",
    options: ["Knapsack", "LCS", "BFS", "Quick Sort"],
    answer: "LCS",
  },
  {
    question: "What does Knapsack maximize?",
    options: ["Weight", "Value", "Size", "Speed"],
    answer: "Value",
  },
  {
    question: "Which sort is fastest on average?",
    options: ["Bubble", "Selection", "Quick Sort", "Linear"],
    answer: "Quick Sort",
  },
  {
    question: "Which algorithm has O(n log n) worst case?",
    options: ["Merge Sort", "Bubble Sort", "Insertion Sort", "Linear Search"],
    answer: "Merge Sort",
  },
  {
    question: "Which search checks every element?",
    options: ["Binary", "Linear", "DFS", "BFS"],
    answer: "Linear",
  },
  {
    question: "Which uses recursion heavily?",
    options: ["Quick Sort", "Linear Search", "BFS", "Binary Search"],
    answer: "Quick Sort",
  },
  {
    question: "Which is NOT a graph algorithm?",
    options: ["DFS", "BFS", "Merge Sort", "None"],
    answer: "Merge Sort",
  },
  {
    question: "Which algorithm swaps adjacent elements?",
    options: ["Selection", "Bubble", "Merge", "Binary"],
    answer: "Bubble",
  },
];

export default function Quiz() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option) => {
    setSelected(option);

    if (option === questions[current].answer) {
      setScore(score + 1);
    }
  };

  const next = () => {
    setSelected(null);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div>
      <h1>Quiz</h1>

      {!started && (
        <>
          <Section title="About This Quiz">
            <Card>
              This quiz tests your understanding of Data Structures and Algorithms
              covered in this platform. It includes questions from sorting,
              searching, dynamic programming, and graph algorithms.
            </Card>
          </Section>

          <Section title="Quiz Details">
            <Card>
              <strong>Total Questions:</strong> 15 <br />
              <strong>Topics Covered:</strong> Sorting, Searching, DP, Graph <br />
              <strong>Format:</strong> Multiple Choice Questions <br />
              <strong>Goal:</strong> Test conceptual understanding
            </Card>
          </Section>

          <Button text="Start Quiz" onClick={() => setStarted(true)} />
        </>
      )}

      {started && !finished && (
        <>
          <Section title={`Question ${current + 1}`}>
            <Card>
              <p>{questions[current].question}</p>

              {questions[current].options.map((opt, i) => (
                <div key={i}>
                  <button
                    onClick={() => handleAnswer(opt)}
                    style={{
                      margin: "5px",
                      background:
                        selected === opt ? "var(--accent-blue)" : "",
                      color: selected === opt ? "white" : "",
                    }}
                  >
                    {opt}
                  </button>
                </div>
              ))}
            </Card>
          </Section>

          <Button text="Next" onClick={next} />
        </>
      )}

      {finished && (
        <Card>
          <h2>Your Score: {score} / {questions.length}</h2>
          <Button text="Restart" onClick={() => window.location.reload()} />
        </Card>
      )}
    </div>
  );
}