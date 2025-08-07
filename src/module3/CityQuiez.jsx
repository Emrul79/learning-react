import React, { useState } from "react";

const submitForm = (answer) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldanswer = answer.toLowerCase() === "dhaka";
      if (!shouldanswer) {
        reject(new Error("Good Try! but you have made a mmistake!"));
      } else {
        resolve();
      }
    }, 1500);
  });
};

export default function CityQuiez() {
  const [answer, setanswer] = useState("");
  const [status, setStatus] = useState("typing");
  const [error, setError] = useState(null);

  if (status === "success") {
    return (
      <h1 className="capitalize font-bold text-5xl  py-10 px-10 text-green-700">
        Brilliant ! you are absolutly right
      </h1>
    );
  }
  const handleTextChange = (e) => {
    setError(null);
    setanswer(e.target.value);
  };
  const handleFormSubmit = async (evn) => {
    evn.preventDefault();
    setStatus("Submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  };

  return (
    <>
      <div className="p-20 bg-gray-200 flex justify-center ">
        <div>
          <h1 className="capitalize text-4xl font-bold my-5 text-gray-600">
            What is the capital city of Bangladesh do you think?{" "}
          </h1>
          <form onSubmit={handleFormSubmit} action="/">
            <textarea
              className="disabled:border-2 disabled:border-black disabled:border-solid"
              name="textarea"
              cols="38"
              rows="4"
              disabled={status === "Submitting"}
              value={answer}
              onChange={handleTextChange}
            ></textarea>
            <br />
            <button
              disabled={answer.length === 0 || status === "Submitting"}
              className="bg-blue-600 text-white px-6 py-3 my-5 rounded cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed"
              type="submit"
            >
              Submit
            </button>

            {error != null && (
              <p className="text-red-500 text-2xl "> {error.message} </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
