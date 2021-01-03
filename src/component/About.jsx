import React, { Component } from 'react';
import '../style/About.scss';
class About extends Component {
    render() {
        return (
            <main id="aboutme" >
                <div className="introd">
                    <h2>Mirumo</h2>
                    <ul>
                        <li>林冠渝(Kuan-Yu Lin) / 咪路</li>
                        <li>UI/UX Learner</li>
                        <li>Web Application Engineer</li>
                        <li>CHSH</li>
                        <li>NPTU</li>
                    </ul>
                </div>
                <div className="contact-me">
                    <h3>Contact Me</h3>
                    <span>Gmail:&#9;&#9;&#9;&#9;&#9;anthony.a3203@gmail.com</span>
                    <span>Telegram:&#9;&#9;<a href="https://t.me/@Mirumodapon" target="_blank" rel="noreferrer">@Mirumodapon</a></span>
                    <span>Twitter:&#9;&#9;&#9;<a href="https://twitter.com/storyOFmysper" target="_blank" rel="noreferrer">@storyOFmysper</a></span>
                    <span>Instagram:&#9;<a href="https://www.instagram.com/mirumo_0915/" target="_blank" rel="noreferrer">@mirumo_0915</a></span>
                </div>
                <img src="https://www.gravatar.com/avatar/b73e70db41cabc52e25aa9ade99500a1?s=350" alt="my-gravatar" />
            </main>
        );
    }
}

export default About;