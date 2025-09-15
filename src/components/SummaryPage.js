import React from "react";

const colorSummaries = {
  Gold: "You are a GOLD - PLANNER!",
  Blue: "You are a BLUE - FEELER!",
  Green: "You are a GREEN - THINKER!",
  Orange: "You are an ORANGE - DOER!"
};

const colorProfiles = {
  Gold: {
    Traits: "Organized, reliable, detail-oriented, disciplined, practical. Natural leaders. Work well with structured processes, deadlines, and clear instructions.",
    Strengths: "Organization, Planning, Reliability.",
    Needs: "Structure, Planning, Gradual introduction to change, Control.",
    Values: "Structure, Loyalty, Honesty.",
    Joys: "Structure, Planning, Task accomplishment (check lists).",
    Work: "Excel in roles requiring attention to detail, accuracy, and consistency. Reliable team members."
  },
  Blue: {
    Traits: "Empathetic, sensitive, nurturing, and harmonious. Enjoy connecting with others and building relationships.",
    Strengths: "Compassion, Listening, Teamwork.",
    Needs: "Connection, Understanding, Support, Appreciation.",
    Values: "Harmony, Kindness, Relationships.",
    Joys: "Helping others, Collaboration, Emotional Growth.",
    Work: "Thrive in environments that foster teamwork and caring. Supportive colleagues."
  },
  Green: {
    Traits: "Logical, analytical, thoughtful, curious. Enjoy problem-solving and exploring new ideas.",
    Strengths: "Critical Thinking, Analysis, Insight.",
    Needs: "Independence, Clarity, Information, Intellectual challenge.",
    Values: "Knowledge, Rationality, Innovation.",
    Joys: "Learning, Solving puzzles, Strategic planning.",
    Work: "Excel at research, data analysis, and jobs needing objective decision-making."
  },
  Orange: {
    Traits: "Energetic, spontaneous, adventurous, bold. Love excitement and new experiences.",
    Strengths: "Adaptability, Enthusiasm, Action.",
    Needs: "Challenges, Independence, Variety, Flexibility.",
    Values: "Freedom, Fun, Achievement.",
    Joys: "Adventure, Competition, New experiences.",
    Work: "Excel in fast-paced roles, adaptable, love dynamic tasks and projects."
  }
};
const bgColors = {
  Gold: "#FFD700",
  Blue: "#2980b9",
  Green: "#27ae60",
  Orange: "#FFA500",
  Balanced: "#f7f8fa" // fallback color
};
function getDominantColor(answers) {
  const counts = {};
  answers.forEach(ans => {
    counts[ans.color] = (counts[ans.color] || 0) + 1;
  });
  let maxCount = 0;
  let dominantColor = "";
  for (const color in counts) {
    if (counts[color] > maxCount) {
      maxCount = counts[color];
      dominantColor = color;
    }
  }
  return dominantColor;
}

const SummaryPage = ({ answers }) => {
  const dominantColor = getDominantColor(answers) || "Balanced";
  const summary = colorSummaries[dominantColor] || "Balanced Trekker";
  const profile = colorProfiles[dominantColor];
   const backgroundColor = bgColors[dominantColor] || bgColors.Balanced;

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        minHeight: "100vh",
        padding: "40px 24px",
        color: dominantColor === "Gold" || dominantColor === "Orange" ? "#222" : "#fff",
        transition: "background-color 0.5s ease",
      }}
    >
    
      <h2 style={{ textAlign: "center" }}>Journey Complete!</h2>
      <div
        style={{
          top: 20,
          textAlign: "center",
          margin: "30px 0",
          fontSize: "1.2em",
          fontWeight: "bold"
        }}
      >
        Personality: {summary}
      </div>
      {profile && (
        <div style={{
          maxWidth: 520,
          margin: "32px auto",
          padding: "22px 32px",
          borderRadius: 10,
          background: "#f7f8fa",
          boxShadow: "0 2px 12px #ddd"
        }}>
          <h3 style={{ textAlign: "center", marginBottom: 14 }}>Detailed Profile</h3>
          <ul style={{ fontSize: "1em", lineHeight: "1.6", listStyle: "disc" }}>
            <li><strong>Traits:</strong> {profile.Traits}</li>
            <li><strong>Strengths:</strong> {profile.Strengths}</li>
            <li><strong>Needs:</strong> {profile.Needs}</li>
            <li><strong>Values:</strong> {profile.Values}</li>
            <li><strong>Joys:</strong> {profile.Joys}</li>
            <li><strong>In a work setting:</strong> {profile.Work}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SummaryPage;
