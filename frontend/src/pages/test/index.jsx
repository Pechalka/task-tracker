var React = require('react');

var cx = require('classnames');

<<<<<<< HEAD
var _ = require('lodash');

import {observer,  } from 'mobx-react';
import {observable, transaction} from 'mobx';
=======
require('./index.css')

>>>>>>> migrate to new stack

var RadioButton = React.createClass({
	render : function(){
		var id = this.props.id;

		return <div className="radio-button">
			<input onChange={this.props.onChange} checked={this.props.checked} id={id} type="radio" className="radio" name={this.props.name}  />
			<label htmlFor={id}>{this.props.children}</label>		
		</div>
	}
})

<<<<<<< HEAD
import './index.css'

var todoStore = observable({
	todos : [],
	filter : 'all',

	filterItems : function(){
		if (this.filter == 'completed') return this.todos.filter(t => t.completed);

		return this.todos;
	}
})

todoStore.addTodo = function(title){
	setTimeout(function(){
		transaction(() => {
		//	todoStore.filter = 'all'
			todoStore.todos.push({
				title : title,
				id : new Date().getTime(),
				completed : false
			})
		})
				
	}, 200)

}

todoStore.removeTodo = function(todo){
	todoStore.todos = todoStore.todos.filter(t => t.id != todo.id )
}

todoStore.toggleTodo = function(todo){
	todo.completed = !todo.completed;
}

todoStore.changeFilter = function(newFilter){
	todoStore.filter = newFilter
}

//var PureRenderMixin = require('react-addons-pure-render-mixin');

