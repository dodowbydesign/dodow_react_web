import React from "react";
import icon from "../../asset/img/icon.svg";
import "./about.css"


const About = () => {
    return(
        <div id="about">
            <main>
                <h1>
                    About Me
                </h1>
                <p>Having a creative mind and a passion for design.</p>
                <p>I’ve always been an analyst and desired for a deeper understanding of design and the mentality behind it,
                    which has broadened my design goals and developed my knowledge on the subject.</p>
                <p>As an individual, I am an outsider that looks deeper into society from different and alternative perspectives.</p>
                <p>Thus, being one of my strong attributes, a critical thinker.</p>
                <p>As a designer I aspire to approach my work differently and explore all options to make it unique.</p>
            </main>
            <section>
                <div className="block">
                    <i className="fab fa-bandcamp icon"></i>
                    <h2>Branding</h2>
                    <p>Visual Identity</p>
                    <p>Brand Guidelines</p>
                    <p>Content Creation</p>
                    <p>Story Boarding</p>
                    <p>Leaflets & stationery</p>
                </div>
                <div className="block">
                    <i className="fas fa-laptop icon"></i>
                    <h2>Web Dev</h2>
                    <p>HTML/CSS</p>
                    <p>SASS/BOOTSTRAP</p>
                    <p>JavaScript/ JQUERY</p>
                    <p>React/Symfony</p>
                    <p>E-Commerce Solution</p>

                </div>
                <div className="block">
                    <i className="fas fa-object-group icon"></i>
                    <h2>Design</h2>
                    <p>Art Direction</p>
                    <p>UX - UI</p>
                    <p>Responsive design</p>
                    <p>Illustration</p>
                    <p>Prototyping</p>
                </div>


            </section>


        </div>
    )
}

export default About