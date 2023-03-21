export const ADD_SKILL ='ADD_SKILL';
export const SET_SKILL = 'SET_SKILL';
export const ADD_INTERPERSONAL_SKILL = 'ADD_INTERPERSONAL_SKILL';
export const SET_INTERPERSONAL_SKILL = 'SET_INTERPERSONAL_SKILL';

import Skill from '../../models/Skill';


export const addSkill =(name,rating) => {
    return async (dispatch) =>{
        
        const response = await fetch(
            'https://my-portfolio-app-6722c.firebaseio.com/skills.json',
            {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                  name,
                  rating
                })
            }
        );

        if(!response.ok){
            throw new Error('Something went wrong');
        }
        const resData = await response.json();
        
        dispatch({type:ADD_SKILL,id:resData.name,name:name,rating:rating
        });
    };
    
};

export const addInterpersonalSkill =(name,rating) => {
    return async (dispatch) =>{
        
        const response = await fetch(
            'https://my-portfolio-app-6722c.firebaseio.com/InterpersonalSkills.json',
            {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                  name,
                  rating
                })
            }
        );

        if(!response.ok){
            throw new Error('Something went wrong');
        }
        const resData = await response.json();
        
        dispatch({type:ADD_INTERPERSONAL_SKILL,id:resData.name,name:name,rating:rating
        });
    };
    
};


export const fetchSkills = () => {
    return async (dispatch) => {
        // const  userId = getState().auth.userId;
        // console.log(userId);
        try{
            const response = await fetch(
            'https://my-portfolio-app-6722c.firebaseio.com/skills.json'
         );

        if (!response.ok){
            throw new Error('something went wrong!');
        }

        const resData = await response.json();
        const loadedSkills = [];

        for(const key in resData){
            loadedSkills.push(
                new Skill(
                    key,
                    resData[key].name,
                    resData[key].rating,
                    
                )
            );
        }
    
        dispatch({type: SET_SKILL, skills:loadedSkills});
    }catch(err){
        // throw err;
    }
 };
};


export const fetchInterpersonalSkills = () => {
    return async (dispatch) => {
        // const  userId = getState().auth.userId;
        // console.log(userId);
        try{
            const response = await fetch(
            'https://my-portfolio-app-6722c.firebaseio.com/InterpersonalSkills.json'
         );

        if (!response.ok){
            throw new Error('something went wrong!');
        }

        const resData = await response.json();
        const loadedInterpersonalSkills = [];

        for(const key in resData){
            loadedInterpersonalSkills.push(
                new Skill(
                    key,
                    resData[key].name,
                    resData[key].rating,
                    
                )
            );
        }
    
        dispatch({type: SET_INTERPERSONAL_SKILL, skills:loadedInterpersonalSkills});
    }catch(err){
        throw err;
    }
 };
};

