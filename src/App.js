import {useState, useEffect} from 'react';
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

function App() {
  const [movie, setMovie] = useState(null);
  const apiKey = process.env.REACT_APP_API_KEY;

  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    try{
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);

      // Returned as XML and we need to turn into JSON
      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the Movie state to the movie
      setMovie(data);
    } catch(err) {
        console.log(err);
    }
  }

  useEffect(() => {
    getMovie("The Sandlot")
  }, [])

  return (
    <div className="App">
      <Form getMovie={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;


/* 
Questions for lab
1. What is a Single Page Application?
  -An SPA (Single-page application) is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content is to be shown.

2. What is REACT?
  -React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3] for building user interfaces based on UI components. 

3. What is JSX?
  -JSX stands for JavaScript XML.

  JSX is an XML/HTML like extension to JavaScript.
  As you can see above, JSX is not JavaScript nor HTML.

  JSX is a XML syntax extension to JavaScript that also comes with the full power of ES6 (ECMAScript 2015).

  Just like HTML, JSX tags can have a tag names, attributes, and children. If an attribute is wrapped in curly braces, the value is a JavaScript expression.

4. What is Babel?
  -Babel is a JavaScript compiler that can translate markup or programming languages into JavaScript. 
  With Babel, you can use the newest features of JavaScript (ES6 - ECMAScript 2015).Babel is available for different conversions. React uses Babel to convert JSX into JavaScript.

5. What is Webpack?
  -Webpack is a module bundler. Webpack can take care of bundling alongside a separate task runner. 

6. What is Create React App?
  -Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React. It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production.
*/