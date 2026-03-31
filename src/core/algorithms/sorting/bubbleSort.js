export function bubbleSort(arr) {
  let a = [...arr];
  let animations = [];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      animations.push({ array: [...a], active: [j, j + 1] });

      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        animations.push({ array: [...a], active: [j, j + 1] });
      }
    }
  }

  return animations;
}

// =========================
// APP.JS
// =========================
import VisualizerContainer from './components/VisualizerContainer';

function App() {
  return <VisualizerContainer />;
}

export default App;