import React, { Component } from "react";
import { observer } from "mobx-react";

const Project = observer(({ project,store }) => 
  <div className="box">

    <div className="columns">
      <div className="column">
        <strong> author: </strong>{project.author}
      </div>
   
    </div>

    <div className="columns">
      <div className="column">
        <strong> demoLink: </strong>{project.demoLink}
      </div>
      <div className="column">
        <strong> githubLink: </strong>{project.githubLink}
      </div>
      <div className="column">
        <strong> authorLink: </strong>{project.authorLink}
      </div>
    </div>

    <div className="columns">
      <div className="column">
        <strong> description: </strong>{project.description}
      </div>
    </div>

    <div className="columns">
      <div className="column">
        <strong> project: </strong> {project.project}
      </div>
      <div className="column">
        <strong> technologies: </strong>{project.technologies}
      </div>
      <div className="column">
        <strong> status: </strong>{project.status}
      </div>
    </div>

</div>
);

export default Project;
