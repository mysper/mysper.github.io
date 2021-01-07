import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/Footer.scss';

class Footer extends Component {
    goPrivate = (e) => {
        const msg = prompt("Do u know what r u doing?(Y/N)");
        this.props.dispatch({ type: 'enter', pd: msg })
    }
    render() {
        return (
            <footer onClick={this.goPrivate} style={{ cursor: "default" }}><span>&copy 2020 MP_Studio Some Rights Reserved</span></footer>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(Footer);