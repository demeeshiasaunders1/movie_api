import React, {useState} from "react";
import axios from "axios"; 


function App() {
  const [data, setData] = useState({})
  const [movie, setMovie] = useState('')
  const [badSearch, setBadSearch] = useState(false);
  // const api = "78344442"
  // const [poster, setPoster] = useState('')

  const url = `http://www.omdbapi.com/?t=${movie}&apikey=78344442`

const searchMovie = (event) => {
  if (event.key === 'Enter') {
  axios.get(url).then((response) => {
    setData(response.data);
    // console.log(response.data.Poster)
    // setPoster(response.data.Poster)

    if (response.data.Response === "False") {
      setBadSearch(true);
    } else {
      setBadSearch(false);
    }
  });
setMovie('')
  }
}
 
return (
  <div className="app">
    <div className='search'>
      <input
      value={movie}
      onChange={event => setMovie(event.target.value)}
      onKeyPress={searchMovie}
      placeholder='Enter Movie'
      type="text"/>
    </div>
    <div className="container"> 
    {badSearch === true?<div className="notFound">NOT FOUND</div>:<></>}
        <div className="Title">
        <h1>{data.Title}</h1>
        </div>
        <div className="Year">
          <p>({data.Year})</p>
        </div>
      <div className="Plot">
        <p>-Plot:{data.Plot}</p></div>
          <div className="Genre">
          <p>-Genre: {data.Genre}</p></div>
          <div className="Director">
          <p>-Director: {data.Director}</p></div>
          <div className="Actors">
          <p>-Actors: {data.Actors}</p></div>
          <div className="Language">
          <p>-Language: {data.Language} </p></div>
          <div className="Country">
          <p>-Country: {data.Country}</p> </div>
          <div className="Awards">
          <p>-Awards: {data.Awards}</p> </div>
          <div className="imdbRating">
          <p>-Rating: {data.imdbRating}</p> </div>
          <div className="movieDetails">
      <div className='Poster'>
            <img src={data.Poster} width="185px" height="285px"/>
      </div>
          </div>
          </div>
      </div>
  
);
}
export default App;