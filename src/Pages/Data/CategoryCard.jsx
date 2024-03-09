import React from 'react';
import { Link } from 'react-router-dom';


const CategoryCard = ({item}) => {
const { id, picture, title, category, card_bg_color, text_color } = item || {}

  return (

 <Link to={`/details/${id}`}>
 <div className='rounded-md' style={{backgroundColor: card_bg_color}}>
<div>
  <img className='rounded-md w-full' src={picture} alt="" />
</div>
<div className='p-4'>
<div className='w-20 flex justify-center'>

<h2 className='rounded text-base font-medium' style={{backgroundColor: card_bg_color, color: text_color}}> {category} </h2>

</div>
<h3 className='font-semibold mt-2 text-xl' style={{color: text_color}}>{title}</h3>
</div>
 </div>
</Link>

  );
};

export default CategoryCard;