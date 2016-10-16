import React, { Component } from 'react';
import axios from 'axios';

function rest(propsName, url) {
    return (WComponent) => {
        class Wrapper extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    items: [],
                    loading: true,
                    item: null,
                };
            }

            featchOne = (id) => {
                const _url = url(this.props.params);
                this.setState({ loading: true });
                return axios.get(`${_url}/${id}`)
                        .then(response => response.data)
                        .then(item => this.setState({ item, loading: false }));
            }

            featch = () => {
                return axios.get(url(this.props.params))
                        .then(response => {
                            this.setState({ items: response.data });
                        });
            }
            add = (data) => {
                return axios.post(url(this.props.params), data)
                        .then(response => response.data)
                        .then(item => this.push(item));
            }

            push = (item) => {
                const items = this.state.items.concat([item]);
                this.setState({ items });
                return item;
            }

            removeLocal = (item) => {
                const items = this.state.items.filter(_item => _item.id !== item.id);
                this.setState({ items });
            }

            remove = (item) => {
                return axios.delete(`${url(this.props.params)}/${item.id}`)
                        .then(() => this.removeLocal(item));
            }

            componentDidMount() {
            }
            render() {
                const {
                    items,
                    item,
                    loading,
                } = this.state;

                const props = {
                    [propsName]: {
                        items,
                        featch: this.featch,
                        add: this.add,
                        featchOne: this.featchOne,
                        remove: this.remove,
                        loading,
                        item,
                    },
                    ...this.props,
                };

                return (
                    <WComponent
                      {...props}
                    />
                );
            }
        }

        return Wrapper;
    };
}


@rest('comments', ({ id }) => `/api/tasks/${id}/comments`)
@rest('tasks', ({ id }) => '/api/tasks')
class Test extends Component {
    componentDidMount() {
        this.props.comments.featch();
        this.props.tasks.featchOne(this.props.params.id);
    }

    addProject = (e) => {
        const text = this.refs.input.value;
        this.props.comments.add({ text, userName: 'vasa' });
        this.refs.input.value = '';
    }

    render() {
        const {
            items,
            remove,
        } = this.props.comments;

        const {
            item,
            loading,
        } = this.props.tasks;

        const rows = items.map(comment => (
            <div key={comment.id}>
                <span>{comment.text}</span>
                <button onClick={() => remove(comment)}>remove</button>
            </div>
        ));

        return (
            <div>
                {!loading && <div>
                    <h2>{item.title}</h2>
                </div>}
                <div>
                    {rows}
                </div>
                <div>
                    <input ref='input' type='text' />
                    <button onClick={this.addProject}>add</button>
                </div>
            </div>
        );
    }
}

export default Test;

