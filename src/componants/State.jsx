import { useState } from "react";

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === "dhaka") {
        resolve();
      } else {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      }
    }, 3000);
  });
}

export default function Form() {
  //mendatory user answer data:

  const [answer, setAnswer] = useState("");
  const [errorMassage, setErrorMassage] = useState(null);
  const [status, setStatus] = useState("typing");

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleFormOnSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setErrorMassage(err);
    }
  };

  if (status === "success") {
    return <h1>Thats right!</h1>;
  }
  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleFormOnSubmit}>
        <textarea
          value={answer}
          onChange={handleChange}
          disabled={status === "submitting"}
        />
        <br />
        <button disabled={answer.length === 0 || status === "submitting"}>
          Submit
        </button>

        {errorMassage !== null && (
          <p className="Error" style={{ color: "red" }}>
            {errorMassage.message}
          </p>
        )}
      </form>
      <hr />
    </>
  );
}
