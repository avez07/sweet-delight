import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { AuthContext } from "../authentication/auth";

function AdminHome() {
  const { name } = useContext(AuthContext);
  return (
    <Card style={{ width: "100%" }}>
      <Card.Body>
        <Card.Title>Welcome Back {name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AdminHome;
