var React = require('react');

var { Grid, Button , Label, ListGroup, ListGroupItem, Input, Label, Modal } = require('react-bootstrap');
var Menu = require('blocks/menu/index.jsx');

var { Navigation } = require('react-router');
var http = require('utils/http');

require('./index.css');

var { auth } = require('utils/auth.jsx');

var Chosen = require('react-chosen');

var ProjectPopup = React.createClass({
	mixins : [React.addons.LinkedStateMixin],	
	getInitialState: function() {
		return {
			title : '',
			users : [],
			userIds : [] 
		};
	},
	componentWillReceiveProps: function(nextProps) {
		if (this.props.show == false && nextProps.show == true){
			this.setState({ userIds : [auth.getUserId()] })
		}
	},
	componentDidMount: function() {
		http.get('/api/users')
			.then((json) => this.setState({ users : json }))	
	},
	create : function(){
		var ids = this.state.userIds.map((id) => parseInt(id));

		http.post('/api/projects', { title : this.state.title })
			.then((p) => http.post('/api/projects/' + p.id + '/users', { users : ids }))
			.then((json) => {
				this.props.onSave(json);
				this.props.onHide();
				this.setState({ title : '', userIds : [] })
			})
			
	},
	change : function(e, data){
		if (data.deselected && data.deselected != auth.getUserId()){
			var index = this.state.userIds.indexOf(data.deselected);
			var newState = React.addons.update(this.state, {
				userIds : {
					$splice : [[index, 1]]
				}
			})
			this.setState(newState);			
		}

		if (data.selected){
			var newState = React.addons.update(this.state, {
				userIds : {
					//$push : [data.selected]
		//			$splice : [[1, 0, data.selected]]	
					$set :  this.state.userIds.concat(data.selected)
				}
			})
			console.log('newState ', newState)
			this.setState(newState)
		}

	},
  render : function() {
  	var allUsers = this.state.users.map((u) => <option className="test" value={u.id}>{u.name}</option>)

    return <Modal {...this.props} >
        <Modal.Body>
        	<Input valueLink={this.linkState('title')} type="text" label="project title" />
        	<b>Team:</b>
        	 <Chosen className="developer-list" inheritSelectClasses={true} onChange={this.change} value={this.state.userIds} style={{ minHieght : 200 }} width="100%" data-placeholder="Select..." multiple>
			    {allUsers}
			  </Chosen>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.create}>create</Button>
        </Modal.Footer>
      </Modal>
  }
});

var index = React.createClass({
	mixins : [Navigation],
	getInitialState: function() {
		return {
			propjects : [] ,
			popupOpen : false
		};
	},
	addItem : function(collectionName, item){
		var $update = {};
		$update[collectionName] = {
			$push : [item]
		}
		var newState = React.addons.update(this.state, $update);
		this.setState(newState);
		return item;
	},
	remove : function(state, index){
		var $update = {};
		$update[state] = {
			$splice : [[index, 1]]
		}

		var newState = React.addons.update(this.state, $update)
		this.setState(newState);
		return index;
	},
	componentDidMount: function() {
		this.fetch();
	},
	fetch : function(){
		http.get('/api/projects')
			.then((json) => this.setState({ propjects : json }))
		
	},
	removeProject : function(p, i){
		http.remove('/api/projects/' + p.id)
			.then(() => this.remove('propjects', i))
	},
	renderProject : function(p, i){
		var users = p.users.map((u)=> <span>&nbsp;<Label bsStyle='default'>{u.name}</Label></span>);
		var href = this.makeHref('tasks', { projectId : p.id })

		return <ListGroupItem>
			<div className="clearfix">
				<div className="pull-left"><Button bsStyle="link" href={href}>{p.title}</Button></div>
				<div className="pull-right">
					<Button onClick={this.removeProject.bind(null, p, i)} bsStyle='danger' bsSize='xsmall'>remove</Button>
				</div>
				<div className="pull-right">
					{users}&nbsp;
				</div>
			</div>
		</ListGroupItem>
	},
	tooglePopup : function(){
		this.setState({ popupOpen : !this.state.popupOpen })
	},
	addProject : function(project){
//		this.addItem('propjects', project)
		this.fetch();
	},
	render: function() {
		var list = this.state.propjects.map(this.renderProject);

		return <div>
			<Menu/>
			<ProjectPopup show={this.state.popupOpen} onSave={this.addProject} onHide={this.tooglePopup} />
			<Grid>
				<ListGroup>
					<ListGroupItem>
						<div className="clearfix">
							<div className="pull-left">
								<h5>My projects</h5>
							</div>
							<div className="pull-right">
								<Button onClick={this.tooglePopup}>add project</Button>
							</div>
						</div>
						
					</ListGroupItem>

					{list}
					
				</ListGroup>
			</Grid>
		</div>
	}

});

module.exports = index;