import React, {Component} from 'react';
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
    let categoryOptions = this.props.categories.map(category => {
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
    let {title, category} = this.refs;

    if (title.value === '') {
      alert('Title is required');
    } else {
      this.setState({
        newProject: {
          id: uuid.v4(),
          title: title.value,
          category: category.value
        }
      }, function() {
        // console.log(this.state);
        this.props.addProject(this.state.newProject);
      })
    }

    event.preventDefault();
  }
}

export default AddProject;