var Filter = React.createClass({
	
	componentWillReceiveProps: function(nextProps) {
		console.log(this.props == nextProps, this.props, nextProps);
	},
	render : function(){
		var { changeFilter, filter } = this.props;
=======
var PaymentMethod = React.createClass({
	changeMethod : function(paymentMethod){
		this.props.onChange(paymentMethod);
	},
	render : function(){
		var paymentMethod = this.props.paymentMethod;

		return <div>
			<RadioButton onChange={this.changeMethod.bind(null, "cache")} checked={paymentMethod == "cache"} id="cache" name="paid-type">
				<b>Наличными специалисту</b>
				<span>Вы получите бесплатный выезд</span>
			</RadioButton>
			<RadioButton onChange={this.changeMethod.bind(null, "online")} checked={paymentMethod == "online"} id="online" name="paid-type">
				<b>Онлайн оплата</b>
				<span>Мы принимаем</span>
			</RadioButton>
			<RadioButton onChange={this.changeMethod.bind(null, "card")} checked={paymentMethod == "card"} id="card" name="paid-type">
				<b>Наличными или банковской картой</b>
			</RadioButton>
		</div>
	}
})

var CacheOrderForm = React.createClass({
	render : function(){
		return <div>
			<div>CacheOrderForm</div>
			<button onClick={this.props.onCreate}>Бронировать тур на 48 часов</button>
		</div>
	}
})

var OnlineOrderForm = React.createClass({
	render : function(){
		return <div>
			<div>OnlineOrderForm</div>

			<button onClick={this.props.onCreate}>Бронировать тур на 48 часов</button>
		</div>
	}
})

var CardOrderForm = React.createClass({
	render : function(){
		return <div>
			TODO
		</div>
	}
})


var OrderInfo = React.createClass({
	render : function(){
		return <div>
			OrderInfo
		</div>
	}
})

var FieldItem = React.createClass({
	render : function(){
		return <div>
			<div>{this.props.label}</div>
			<div>{this.props.children}</div>
		</div>
	}
})

var CacheOrderInfo = React.createClass({
	render : function(){
		var price = 17500000;

		return <div>
			<PopupPanel>
				<div>
					<div>
						<FieldItem label="Стоимость тура:">
							{price}
						</FieldItem>
						<FieldItem label="Топливный сбор:">
							Включен
						</FieldItem>
						<FieldItem label="Предоплата (33%):">
							{price/100*33}
						</FieldItem>
						<div>
							<FieldItem label="Бронируя тур у нас вы получаете:">
							</FieldItem>							
						</div>
					</div>
					<div>
						<FieldItem label="Туроператор">
							Tez tour
						</FieldItem>
						<FieldItem label="Дополнительные условия">
							Включены: петание, перелет, проживание.
							Не включены: визовый сбор.
						</FieldItem>
						<a>Просмотреть все условия</a>
					</div>
				</div>
			</PopupPanel>
		</div>
	}
})

var OnlineOrderInfo = React.createClass({
	render : function(){
		return <div>
			<PopupPanel>
			OnlineOrderInfo
			</PopupPanel>
		</div>
	}
})

var CardOrderInfo = React.createClass({
	render : function(){
		return <div>
			<PopupPanel>
			CardOrderInfo
			</PopupPanel>
		</div>
	}
})


var Button = React.createClass({
	render : function(){
		return <button>{this.props.children}</button>
	}
})

var PopupPanel = React.createClass({
	render : function(){
		return <div>
			{this.props.children}
		</div>
	}
})

var ComplitedOrder = React.createClass({
	render : function(){
		return <div>
			<h2>Отлично</h2>
			<h3>Вы забронировали тур на 48 часов</h3>
			<div>
				Номер вашего заказа<br/>
				<span>#51626364</span>
			</div>

			<PopupPanel>
				<p>
					Сохраните, а еще лучше распечатайте pdf c вашими турами.<br/>
					С ним вы можете обратится в любое из перечисленных агенств<br/>
					и оформить все документы.
				</p>
				<Button>Скачать pdf с нашими турами</Button>
			</PopupPanel>
			<AgentsPartners partners={this.props.partners}/>
		</div>
	}
})
>>>>>>> migrate to new stack

var AgentsPartners = React.createClass({
	renderItem : function(p){
		return <tr key={p.id}>
			<td>{p.name}</td>
			<td>{p.address}</td>
			<td>{p.workingHours}</td>
			<td>{p.phones}</td>
		</tr>
	},

	render : function(){
		var rows = this.props.partners.map(this.renderItem);
		return <div>
<<<<<<< HEAD
			<a onClick={() => changeFilter('all')} className={cx({ 'active' : filter == 'all'})} href="javascript:void(0)">all</a>
			<a onClick={() => changeFilter('completed')} className={cx({ 'active' : filter == 'completed'})} href="javascript:void(0)">complted</a>
=======
			
			<div>
				<select>
					<option>Минск</option>
				</select>
				<a href="javascript:void(0)">Показать на карте</a>
			</div>

			<table >
   				<caption>Наши агенты-партнеры</caption>
   				<tr>
    				<th>Название</th>
    				<th>Адрес</th>
    				<th>Время работы</th>
    				<th>Контактный телефон</th>
   				</tr>
  				{rows}
  			</table>
>>>>>>> migrate to new stack
		</div>
	}
})

<<<<<<< HEAD

var Panel = observer(React.createClass({
	addTodo : function() {
		const input = React.findDOMNode(this.refs.input);
		const title = input.value;
		this.props.model.addTodo(title);
		input.value = '';
	},
	
	componentWillReceiveProps: function(nextProps)  {
	    console.log(this.props.model == nextProps.model)
	},


	render : function(){
		console.log(' render ');

		const { todos, filter, addTodo, removeTodo, toggleTodo, changeFilter, filterItems } = this.props.model;

		return <div>
			<Filter filter={this.props.model.filter} changeFilter={this.props.model.changeFilter} />

			<div>
				{ filterItems.map(todo => (
					<div style={{cursor : 'pointer', textDecoration : todo.completed ? 'line-through' : null }}>
						<span onClick={() => toggleTodo(todo)}>{todo.title}</span>
						<button onClick={() => removeTodo(todo)}>remove</button>
					</div>
				))}
			</div>
			<div>
				<input ref="input" type="text" />
				<button onClick={this.addTodo}>add</button>
=======
var test = React.createClass({
	getInitialState: function() {
		return {
			paymentMethod : 'cache',
			orderStatus : null,
			partners : [
				{ 
					id : 1,
					name : 'Apex Tour', 
					address : 'ул.Кропоткина, 93А', 
					workingHours : 'пн-пт 9:00 - 18:00, сб 10:00 - 15:00',
					phones : '22-33-44'
				},
				{ 
					id : 2,
					name : 'Apex Tour', 
					address : 'ул.Кропоткина, 93А', 
					workingHours : 'пн-пт 9:00 - 18:00, сб 10:00 - 15:00',
					phones : '22-33-44'
				},
				{ 
					id : 3,
					name : 'Apex Tour', 
					address : 'ул.Кропоткина, 93А', 
					workingHours : 'пн-пт 9:00 - 18:00, сб 10:00 - 15:00',
					phones : '22-33-44'
				}
			] 
		};
	},
	
	chagePaymentMethod : function(paymentMethod){
		this.setState({ paymentMethod });
	},
	
	createOrder : function(order){
		this.setState({
			orderStatus : 'complited'
		})
	},

	render: function() {
		if (this.state.orderStatus == 'complited'){
			return <ComplitedOrder partners={this.state.partners}/>
		}

		var form, info;

		switch(this.state.paymentMethod){
			case "cache":
				form = <CacheOrderForm onCreate={this.createOrder}/>;
				info = <CacheOrderInfo/>
			break;
			case "online":
				form = <OnlineOrderForm/>;
				info = <OnlineOrderInfo/>;
			break;
			case "card":
				form = <CardOrderForm onCreate={this.createOrder}/>;
				info = <CardOrderInfo/>
			break;

		}

		return <div>
			<OrderInfo/>

			{info}

			<div>
				<div>
					<PaymentMethod paymentMethod={this.state.paymentMethod} onChange={this.chagePaymentMethod}/>
				</div>
				<div>
					{form}
				</div>
>>>>>>> migrate to new stack
			</div>
		</div>
	}
}))


<<<<<<< HEAD
var Test = React.createClass({

	render: function() {
		return <div>			
			<Panel model={todoStore}/>
		</div>
	}

});
=======

module.exports = test;
>>>>>>> migrate to new stack


todoStore.addTodo("1111");
todoStore.addTodo("2222");
todoStore.addTodo("3333");


module.exports = Test;