import { createReducer } from "@reduxjs/toolkit";

export const userResucer = createReducer({} ,{
    loginRequest:(state)=>{
        state.loading = true ;
    },
    loginSuccess:(state , action)=>{
        state.loading = false ;
        state.isAuthenticated = true ;
        state.user = action.payload.user ;
        state.message = action.payload.message
    },
    loginFails:(state,action)=>{
        state.loading = false ;
        state.isAuthenticated = false;
        state.error = action.payload ;
    },

    loadUserRequest:(state)=>{
        state.loading = false ;
    },
    loadUserSuccess:(state , action)=>{
        state.loading = false ;
        state.isAuthenticated = true ;
        state.user = action.payload ;
    },
    loadUserFails:(state,action)=>{
        state.loading = false ;
        state.isAuthenticated = false;
        state.error = action.payload ;
    },

    logoutRequest:(state)=>{
        state.loading = true ;
    },
    logoutSuccess:(state , action)=>{
        state.loading = false ;
        state.isAuthenticated = false ;
        state.user = null ;
        state.message = action.payload;
    },
    logoutFails:(state,action)=>{
        state.loading = false ;
        state.isAuthenticated = true;
        state.error = action.payload ;
    },
    registerRequest:(state)=>{
        state.loading = true ;
    },
    registerSuccess:(state , action)=>{
        state.loading = false ;
        state.isAuthenticated = true ;
        state.user = action.payload.user ;
        state.message = action.payload.message
    },
    registerFails:(state,action)=>{
        state.loading = false ;
        state.isAuthenticated = false;
        state.error = action.payload.message ;
    },

    clearError : (state)=>{
         state.error = null
    },
    
    clearMessage : (state)=>{
        state.message = null
   },

})