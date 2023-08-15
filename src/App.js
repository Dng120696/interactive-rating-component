import { useState } from "react";
import RatingState from "./RatingState.js";
import ThankYouState from "./ThankYouState.js";
export default function App() {
  return (
    <div className="App bg-very-dark-blue grid place-items-center min-h-screen">
      <h1>Hello World</h1>
      <Main />
    </div>
  );
}

function Main() {
  const [rate, setRate] = useState(null);
  const [isSubmitted, setSubmitted] = useState(false);

  const handleRate = (rate) => setRate(rate);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (rate !== null) setSubmitted(true);
  };
  return (
    <main className="main-container bg-dark-blue p-8 rounded-lg">
      {isSubmitted ? (
        <ThankYouState rate={rate} />
      ) : (
        <RatingState handleRate={handleRate} handleSubmit={handleSubmit} />
      )}
    </main>
  );
}
