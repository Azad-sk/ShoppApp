import { createAction } from "../../components/utils.js/reducer/reducer.utils"
import { CATEGORIES_ACTION_TYPES } from "./category.type"
import { getCategoriesAndDocuments } from "../../firebase/firebase.utils";

export const setCategories = (categoriesArry) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES,categoriesArry);

export const fetchCategoriesStart = () =>
 createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

 export const fetchCategoriesSuccess = (categoriesArry) =>
 createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,categoriesArry);

 export const fetchCategoriesFailed = (error) =>
 createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,error);

//  export const fetchCategoriesAsync =()=> async (dispatch)=>{
//     dispatch(fetchCategoriesStart());
    
//     try{
//         const categoriesArry = await getCategoriesAndDocuments('categories')
//         dispatch(fetchCategoriesSuccess(categoriesArry))
//     }catch(error){
//         dispatch(fetchCategoriesFailed(error))
//     }
//  }

