import {START_LOADING_COMPANY, ADD_COMPANY, SET_COMPANY, EDIT_COMPANY_LIST,SET_COMPANIES,CHANGE_COMPANY_LOADING} from '../types'

const initialState = {
  companies: [],
  company: null,
  loading:false,
  loadingChange:false,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING_COMPANY:
      return {...state,loading:true}

    case CHANGE_COMPANY_LOADING:
      return {...state,loadingChange:!state.loadingChange}

    case ADD_COMPANY:{
      return { ...state,
        companies:[action.company,...state.companies]
      };
    }
    case EDIT_COMPANY_LIST:{
      let newCompanies= [...state.companies];
      let index = newCompanies.findIndex((company)=>company.id==action.company.id);
      if(index == -1){
        return state;
      }
      newCompanies.splice(index,1,action.company);
      return {
        ...state,
        companies:newCompanies
      };
    }
    case SET_COMPANY:
      return {
        ...state,
        company:action.company,
        loadingChange:!state.loadingChange,
      };
    case SET_COMPANIES:
      return {
        ...state,
        loading:false,
        companies:action.companies,
      };
    default:
      return state;
  }
}
