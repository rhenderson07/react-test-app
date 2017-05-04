import React, {Component} from 'react';
import uuid from 'uuid';
import axios from 'axios';

import Projects from './Components/Projects';
import AddProject from './Components/AddProject';

import logo from './logo.svg';
import './App.css';

class App extends Component {
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

    axios.get(url).then(function(response) {
      self.setState({todos: response.data});
      console.log(self.state);
    }).catch(function(error) {
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

  render() {
    let {projects} = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
          <h4>This is another test</h4>
        </div>
        <div className="App-intro">
          <AddProject addProject={this.handleAddProject.bind(this)}/>
          <Projects projects={projects} onDelete={this.handleDeleteProject.bind(this)}/>
        </div>
      </div>
    );
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
}

export default App;