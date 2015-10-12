var React = require('react');

var { Panel, Button, Grid, Row, Col, Navbar, Nav, NavItem } = require('react-bootstrap');


var { Navigation } = require('react-router');

var Menu = require('blocks/menu/index.jsx');


var http = require('utils/http');

var index = React.createClass({
	mixins : [Navigation],
	getInitialState: function() {
		return {
			projects : [] 
		};
	},
	componentDidMount: function() {
		http.get('/api/projects')
			.then((json) => this.setState({ projects : json }))
	},
	renderItem : function(p){
		var href = this.makeHref('tasks', { projectId : p.id })
		return <li>
			<Button bsStyle="link" href={href}>{p.title}</Button>
		</li>
	},
	render: function() {
		var projects = this.state.projects.map(this.renderItem);
		var myProjects = <Panel header={<h3>My projects</h3>}>
	    		<ul className="list-unstyled">
    				{projects}
    			</ul>
    		</Panel>

		return <div>	
			<Menu/>
			<Grid >
				<Row>
					<Col xs={4}>
						{myProjects}
					</Col>
				</Row>
			</Grid>		
    		
		</div>
	}

});

module.exports = index;