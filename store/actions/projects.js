export const ADD_PROJECT = 'ADD_PROJECT';
export const SET_PROJECT = 'SET_PROJECT';

import Project from '../../models/Project'; 

export const addProject = (title,description,languages,links,duration) => {
    return async (dispatch) =>{
        
        const response = await fetch(
            'https://my-portfolio-app-6722c.firebaseio.com/projects.json',
            {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                  title,
                  description,
                  languages,
                  links,
                  duration
                })
            }
        );

        if(!response.ok){
            throw new Error('Something went wrong');
        }
        const resData = await response.json();
        
        dispatch({type:ADD_PROJECT,id:resData.name,title:title,description:description,languages:languages,links:links,duration:duration
        });
    };
}

export const fetchProjects = () => {
    return async (dispatch) => {
        // const  userId = getState().auth.userId;
        // console.log(userId);
        try{
            const response = await fetch(
            'https://my-portfolio-app-6722c.firebaseio.com/projects.json'
         );

        if (!response.ok){
            throw new Error('something went wrong!');
        }

        const resData = await response.json();
        const loadedProjects = [];

        for(const key in resData){
            loadedProjects.push(
                new Project(
                    key,
                    resData[key].title,
                    resData[key].description,
                    resData[key].languages,
                    resData[key].links,
                    resData[key].duration,

                    
                )
            );
        }
    
        dispatch({type: SET_PROJECT, projects:loadedProjects});
    }catch(err){
        throw err;
    }
 };
};