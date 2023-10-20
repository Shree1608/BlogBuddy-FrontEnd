import { createReducer } from "@reduxjs/toolkit";

export const categoryReducer = createReducer( {},{
    createCatRequest : (state)=>{
        state.loading = true ;
    },
    createCateSuccess : (state ,action)=>{
        state.loading = false ;
        state.category = action.payload.category ;
        state.message = action.payload.message
    },
    createCatFails : (state , action)=>{
        state.loading = false ;
        state.error = action.payload
    },
    allCatRequest : (state)=>{
        state.loading = true ;
    },
    allCatSuccess : (state ,action)=>{
        state.loading = false ;
        state.categories = action.payload ;
    },
    allCatFails : (state , action)=>{
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