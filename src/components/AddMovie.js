import React,{useState} from 'react';
import "./style/addmovie.css";
import firebase from '../config/firebase';

const AddMovie=()=>{
    const [name,setName]=useState("");
    const [error,setError]=useState("");
    const types=['image/png','image/jpeg'];


    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const [image,setImage]=useState("")

    function handleChange(event) {
        let selected=event.target.files[0];
        if(selected && types.includes(selected.type)){
            setName(selected.name);
            setError("");
            setImage(selected);
        }else{
            setName("");
            setError("Please select a jpeg or png image");
            setImage(null);
        }
      }

      function submitHandler(e){
            e.preventDefault();
            const storageRef=firebase.storage().ref(name + Math.random() );
            let newMovie = firebase.database().ref().child('movies').push().key
            if(image){
                storageRef.put(image).on('state_change',(snap)=>{
                    let percentage=(snap.bytesTransferred/snap.totalBytes)*100;
                    console.log(percentage);
                },error=>{
                    console.log(error);
                }, async ()=>{
                    const url = await storageRef.getDownloadURL();
                    firebase.database().ref("movies/"+newMovie).set({
                        title,
                        desc,
                        url
                      });
                      setTitle("");
                      setName("");
                      setDesc("");
                      setImage(null);
                }
                ); 
            }
            
      }
        
    return(
        <div className="main">
            <form onSubmit={submitHandler}>
            <div className="head">
                <h1 className="title-head">Write a review about a movie you love.</h1>
                <label >Title of the Movie: 
                <input type="text" className="movie-title" name="movie-title"
                onChange={e=>setTitle(e.target.value)}
                placeholder="Please, write movies's title..."
                value={title}
                />
                </label>
                <label>Your review of the Movie: 
                <textarea name="movie-review"
                onChange={e=>setDesc(e.target.value)}
                placeholder="Please, write movies's review..."
                value={desc}
                />
                </label>
                <label className="add-image">Choose an image
                <input type="file" name="movie-image"
                onChange={handleChange}
                className="movie-image"
                />
                </label>
             <p style={{
                 color: error ? "red":"white",
             }}>{name} {error}</p>
             <input className="submit" type='submit' value="SUBMIT"/>
            </div>
            </form>
        </div>
    )
}

export default AddMovie;