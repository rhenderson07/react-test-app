import React, {Component} from 'react';
import uuid from 'uuid';
import axios from 'axios';

import Projects from '../components/Projects';
import AddProject from '../components/AddProject';
import Todos from '../components/Todos';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  componentWillMount() {
    this.getProjects();
    this.getTodos();
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos() {
    //call JsonPlaceholder api to demonstrate getting data from a server
    let self = this;
    let url = 'https://jsonplaceholder.typicode.com/todos'

    axios.get(url).then((response) => {
      self.setState({todos: response.data});
      // console.log(self.state);
    }).catch((error) => {
      console.log(error);
    });
  }

  getProjects() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Business Website',
          category: 'Web Design'
        }, {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development'
        }, {
          id: uuid.v4(),
          title: 'Ecommerce Shopping Cart',
          category: "Web Development"
        }
      ]
    });
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects});
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects: projects});
  }

  render() {
    let {projects, todos} = this.state;

    return (
      <div className="App-intro">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={projects} onDelete={this.handleDeleteProject.bind(this)}/>
        <hr/>
        <Todos todos={todos}/>
      </div>
    );
  }
}

export default Home;
