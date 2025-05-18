import React from "react";
import "./videoGames.css";
import SelectInput from "../../components/SelectInput/SelectInput";

const VideoGames = () => {
  return (
    <div className='quiz'>
      <div className='instructions'>
        <h1>20 questions for video games </h1>
        <h2>Lets see how points you will get:</h2>

        <SelectInput />
      </div>
    </div>
  );
};

export default VideoGames;
