import React, { Component, PropTypes } from 'react';
import { Button, Input } from 'react-bootstrap';

class AddComentForm extends Component {

    state = { value: '' }

    static propTypes = {
        addComment: PropTypes.func,
    }

    onChange = (e) => {
        this.setState({ value: e.target.value });
    }

    addComment = () => {
        this.props.addComment(this.state.value);
        this.setState({ value: '' });
    }

    render() {
        return (
            <div>
                <form>
                    <Input
                      value={this.state.value}
                      onChange={this.onChange}
                      type='textarea'
                      label='comment'
                    />
                    <Button onClick={this.addComment}>add coment</Button>
                </form>
            </div>
        );
    }
}


export default AddComentForm;
