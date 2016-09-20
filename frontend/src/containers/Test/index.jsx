import React, { Component } from 'react';
import local from 'redux-ui';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from './actions';

@local({
    state: {
        count: 0,
        text: '',
    },
    key: 'test',
    persist: true,
    reducer: (state, action) => {
        if (action.type === 'TEST_ACTION') return state.set('count', 0).set('text', '');

        return state;
    },
})
@connect(null, {
    testAction: actions.testAction,
})
class Test extends Component {
    render() {
        const { ui, updateUI, resetUI, testAction } = this.props;

        return (
            <div>
                <div>
                    <input type='text' value={ui.text} onChange={e => updateUI('text', e.target.value)} />
                </div>
                <div>
                    <Link to='/'>home</Link>
                </div>
                <div>
                    count: {ui.count}
                </div>
                <button onClick={() => updateUI('count', ui.count + 1)}>+</button>
                <button onClick={() => resetUI('count')}>reset</button>
                <button onClick={() => testAction(ui.count)}>action</button>
            </div>
        );
    }
}

export default Test;
