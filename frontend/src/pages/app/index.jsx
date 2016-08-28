import React from 'react';

import { Link } from 'react-router';
require('./index.scss')
const App = ({ children }) => (
    <div>
        <div>
            <Link className='colors' to='/'>users</Link>
            <Link to='/users'>users</Link>
        </div>
        {children}
    </div>
);


export default App;
