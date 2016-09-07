import React, { Component } from 'react';

import { observable, computed, action  } from 'mobx';
import { observer } from "mobx-react";

const nextId = () => (new Date).getTime();


class TodoList {
    @observable todoList = [];

    @observable filter = 'all';

    @action
    changeFilter(newFilter) {
        this.filter = newFilter;
    }

    @computed get visableItems() {
        const filter = this.filter;
        if (filter === 'complieted') return this.todoList.filter(todo => !!todo.complieted);
        if (filter === 'notComplieted') return this.todoList.filter(todo => !todo.complieted);

        return this.todoList;
    }

    @action
    addTodo(title) {
        this.todoList.push({ title, id: nextId(), complieted: false });
    }

    @action removeTodo(todo) {
        this.todoList.remove(todo);
    }

    @action
    toogleTodo(todo) {
        todo.complieted = !todo.complieted;
    }
}

const todoList = new TodoList();
todoList.addTodo('test1');
todoList.addTodo('test2');
todoList.addTodo('test3');

// const todoList = observable([
//     {
//         title: 'lear mobx',
//         id: 1,
//         complieted: false,
//     },
//     {
//         title: 'write project with mobx',
//         id: 2,
//         complieted: false,
//     },
// ]);


// const addTodo = action((title) => {
//     todoList.push({ title: title, id: nextId(), complieted: false });
// });

// const removeTodo = action((todo) => {
//     todoList.remove(todo);
// });

// const toogleTodo = action((todo) => {
//     todo.complieted = !todo.complieted;
// });

const ListItem = observer(({ item, remove, toogle }) => {
    return (
        <div style={{ textDecoration: item.complieted ? 'line-through' : null }}>
            <span onClick={() => toogle(item)}>{item.title}</span>
            <button onClick={() => remove(item)}>remove</button>
        </div>
    );
});

const List = observer(({ todoList: { visableItems }, remove, toogle }) => {
    return (
        <div>
            {visableItems.map(item => (
                <ListItem key={item.id} item={item} remove={remove} toogle={toogle} />
            ))}
        </div>
    );
});

const AddForm = ({ add }) => {
    let input;

    return (
        <div>
            <input ref={node => input = node} />
            <button onClick={() => {
                add(input.value);
                input.value = '';
            }}>add</button>
        </div>
    );
};

const Filter = observer(({ todoList: { filter }, changeFilter }) => {
    console.log('filter>', filter)
    return (
        <div>
            <div className={filter === 'all' && 'active'} onClick={() => changeFilter('all')}>all</div>
            <div className={filter === 'complieted' && 'active'} onClick={() => changeFilter('complieted')}>complieted</div>
            <div className={filter === 'notComplieted' && 'active'} onClick={() => changeFilter('notComplieted')}>not complited</div>
        </div>
    );
});

import './index.css';

export default class Test extends Component {
    render() {
        return (
            <div>
                <Filter
                  todoList={todoList}
                  changeFilter={filter => todoList.changeFilter(filter)}
                />
                <List
                  todoList={todoList}
                  remove={todoList.removeTodo}
                  remove={(item) => todoList.removeTodo(item)}
                  toogle={todoList.toogleTodo}
                />
                <AddForm add={title => todoList.addTodo(title)} />
            </div>
        );
    }
}
