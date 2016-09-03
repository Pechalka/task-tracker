import React from 'react';
import { connect } from 'react-redux';
//import { pushState } from 'redux-router';

import { Menu } from 'components/Menu/';

import { checkAuth, logout } from 'reduxApp/modules/auth';

export const MenuContainer = connect(
    state => ({
        projectId: state.router.params.projectId,
        router: state.router,
    }),
    { logout }
)(Menu);

export function requireAuthentication(Component) {
    class AuthenticatedComponent extends React.Component {
        componentWillMount() {
            this.props.checkAuth();
        }

        // componentWillReceiveProps(nextProps) {
        //     this.checkAuth();
        // }

        // checkAuth() {
        //     if (!this.props.isAuthenticated) {
        //         let redirectAfterLogin = this.props.location.pathname
        //         this.props.dispatch(pushState(null, `/login?next=${redirectAfterLogin}`))
        //     }
        // }

        render() {

            return (
                <div>
                {this.props.isAuthenticated === true
                ? <Component {...this.props}/>
                : null
                }
                </div>
            );
        }
    }


    return connect(
        (state) => ({
            isAuthenticated: !!state.auth.user,
        }),
        { checkAuth }
    )(AuthenticatedComponent);
};
