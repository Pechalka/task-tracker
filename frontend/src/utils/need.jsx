import React from 'react';
import { connect } from 'react-redux';

// TODO:
// inteegrate something like this
// https://github.com/Rezonans/redux-async-connect
const need = (action) => (Component) => {
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
            } = this.props;

            this.props.action(params, query).then(() => this.setState({ loading: false }));
        },

        render() {
            return this.state.loading
                ? <div>loading...</div>
                : <Component {...this.props} />;
        },
    });

    return connect(null, {
        action,
    })(Wrapper);
};

export default need;
