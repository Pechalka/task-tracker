import React from 'react';
import { Button, Label, ListGroupItem, ListGroup, Modal, Input } from 'react-bootstrap';
import { Link } from 'react-router';
import Select from 'react-select';

const ProductItem = ({ product, removeProject }) => {
    const users = (product.users || [])
        .map(user => <span>&nbsp;<Label bsStyle='default'>{user.name}</Label></span>);

    return (
        <ListGroupItem>
            <div className='clearfix'>
                <div className='pull-left'>
                    <Link to={`/projects/${product.id}/tasks`}>{product.title}</Link>
                </div>
                <div className='pull-right'>
                    <Button
                      onClick={() => removeProject(product)}
                      bsStyle='danger'
                      bsSize='xsmall'
                    >remove</Button>
                </div>
                <div className='pull-right'>
                    {users}&nbsp;
                </div>
            </div>
        </ListGroupItem>
    );
};

const ProjectsList = ({ openPopup, projects, removeProject }) => (
    <ListGroup>
        <ListGroupItem>
            <div className='clearfix'>
                <div className='pull-left'>
                    <h5>My projects</h5>
                </div>
            </div>

        </ListGroupItem>

        {projects.map(product => (
            <ProductItem
              key={product.id}
              product={product}
              removeProject={removeProject}
            />)
        )}

    </ListGroup>
);
import 'react-select/dist/react-select.css';
const LinkedStateMixin = require('react-addons-linked-state-mixin');

const ProjectPopup = React.createClass({
    mixins: [LinkedStateMixin],
    getInitialState() {
        return {
            title: '',
            userIds: [],
        };
    },
    onChange(value) {
        this.setState({
            userIds: value,
        });
    },

    render() {
        const {
            users,
            addProject,
        } = this.props;

        const allUsers = users.map(user => (
            { value: user.id, label: user.name })
        );
        const create = () => {
            const {
                userIds,
                title,
            } = this.state;
            const ids = userIds.map(id => parseInt(id, 10));
            addProject(title, ids);
        };

        return (
            <Modal {...this.props} >
            <Modal.Body>
             <Input valueLink={this.linkState('title')} type='text' label='project title' />
             <b>Team:</b>
                <Select
                  searchable={true}
                  multi={true}
                  value={this.state.userIds}
                  onChange={this.onChange}
                  options={allUsers}
                />

            </Modal.Body>
            <Modal.Footer>
              <Button onClick={create}>create</Button>
            </Modal.Footer>
          </Modal>
        );
    },
});

export {
    ProductItem,
    ProjectsList,
    ProjectPopup,
};
