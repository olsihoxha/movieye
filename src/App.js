import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Movies from './components/Movies';
import Contact from './components/Contact';
import AddMovie from './components/AddMovie';

const App= () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/movies" component={Movies}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/addmovie" component={AddMovie}/>
    </BrowserRouter>
  );
}

export default App;
