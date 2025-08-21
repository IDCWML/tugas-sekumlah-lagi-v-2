import React, { useState } from "react";
import "../../App.css";

export default function PlayedGames() {
  const games = [
    {
      name: "Call Of Duty Mobile",
      stats: "死Beban_tim死",
      image: "/codm.jpg",
    },
    {
      name: "Genshin Impact",
      stats: "Satou",
      image: "/hutao.png",
    },
    {
      name: "Farlight84",
      stats: "BebanTim",
      image: "/farlight.png",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="played-page">
      <h2 className="section-title">Played Games</h2>
      <ul className="games-list">
        {games.map((game, index) => (
          <li
            key={index}
            className="game-item"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseMove={handleMouseMove}
          >
            {game.name}
            {hoveredIndex === index && (
              <div
                className="stats-popup"
                style={{ left: cursorPos.x, top: cursorPos.y - 40 }}
              >
                <img src={game.image} alt={game.name} className="stats-image" />
                <p>{game.stats}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
