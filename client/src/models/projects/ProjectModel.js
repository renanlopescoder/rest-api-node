import { observable } from "mobx";

export default class Project {
    @observable author;
    @observable authorLink;
    @observable demoLink;
    @observable description;
    @observable githubLink;
    @observable project;
    @observable technologies;
    @observable status = false;
    @observable id = 0;

    constructor(project) {
        this.author = project.author;
        this.authorLink = project.authorLink;
        this.demoLink = project.demoLink;
        this.description = project.description;
        this.githubLink = project.githubLink;
        this.project = project.project;
        this.status = project.status;
        this.technologies = project.technologies;
        project.id = Math.floor((Math.random() * 100000) + 1);
        this.id = project.id;
        console.log('project', project);
    }
}