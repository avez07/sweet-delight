import React, { useState, useEffect } from "react";
// import axios from "axios";
import Container from "react-bootstrap/Container";

function Category() {
  const [activeItem, setActiveItem] = useState(null);
  // const [data, setData] = useState([]); // State to hold the data

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  useEffect(() => { }, []);

  return (
    <>
      <Container fluid className="category" style={{ background: "#ffefe8" }}>
        <div className="mx-4 px-4 py-3">
          <div className="text-start my-4 text-capitalize bg-light px-3 py-2 head">
            <h3>some cakes</h3>
            <ul className="d-flex filters">
              <li>Sort by:</li>
              <li
                className={activeItem === 0 ? "active" : ""}
                onClick={() => handleItemClick(0)}>New
              </li>
              <li
                className={activeItem === 1 ? "active" : ""}
                onClick={() => handleItemClick(1)}>Recommond
              </li>
              <li
                className={activeItem === 2 ? "active" : ""}
                onClick={() => handleItemClick(2)}>Price Low to High
              </li>
              <li
                className={activeItem === 3 ? "active" : ""}
                onClick={() => handleItemClick(3)}>Price High to Low
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Category;
