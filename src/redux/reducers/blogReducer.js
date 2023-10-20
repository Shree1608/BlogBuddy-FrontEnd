import { createReducer } from "@reduxjs/toolkit";

export const blogReducer = createReducer( {} ,{
  
    createBlogRequest : (state)=>{
        state.loading = true ;
    },
    createBlogSuccess : (state ,action)=>{
        state.loading = false ;
        state.blog = action.payload.blog ;
        state.message = action.payload.message
    },
    createBlogFails : (state , action)=>{
        state.loading = false ;
        state.error = action.payload
    },
    myBlogRequest : (state)=>{
        state.loading = true ;
    },
    myBlogSuccess : (state ,action)=>{
        state.loading = false ;
        state.myblogs = action.payload ;
    },
    myBlogFails : (state , action)=>{
        state.loading = false ;
        state.error = action.payload
    },
    allBlogRequest : (state)=>{
        state.loading = true ;
    },
    allBlogSuccess : (state ,action)=>{
        state.loading = false ;
        state.blogs = action.payload ;
    },
    allBlogFails : (state , action)=>{
        state.loading = false ;
        state.error = action.payload
    },

    clearError : (state)=>{
        state.error = null
   },
   
   clearMessage : (state)=>{
       state.message = null
  },

})