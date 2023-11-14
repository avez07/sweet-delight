import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { AuthContext } from "../authentication/auth";
import default_img from "../assets/Default_pfp.svg.png";
import Piechart from "./pie-chart/home-pie";
import BarChart from "./pie-chart/bar-chart";
import LineChart from "./pie-chart/line-chart";

function AdminHome() {
  const { name } = useContext(AuthContext);
  const name_array = name.split(" ");
  const NewName = name_array[0];

  return (
    <Card style={{ width: "100%" }}>
      <Card.Body>
        <Card.Title className="f-card-tittle d-flex justify-content-between">
          <div>
            <img src={default_img} height={40} alt="owner" /> Welcome back{" "}
            <span className="fw-bolder text-capitalize"> {NewName} !</span>
            <div className="sub-tittle">
              Your CRM is Oasis: come back and explore the power of data
            </div>
            
              <div className="barchart">
                <BarChart />
              </div>
              <div className="linechart">
                <LineChart />
              </div>
            
          </div>
          <div className="piechart">
            <Piechart />
          </div>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default AdminHome;
