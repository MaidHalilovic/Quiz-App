import axios from "axios";
import React, { useState } from "react";
import "./category.css";
import img1 from "../../images/book.jpg";
import img2 from "../../images/film.jpg";
import img3 from "../../images/musical theatre.jpg";
import img4 from "../../images/tvshow.jpg";
import img5 from "../../images/videoGamesimg.jpg";
import img6 from "../../images/borad games.jpg";
import img7 from "../../images/nature.png";
import img8 from "../../images/computers.jpg";
import img9 from "../../images/math.jpg";
import img10 from "../../images/mithology.jpg";
import img11 from "../../images/sport.jpg";
import img12 from "../../images/geography.jpg";
import img13 from "../../images/history.jpg";
import img14 from "../../images/politics.jpg";
import img15 from "../../images/art.jpg";
import img16 from "../../images/celebrities.png";
import img17 from "../../images/animals.jpg";
import img18 from "../../images/vehicles.png";
import img19 from "../../images/comics.jpg";
import img20 from "../../images/gadgets.jpg";
import img21 from "../../images/manga.jpg";
import img22 from "../../images/cartoon.jpg";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  // const [quiz, setQuiz] = useState([])

  // const fetchQuestion = async() => {
  //     try {
  //         const { data } =
  //         await axios.get(``)

  //     }
  // }

  return (
    <div className='mainContainer'>
      <h1 style={{ marginTop: 80, marginLeft: 45 }}>Categories</h1>
      <div className='category' style={{ fontSize: 14 }}>
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
          <img src={img4} alt='img' />
          <h2>Entertainment: Television</h2>
        </div>
        <div className='card' onClick={() => navigate("/VideoGamesQuiz")}>
          <img src={img5} alt='img' />
          <h2>Entertainment: Video Games</h2>
        </div>
        <div className='card'>
          <img src={img6} alt='img' />
          <h2>Entertainment: Board Games</h2>
        </div>
        <div className='card'>
          <img src={img7} alt='img' />
          <h2>Science & Nature</h2>
        </div>
        <div className='card'>
          <img src={img8} alt='img' />
          <h2>Science: Computers</h2>
        </div>
        <div className='card'>
          <img src={img9} alt='img' />
          <h2>Science: Mathematics</h2>
        </div>
        <div className='card'>
          <img src={img10} alt='img' />
          <h2>Mithology</h2>
        </div>
        <div className='card'>
          <img src={img11} alt='img' />
          <h2>Sports</h2>
        </div>
        <div className='card'>
          <img src={img12} alt='img' />
          <h2>Geography</h2>
        </div>
        <div className='card'>
          <img src={img13} alt='img' />
          <h2>History</h2>
        </div>
        <div className='card'>
          <img src={img14} alt='img' />
          <h2>Politics</h2>
        </div>
        <div className='card'>
          <img src={img15} alt='img' />
          <h2>Art</h2>
        </div>
        <div className='card'>
          <img src={img16} alt='img' />
          <h2>Celebrities</h2>
        </div>
        <div className='card'>
          <img src={img17} alt='img' />
          <h2>Animals</h2>
        </div>
        <div className='card'>
          <img src={img18} alt='img' />
          <h2>Vehicles</h2>
        </div>
        <div className='card'>
          <img src={img19} alt='img' />
          <h2>Entertainment: Comics</h2>
        </div>
        <div className='card'>
          <img src={img20} alt='img' />
          <h2>Science: Gadgets</h2>
        </div>
        <div className='card'>
          <img src={img21} alt='img' />
          <h2>Entertainment: Japanesse Anime & Manga</h2>
        </div>
        <div className='card'>
          <img src={img22} alt='img' />
          <h2>Entertainment: Cartoon & Animations</h2>
        </div>
      </div>
    </div>
  );
};

export default Category;
