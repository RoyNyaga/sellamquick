import {GET_CATEGORIES} from "../actions/categoryAction"

const initailState = {
  categories: []
}

const CategoryReducer = (state = initailState, action) => {
  switch (action.type){
    case GET_CATEGORIES:
      return {
        categories: action.categories
      }
    default:
      return state;
  }
}

export default CategoryReducer;

