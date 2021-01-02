import React from 'react';
import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import '../style/Home.scss';
import profile from '../image/profile.ico';

function Home() {
    const ref = useRef({ counter: 0 });
    let history = useHistory();
    useEffect(
        () => {
            window.addEventListener('keydown', function (e) {
                let str = "mysper";
                if (e.key === str[ref.current.counter])
                    ++ref.current.counter;
                else
                    ref.current.counter = 0;
                if (ref.current.counter === 6)
                    history.push("/private");
            });
            return () => {
                window.removeEventListener('keydown', function () {

                });
            }
        },
        [history]
    );
    return (
        <nav>
            <div className="center">
                <div className="title">
                    MiRuMo's Webside
                    </div>
                <div className="link_list">
                    <div onClick={() => history.push('/me')} className="link">About Me</div>
                    <div onClick={() => history.push('/post')} className="link">Post</div>
                    <div onClick={() => history.push('/work')} className="link">My Works</div>
                </div>
                <img id="mirumo" src={profile} alt="commercial" />
            </div>
        </nav>
    );
}

export default Home;