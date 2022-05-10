import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GiftExpertApp = () => {

  

  const [categories, setCategories] = useState([ 'Swing Out Sisters']);

 /* const handleAdd = () =>{
      setCategories([...categories, 'Swing Out Sisters']);
  }*/

  return (
    <div>
        <h1>GiftExpertApp</h1>
        <AddCategory setCategories={setCategories}/>
        
        <ol>
          {
            categories.map(category =>(
              <GifGrid
               key={category}
               category={category} />
            ))
          }
        </ol>
    </div>
  )
}
