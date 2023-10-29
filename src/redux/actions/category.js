import axios from "axios";
import { server } from "../store";

export const createCategory = formdata => async dispatch =>{
    try {
        
        dispatch({ type :'createCatRequest'});

        const { data } = await axios.post(
            `/category/add` , formdata ,{
                headers :{
                    'Content-Type' : 'multipart/form-data'
                },
                withCredentials:true
            }
        );

        dispatch({ type : 'createCateSuccess' , payload : data})
    } catch (error) {
        if(error.response){
            console.error(error.response.data);
        }else if(error.request){
            console.error('No response recevied fro the server ')
        }
        else{
            console.error('Error :' , error.message)
        }
        dispatch({ type : 'createCatFails' , payload : error.response.data.message})
    }
}

export const allCategory =()=> async dispatch =>{
    try {
        dispatch({ type: 'allCatRequest' });
    
        const { data } = await axios.get(
          `/category/all`,
        );
    
        dispatch({ type: 'allCatSuccess', payload: data.categories });
      } catch (error) {
    
        if (error.response) {
          // Server responded with a non-2xx status code
          console.error(error.response.data);
        } else if (error.request) {
          // The request was made, but no response was received
          console.error('No response received from the server');
        } else {
          // Something else went wrong
          console.error('Error:', error.message);
        }
        dispatch({ type: 'allCatFails', payload: error.response.data.message });
      } 
}