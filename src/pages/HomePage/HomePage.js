import React, { useState } from "react";
import "./homePage.css";
import Category from "../../components/Category/Category";

const HomePage = () => {
  //   const [quiz, setQuiz] = useState([]);

  return (
    <div className='main-div'>
      <Category />
    </div>
  );
};

export default HomePage;
