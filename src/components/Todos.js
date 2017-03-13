import React from 'react';
import Todo from './Todo';

class Todos extends React.Component {
    render() {
        return <ul className = "list-group">
            <Todo description="Pay bills"/>
            <Todo description="Exercise"/>
            <Todo description="Birthday party "/>
            <Todo description="Cook dinner"/>
            <Todo description="Do taxes"/>
        </ul>
    }
}

export default Todos;
