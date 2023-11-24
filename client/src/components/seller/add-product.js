import React, { useEffect, useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles

const BulkEdit = () => {
  const [description, setDescription] = useState("");

  const [sell, setSell] = useState("");
  const [cost, setCost] = useState("");
  const [profit, setProfit] = useState("");
  const [margin, setMargin] = useState("0.00");
  const [gst, setGst] = useState("0.00");
  const [Campare, setCampare] = useState("");
  const [discount, setDiscount] = useState("0.00");


  const calculateMargin = () => {
  
    const calculatedProfit = sell - cost;
    const calculatedMargin = (calculatedProfit / sell) * 100;
    // const calculateGst = sell < '1000'? 5 : 12;
    const calculateGst = 18;
    const calculateDiscount = ((Campare - sell)/Campare)*100;
    const finalDiscount = calculateDiscount < 0 ? 0  :calculateDiscount;
    setMargin(calculatedMargin.toFixed(2));
    setProfit(calculatedProfit.toFixed(2));
    setGst(calculateGst.toFixed(2));
    setDiscount(finalDiscount.toFixed(2));
  };
  useEffect(()=>{

    calculateMargin();
  })

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", e.target.formName.value);
    console.log("Description:", description);
    // Add any additional logic for form submission
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="card my-3 p-3">
          <Form.Label className="fw-semibold">Name</Form.Label>
          <Form.Control
            className="add-name"
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group controlId="formDescription" className="card my-3 p-3">
          <Form.Label className="fw-semibold">Description</Form.Label>
          <ReactQuill
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter description"
          />
        </Form.Group>
        <Form.Group controlId="formName" className="card my-3 p-3">
          <Form.Label className="fw-semibold me-3">Pricing</Form.Label>
          <div className="d-flex align-items-center my-3">
          <InputGroup className="me-3" style={{ width: "30%" }}>
              <InputGroup.Text className="inputgroup-text">
                Cost
              </InputGroup.Text>
              <Form.Control
                className="add-name"
                type="text"
                name="cost"
                onChange={(e)=>setCost(e.target.value)}
                placeholder="0.00"
              />
            </InputGroup>
            <InputGroup className="me-3" style={{ width: "30%" }}>
              <InputGroup.Text className="inputgroup-text">
                Price
              </InputGroup.Text>
              <Form.Control
                className="add-name"
                type="text"
                name="sell"
                onChange={(e)=>setSell(e.target.value)}
                placeholder="0.00"
              />
            </InputGroup>
            <InputGroup style={{ width: "30%" }}>
              <InputGroup.Text className="inputgroup-text">
                Campare Price
              </InputGroup.Text>
              <Form.Control
                className="add-name"
                type="text"
                name="campare"
                onChange={(e)=>setCampare(e.target.value)}
                placeholder="0.00"
              />
            </InputGroup>
           
            
          </div>
          <div className="d-flex align-items-center">
          <InputGroup className="me-3" style={{ width: "25%" }}>
              <InputGroup.Text className="inputgroup-text">
                Discount
              </InputGroup.Text>
              <Form.Control
                className="add-name"
                type="text"
                disabled
                value={`${discount}%`}
                placeholder="0.00"
              />
            </InputGroup>
            <InputGroup className="me-3" style={{ width: "25%" }}>
              <InputGroup.Text className="inputgroup-text">
                Profit
              </InputGroup.Text>
              <Form.Control
                className="add-name"
                type="text"
                disabled
                value={profit}
                placeholder="0.00"
              />
            </InputGroup>
            <InputGroup className="me-3" style={{ width: "25%" }}>
              <InputGroup.Text className="inputgroup-text">
                Margin
              </InputGroup.Text>
              <Form.Control
                className="add-name"
                type="text"
                disabled
                value={`${margin}%`}
                placeholder="0.00"
              />
            </InputGroup>
            <InputGroup style={{ width: "25%" }}>
              <InputGroup.Text className="inputgroup-text">Gst</InputGroup.Text>
              <Form.Control
                className="add-name"
                type="text"
                disabled
                value={`${gst}%`}
                placeholder="0.00"
              />
            </InputGroup>
          </div>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default BulkEdit;
