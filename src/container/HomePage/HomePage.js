import React from "react";
import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Row from "../../components/Row/Row";

function HomePage() {
  return (
    <div>
      <Navbar showSignInButton={false} logOut={true} />
      <Banner />
      <Row
        title="MOVIE BOX HITS"
        fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=3653c65d49aec32d55c3b5dd49c7b021&language=en-US"
        isLargeRow
      />
      <Row
        title="MOVIE BOX HITS"
        fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=3653c65d49aec32d55c3b5dd49c7b021&language=en-US"
      />
      <Row
        title="MOVIE BOX HITS"
        fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=3653c65d49aec32d55c3b5dd49c7b021&language=en-US"
      />
      <Row
        title="MOVIE BOX HITS"
        fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=3653c65d49aec32d55c3b5dd49c7b021&language=en-US"
      />
      <Row
        title="MOVIE BOX HITS"
        fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=3653c65d49aec32d55c3b5dd49c7b021&language=en-US"
      />
    </div>
  );
}

export default HomePage;