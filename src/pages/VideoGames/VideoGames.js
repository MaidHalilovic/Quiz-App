import React, { useEffect, useState } from "react";
import "./videoGames.css";
import SelectInput from "../../components/SelectInput/SelectInput";
import axios from "axios";

const VideoGames = () => {
  const [questions, setQuestions] = useState(null);

  const fetchQuestions = async () => {
    try {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=20&category=15`
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
        <h1>{questions.results[0].question}</h1>
      </div>
    </div>
  );
};

export default VideoGames;
