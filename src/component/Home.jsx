import React, { Component } from 'react';
import '../style/Home.scss';
import profile from '../image/profile.ico';

class Home extends Component {
    constructor(props) {
        super(props);
        window.addEventListener('keydown', this.keyEvent);
    }
    keyEvent(e) {
        let str = "mysper";
        if (e.key === str[this.counter])
            ++this.counter;
        else
            this.counter = 0;
        if (this.counter === 6) {
            this.props.history.push("/private");
        }
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.keyEvent);
        this.counter = 0;
    }
    counter = 0;
    render() {
        return (
            <nav>
                <div className="center">
                    <div className="title">
                        MiRuMo's Webside
                    </div>
                    <div className="link_list">
                        <div onClick={() => this.props.history.push('/me')} className="link">About Me</div>
                        <div onClick={() => this.props.history.push('/post')} className="link">Post</div>
                        <div onClick={() => this.props.history.push('/work')} className="link">My Works</div>
                    </div>
                    <img id="mirumo" src={profile} alt="commercial" />
                </div>
            </nav>
        );
    }
}
export default Home;