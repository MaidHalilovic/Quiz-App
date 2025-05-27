import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import VideoGames from "../pages/VideoGames/VideoGames";

export const AppContext = createContext();

const AppContext = () => {
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
    <AppContext.Provider value={questions}>
      <VideoGames />
    </AppContext.Provider>
  );
};

export default AppContext;
