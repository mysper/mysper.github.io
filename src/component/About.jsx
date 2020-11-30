import '../style/About.scss';
function About() {

    return (
        <main id="aboutme">
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
            <div class="contact-me">
                <h3>Contact Me</h3>
                <span>Gmail:&#9;&#9;&#9;&#9;&#9;anthony.a3203@gmail.com</span>
                <a href="https://t.me/@Mirumodapon">Telegram:&#9;&#9;@Mirumodapon</a>
                <a href="https://twitter.com/storyOFmysper">Twitter:&#9;&#9;&#9;@storyOFmysper</a>
                <a href="https://www.instagram.com/mirumo_0915/">Instagram:&#9;@mirumo_0915</a>
            </div>
            <img src="https://www.gravatar.com/avatar/b73e70db41cabc52e25aa9ade99500a1?s=350" alt="my-gravatar" />
        </main>
    );
}

export default About;