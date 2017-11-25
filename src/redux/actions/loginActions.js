import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from '../types';
import { LOGIN_URL } from '../urls';
import jwt_decode from 'jwt-decode';

/**
 * Tries to log in user using his username and password
 * @param  {string} username User's username
 * @param  {string} password User's password
 */
 export const loginUser = (username, password) => {
   return (dispatch) => {
     dispatch({ type: LOGIN_START });
     fetch(LOGIN_URL, {
       method: 'POST',
       headers: {'Content-Type': 'application/x-www-form-urlencoded'},
       body: `username=${username}&password=${password}`
     }).then((JSONresponse) => {
       JSONresponse.json().then((response)=>{
         if(JSONresponse.ok){
           let user=jwt_decode(response.token);
           dispatch({
             type: LOGIN_SUCCESS,
             payload: {user,token:response.token}
           });
         }
         else{
           dispatch({ type: LOGIN_FAIL });
         }
       });
     })
     .catch(function (error) {
       console.log(error);
       dispatch({ type: LOGIN_FAIL });
     });
   };
 };
