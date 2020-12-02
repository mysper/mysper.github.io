import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../style/transitions-animate.scss';
function AnimateSwitch(props) {
    const { children } = props;
    return (
        <Route render={
            ({ location }) => (
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        classNames={props.type || 'fade'}
                        timeout={props.during || 500}
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

export default AnimateSwitch;