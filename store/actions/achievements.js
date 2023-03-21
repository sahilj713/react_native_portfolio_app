export const ADD_ACHIEVEMENT = 'ADD_ACHIEVEMENT';
export const SET_ACHIEVEMENT = 'SET_ACHIEVEMENT';

import Achievement from '../../models/Achievement'; 

export const addAchievement = (imageUri,description) => {
    return async (dispatch) =>{
        
        const response = await fetch(
            'https://my-portfolio-app-6722c.firebaseio.com/achievements.json',
            {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                  imageUri,
                  description
                })
            }
        );

        if(!response.ok){
            throw new Error('Something went wrong');
        }
        const resData = await response.json();
        
        dispatch({type:ADD_ACHIEVEMENT,id:resData.name,imageUri:imageUri,description:description
        });
    };
}

export const fetchAchievements = () => {
    return async (dispatch) => {
        // const  userId = getState().auth.userId;
        // console.log(userId);
        try{
            const response = await fetch(
            'https://my-portfolio-app-6722c.firebaseio.com/achievements.json'
         );

        if (!response.ok){
            throw new Error('something went wrong!');
        }

        const resData = await response.json();
        const loadedAchievements = [];

        for(const key in resData){
            loadedAchievements.push(
                new Achievement(
                    key,
                    resData[key].imageUri,
                    resData[key].description,
                                        
                )
            );
        }
    
        dispatch({type: SET_ACHIEVEMENT, achievements:loadedAchievements});
    }catch(err){
        throw err;
    }
 };
};


