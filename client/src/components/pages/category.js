import React from "react";
import Container from "react-bootstrap/Container";

function category() {
  return (
    <>
      <Container fluid className="category" style={{ background: "#ffefe8" }}>
        <div className="mx-4  px-4 py-3">
          <div className="text-start my-4 text-capitalize bg-light p-3 head">
            <h3>somle cakes</h3>
          </div>
        </div>
      </Container>
    </>
  );
}
export default category;
