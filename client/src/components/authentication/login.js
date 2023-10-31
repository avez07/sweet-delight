import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useState } from "react";
// import bcrypt from "bcrypt";

function Login() {
  const [username,setUsername] = useState(null)
  const [password,setPassword] = useState(null)
  const handleItems = ()=>{
    
    // bcrypt.hash(password,10,(err,hash)=>{
    //   if(err){
    //     console.log(err);
    //   }else{
       
    //   }
    // })
    sessionStorage.setItem('username',username);
        sessionStorage.setItem('password',password)
   
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
