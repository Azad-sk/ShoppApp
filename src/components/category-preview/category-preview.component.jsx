import { React} from "react";
import { Link } from "react-router-dom";
import './category-preview.styles.scss';

// import CollectionItem from "../collection-item/collection-item.componenet";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) =>{ 

   return( 
   <div className='category-preview-container'>
      <h2 >
         <Link className='title' to={title} >
         {title.toUpperCase()}
         </Link>
      </h2>
      <div className='preview'>
         {products.filter((product, idx) => idx < 4)
            .map((product) => (
               <ProductCard key={product.id} product={product} />

            ))}
      </div>
   </div>
)};
export default CategoryPreview;
