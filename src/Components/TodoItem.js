import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  render() {
    let {title, completed} = this.props.todo;
    let completeMessage = completed
      ? '[x]'
      : '[_]';

    return (
      <li className="todoItem">
        {completeMessage}
        {title}
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object
}

export default TodoItem;
