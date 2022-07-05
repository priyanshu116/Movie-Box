import React from 'react'
import "./Banner.css";

function Banner() {
  return (
    <div className="banner" 
    style={{
        backgroundImage: 'url("https://handoff-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225.jpg")',
        backgroundPosition: "center center",
        backgroundSize:"Cover",
    }}>
        <div className="banner_contents">
            <h1>Movie name</h1>
            <div className="banner_buttons">
                <button>Play</button>
                <button>Wishlist</button>


                </div>
                <h3>from movies to series to tv-shows and what not, find all of it in one place,with gerne starting from 
                    sci-fi to drama to romance we have it all.so what are u waiting for ,find the latest of latest served with 
                    pleasure.
                  </h3>
            </div>
      



    </div>
  )
}

export default Banner
