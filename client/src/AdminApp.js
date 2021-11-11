import React from 'react';
import { Route } from 'react-router-dom';

import Create from './components/crud/Create';
import Dashboard from './components/crud/Dashboard';
import '../public/css/admin-styles.css';

const App = () => {
    return (
        <div>
            <Route path='/'>
                <Dashboard />
            </Route>
            <Route path='/create'>
                <Create />
            </Route>
        </div>
    );
};

export default App;