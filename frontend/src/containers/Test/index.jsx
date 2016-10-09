import React, { Component } from 'react';

//import axios from 'axios';

import axios from 'axios';
import cancelXhrAdapter from 'axios-cancel';
import {Cancellation} from 'axios-cancel/cancel';

//let request;
let cancelRequest;
class Test extends Component {
    click = () => {
        //axios.abort('q');
        // if (request) request.abort();

        // request = axios({
        //     url: '/api/test',
        //     method: 'get',
        //     requestId: 'q'
        // });

        // request.then(function(){
        //         alert(1)
        //     });

        // if (cancelRequest) cancelRequest();

        // let promise = new Promise((resolve) => {
        //   cancelRequest = resolve
        // });

        // // window.addEventListener('beforeunload', (e) => {
        // //   cancelRequest()
        // // })

        // axios.get('/api/test', {
        //   timeout: 1000
        // }).then(function(){
        //     alert(1);
        // });
        if (this.cancellation) this.cancellation.cancel('test');

        this.cancellation = new Cancellation();
        axios('/api/test', {
          adapter: cancelXhrAdapter,
          cancellation: this.cancellation
        }).then(({data}) => {
          this.cancellation = null;
          alert('ok')
        }).catch((e) => {
            console.log(e)
        });


        // var config = {
        //   method: 'get',
        //   url: '/api/test'
        // };
        // axios(config);
        // console.log(config);

    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.click}>test</button>
                </div>
            </div>
        );
    }
}

export default Test;
