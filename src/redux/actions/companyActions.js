import { EDIT_COMPANY_LIST, ADD_COMPANY, SET_COMPANY, SET_COMPANIES, START_LOADING_COMPANY,CHANGE_COMPANY_LOADING } from '../types';
import { COMPANIES_LIST } from '../urls';
import {processRESTinput} from '../../helperFunctions';
//All of these are actions, they return redux triggered functions, that have no return, just manipulate with the store

/**
 * Get's all available companies to the user
 * @param  {string} token Token for the REST API
 */
 export const getCompanies = (token) => {
   return (dispatch) => {
     fetch(COMPANIES_LIST+'?limit=999', {
       method: 'GET',
       headers: {
         'Authorization': 'Bearer ' + token
       }
     }).then((response)=> response.json().then(response => {
       dispatch({type: SET_COMPANIES, companies:response.data});
     }))
     .catch(function (error) {
       console.log(error);
     });
   };
 };

/**
 * Saves editted company
 * @param  {Company} company Object containing all new data about the company
 * @param  {string} token   Token for the REST API
 * @param  {int} id      ID of the company that is being editted
 */
 export const editCompany = (company,token,id) => {
   return (dispatch) => {
     fetch(COMPANIES_LIST + '/' + id, {
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/x-www-form-urlencoded',
         'Authorization': 'Bearer ' + token
       },
       method: 'PATCH',
       body:processRESTinput(company)+'&is_active='+(company.is_active?'true':'false'),
     })
     .then((response)=>response.json().then((response)=>{
       dispatch({type: EDIT_COMPANY_LIST, company:Object.assign({},company,{id})});
     }))
     .catch(function (error) {
       console.log(error);
     });
   };
 };

/**
 * Adds completely new Company
 * @param {Company } newCompany All data about the new company
 * @param {string} token      Token for the REST API
 */
 export const addCompany = (newCompany,token) => {
   return (dispatch) => {
     fetch(COMPANIES_LIST, {
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/x-www-form-urlencoded',
         'Authorization': 'Bearer ' + token
       },
       method: 'POST',
       body:processRESTinput(newCompany)+'&is_active='+(newCompany.is_active?'true':'false'),
     })
     .then((response1)=>response1.json().then((response2)=>{
       dispatch({type: ADD_COMPANY, company:Object.assign(newCompany,{id:response2.data.id})});
     }))
     .catch(function (error) {
       console.log(error);
     });
   };
 };

/**
 * Starts an indicator that the companies are loading
 */
export const startLoadingCompany = () => {
  return (dispatch) => {
    dispatch({type: START_LOADING_COMPANY });
  };
};

/**
 * Get's all the information about the specific company
 * @param  {int} id    Company's ID
 * @param  {string} token Token for the REST API
 */
 export const getCompany = (id,token) => {
   return (dispatch) => {
     fetch(COMPANIES_LIST+'/'+id, {
       method: 'GET',
       headers: {
         'Authorization': 'Bearer ' + token
       }
     }).then((response)=>response.json().then((response)=>{
       dispatch({type: SET_COMPANY, company:response.data});
     }))
     .catch(function (error) {
       console.log(error);
     });
   };
 };
