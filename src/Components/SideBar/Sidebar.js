import React from "react";
import LocationDetail from "./LocationDetail";
import "./Sidebar.css";
import { SolveSTP2 } from "../../Ulti/solveSTP2";
import { v4 as uuidv4 } from "uuid";
import { address } from "../../Ulti/address";
let method = "walking";
const SideBar = ({ points, map, control, setPoints, children }) => {
  const listLocationDetails = points.map((point, i) => {
    console.log(address);
    const add = address.data.find(({ po }) => {
      console.log("POOO", po);
      console.log("POINT", point);
      return JSON.stringify(po) === JSON.stringify(point);
    });
    console.log("KETQUA ,", add);
    return point ? (
      <div key={uuidv4()} className="container-box">
        <h1>{i}</h1>
        <LocationDetail map={map} point={point} add={add ? add.add : ""} />
      </div>
    ) : null;
  });
  console.log("SlideBar Run");
  // console.log(listLocationDetails);
  return (
    <>
      {children}
      <div className="SupportToolsArea">
        <form>
          <h4 style={{ margin: "2rem auto", display: "inline-block" }}>
            LOCATION IN JOURNEY:
          </h4>
          <div className="box"> {listLocationDetails}</div>
          {/* <input  type="button" value="START" id="Start" className="button" /> */}
          <div className="slidebar-container">
            <button
              onClick={e => {
                e.preventDefault();
                SolveSTP2(control, setPoints, method);
              }}
              className="btn btn-find"
            >
              Find Route
            </button>
            <button
              onClick={e => {
                e.preventDefault();
                control.hide();
                control.getPlan().setWaypoints([null]);
                setPoints([]);
              }}
              className="btn btn-clear"
            >
              Clear Points
            </button>
          </div>

          {/* <div>
          <button
            onClick={e => {
              e.preventDefault();
              method = "walking";
            }}
            className="btn btn-method"
          >
            Walking
          </button>
          <button
            onClick={e => {
              e.preventDefault();
              method = "cycling";
            }}
            className="btn btn-method"
          >
            Cycling
          </button>
          <button
            onClick={e => {
              e.preventDefault();
              method = "driving";
            }}
            className="btn btn-method"
          >
            Driving
          </button>
        </div> */}
        </form>
      </div>
    </>
  );
};

export default SideBar;
