export const ADD_EXPERIENCE = 'ADD_EXPERIENCE';
export const SET_EXPERIENCE = 'SET_EXPERIENCE';

import Experience from '../../models/Experience'; 

export const addExperience = (role,logo,companyName,description,duration) => {
    return async (dispatch) =>{
        
        const response = await fetch(
            'https://my-portfolio-app-6722c.firebaseio.com/experiences.json',
            {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                  role,
                  logo,
                  companyName,
                  description,
                  duration
                })
            }
        );

        if(!response.ok){
            throw new Error('Something went wrong');
        }
        const resData = await response.json();
        
        dispatch({type:ADD_EXPERIENCE,id:resData.name,role:role,logo:logo,companyName:companyName,description:description,duration:duration
        });
    };
}

export const fetchExperience = () => {
    return async (dispatch) => {
        // const  userId = getState().auth.userId;
        // console.log(userId);
        try{
            const response = await fetch(
            'https://my-portfolio-app-6722c.firebaseio.com/experiences.json'
         );

        if (!response.ok){
            throw new Error('something went wrong!');
        }

        const resData = await response.json();
        const loadedExperiences = [];

        for(const key in resData){
            loadedExperiences.push(
                new Experience(
                    key,
                    resData[key].role,
                    resData[key].logo,
                    resData[key].companyName,
                    resData[key].description,
                    resData[key].duration,
                  
                )
            );
        }
    
        dispatch({type: SET_EXPERIENCE, experiences:loadedExperiences});
    }catch(err){
        throw err;
    }
 };
};