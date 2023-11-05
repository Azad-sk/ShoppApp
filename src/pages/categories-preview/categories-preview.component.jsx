import { Fragment, React } from "react";
import "./categories-preview.styles.scss"
 
import { selectCategoriesMap } from './../../store/categories/categories.selector'
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import {selectCategoriesIsLoading} from "./../../store/categories/categories.selector";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {

    const categoriesMap = useSelector(selectCategoriesMap);
    const isloading = useSelector(selectCategoriesIsLoading)

    return (
        <Fragment >
            { isloading ? (<Spinner />) :
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return (
                        <CategoryPreview key={title} title={title} products={products} />
                    )
                })
            }
        </Fragment>
    );

}
export default CategoriesPreview;



