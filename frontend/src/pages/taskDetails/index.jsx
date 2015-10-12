var React = require('react');

var { Well, Input, Button } = require('react-bootstrap');

var { Navigation } = require('react-router');

var http = require('utils/http');

require('./index.css')

var CommentList = React.createClass({ 
	renderComment : function(c){
		return <div className="row">
				<div className="col-xs-1">
					<div className="thumbnail">
						<img className="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" />
					</div>
				</div>
				<div className="col-xs-5">
					<div className="panel panel--comment panel-default">
						<div className="panel-heading">
							<strong>myusername</strong> <span className="text-muted">commented 5 days ago</span>
						</div>
						<div className="panel-body">
						{c.text}
						</div>
					</div>
				</div>
			</div>
	},
	render : function(){
		var comments = this.props.comments.map(this.renderComment)
		return <div className="container-fluid">
			{comments}
		</div>
	}
})

var TaskDetail = React.createClass({ 
	render : function(){
		var t = this.props.task;
		return <Well className="bs-callout bs-callout-primary">
			  <h2>{t.title}</h2>
			  <h4>{t.status}</h4>
			   
			  <p>{t.description}</p>
			  <Button onClick={this.props.onRemove}>remove</Button>
		</Well>
	}
})

var index = React.createClass({
	mixins : [React.addons.LinkedStateMixin, Navigation],
	getInitialState: function() {
		return {
			comments : [],
			task : null,
			commentText : ''
		};
	},
	addComment : function(){
		var taskId = this.props.params.id;
		var projectId = this.props.params.projectId;

		http.post('/api/projects/' + projectId + '/tasks/' + taskId + '/comments', { text : this.state.commentText })
			.then((json) => this.addItem('comments', json))
			.then(() => this.setState({ commentText : ''}))
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
	removeTask : function(){
		var taskId = this.props.params.id;
		var projectId = this.props.params.projectId;
		
		http.remove('/api/projects/' + projectId + '/tasks/' + taskId )
			.then(() => this.transitionTo('tasks', this.props.params))

	},
	componentDidMount: function() {
		var taskId = this.props.params.id;
		var projectId = this.props.params.projectId;

		http.get('/api/projects/' + projectId + '/tasks/' + taskId)
			.then((json) => this.setState({ task : json }))

		http.get('/api/projects/' + projectId + '/tasks/' + taskId + '/comments')
			.then((json) => this.setState({ comments : json }))

	},
	render: function() {
		var statuses = ['new', 'inprogress', 'close'].map((s) => <option value={s}>{s}</option>);

	
		return <div>
			{this.state.task && <TaskDetail onRemove={this.removeTask} task={this.state.task} />}

			<CommentList comments={this.state.comments}/>

			<Well>
				<Input valueLink={this.linkState('commentText')} type="textarea" label="text"/>
				<Button onClick={this.addComment}>add comment</Button>
			</Well>

		</div>
	}

});

module.exports = index;