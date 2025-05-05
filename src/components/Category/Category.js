import axios from "axios";
import React, { useState } from "react";
import "./category.css";
import img1 from "../../images/book.jpg";
import img2 from "../../images/film.jpg";
import img3 from "../../images/musical theatre.jpg";
import img4 from "../../images/tvshow.jpg";

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
        <div className='card'>
          <img src={img1} alt='img' />
          <h2>Entertainment: Books</h2>
        </div>
        <div className='card'>
          <img src={img2} alt='img' />
          <h2>Entertainment: Film</h2>
        </div>
        <div className='card'>
          <img src={img3} alt='img' />
          <h2>Entertainment: Musical & Theatres</h2>
        </div>
        <div className='card'>
          <h2>Entertainment: Television</h2>
        </div>
        <h2>Entertainment: Video Games</h2>
        <div className='card'>
          <h2>Entertainment: Board Games</h2>
        </div>
        <div className='card'>
          <h2>Science & Nature</h2>
        </div>
        <div className='card'>
          <h2>Science: Computers</h2>
        </div>
        <div className='card'>
          <h2>Science: Mathematics</h2>
        </div>
        <div className='card'>
          <h2>Mithology</h2>
        </div>
        <div className='card'>
          <h2>Sports</h2>
        </div>
        <div className='card'>
          <h2>Geography</h2>
        </div>
        <div className='card'>
          <h2>History</h2>
        </div>
        <div className='card'>
          <h2>Politics</h2>
        </div>
        <div className='card'>
          <h2>Art</h2>
        </div>
        <div className='card'>
          <h2>Celebrities</h2>
        </div>
        <div className='card'>
          <h2>Animals</h2>
        </div>
        <div className='card'>
          <h2>Vehicles</h2>
        </div>
        <div className='card'>
          <h2>Entertainment: Comics</h2>
        </div>
        <div className='card'>
          <h2>Science: Gadgets</h2>
        </div>
        <div className='card'>
          <h2>Entertainment: Japanesse Anime & Manga</h2>
        </div>
        <div className='card'>
          <h2>Entertainment: Cartoon & Animations</h2>
        </div>
      </div>
    </div>
  );
};

export default Category;
