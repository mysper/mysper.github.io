import Home from './component/App';
import App from './component/App';
import Post from './component/Post';
import Work from './component/Work';
import About from './component/About';
import Private from './component/Private';
export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/me" component={About} exact></Route>
        <Route path="/post" component={Post} exact></Route>
        <Route path="/work" component={Work} exact></Route>
        <Route path="/private" component={Private} exact></Route>
    </Route>
);