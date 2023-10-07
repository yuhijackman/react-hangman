type HangmanWordProps = {
  reveal?: boolean;
  guessedLetters: string[];
  wordToGuess: string;
};

export function HangmanWord({
  reveal = false,
  guessedLetters,
  wordToGuess
}: HangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace"
      }}
    >
      {wordToGuess.split("").map((letter, index) => {
        return (
          <span key={index} style={{ borderBottom: ".1em solid black" }}>
            <span
              style={{
                visibility:
                  guessedLetters.includes(letter) || reveal
                    ? "visible"
                    : "hidden",
                color:
                  !guessedLetters.includes(letter) && reveal ? "red" : "black"
              }}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
}
