import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import Calculator from './components/Calculator';

const App = () => {
    return (
        <div className='wrap __wrap'>
            <Route path='/'>
                <Header />
                <Calculator />
            </Route>
        </div>
    );
};

export default App;