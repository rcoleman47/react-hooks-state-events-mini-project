import React from "react";

function CategoryFilter({categories, onSelect, categorySet}) {

  console.log(categorySet)
  const handleClick = (e) => {
  
    onSelect(e.target.textContent)
  }
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => <button className={category === categorySet ? "selected": ""} onClick={handleClick} key={category}>{category}</button>
      )}
    </div>
  );
}

export default CategoryFilter;
