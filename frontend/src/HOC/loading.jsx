import React from 'react';
import { connect } from 'react-redux';

// TODO:
// inteegrate something like this
// https://github.com/Rezonans/redux-async-connect
const loading = (action) => (Component) => {
    const Wrapper = React.createClass({
        getInitialState() {
            return {
                loading: true,
            };
        },

        componentWillMount() {
            const {
                params,
                location: { query },
                dispatch,
            } = this.props;

            if (Array.isArray(action)) {
                Promise.all(
                    action.map(oneAction => dispatch(oneAction(params, query)))
                ).then(() => this.setState({ loading: false }));

            } else {
                dispatch(action(params, query)).then(() => this.setState({ loading: false }));
            }
        },

        render() {
            return this.state.loading
                ? <div>loading...</div>
                : <Component {...this.props} />;
        },
    });

    return connect(null)(Wrapper);
};

export default loading;
