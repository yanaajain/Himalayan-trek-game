import React from "react";

const MCQModal = ({ stop, onSelect, stopIndex }) => {
  return (
    <div style={{
      background: "#fffbe8",
      border: "2px solid #ffe066",
      borderRadius: 12,
      width: 350,
      margin: "auto",
      padding: 10,
      boxShadow: "0 4px 16px #0002"
    }}>
      <strong>Stop {stopIndex + 1}: {stop.name}</strong>
      <div style={{ marginTop: 12, marginBottom: 18, fontWeight: "bold" }}>
        {stop.question}
      </div>
      {stop.options.map(opt => (
  <button
    key={opt.text}
    onClick={() => onSelect({ color: opt.color, text: opt.text })}
    style={{
      display: "block",
      width: "100%",
      margin: "8px 0",
      padding: "8px",
      borderRadius: 4,
      background: "#eee",
      border: "1px solid #ccc",
      cursor: "pointer"
    }}
  >
    {opt.text}
  </button>
))}
    </div>
  );
};

export default MCQModal;
