import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../style/transitions-animate.scss';

class AnimateSwitch extends Component {
    render() {
        const { children } = this.props;
        return (
            <Route render={
                ({ location }) => (
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            classNames={this.props.type || 'fade'}
                            timeout={this.props.during || 500}
                        >
                            <Switch location={location}>
                                {children}
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )
            } />
        );
    }
}

export default AnimateSwitch;