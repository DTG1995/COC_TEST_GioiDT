import { getCategoriesAPI, addCategoryAPI, getCategoryAPI, editCategoryAPI, deleteCategoryAPI  } from "../../dummy-server"

export const ACTIONS_TYPE = {
  FETCH_CATEGORIES: 'FETCH_CATEGORIES',
  CRUD_CATEGORY: 'CRUD_CATEGORY',
  FETCH_CATEGORY: 'FETCH_CATEGORY'
}
const initState = {
  categories: [],
  category: {}
}
const categorieRedure = (categoriesState, action) => {
  console.log(categoriesState);
  console.log(action);
  switch(action.type) {
    case ACTIONS_TYPE.FETCH_CATEGORIES:
      return {
        ...categoriesState,
        categories: action.payload
      }
    case ACTIONS_TYPE.CRUD_CATEGORY:
      return {
        ...categoriesState
      }
      case ACTIONS_TYPE.FETCH_CATEGORY:
        return {
          ...categoriesState,
          category: action.payload
        }
    default:
      return categoriesState || initState;
  }
}

export default categorieRedure;


export const getListCategories = () => {
  return {
    type: ACTIONS_TYPE.FETCH_CATEGORIES,
    payload: getCategoriesAPI()
  }
}

export const getCategory = (id) => {
  return {
    type: ACTIONS_TYPE.FETCH_CATEGORY,
    payload: getCategoryAPI(id)
  }
}
export const addCategory = (category) =>  {
  return {
    type: ACTIONS_TYPE.CRUD_CATEGORY,
    payload: addCategoryAPI(category)
  };
}
export const editCategory = (category) =>  {
  return {
    type: ACTIONS_TYPE.CRUD_CATEGORY,
    payload: editCategoryAPI(category)
  };
}
export const deleteCategory = (id) =>  {
  return {
    type: ACTIONS_TYPE.CRUD_CATEGORY,
    payload: deleteCategoryAPI(id)
  };
}


