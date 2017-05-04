import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class Todos extends Component {

  render() {
    let todos = this.props.todos;
    let todoItems;

    if (todos) {
      todoItems = todos.map(todo => {
        return (<TodoItem key={todo.id} todo={todo}/>);
      });
    }

    return (
      <div>
        <h3>Todos</h3>
        {todoItems}
      </div>
    );
  }
}

Todos.propTypes = {
  Todos: PropTypes.array
}

export default Todos;
