import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      inputTodo: '',
    };
    this.handleChangeInInput = this.handleChangeInInput.bind(this);
    this.onCheckBox = this.onCheckBox.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  handleChangeInInput(e) {
    if (e.which === 13) {
      const newTodo = { value: e.target.value, checked: false };
      this.setState({ 
        todo: this.state.todo.concat(newTodo), 
        inputTodo: '',
      });
      e.target.value = '';
    } else {
      this.setState({ inputTodo: e.target.value });
    }
  }

  onCheckBox(value) {
    const todoArray = this.state.todo;
    for (var i = 0; i < todoArray.length; i++) {
      if (todoArray[i].value === value) {
        todoArray[i].checked = !todoArray[i].checked;
        this.setState({ todo: todoArray });
      }
    }
  }

  deleteTodo(value) {
    const todoArray = this.state.todo;
    for (var i = 0; i < todoArray.length; i++) {
      if (todoArray[i].value === value) {
        todoArray.splice(i, 1);
        this.setState({ todo: todoArray });
      }
    }
  }

  render() {
    console.log(this.state.todo);
    const todoArray = this.state.todo;
    const mappedTodos = todoArray.map(todoItem => {
      // Apply checked 
      return (
        <li className={todoItem.checked ? "completed" : ''} onClick={this.onCheckBox.bind(null, todoItem.value)}>
          <div className="view">
            <label>{todoItem.value}</label>
            <button className="destroy" onClick={this.deleteTodo.bind(null, todoItem.value)}></button>
          </div>
        </li>
      );
    });
    return (
      <div>
        <section className="todoapp">
          <header className="header">
            <h1>react todos</h1>
            <input className="new-todo" 
                placeholder="What needs to be done?" 
                autoFocus={true} 
                onKeyDown={this.handleChangeInInput}
            />
          </header>
          <section className="main">
            <ul className="todo-list"> 
              {mappedTodos}
            </ul>
          </section>
        </section>        
      </div>
    );
  }
}

/*
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
              <li className="completed">
                <div className="view">
                  <input className="toggle" type="checkbox" checked="checked" onChange={() => {}} />
                  <label>Learn React</label>
                  <button className="destroy"></button>
                </div>
                <input className="edit" defaultValue="Create a cool app" />
              </li>
              <li>
                <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label>Order a pizza</label>
                  <button className="destroy"></button>
                </div>
                <input className="edit" defaultValue="Rule the web" />
              </li>
*/              
