var React = require('react');

var { Grid, Button , Label, ListGroup, ListGroupItem, Input, Label, Modal } = require('react-bootstrap');
var Menu = require('blocks/menu/index.jsx');

var http = require('utils/http');

require('./index.css');

// var { auth } = require('utils/auth.jsx');

// const Chosen = require('react-chosen');

const LinkedStateMixin = require('react-addons-linked-state-mixin');


let ProjectPopup = React.createClass({
	mixins: [LinkedStateMixin],
	getInitialState() {
		return {
			title: '',
			userIds: [],
		};
	},
    // TODO: react-select  https://github.com/JedWatson/react-select
    render() {
        const {
            users,
            addProject,
        } = this.props;

        const allUsers = users.map(user => (
            <option
              key={user.id}
              className='test'
              value={user.id}
            >{user.name}</option>)
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
                <select
                  value={this.state.userIds[0]}
                  onChange={e => this.setState({ userIds: [e.target.value] })}
                >
                    {allUsers}
                </select>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={create}>create</Button>
            </Modal.Footer>
          </Modal>
        );
    },
});

ProjectPopup = connect(
    state => ({
        show: state.projects.popupOpen,
        users: state.projects.users,
    }),
    { onHide: closePopup, addProject }
)(ProjectPopup);


const ProductItem = ({ product, removeProject }) => {
    const users = (product.users || []).map(user => <span>&nbsp;<Label bsStyle='default'>{user.name}</Label></span>);
    const href = '#';// this.makeHref('tasks', { projectId : p.id })

    return (
        <ListGroupItem>
            <div className='clearfix'>
                <div className='pull-left'>
                    <Button bsStyle='link' href={href}>{product.title}</Button>
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

let ProjectsList = React.createClass({
    componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchUsers();
    },

    render() {
        const {
            projects,
            openPopup,
            removeProject,
        } = this.props;

        const list = projects.map(product => (
            <ProductItem
              product={product}
              removeProject={removeProject}
            />)
        );

        return (
            <div>
			<Menu />
			<ProjectPopup />
    			<Grid>
    				<ListGroup>
    					<ListGroupItem>
    						<div className='clearfix'>
    							<div className='pull-left'>
    								<h5>My projects</h5>
    							</div>
    							<div className='pull-right'>
    								<Button onClick={() => openPopup()}>add project</Button>
    							</div>
    						</div>

    					</ListGroupItem>

    					{list}

    				</ListGroup>
    			</Grid>
    		</div>
        );
	},
});

import { connect } from 'react-redux';
import { fetchProducts, removeProject, openPopup, closePopup, addProject, fetchUsers } from 'modules/projects';

ProjectsList = connect(
    state => ({
        projects: state.projects.projects,
    }),
    { fetchProducts, removeProject, openPopup, fetchUsers }
)(ProjectsList);

module.exports = ProjectsList;
