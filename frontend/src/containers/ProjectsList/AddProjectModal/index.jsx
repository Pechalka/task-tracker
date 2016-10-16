import React from 'react';
import { Button, Label, ListGroupItem, ListGroup, Modal, Input } from 'react-bootstrap';
import { Link } from 'react-router';
import Select from 'react-select';


import 'react-select/dist/react-select.css';
const LinkedStateMixin = require('react-addons-linked-state-mixin');

import { observer } from 'mobx-react';

const AddProjectModal = observer(['projectsList', 'app'], React.createClass({
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
            addProject,
            popupOpen,
            closePopup,
        } = this.props.projectsList;

        const { users } = this.props.app;

        const allUsers = users.map(user => (
            { value: user.id, label: user.name })
        );
        const create = () => {
            const {
                userIds,
                title,
            } = this.state;
            const ids = userIds.map(item => parseInt(item.value, 10));
            addProject(title, ids);
        };

        return (
            <Modal show={popupOpen} onHide={closePopup}>
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
}));


export default AddProjectModal;

