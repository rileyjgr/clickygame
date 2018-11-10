import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ClickyGame from "./ClickyGame";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route name="home" exact path="/" component={ClickyGame} />
                </div>
            </Router>
        )
    }
}
export default App;
