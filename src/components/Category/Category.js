import axios from "axios";
import React, { useState } from "react";
import "./category.css";

const Category = () => {
  // const [quiz, setQuiz] = useState([])

  // const fetchQuestion = async() => {
  //     try {
  //         const { data } =
  //         await axios.get(``)

  //     }
  // }

  return (
    <div className='mainContainer'>
      <h1 style={{ marginTop: 80, marginLeft: 50 }}>Category</h1>
      <div className='category'>
        <h2>Entertainment: Books</h2>
        <h2>Entertainment: Film</h2>
        <h2>Entertainment: Musical & Theatres</h2>
        <h2>Entertainment: Television</h2>
        <h2>Entertainment: Video Games</h2>
        <h2>Entertainment: Board Games</h2>
        <h2>Science & Nature</h2>
        <h2>Science: Computers</h2>
        <h2>Science: Mathematics</h2>
        <h2>Mithology</h2>
        <h2>Sports</h2>
        <h2>Geography</h2>
        <h2>History</h2>
        <h2>Politics</h2>
        <h2>Art</h2>
        <h2>Celebrities</h2>
        <h2>Animals</h2>
        <h2>Vehicles</h2>
        <h2>Entertainment: Comics</h2>
        <h2>Science: Gadgets</h2>
        <h2>Entertainment: Japanesse Anime & Manga</h2>
        <h2>Entertainment: Cartoon & Animations</h2>
      </div>
    </div>
  );
};

export default Category;
