import React from "react";
import Container from "react-bootstrap/Container";

function category() {
  return (
    <>
      <Container fluid className="category" style={{ background: "#ffefe8" }}>
        <div className="mx-4  px-4 py-3">
          <div className="text-start my-4 text-capitalize bg-light p-3 head">
            <h3>some cakes</h3>
          
            <ul>
                <li>Sort by:</li>
                <li><a href="/#">New</a></li>
                <li><a href="/#">recommond</a></li>
                <li><a href="/#">price low to high</a></li>
                <li><a href="/#">price high to low</a></li>

            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
export default category;
