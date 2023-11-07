import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './App.css'; // Import your CSS file for custom styling

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="start" {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as a placeholder. In real life, you can have the elements you have chosen. Like text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <Example />
    </div>
  );
}

function Example() {
  return (
    <div>
      {['start', 'end', 'top', 'bottom'].map((placement, idx) => (
        <OffCanvasExample key={idx} name={placement} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Example />
      </div>
    </div>
  );
}

export default App;
