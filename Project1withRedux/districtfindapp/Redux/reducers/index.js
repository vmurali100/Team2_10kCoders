import React from 'react';
import { GET_ALL_USERS } from '../actions/actionTypes';

export const rootReducer = (state,action) => {
  switch (action.type) {
      case GET_ALL_USERS:
          return{
              state
          }
  
      default:
          break;
  }
};
