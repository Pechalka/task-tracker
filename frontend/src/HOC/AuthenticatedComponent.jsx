import React from 'react';

import { observer } from 'mobx-react';

export function requireAuthentication(Component) {

    @observer(['auth'])
    class AuthenticatedComponent extends React.Component {
        componentWillMount() {
            this.props.auth.checkAuth();
        }

        // componentWillReceiveProps(nextProps) {
        //     this.checkAuth();
        // }

        // checkAuth() {
        //     // if (!this.props.isAuthenticated) {
        //     //     let redirectAfterLogin = this.props.location.pathname
        //     //     this.props.dispatch(pushState(null, `/login?next=${redirectAfterLogin}`))
        //     // }
        //     this.props.auth.checkAuth()
        //         // .then(() => {
        //         //     debugger
        //         // })
        //         .catch(() => {
        //             debugger
        //             this.props.router.push('/login');
        //         });
        // }

        render() {
            const { isAuthenticated } = this.props.auth;
            return (
                <div>
                {isAuthenticated === true
                ? <Component {...this.props} />
                : null
                }
                </div>
            );
        }
    }

    return AuthenticatedComponent;

};
