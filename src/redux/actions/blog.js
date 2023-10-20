import axios from 'axios' ;

export const createBlog = formdata => async dispatch =>{
    try {
        
        dispatch({ type :'createBlogRequest'});

        const { data } = await axios.post(
            '/blog/create' , formdata ,{
                headers :{
                    'Content-Type' : 'multipart/form-data'
                },
                withCredentials:true
            }
        );

        dispatch({ type : 'createBlogSuccess' , payload : data})
    } catch (error) {
        if(error.response){
            console.error(error.response.data);
        }else if(error.request){
            console.error('No response recevied fro the server ')
        }
        else{
            console.error('Error :' , error.message)
        }
        dispatch({ type : 'createBlogFails' , payload : error.response.data.message})
    }
}

export const myBlogs =()=> async dispatch =>{
    try {
        dispatch({ type: 'myBlogRequest' });
    
        const { data } = await axios.get(
          '/blog/myblogs',
        );
    
        dispatch({ type: 'myBlogSuccess', payload:  data.myblogs  });
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
        dispatch({ type: 'myBlogFails', payload: error.response.data.message });
      } 
}

export const allBlogs = (category ='' , keyword ='')=> async dispatch =>{
  try {
      dispatch({ type: 'allBlogRequest' });
  
      const { data } = await axios.get(
        `/blog/all?keyword=${keyword}&category=${category}`,
      );
      console.log(data);
  
      dispatch({ type: 'allBlogSuccess', payload:  data.blogs  });
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
      dispatch({ type: 'allBlogFails', payload: error.response.data.message });
    } 
}