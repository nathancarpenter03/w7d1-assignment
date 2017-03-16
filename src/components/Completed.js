import { connect } from 'react-redux';
import React from 'react';
import Layout from './Layout'
import { browserHistory } from 'react-router';
import Todo from './Todo';
import AddTodo from './AddTodo';

class Completed extends React.Component {
    render() {

        let completedTodos = this.props.sharedTodos.filter((todo) => todo.completed === 'yes').map((todo, key) => <Todo key={key} {...todo} />)

        return <Layout>
            <div className="well well-sm">
                <button className="btn btn-default nav-button" type="button" onClick={() => browserHistory.push('/')}>View All Todos</button>
                <button className="btn btn-default nav-button" type="button" onClick={() => browserHistory.push('/completed')}>View Completed Todos</button>
            </div>
            <AddTodo addTodo={this.addTodo} />
            <ul className="list-group">
                {completedTodos}
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
export default connect(mapStateToProps)(Completed)