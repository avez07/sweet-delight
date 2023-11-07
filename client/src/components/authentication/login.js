import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [username,setUsername] = useState(null)
  const [password,setPassword] = useState(null)
  console.log(process.env.REACT_APP_URL)

    const handleItems = async (e)=>{
      e.preventDefault();
   try {
    const apiUrl = process.env.REACT_APP_URL + 'api/login';
    const header =  {
      'Content-Type': 'application/json',
      'Authorization': process.env.REACT_APP_SECRET_KEY
    };
    
    const data ={
      email: username,
      password:password
    }
    const response = await axios.post(apiUrl,data,{
      headers: header})
    if (response.status === 200){
      console.log(response.data)
     localStorage.setItem('token',response.data)
    }
   } catch (error) {
    console.log(error);
   }
   
    }
  
 
  return (
    <Container fluid>
      <div
        className="d-flex justify-content-center align-items-center authentication"
        style={{ height: "100vh" }}>
        <div className="authentication_border">
          <Form>
            <h5>Login</h5>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
              <Button className="mt-2" type="submit" onClick={handleItems}>Submit</Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </Container>
  );
}

export default Login;
