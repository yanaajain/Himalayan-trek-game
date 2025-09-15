
import React from "react";

// Map stop images mapping (use your own image URLs or local imports)
const backgroundImages = {
  Manali: "url('https://cdn.pixabay.com/photo/2020/05/22/11/20/manali-5205016_1280.jpg')",
  Jobra: "url('https://tse4.mm.bing.net/th/id/OIP.ZrOxhTCBUKD3VXouTt4hCwHaEH?rs=1&pid=ImgDetMain&o=7&rm=3')",
  Chika: "url('https://tse4.mm.bing.net/th/id/OIP.woKEn6oHJJUjNHJNJJc8UwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3')",
  "Balu ka Ghera": "url('https://tse2.mm.bing.net/th/id/OIP.ap-5inv-PzKFcDEF4YamxAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3')",
  "Hampta Pass": "url('https://thumbs.dreamstime.com/b/panoramic-view-himalayas-wide-panorama-photograph-himalayas-mountain-range-india-166943775.jpg')",
  "Shea Ghoru": "url('https://th.bing.com/th/id/R.1ec5c58eb5ef966b2f081536ffb0516a?rik=3EP%2brKkSQI2Unw&riu=http%3a%2f%2fphotos.wikimapia.org%2fp%2f00%2f05%2f79%2f75%2f27_full.jpg&ehk=owVgkycPHW3%2f%2fwIg%2fWzsI%2fx1r6ZcMEQ%2fBO6elNpXz6w%3d&risl=&pid=ImgRaw&r=0')",
  Chatru: "url('https://tse2.mm.bing.net/th/id/OIP.CMqdv0OJT3BD9APTEqR5NgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3')",
  "Chandratal Lake": "url('https://himtrek.co.in/wp-content/uploads/2023/09/IMG_1820.jpg')",
  "Rohtang Pass": "url('https://tse4.mm.bing.net/th/id/OIP.Zb0rOKvu6QLq0a1T49kAGAHaDr?rs=1&pid=ImgDetMain&o=7&rm=3')",
  "Manali (End)": "url('https://th.bing.com/th/id/R.6f444b529ac0c7ccafc80bd1441089cb?rik=VmCBz%2bzBqKRoVA&riu=http%3a%2f%2fwww.incrediblelifestyle.in%2fwp-content%2fuploads%2f2021%2f06%2ftrekinginhamptapassBanBanjara.jpg&ehk=LTgvbOwMz1S%2fc7iKEaGRF8wylRyNi%2bWl5ZD%2fJDae%2fXg%3d&risl=&pid=ImgRaw&r=0')"
};

const points = [
  { x: 60, y: 280 }, // Manali (start)
  { x: 80, y: 220 }, // Jobra
  { x: 120, y: 180 }, // Chika
  { x: 180, y: 160 }, // Balu ka Ghera
  { x: 250, y: 130 }, // Hampta Pass
  { x: 310, y: 120 }, // Shea Ghoru
  { x: 370, y: 140 }, // Chatru (3321m)
  { x: 460, y: 70 }, // Chandratal Lake
  { x: 390, y: 250 }, // Rohtang Pass
  { x: 160, y: 330 } // Manali (end)
];

const stopLabels = [
  "Manali",
  "Jobra",
  "Chika",
  "Balu ka Ghera",
  "Hampta Pass",
  "Shea Ghoru",
  "Chatru",
  "Chandratal Lake",
  "Rohtang Pass",
  "Manali (End)"
];

const Map = ({ stops, position }) => {
  const currentStop = stopLabels[position];
  const bgImage = backgroundImages[currentStop] || "none";

  return (
    <div
      style={{
        width: 800,
        height: 600,
        position: "relative",
        backgroundImage: bgImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 16,
        marginBottom: 30,
        boxShadow: "0 0 8px #999"
      }}
    >
      <svg
        width="800"
        height="600"
        viewBox="0 0 510 390"
        style={{ background: "rgba(246, 252, 254, 0.5)", borderRadius: 16 }}
      >
        {/* Draw path lines */}
        {points.map((pt, i) =>
          i === 0 ? null : (
            <line
              x1={points[i - 1].x}
              y1={points[i - 1].y}
              x2={pt.x}
              y2={pt.y}
              key={`l${i}`}
              stroke="#999"
              strokeWidth="3"
            />
          )
        )}

        {/* Draw stops */}
        {points.map((pt, i) => (
          <g key={i}>
            {/* Flag at the stop */}
            <rect
              x={pt.x - 30}
              y={pt.y - 48}
              width="60"
              height="22"
              fill={i === position ? "#ffe066" : "#e7eaf2"}
              stroke="#b7b7b7"
              rx={7}
            />
            <text
              x={pt.x}
              y={pt.y - 33}
              textAnchor="middle"
              fontSize="12"
              fill="#355"
              fontWeight="600"
            >
              {stopLabels[i]}
            </text>

            {/* Ball as player */}
            {i === position && (
              <circle
                cx={pt.x}
                cy={pt.y}
                r={16}
                fill="#1e78f8"
                stroke="#444"
                strokeWidth="4"
              />
            )}

            {/* Stop marker */}
            <circle
              cx={pt.x}
              cy={pt.y}
              r={10}
              fill={i <= position ? "#4ec47a" : "#d2dbed"}
              stroke="#325"
              strokeWidth="3"
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default Map;

