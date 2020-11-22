import React,{useEffect, useState} from 'react';
import firebase from '../config/firebase';
import Lottie from 'react-lottie';
import animationData from '../sources/loading.json';
import noData from '../sources/nodata.json';
import './style/details.css';







const MovieDetails=(props)=>{
    
    const [details,setDetails]=useState("");
    const [loading,setLoading]=useState(true);
    useEffect(() => {
        let id = props.match.params.movie_id;
        let leadsRef = firebase.database().ref('movies');
        leadsRef.child(id).on('value', function (snapshot) {
             setDetails(snapshot.val());
             setLoading(false);
          })    
    }, []);

//animation
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

      const notFound = {
        loop: true,
        autoplay: true,
        animationData: noData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
////////// 

const MovieDets=()=>{
  if(details !=null) {
    return(
     <div className="movie-content">
         <h1 className="details-title">{details.title}</h1>
         <div className="details-image"
                 style={{
                     backgroundImage: `url(${details.url})`
                 }}
               />
               <p className="details-desc">{details.desc}</p>
         { !(loading ) &&<p className="footer">Copyright © 2020 #MoviEyeTeam</p>}
         </div>
   )
 }else{
   return(
     <div>
     <h1 style={{color:"red",marginTop:"65px",textAlign:'center'}}>THERE IS NO DATA!!!</h1>
     <Lottie 
	          options={notFound}
            height={400}
            width={400}
            isClickToPauseDisabled={true}
      />
     </div>
   )
 }
 
 }

    return(
        <div className="details-root" style={{color:'white'}}>
         {loading && <div className="details-loading">
           <Lottie 
	          options={defaultOptions}
            height={400}
            width={400}
            isClickToPauseDisabled={true}
      /> </div>}
        <MovieDets/>   
        </div>
    )
}

export default MovieDetails;