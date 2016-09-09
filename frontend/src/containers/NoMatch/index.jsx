import React from 'react';
import { Link } from 'react-router';

import Main from 'components/Layouts/Main';

const NoMatch = () => (
    <Main>
        <h1>404</h1>
        <div>
            <Link to='/'>back to app</Link>
        </div>
    </Main>
);

export default NoMatch;
