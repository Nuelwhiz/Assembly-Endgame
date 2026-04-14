import { useState } from "react";
import { Languages } from "./languages/language";

import "./App.css";

function App() {
  const languageElements = Languages.map((lang) => {
    const styles = { backgroundColor: lang.backgroundColor, color: lang.color };
    return (
      <span key={lang.id} className="chip" style={styles}>
        {" "}
        {lang.name}{" "}
      </span>
    );
  });
  return (
    <>
      <main className="assembly-game-container">
        <div className="game-template">
          <header>
            <h1>Assembly: Endgame</h1>
            <p>
              Guess the word within 8 attempt to keep the programming world safe
              from Assembly!
            </p>
          </header>

          <section className="win-section">
            <h2>you win!!</h2>
            <p>well done</p>
          </section>

          <section className="language-section">{languageElements}</section>
        </div>
      </main>
    </>
  );
}

export default App;
