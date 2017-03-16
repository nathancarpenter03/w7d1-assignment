import { connect } from 'react-redux';
import React from 'react';

// Load components
import Layout from './Layout'
import AddTodo from './AddTodo'
import Todo from './Todo'
import { browserHistory } from 'react-router'

class Todos extends React.Component {

    // Setup
    constructor(props) {
        // Call the React.Component constructor() method
        // Pass the props onto the constructor
        super(props)

        // Bind custom methods to this object context
        this.getTodos = this.getTodos.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.toggleComplete = this.toggleComplete.bind(this)

        // Initial state
        // this.state = {
        //     todos: []
        // }
    }

    // React lifecycle methods
    componentWillMount() {
        // Before we mount the component onto the page, initiate API call
        this.getTodos()
    }

    // API methods
    getTodos() {
        fetch('/api/v1/todos')
        .then(response => response.json())
        .then(todos => this.props.dispatch({type: 'TODOS_UPDATE', body: todos}))
    }

    addTodo(description, category) {
        if (description !== '' && category !== '') {
            fetch('/api/v1/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    todo: description,
                    category: category,
                    completed: false
                })
            })
            .then(this.getTodos)
        }
    }

    toggleComplete(todoId, isComplete) {
        fetch('/api/v1/todos/' + todoId + '/' + (isComplete ? 'complete' : 'incomplete'))
        .then(this.getTodos)
    }

    // Required render method, runs initially and then again after any state changes
    render() {
        // Map array of todo data to Todo components
        let todos = this.props.sharedTodos.map((todo, key) => <Todo key={key} {...todo} toggleComplete={this.toggleComplete} />)

        if (todos.length === 0) {
            todos = <div className="alert alert-success text-center">Please start by adding a todo above.</div>
        }

        // Return our Layout, wrapped around AddTodo and array of Todo components
        return <Layout>
            <div className="well well-sm">
                <button className="btn btn-default nav-button" type="button" onClick={() => browserHistory.push('/')}>View All Todos</button>
                <button className="btn btn-default nav-button" type="button" onClick={() => browserHistory.push('/completed')}>View Completed Todos</button>
            </div>
            <AddTodo addTodo={this.addTodo} />
            <ul className="list-group">
                {todos}
            </ul>
        </Layout>
    }
}

// Map shared Redux state to props
const mapStateToProps = (redux) => {
    return {
        sharedTodos: redux.state.todos
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(Todos)