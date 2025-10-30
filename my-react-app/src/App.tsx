import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './components/Products/Products';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Products} />
            </Switch>
        </Router>
    );
};

export default App;