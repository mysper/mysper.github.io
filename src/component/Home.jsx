import React, { Component } from 'react';
import '../style/Home.scss';
import profile from '../image/profile.ico';

class Home extends Component {
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