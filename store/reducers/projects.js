import { SET_PROJECT, ADD_PROJECT } from "../actions/projects";
import Project from "../../models/Project";

const initialState = {
    projects:[]
};

export default(state = initialState,action) => {
     switch(action.type){
         case SET_PROJECT:
             return{
                 projects:action.projects
             }

         case ADD_PROJECT:
             const newProject = new Project(
                 action.id,
                 action.title,
                 action.description,
                 action.languages,
                 action.links,
                 action.duration
             );
             return{
                ...state,
                projects:state.projects.concat(newProject)
             };   
     }
     return state;
};