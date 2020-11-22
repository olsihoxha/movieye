import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Movies from './components/Movies';
import Contact from './components/Contact';
import AddMovie from './components/AddMovie';
import MovieDetails from './components/MovieDetails';
import Error from './components/Error';

const App= () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route exact path="/movies" component={Movies}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/addmovie" component={AddMovie}/>
      <Route path="/movies/:movie_id" component={MovieDetails}/>
      <Route component={Error}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
