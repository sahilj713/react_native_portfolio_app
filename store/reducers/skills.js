import {ADD_SKILL, SET_SKILL, SET_INTERPERSONAL_SKILL, ADD_INTERPERSONAL_SKILL} from '../actions/skills';
import Skill from '../../models/Skill';

const initialState = {
    skills:[],
    interpersonalSkills:[]
};

export default(state = initialState , action) => {
    switch(action.type){
        case SET_SKILL:
          return{
              skills:action.skills,
              interpersonalSkills:[]

          };

          case SET_INTERPERSONAL_SKILL:
            return{
                skills:[],

                interpersonalSkills:action.skills
            };  

        case ADD_SKILL:
            const newSkill=new Skill(
                action.id,
                action.name,
                action.rating,
                
            );
            return{
                ...state,
                skills:state.skills.concat(newSkill)
            };

         case ADD_INTERPERSONAL_SKILL:
            const newInterpersonalSkill=new Skill(
                action.id,
                action.name,
                action.rating,
                
            );
            return{
                ...state,
                interpersonalSkills:state.interpersonalSkills.concat(newInterpersonalSkill)
            };
    }
    return state;
};