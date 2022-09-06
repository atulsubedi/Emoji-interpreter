import React, { useState } from "react";
import "./styles.css";

const emojiBook = {
  "🙂": "smiling",
  "😑": "annoyance",
  "😳": "disbelif",
  "❤️": "love",
  "🗑️": "bin"
};

var emojiWeKnow = Object.keys(emojiBook);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiClick(event) {
    var userInput = event.target.value;

    var meaning = emojiBook[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in out database";
    }

    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiBook[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside outt!!</h1>
      <input onChange={emojiClick}></input>

      <h2> {meaning} </h2>

      <h3> emojis we know</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
