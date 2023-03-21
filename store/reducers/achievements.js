import Achievement from '../../models/Achievement';
import { SET_ACHIEVEMENT, ADD_ACHIEVEMENT } from "../actions/achievements";

const initialState = {
    achievements:[]
};

export default(state = initialState,action) => {
     switch(action.type){
         case SET_ACHIEVEMENT:
             return{
                 achievements:action.achievements
             }

         case ADD_ACHIEVEMENT:
             const newAchievement = new Achievement(
                 action.id,
                 action.imageUri,
                 action.description
                
             );
             return{
                ...state,
                achievements:state.achievements.concat(newAchievement)
             };   
     }
     return state;
};