import React from "react";
import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Row from "../../components/Row/Row";
import ReactPlayer from "react-player/youtube";

function HomePage() {
  return (
    <div>
      <Navbar showSignInButton={false} logOut={true} show={true}/>
      <Banner />
      
      <Row
        title="MOVIE BOX HITS"
        fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=3653c65d49aec32d55c3b5dd49c7b021&language=en-US"
        isLargeRow
      />
      
      {/* <p className="vlogname"><h1>VLOGS</h1></p>
      <div className="vlog">
      <ReactPlayer className="v1" url="https://youtu.be/PreZI0goJvQ" controls={true} width='30%' height='100%' />
      <ReactPlayer  className="v1" url="https://youtu.be/7lOMNMpFqZY" controls={true} width='30%' height='100%' />
      <ReactPlayer  className="v1" url="https://youtu.be/vdz-uysd23E" controls={true} width='30%' height='100%' />
      <ReactPlayer className="v1"  url="https://youtu.be/qfN9R0_qmGM" controls={true} width='30%' height='100%' />
      
      </div>
     

      <div className="vlog2">
      <ReactPlayer  className="v1" url="https://youtu.be/lcvHTNaJiY0" controls={true} width='30%' height='100%' />
      <ReactPlayer  className="v1" url="https://youtu.be/Zk8E4lmiKo8" controls={true} width='30%' height='100%' />
      <ReactPlayer  className="v1" url="https://youtu.be/Jws3JJ0XfdU" controls={true} width='30%' height='100%' />
      <ReactPlayer className="v1" url="https://youtu.be/38mCXnGMx8w" controls={true} width='30%' height='100%' />
     
      </div> */}
      
      
      <Row
        title="TRENDING"
        fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=3653c65d49aec32d55c3b5dd49c7b021&language=en-US"
        isLargeRow
        />
      <Row
        title="90's"
        fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=3653c65d49aec32d55c3b5dd49c7b021&language=en-US"
        isLargeRow
        />
      <Row
        title="DARK"
        fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=3653c65d49aec32d55c3b5dd49c7b021&language=en-US"
        isLargeRow
        />
        <Row
        title="FOR YOU"
        fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=3653c65d49aec32d55c3b5dd49c7b021&language=en-US"
        isLargeRow
        />
      
    </div>
  );
}

export default HomePage;