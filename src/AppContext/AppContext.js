import { createContext, useEffect, useState } from "react";
import VideoGames from "../pages/VideoGames/VideoGames";
import axios from "axios";

// export const AppContext = createContext;

function AppContext() {
  const [questions, setQuestions] = useState(null);

  const Question = async () => {
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
    Question();
  }, []);

  if (!questions) {
    return <h1>Loading...</h1>;
  }
  return (
    <AppContext.Provider value={Question}>
      <VideoGames />
    </AppContext.Provider>
  );
}
export default AppContext;
