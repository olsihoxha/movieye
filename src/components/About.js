import React from 'react';
import bg from '../sources/contact.jpg';
import teamImage from '../sources/teamimage.jpg';
import teamImage1 from '../sources/teamperson1.jpeg';
import teamImage2 from '../sources/teamperson2.jpeg';
import teamImage3 from '../sources/teamperson3.jpeg';
import "./style/about.css"

const About=()=>{
    return(
        <div>
            <img src={bg} className="about-bg"/>
           <div className="about-head">
           <h1>Who are we?</h1>
           <h2 >Thinkers, lovers & criticizers</h2>
           </div>
           <div className="about-content">
                <h1 className="about-title">What do we do?</h1>
                <p className="about-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <h1 className="about-title team">Our beloved team:</h1>
                <ul className="about-team-list">
                    <li className="contact-li">
                    <div className="li-content">
                        <img src={teamImage} className="team-image"/>
                        <p className="team-content">Member one</p>
                        <p className="team-content">It is ablishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infanrpose (injected humour and the like)</p>
                        </div>
                    </li>
                    <li className="contact-li">
                    <div className="li-content">
                        <img src={teamImage1} className="team-image" />
                        <p className="team-content">Member two</p>
                        <p className="team-content"> It is ablishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infanrpose (injected humour and the like).</p>
                        </div>
                    </li>
                    <li className="contact-li">
                    <div className="li-content">
                        <img src={teamImage2} className="team-image"/>
                        <p className="team-content">Member three</p>
                        <p className="team-content">It is ablishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infanrpose (injected humour and the like).</p>
                        </div>
                    </li>
                    <li className="contact-li">
                        <div className="li-content">
                        <img src={teamImage3} className="team-image"/>
                        <p className="team-content">Member four</p>
                        <p className="team-content">It is ablishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infanrpose (injected humour and the like).</p>
                        </div>
                    </li>
                </ul>
                <p className="footer">Copyright © 2020 #MoviEyeTeam</p>
            </div>
        </div>
    )
}

export default About;