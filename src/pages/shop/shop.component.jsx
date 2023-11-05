import { React, useEffect } from "react";
import "./shop.styles.scss";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../../components/category/category.component";
import { useDispatch} from "react-redux";
// import { getCategoriesAndDocuments } from "../../firebase/firebase.utils";
// import { setCategories} from "../../store/categories/category.action";
import { fetchCategoriesStart } from "../../store/categories/category.action";

const ShopPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(fetchCategoriesStart());
   
    }, [dispatch])

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    );

}


export default ShopPage;



