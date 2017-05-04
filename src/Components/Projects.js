import React, {Component} from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {

  render() {
    let {projects} = this.props;
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

export default Projects;
