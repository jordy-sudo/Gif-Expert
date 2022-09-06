import React, { useState } from 'react'
import { AddCategorie,GifGRid } from './components';


export const GiftExpertApp = () => {


  var [categories, setCategories] = useState(['One Punch Man','Dragon Ball'])  
  const addCategorie=(newCategorie)=>{
    if(categories.includes(newCategorie))return;
    setCategories([newCategorie,...categories]);
  }
  return (
    <>
        <h1>GiftExpertApp</h1>
        <AddCategorie onNewCategorie={addCategorie}/>
        {categories.map((category)=>(
             <GifGRid 
               key={category}
               category={category}
            />
          ))
        }

    </>
  )
}
