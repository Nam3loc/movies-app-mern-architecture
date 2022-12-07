import {useState, useEffect} from 'react';
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

function App() {
  const [movie, setMovie] = useState(null);
  const apiKey = '97c69f3e';

  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);

    // Returned as XML and we need to turn into JSON
    // Parse JSON response into a javascript object
    const data = await response.json();
    //set the Movie state to the movie
    setMovie(data);
  }

  return (
    <div className="App">
      <Form />
      <MovieDisplay />
    </div>
  );
}

export default App;
