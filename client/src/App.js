import React from 'react';
import { Route } from 'react-router-dom';

import Calculator from './components/Calculator';
import '../public/css/styles.css';

const App = () => {
    const styles = {
        display: 'flex',
        flexFlow: 'column',
        height: '100vh',
    };

    return (
        <div style={styles}>
            <Route path='/'>
                <Calculator />
            </Route>
        </div>
    );
};

export default App;