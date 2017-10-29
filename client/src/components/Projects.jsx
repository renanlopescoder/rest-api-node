import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import Project from "./Project";

@observer
class Projects extends React.Component {
  @observable author;
  @observable authorLink;
  @observable demoLink;
  @observable description;
  @observable githubLink;
  @observable project;
  @observable technologies;
  @observable status = false;
constructor(props){
  super();
  props.store.getProjects();
}

  render() {
    return (
      <div>
        <h1 className="title is-2">Projects</h1>
        <form onSubmit={this.handleFormSubmit} className="field">

          <div className="columns">

            <div className="field column ">
              <label className="label">Author:</label>
              <div className="control">
                <input
                  type="text"
                  name="author"
                  className="input"
                  value={this.author}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>

            <div className="field column ">
              <label className="label">AuthorLink:</label>
              <div className="control">
                <input
                  type="text"
                  name="authorLink"
                  className="input"
                  value={this.authorLink}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>

            <div className="field column ">
              <label className="label">DemoLink:</label>
              <div className="control">
                <input
                  type="text"
                  name="demoLink"
                  className="input"
                  value={this.demoLink}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>

</div>
          <div className="columns">

            <div className="field column ">
              <label className="label">Description:</label>
              <div className="control">
                <input
                  type="text"
                  name="description"
                  className="input"
                  value={this.description}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>

            <div className="field column is-one-quarter">
              <label className="label">githubLink:</label>
              <div className="control">
                <input
                  type="text"
                  name="githubLink"
                  className="input"
                  value={this.githubLink}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>

          </div>

          <div className="columns">
            <div className="field column ">
              <label className="label">project:</label>
              <div className="control">
                <input
                  type="text"
                  name="project"
                  className="input"
                  value={this.project}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>

            <div className="field column ">
              <label className="label">technologies:</label>
              <div className="control">
                <input
                  type="text"
                  name="technologies"
                  className="input"
                  value={this.technologies}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>

          </div>
          
          <button type="submit" className = "button">Add</button>
        </form>
        <hr />
        <div className="">
          {
           this.props.store.projects.map(p => (
              <div key={(p._id) + Math.random()} className="">
                <button type="button" className= "button is-pulled-right is-danger" onClick={this.delProject.bind(this,p._id)}> remove </button>
            <Project project={p} key={p.id} store={this.props.store}/>
            </div>
          ))}
        </div>

      </div>
    );
  }

  @action
  handleInputChange = e => {
    this[e.target.name] = e.target.value;
  };

  @action
  handleFormSubmit = e => {
    this.props.store.addProject({
        author:this.author,
        demoLink:this.demoLink,
        description:this.description,
        authorLink:this.authorLink,
        githubLink:this.githubLink,
        project:this.project,
        status:this.status,
        technologies:this.technologies,
      });

    e.preventDefault();
  };
  @action
  delProject = (id,e) => {
    this.props.store.delProject(id);
    e.preventDefault();
  };
}

export default Projects;
