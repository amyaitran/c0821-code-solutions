import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/todos')
      .then(response => response.json())
      .then(data => {
        this.setState({ todos: data });
      });
  }

  addTodo(newTodo) {
    /**
    * Use fetch to send a POST request to `/api/todos`.
    * Then 😉, once the response JSON is received and parsed,
    * add the created todo to the state array.
    *
    * Do not mutate the original state array, nor any objects within it.
    * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
    *
    * TIP: Be sure to SERIALIZE the todo object in the body with JSON.stringify()
    * and specify the "Content-Type" header as "application/json"
    *
    * TIP: Use Array.prototype.concat to create a new array containing the contents
    * of the old array, plus the object returned by the server.
    *
    */
    fetch('http://localhost:3000/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo)
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ todos: this.state.todos.concat(data) });
      });
  }

  toggleCompleted(todoId) {
    /**
     * Applies a partial update to the todo object identified by its todoId in the URL.
     * The todoId of the target todo object should be in the request target,
     * while the isCompleted property of the todo should be in the request body.
     * The whole updated todo is returned in the response body.
     *
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     * replace the old todo in the state array.
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list should "toggle" its isCompleted status back and forth.
     *
     * Do not mutate the original state array, nor any objects within it.
     * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */

    // const todos = this.state.todos;
    // let toggledTodo = null;
    // for (let i = 0; i < todos.length; i++) {
    //   if (todos[i].todoId === todoId) {
    //     toggledTodo = todos[i];
    //     toggledTodo.isCompleted = !todos[i].todoId.isCompleted;
    //   }
    // }

    const todos = this.state.todos;
    // const toggledTodoState = { isCompleted: null };
    let toggledTodoState = null;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].todoId === todoId) {
        toggledTodoState = !todos[i].isCompleted;
      }
    }
    console.log('toggled state:', toggledTodoState);

    // const toggledTodo = this.state.todos;
    // for (let i = 0; i < toggledTodo.length; i++) {
    //   if (toggledTodo[i].todoId === todoId) {
    //     toggledTodo[i].isCompleted = !toggledTodo[i].isCompleted;
    //   }
    // }

    // console.log('toggledtodo', toggledTodo);

    // fetch(`http://localhost:3000/api/todos/${todoId}`, {
    //   method: 'PATCH',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(todos)
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({
    //       todos: todos.map(todo => {
    //         if (todo.todoId === todoId) {
    //           todo = {task, toggledTodoState;
    //         }
    //         return todo;
    //       })
    //     });
    //     // this.setState({ todos: toggledTodo });
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });

    //  WORKING W TOGGLEDSTATE (NO OBJECT)
    fetch(`http://localhost:3000/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todos)
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          todos: todos.map(todo => {
            if (todo.todoId === todoId) {
              todo.isCompleted = toggledTodoState;
            }
            return todo;
          })
        });
        // this.setState({ todos: toggledTodo });
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }

  render() {
    // console.log('this.state', this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
