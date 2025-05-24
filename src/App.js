import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import AboutUs from "./pages/AboutUs/AboutUs";
import Favourites from "./pages/Favourites/Favourites";
import Header from "./components/Header/Header";
import VideoGames from "./pages/VideoGames/VideoGames";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Favourites' element={<Favourites />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/VideoGamesQuiz' element={<VideoGames />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
