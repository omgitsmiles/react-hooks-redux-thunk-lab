import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Cats() {
  const cats = useSelector(state => state.entities)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchCats())
  }, [])

  const renderCatImages = cats.map(cat => (
    <CatList key={cat.images} catPics={cat.images}/>
  ))


  return (
    <div>
      <h1>CatBook</h1>
      {renderCatImages}
    </div>
  );
}

export default Cats;
