import Experience from '../../models/Experience';
import { SET_ACHIEVEMENT, ADD_ACHIEVEMENT } from "../actions/achievements";
import { SET_EXPERIENCE, ADD_EXPERIENCE } from '../actions/experiences';

const initialState = {
    experiences:[]
};

export default(state = initialState,action) => {
     switch(action.type){
         case SET_EXPERIENCE:
             return{
                 experiences:action.experiences
             }

         case ADD_EXPERIENCE:
             const newExperience = new Experience(
                 action.id,
                 action.role,
                 action.logo,
                 action.companyName,
                 action.description,
                 action.duration
                
             );
             return{
                ...state,
                experiences:state.experiences.concat(newExperience)
             };   
     }
     return state;
};