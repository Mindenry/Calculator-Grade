import React, { useState } from "react";
import "./App.css";

function App() {
  const [homework, setHomework] = useState(0);
  const [midterm, setMidterm] = useState(0);
  const [final, setFinal] = useState(0);
  const [grade, setGrade] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const numValue = Number(value);

    switch (name) {
      case "homework":
        setHomework(numValue);
        break;
      case "midterm":
        setMidterm(numValue);
        break;
      case "final":
        setFinal(numValue);
        break;
    }

    setShowResult(false);
  };

  const calculateGrade = () => {
    const totalScore = homework + midterm + final;
    
    if (totalScore < 0 || totalScore > 100) {
      setGrade("Error score");
    } else if (totalScore <= 40) {
      setGrade("F");
    } else if (totalScore <= 50) {
      setGrade("D");
    } else if (totalScore <= 60) {
      setGrade("C");
    } else if (totalScore <= 70) {
      setGrade("B");
    } else {
      setGrade("A");
    }
    

    setShowResult(true);
  };

  return (
    <div className="grade-app">
      <h1 className="title">Grade Calculator</h1>
      <p className="subtitle">โปรแกรมคำนวณเกรด</p>
      
      <label htmlFor="homework">คะแนน Homework</label>
      <input type="number" name="homework" onChange={handleOnChange} />
      
      <label htmlFor="midterm">คะแนน Midterm</label>
      <input type="number" name="midterm" onChange={handleOnChange} />
      
      <label htmlFor="final">คะแนน Final</label>
      <input type="number" name="final" onChange={handleOnChange} />
      
      <button type="button" onClick={calculateGrade}>
        คำนวณเกรด
      </button>
      
      {showResult && (
        <div className="result">
          <p>คะแนนรวม: {homework + midterm + final}</p>
          <p>เกรดที่ได้: {grade}</p>
        </div>
      )}
    </div>
  );
}

export default App;