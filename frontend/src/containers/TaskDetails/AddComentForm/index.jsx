
import React, { Component, PropTypes } from 'react';
import { Button, Input } from 'react-bootstrap';

import { observer } from 'mobx-react';

@observer(['taskDetails'])
class AddComentForm extends Component {

    state = { value: '' }

    static propTypes = {
        addComment: PropTypes.func,
    }

    onChange = (e) => {
        this.setState({ value: e.target.value });
    }

    addComment = () => {
        this.props.taskDetails.addComment(this.props.taskId, this.state.value);
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
