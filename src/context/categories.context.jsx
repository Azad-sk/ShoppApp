import { createContext, useState } from "react";
// import SHOP_DATA from "../pages/shop/shop.data"
import { getCategoriesAndDocuments } from "../firebase/firebase.utils";
// import { addCollectionAndDocuments } from "../firebase/firebase.utils";
import { useEffect } from "react";

export const CategoriesContext = createContext({
    categoriesMap: {},

});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    // useEffect(()=>{
    //     addCollectionAndDocuments('categories',SHOP_DATA)
    // },[])

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap)
        };
        getCategoriesMap();
    }, [])

    const value = { categoriesMap, setCategoriesMap };
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}