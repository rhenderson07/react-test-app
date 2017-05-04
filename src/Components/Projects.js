import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';

class Projects extends Component {

  render() {
    let projects = this.props.projects;
    let projectItems;

    if (projects) {
      projectItems = projects.map(project => {
        return (<ProjectItem onDelete={this.deleteProject.bind(this)} key={project.id} project={project}/>);
      });
    }

    return (
      <div className="projects">
        <h3>Projects</h3>
        {projectItems}
      </div>
    );
  }

  deleteProject(id) {
    this.props.onDelete(id);
  }
}

Projects.propTypes = {
  projects: PropTypes.array,
  onDelete: PropTypes.func
}

export default Projects;
