import React from 'react'

import Layout from './Layout'
import AddTodo from './AddTodo'
import Todo from './Todo'

class Todos extends React.Component {
    constructor(props) {
        super(props)
        this.getTodos = this.getTodos.bind(this)
        this.addTodo = this.addTodo.bind(this)

        this.state = {
            todos: []
        }
    }

    componentWillMount() {
        this.getTodos()
    }

    getTodos() {
        fetch('/api/v1/todos')
        .then(response => response.json())
        .then(todos => this.setState({todos: todos}))
    }

    addTodo(todo) {
        this.getTodos()
        // let newTodos = this.state.todos
        // newTodos.unshift(todo)
        // this.setState({todos: newTodos})
    }

    render() {
        let todos = this.state.todos.map((todo, key) => <Todo key={key} description={todo.todo} category={todo.category} />)

        return <Layout>
            <AddTodo getTodos={this.getTodos} />
            <ul className="list-group">
                {todos}
            </ul>
        </Layout>
    }
}

export default Todos