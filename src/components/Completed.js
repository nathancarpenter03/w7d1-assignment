import { connect } from 'react-redux';
import React from 'react';
import Layout from './Layout'
import { browserHistory } from 'react-router';
import Todo from './Todo'

class Completed extends React.Component {
    render() {

        let completedTodos = this.props.sharedTodos.filter((todo) => todo.completed === 'yes').map((todo, key) => <Todo key={key} {...todo} />)

        return <Layout>
            <div className="page-header">
            <h1>Completed Tasks</h1>
            </div>
            <div className="well well-sm">
                <button className="btn btn-default" type="button" onClick={() => browserHistory.push('/')}>View All Todos</button>
            </div>

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