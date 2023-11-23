import React, { useState } from "react";
import { Form, Button,InputGroup } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles

const BulkEdit = () => {
  const [description, setDescription] = useState("");

    const [sell, setSell] = useState('');
    const [cost, setCost] = useState('');
    const [profit, setProfit] = useState('');
    const [margin, setMargin] = useState('');
  
    const handleSellChange = (e) => {
      setSell(e.target.value);
      calculateMargin(e.target.value, cost);
    };
  
    const handleCostChange = (e) => {
      setCost(e.target.value);
      calculateMargin(sell, e.target.value);
    };
  
    const calculateMargin = (sellValue, costValue) => {
      const sell = parseFloat(sellValue) || 0;
      const cost = parseFloat(costValue) || 0;
      const calculatedProfit = sell - cost;
      const calculatedMargin = (cost / sell)*100;
      setMargin(calculatedMargin.toFixed(2))
      setProfit(calculatedProfit.toFixed(2));
    };

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
    <InputGroup className="me-3" style={{width:'30%'}}>
      <InputGroup.Text className="inputgroup-text">Price</InputGroup.Text>
      <Form.Control className="add-name" type="text" onChange={handleSellChange} placeholder="0.00" />
    </InputGroup>
    <InputGroup style={{width:'30%'}}>
      <InputGroup.Text className="inputgroup-text">campare Price</InputGroup.Text>
      <Form.Control className="add-name" type="text"  placeholder="0.00" />
    </InputGroup>
   
  </div>
  <div className="d-flex align-items-center">
    <InputGroup className="me-3" style={{width:'30%'}}>
      <InputGroup.Text className="inputgroup-text">Cost</InputGroup.Text>
      <Form.Control className="add-name" type="text" onChange={handleCostChange} placeholder="0.00" />
    </InputGroup>
    <InputGroup className="me-3" style={{width:'30%'}}>
      <InputGroup.Text className="inputgroup-text">Profit</InputGroup.Text>
      <Form.Control className="add-name" type="text" disabled value={profit} placeholder="0.00" />
    </InputGroup>
    <InputGroup style={{width:'30%'}}>
      <InputGroup.Text className="inputgroup-text">Margin</InputGroup.Text>
      <Form.Control className="add-name" type="text" disabled value={`${margin}%`} placeholder="0.00" />
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
