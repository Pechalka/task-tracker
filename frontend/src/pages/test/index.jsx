var React = require('react');


var { Button, Input, Grid, OverlayTrigger, Tooltip } = require('react-bootstrap');

var Formsy = require('formsy-react');


var VInput = React.createClass({
	mixins: [Formsy.Mixin],
	changeValue: function (event) {
     	this.setValue(event.currentTarget.value);
    },
    _onBlur: function (event) {
    	//this.props.validate(this);
    	//this.showError();
    	this.setState({ _isPristine : false })
  	},
	render : function(){
	//	console.log('this.isPristine() ', this.isPristine())
		var hasError = (!this.isValid() && (this.isFormSubmitted() || !this.isPristine()));
		var bsStyle = hasError  ? 'error' : null;
		var errorMessage = this.getErrorMessage();
	
		//console.log('this.showRequired()', this.showRequired());

		var tooltip =  <Tooltip placement="bottom" className="in">{errorMessage}</Tooltip>
	
	//onBlur={this._onBlur}

		return <div>
			<Input name={this.props.name} label={this.props.label} type={this.props.type} onBlur={this._onBlur} onChange={this.changeValue}  bsStyle={bsStyle} >
				{this.props.children}
			</Input>
			<div style={{ position : 'relative', top : -20 }}>{hasError && tooltip}</div>				
		</div>
	}
})

var test = React.createClass({
	getInitialState: function() {
		return {
			canSubmit : false 
		};
	},
 	enableButton: function () {
      	this.setState({
        	canSubmit: true
      	});
    },
    disableButton: function () {
      	this.setState({
        	canSubmit: false
      	});
    },
    submit: function (model) {
    	alert(model.name)
    },
	render: function() {
		var options = ['new', 'completed'].map((s) =>  <option value={s}>{s}</option>)
		return <div>
			<Grid>
				<Formsy.Form preventExternalInvalidation onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
					<VInput name="email" label="email" type="text" validations="isEmail" validationError="This is not a valid email" />
					<VInput name="name" label="name" type="text" validations="minLength:1" validationError="name sholud be" />
					<VInput name="status" label="status" type='select'  validations="equals:new" validationError="status sholud new">
						{options}
					</VInput>
					<Button type="submit">save</Button>
				</Formsy.Form>
			</Grid>
		</div>
	}

});

// var MyInput = React.createClass({
//   mixins: [Formsy.Mixin],
//   getInitialState: function() {
//   	return {
//   		showValidation : false
//   	};
//   },
//   changeValue: function (event) {
//     this.setValue(event.currentTarget.value);
//     this.setState({ showValidation : true })
//   },
//   render: function () {
//     var color = 'gray';
//     if (this.showError()  && this.state.showValidation ) {
//       color = 'red';
//     }
//     var border = {
//       border: '1px solid ' + color
//     };
//     return (
//       <div>
//         <input style={border} onChange={this.changeValue}/>
//         <span>{this.state.showValidation && this.getErrorMessage()}</span> 
//       </div>
//     );
//   }
// });

// var MyTestComp = React.createClass({
//   render: function () {
//     return (
//       <Formsy.Form url="http://localhost:3000/postform" hideSubmit>
//         <MyInput name="email" validations="isEmail" validationError="This is not an email"/>
//         <button type="submit">submit</button>
//       </Formsy.Form>
//     );
//   }
// });

module.exports = test;




