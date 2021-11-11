import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from './components/main/Navigation';
import Calculator from './components/main/Calculator';
import '../public/css/styles.css';

const App = () => {
    const styles = {
        height: '100%',
    };

    return (
        <div style={styles}>
            <Navigation />
            <Route path='/'>
                <Calculator />
            </Route>
        </div>
    );
};

export default App;