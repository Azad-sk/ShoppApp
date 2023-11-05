import React from 'react';
import './directory-item.styles.scss';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ category }) =>{ 

 const {title, imageUrl, size,route}=category ;
 const navigate = useNavigate();

 const onNavigateHnadeler=()=>{
  navigate(route)
 }

  return(
  <div
  onClick={onNavigateHnadeler}
    className={`${size} directory-item-container`}
  >
    <div className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    {/* <img className="background-image"
       src={imageUrl}
       alt=""
       /> */}

    <div className='body'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)};

export default DirectoryItem;