import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='header'>
      <div className='headerMainDiv'>
        <div className='name'>
          <h1>Quiz</h1>
        </div>

        <div className='pages'>
          <div className='favourites'>
            <h1 onClick={() => navigate("/Favourites")}>Favourites</h1>
          </div>
          <div className='aboutUs'>
            <h1 onClick={() => navigate("/AboutUs")}>AboutUs</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
