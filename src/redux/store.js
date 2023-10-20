import { configureStore} from '@reduxjs/toolkit';
import { userResucer } from './reducers/userReducer';
import { categoryReducer } from './reducers/categoryReducer';
import thunk from 'redux-thunk';
import dotEnv from 'dotenv' ;
import { blogReducer } from './reducers/blogReducer';
dotEnv.config();
export const server = process.env.SERVER;

const store = configureStore({
    reducer :{
        user : userResucer ,
        category : categoryReducer , 
        blog : blogReducer
    },
    middleware : [thunk]
});

export default store ;