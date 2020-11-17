import './style/style.css';
import React from 'react';
import bg from '../sources/bg.png';
import {Link,NavLink,BrowserRouter as Router} from 'react-router-dom';


const Home=()=>{


    return(
      
        <div className="App">
        <div className="header">
            <img src={bg} alt='logo' className="logo"/>
            <h1 className="title">MoviEye</h1>
            <div className="list">
            <ul>
              <li><Link to="/movies" className="menu">Movies</Link></li>
              <li><Link to="/addmovie" className="menu">Add Movie</Link></li>
              <li><Link to="/about" className="menu">About</Link></li>
              <li><Link to="/contact" className="menu">Contact</Link></li>
            </ul>
            </div>
        </div>
        <div className="content">
          <h1 className='main'>Browser and find your favourite movie.</h1>
          <a href="#" className="browser-link">Browser</a>
          <p className="or">OR</p>
          <a href="#" className="browser-link join">Join</a>
        </div>
      </div>
    )
}

export default Home;