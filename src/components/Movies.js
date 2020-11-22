import React, { useEffect, useState } from 'react';
import firebase from '../config/firebase';
import './style/movies.css';
import {motion} from 'framer-motion';
import Lottie from 'react-lottie';
import animationData from '../sources/loading.json';
import {Link} from 'react-router-dom';


const Container=({title,desc,url,movieId})=>{

       return(
        <Link to={`/movies/${movieId}`} className="movies-link">
           <div className="movies-cell">
              <motion.div className="image-item"
              whileHover={{
                  width:"110%",
                  height:"40%"
              }}
                style={{
                    backgroundImage: `url(${url})`
                }}
              />
               <h1 className="movies-title">{title}</h1>
               <p className="movies-desc-p">{desc}</p>
           </div>
           </Link>
       );
}

const Movies=()=>{

    const [movies,setMovies]=useState([]);
    const [loadingState,setLoadingState]=useState(true);
    const [id,setId]=useState([]);

useEffect(()=>{
    let leadsRef = firebase.database().ref('movies');


    leadsRef.orderByChild("state").equalTo(true).on('value', function (snapshot) {
    let moviesList=[];
    let moviesId=[];
    
    snapshot.forEach(function (childSnapshot) {
        moviesList=[...moviesList,childSnapshot.val()];
        moviesId.push(childSnapshot.key);
    });
    setLoadingState(false);
    setMovies(moviesList);
    setId(moviesId);
});
},[]);


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
   
    return(
        <div className="movies-root">
        <h1  className="movies-topic">Enjoy our <span style={{color:"#943126 "}}>movie reviews</span></h1>
       { loadingState &&  <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
        isClickToPauseDisabled={true}
      />}
        <div className="grid-layout">
           {
               movies.map((mov,index)=> <Container key={index}
                movieId={id[index]} title={mov.title} desc={mov.desc} url={mov.url}/>)
           }
        </div>
        </div>
    )
}

export default Movies;