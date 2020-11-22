import React, { useState } from 'react';
import './style/contact.css';
import contactImg from '../sources/contactus.jpeg';
import {motion} from 'framer-motion';
import firebase from '../config/firebase';

const animationDiv={
    init:{
        width:"120px"
    },
    whileHover:{
        width:"180px"
    }   
}

const animationChild={
    init:{
        opacity:0
    },
    whileHover:{
        opacity:1
    }   
}

const animationSubmit={
    init:{
        x:-10
    },
    whileHover:{
        x:0
    }   
}



const Contact=()=>{

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
    const [uploadMsg,setUploadMsg]=useState("");
    const [error,setError]=useState(false);

    function submitHandler(e){
        e.preventDefault();
        let newMessage = firebase.database().ref().child('movies').push().key;
        firebase.database().ref("messages/"+newMessage).set({
           name,
           email,
           message
          }, (error) => {
            if (error) {
              setUploadMsg("Please Try Again...");
              setError(true);
            } else {
              setError(false);
              setUploadMsg("Message sent successfuly");
              setName("");
              setMessage("");
              setEmail("");
            }
          });
    }

    return(
        <div>
          <img src={contactImg} className="contact-image-left"/>
          <div className="contact-content">
          <h1 className="contact-title">We'd love to talk with you.</h1>
          <form onSubmit={submitHandler}>
          <label className="contact-label">Your Name: 
                <input type="text" className="contact-us" name="contact-name"
                onChange={e=>{setName(e.target.value);
                              setUploadMsg("");}}
                value={name}
                placeholder="Your name..."
                /> </label>
                 <label className="contact-label">Your E-mail: 
                <input type="email" className="contact-us" name="contact-email"
                  onChange={e=>{setEmail(e.target.value);
                                setUploadMsg("");}}
                value={email}
                placeholder="Your e-mail..."
                /> </label>
                 <label className="contact-label">Your Message: 
                <textarea spellcheck 
                onChange={e=>{setMessage(e.target.value);
                              setUploadMsg("");}}
                value={message}
                className="contact-us contact-message" name="contact-message"
                placeholder="Your thoughts..."
                /> </label>
                <p style={{color: error? 'red':'green' ,marginTop:"10px"}}>{uploadMsg}</p>    
            <motion.div 
            variants={animationDiv}
            initial="init"
            whileHover="whileHover"
            className="contact-submit"
            >
            <motion.input  variants={animationDiv} type="submit" className="submit-contact"/>
            <motion.h3 
            variants={animationChild}
            className="btn">#</motion.h3>
            <motion.h3 
            variants={animationSubmit}
            className="btn">Submit</motion.h3>
             </motion.div>
                </form>
          </div>
        </div>
    )
}

export default Contact;