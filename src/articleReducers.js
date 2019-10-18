import {FETCH_INIT,FETCH_SUCCESS,FETCH_FAILURE} from './ArticleActions'

const articleReducers = (state, action) => {
    switch (action.type) {
      // case FETCH_INIT:
      //   return {
      //     ...state,
      //     isLoading: true,
      //     hasError: false
      //   };
      case FETCH_SUCCESS:
          console.log("Action dispatched FETCH_SUCCESS")
        return {
          ...state,
          countryData: action.payload,
        };
      // case FETCH_FAILURE:
      //   return {
      //     ...state,
      //     isLoading: false,
      //     hasError: true,
      //   };
      default:
        return {
            ...state
        }
    }
  };

  export default articleReducers;