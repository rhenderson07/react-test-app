import React, {Component} from 'react';

class ProjectItem extends Component {
  render() {
    let {id, title, category} = this.props.project;

    return (
      <li className="projectItem">
        <strong>{title}</strong>: {category}
        <a href="#" onClick={this.deleteProject.bind(this, id)}>X</a>
      </li>
    );
  }

  deleteProject(id) {
    console.log("Should delete project " + id);
    this.props.onDelete(id);
  }
}

export default ProjectItem;
