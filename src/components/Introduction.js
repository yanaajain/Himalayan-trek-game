import React from "react";

const Introduction = ({ onStart }) => (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff",
      padding: 24,
      textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)"
    }}
  >
    <h1
      style={{
        fontSize: "3rem",
        marginBottom: 24,
        fontWeight: "900",
        letterSpacing: "0.1em",
        textAlign: "center",
        maxWidth: 900,
        textTransform: "uppercase",
        userSelect: "none"
      }}
    >
      Himalayan Trek: Journey to Self-Discovery
    </h1>
    <p
      style={{
        maxWidth: 700,
        fontSize: "1.3rem",
        fontWeight: "500",
        textAlign: "center",
        marginBottom: 48,
        lineHeight: 1.6
      }}
    >
      This interactive 2D game combines an engaging trek experience with a reflective personality quiz. Players navigate ten distinct
      scenes inspired by the Hampta Pass trek, facing challenges and making choices that reveal core personality traits: Gold (Planners),
      Blue (Feelers), Green (Thinkers), or Orange (Doers). The game aims to provide an insightful and captivating way for players to
      better understand themselves within a virtual adventure.
    </p>
    <button
      onClick={onStart}
      style={{
        padding: "22px 80px",
        fontSize: "2rem",
        fontWeight: "700",
        borderRadius: 50,
        backgroundColor: "#FFD700",
        border: "none",
        color: "#333",
        boxShadow: "0 5px 15px rgba(255, 215, 0, 0.7)",
        cursor: "pointer",
        userSelect: "none",
        transition: "all 0.3s ease",
        width: "300px",
        maxWidth: "80vw"
      }}
      onMouseEnter={e => e.currentTarget.style.backgroundColor = "#ffea00"}
      onMouseLeave={e => e.currentTarget.style.backgroundColor = "#FFD700"}
    >
      Start Journey
    </button>
  </div>
);

export default Introduction;
