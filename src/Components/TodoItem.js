import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  render() {
    let {id, title, completed} = this.props.todo;
    let completeMessage = completed
      ? 'X'
      : ' ';

    return (
      <li className="todoItem">
        <strong>{title}</strong>: [{completeMessage}]
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object
}

export default TodoItem;
