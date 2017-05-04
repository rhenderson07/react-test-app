import React, {Component} from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
// import ProjectItem from './ProjectItem';

class AddProject extends Component {

  constructor() {
    super();
    this.state = {
      newProject: {}
    }
  }

  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  render() {
    let categories = this.props.categories;

    let categoryOptions = categories.map(category => {
      return (
        <option key={category} value={category}>{category}</option>
      );
    })

    return (
      <div>
        <h4>Add Project</h4>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title:</label>
            <br/>
            <input type="text" ref="title"/>
          </div>
          <div>
            <label>Category:</label>
            <br/>
            <select ref="category">
              <option></option>
              {categoryOptions}
            </select>
          </div>
          <br/>
          <input type="submit"/>
        </form>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();

    let {title, category} = this.refs;

    if (title.value === '') {
      alert('Title is required');
    } else {
      this.setState({
        // update state
        newProject: {
          id: uuid.v4(),
          title: title.value,
          category: category.value
        }
      }, function() {
        //callback function
        this.props.addProject(this.state.newProject);
      })
    }
  }
}

AddProject.propTypes = {
  categories: PropTypes.array,
  addProject: PropTypes.func
}

export default AddProject;
