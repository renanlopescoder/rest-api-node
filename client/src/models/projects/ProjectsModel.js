import { observable, computed, action } from "mobx";

import ProjectModel from "./ProjectModel";

export default class ProjectsModel {
    @observable projects = [];



    @action
    getProjects() {
        var self=this;
        const url = 'https://rest-api-node.herokuapp.com';
        fetch(url+'/list/projects', {
            method: 'get'
        }).then((response) => 
           response.json()
        ).then(function(data) {
            self.projects=data;
            })
        ;
    }

    @action
    delProject(id) {
        const url = 'https://rest-api-node.herokuapp.com';
        this.projects = this.projects.filter((p) => { return p._id !== id })
        fetch(url+'/delete/project/'  + id, {
            method: 'delete'
        });
    }

    @action
    addProject(project) {
        const url = 'https://rest-api-node.herokuapp.com';
        var self=this;
        console.log('project added', this.projects)
       
        fetch(url+'/create/project', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        }).then((response) => response.json()).then(function(data) {
            self.projects.push(new ProjectModel(data));
            });
    }
}