import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../components/hooks/useFetch";
import List from "../../components/List/List";
import "./Products.scss";

function Products() {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCat, setSelectedSubCat] = useState([]);

  const { data, loading, error } = useFetch(
    `/subcategories?[filters][categories][id][$eq]=${catId}`
  );
  console.log(data, "Product data");

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSubCat(
      isChecked
        ? [...selectedSubCat, value]
        : selectedSubCat.filter((item) => item !== value)
    );
  };

  console.log(selectedSubCat, "subcategoryID");

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>

        <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Lowest Price</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Highest Price</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCat={selectedSubCat}
        />
      </div>
    </div>
  );
}

export default Products;
