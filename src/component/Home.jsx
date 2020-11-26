import React from 'react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.scss';
import profile from '../image/profile.ico';

function Home() {
    const ref = useRef({ counter: 0 });
    useEffect(
        () => {
            window.addEventListener('keydown', function (e) {
                let str = "mysper";
                if (e.key === str[ref.current.counter])
                    ++ref.current.counter;
                else
                    ref.current.counter = 0;
                if (ref.current.counter === 6)
                    window.location = "/#";
            });
            return () => {
                window.removeEventListener('keydown', function () {

                });
            }
        },
        []
    );
    return (
        <main>
            <div className="center">
                <div className="title">
                    MiRuMo's Webside
                    </div>
                <div className="link_list">
                    <Link to="/me" className="link">About Me</Link>
                    <Link to="/" className="link">Post</Link>
                    <Link to="/" className="link">My Works</Link>
                    <Link to="/" className="link">Q&A</Link>
                </div>
                <img id="mirumo" src={profile} alt="commercial" />
            </div>
        </main>
    );
}

export default Home;