
import local from 'redux-ui';

export function testAction(v) {
    return (dispatch) => {
        alert(v);
        dispatch({ type: 'TEST_ACTION' });
    };
}

