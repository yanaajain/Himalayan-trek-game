import React, { useState } from "react";
import stops from "./data/stops";
import Map from "./components/Map";
import MCQModal from "./components/MCQModal";
import SummaryPage from "./components/SummaryPage";
import Introduction from "./components/Introduction";

function App() {
  const [started, setStarted] = useState(false);
  const [position, setPosition] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showMCQ, setShowMCQ] = useState(true);

  const handleStart = () => setStarted(true);

  const handleAnswer = (answerObj) => {
    setAnswers([...answers, answerObj]);
    setShowMCQ(false);
    setTimeout(() => {
      setShowMCQ(true);
      setPosition(position + 1);
    }, 700);
  };

  if (!started) {
    return <Introduction onStart={handleStart} />;
  }

  if (position >= stops.length) {
    return <SummaryPage answers={answers} />;
  }

  return (
    <div style={{ fontFamily: "sans-serif", margin: 0 }}>
      <h1 style={{ textAlign: "center" }}>Trekking Game</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          minHeight: 440,
          width: "100%",
          margin: "0 auto",
        }}
      >
        {/* Centered Map */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Map stops={stops} position={position} />
        </div>
        {/* MCQ box pinned to top right */}
        <div
          style={{
            position: "sticky",
            top: 250,
            marginLeft: 64,
            marginRight:20,
            zIndex: 2,
            minWidth: 380,
          }}
        >
          {showMCQ && (
            <MCQModal
              stop={stops[position]}
              onSelect={handleAnswer}
              stopIndex={position}
            />
          )}
        </div>
      </div>
      <div style={{ marginTop: 40, color: "#888", textAlign: "center" }}>
        (Player is the ball. Reach flag to answer!)
      </div>
    </div>
  );
}

export default App;
