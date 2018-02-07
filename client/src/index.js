import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

import Projects from "./components/Projects";

import ProjectsModel from "./models/projects/ProjectsModel";
import ProjectModel from "./models/projects/ProjectModel";

const store = new ProjectsModel();

render(
  <div>
    <DevTools />
    <Projects store={store} />
  </div>,
  document.getElementById("root")
);


// playing around in the console
window.store = store;
