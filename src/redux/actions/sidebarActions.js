import { SET_SIDEBAR } from '../types';

 export const setSidebar = (open) => {
   return (dispatch) => {
     dispatch({ type: SET_SIDEBAR, open });
   }
 };
