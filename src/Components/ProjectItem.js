import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
    // console.log("Deleting project " + id);
    this.props.onDelete(id);
  }
}

ProjectItem.propTypes = {
  project: PropTypes.object,
  onDelete: PropTypes.func
}

export default ProjectItem;
