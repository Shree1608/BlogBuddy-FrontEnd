import { configureStore} from '@reduxjs/toolkit';
import { userResucer } from './reducers/userReducer';
import { categoryReducer } from './reducers/categoryReducer';
import thunk from 'redux-thunk';
import { blogReducer } from './reducers/blogReducer';
export const server = 'https://blog-buddy-backend.onrender.com/api/v1';

const store = configureStore({
    reducer :{
        user : userResucer ,
        category : categoryReducer , 
        blog : blogReducer
    },
    middleware : [thunk]
});

export default store ;