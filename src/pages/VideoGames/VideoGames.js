import React, { useEffect, useState } from "react";
import "./videoGames.css";
import axios from "axios";

const VideoGames = () => {
  const [questions, setQuestions] = useState(null);

  const fetchQuestions = async () => {
    try {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=20&category=15&type=multiple`
      );

      console.log(data);

      setQuestions(data);
    } catch (error) {
      console.error("Error while fetching questions");
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  if (!questions) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='quiz'>
      <div className='instructions'>
        <h1>20 questions for video games </h1>
        <h2>Lets see how points you will get:</h2>
        <div className='questions'>
          <h2>{questions.results[0].question}</h2>
          <div className='answers'>
            <button>{questions.results[0].incorrect_answers[0]}</button>
            <button>{questions.results[0].incorrect_answers[1]}</button>
            <button>{questions.results[0].incorrect_answers[2]}</button>
            <button>{questions.results[0].correct_answer}</button>
          </div>
        </div>
        <div className='questions'>
          <h2>{questions.results[1].question}</h2>
          <div className='answers'>
            <button>{questions.results[1].incorrect_answers[0]}</button>
            <button>{questions.results[1].incorrect_answers[1]}</button>
            <button>{questions.results[1].incorrect_answers[2]}</button>
            <button>{questions.results[1].correct_answer}</button>
          </div>
        </div>
        <div className='questions'>
          <h2>{questions.results[2].question}</h2>
          <div className='answers'>
            <button>{questions.results[2].incorrect_answers[0]}</button>
            <button>{questions.results[2].incorrect_answers[1]}</button>
            <button>{questions.results[2].incorrect_answers[2]}</button>
            <button>{questions.results[2].correct_answer}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGames;
