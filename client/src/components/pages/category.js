import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";

function Category() {
  const [activeItem, setActiveItem] = useState(null);
  const [data, setData] = useState([]); // State to hold the data

  const handleItemClick = (index) => {
    setActiveItem(index);
  };


  useEffect(() => {
    // Use an async function to make the API request and update the state
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://unogsng.p.rapidapi.com/genres',
        headers: {
          'X-RapidAPI-Key': 'c0b99cf09fmsh1fbcd80be4a251cp1dafa1jsnf2a9016a0796',
          'X-RapidAPI-Host': 'unogsng.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        setData(response.data)
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData()
     // Call the async function to fetch and update data
  }, []); // Empty dependency array to ensure the effect runs once

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
                onClick={() => handleItemClick(0)}
              >
                New
              </li>
              <li
                className={activeItem === 1 ? "active" : ""}
                onClick={() => handleItemClick(1)}
              >
                Recommond
              </li>
              <li
                className={activeItem === 2 ? "active" : ""}
                onClick={() => handleItemClick(2)}
              >
                Price Low to High
              </li>
              <li
                className={activeItem === 3 ? "active" : ""}
                onClick={() => handleItemClick(3)}
              >
                Price High to Low
              </li>
            </ul>
          </div>
          <div>
            {/* Display your data here */}
            {data.articles && data.articles.map((article,index) => (
              <div key={index}>
                {console.log(data)}
                <h2>{article.title}</h2>
                <p>{article.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Category;
