import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [text, setText] = useState("");
  const fullText = "Hello, I'm a Siddu Siddhardha...!";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 50);
    }
  }, [index, fullText, text]);

  return (
    <div className="container mt-5 d-flex flex-column vh-100">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1 className="text-center mb-4">About Us</h1>
          <div className="terminal bg-dark text-white p-3 mb-4">
            <p>{text}</p>
          </div>
          <p className="font-monospace">
            Hello, GCC-NOC! This webpage was built to support your day-to-day
            activities and make your workflow a little easier. The{" "}
            <strong>Todos</strong> section helps you stay on top of your tasks —
            add your daily priorities and keep track effortlessly.
          </p>
          <p className="font-monospace">
            The <strong>Condition</strong> section is designed to help you
            suppress alerts in BigPanda more quickly than the traditional method
            — saving you time and clicks.
          </p>
          <p className="font-monospace">
            This web application was created using <strong>Vite + React</strong>
            , styled with <strong>Tailwind CSS</strong> and{" "}
            <strong>Bootstrap</strong>, and uses{" "}
            <strong>React Router DOM</strong> for navigation.
          </p>
          <p className="font-monospace">
            If you have any ideas or features you'd like to see, feel free to
            reach out — always happy to improve it with the team in mind!
          </p>
        </div>
      </div>
      <footer className="text-center mt-auto py-3 mb-5">
        <p className="text-muted">&copy; Created with ❤️</p>
      </footer>
    </div>
  );
}

export default App;
