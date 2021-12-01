import React from "react";

function CategoryFilter({categories, onClick}) {
  const categoryList = categories.map((category) => <button key={category} onClick={onClick}>{category}</button>);

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryList}
    </div>
  );
}

export default CategoryFilter;
