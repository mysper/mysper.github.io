import React, { Component } from 'react';
import '../style/Footer.scss';

class Footer extends Component {
    goPrivate = (e) => {
        const msg = prompt("Do u know what r u doing?(Y/N)");
        if (msg === "mysper") window.location.href = '/private';
        else alert('u have been block');
    }
    render() {
        return (
            <footer onClick={this.goPrivate} style={{ cursor: "default" }}><span>&copy 2020 MP_Studio Some Rights Reserved</span></footer>
        );
    }
}

export default Footer;