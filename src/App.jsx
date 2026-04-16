import { useState } from "react";
import { Languages } from "./languages/language";
import { clsx } from "clsx";

import "./App.css";

function App() {
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedWord, setGuessedWord] = useState([]);

  function addGuessedWord(letter) {
    setGuessedWord((prevLetter) =>
      prevLetter.includes(letter) ? prevLetter : [...prevLetter, letter],
    );
  }

  const guessedWrong = guessedWord.filter(
    (letter) => !currentWord.includes(letter),
  );
  //game won
  const gameWon = currentWord
    .split("")
    .every((letter) => guessedWord.includes(letter));

  //gamelost
  const gameLost = guessedWrong.length >= Languages.length;
  //game over
  const gameOver = gameWon || gameLost;

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  //displaying languages
  const languageElements = Languages.map((lang, index) => {
    const lostLang = index < guessedWrong.length;

    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };

    const losts = clsx("chip", lostLang && "lost");

    return (
      <span key={lang.id} className={losts} style={styles}>
        {lang.name}
      </span>
    );
  });
  //current tecxt

  const wordCurrentShow = currentWord.split("").map((letter, index) => (
    <span className="word" key={index}>
      {guessedWord.includes(letter) ? letter.toLocaleUpperCase() : ""}
    </span>
  ));

  //button click
  const alphabetDisplay = alphabet.split("").map((letter) => {
    const isGuessed = guessedWord.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button
        onClick={() => addGuessedWord(letter)}
        className={className}
        id="alphabet-btn"
        key={letter}
      >
        {letter.toUpperCase()}
      </button>
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
          <section className="word-show">{wordCurrentShow}</section>
          <section className="alphabet-btn-container">
            {alphabetDisplay}
          </section>
          {gameOver && <button className="new-game">New Game</button>}
        </div>
      </main>
    </>
  );
}

export default App;
