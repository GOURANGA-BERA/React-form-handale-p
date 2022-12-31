import React from "react";
import { useState } from "react";
import "./Form.css";

function Form() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [faname, setfaname] = useState("");
  const [mname, setmname] = useState("");
  const [age, setage] = useState("");
  const [dob, setdob] = useState("");
  function data(e) {
    e.preventDefault();

    console.log(fname, lname, faname, mname, age, dob);
  }
  function clear(e) {
    e.preventDefault();
    setfname("");
    setfaname("");
    setlname("");
    setfaname("");
    setmname("");
    setage("");
    setdob("");
    var res = document.querySelector("#val");
    res.innerHTML = "";
  }

  function print() {
    var res = document.querySelector("#val");
    res.innerHTML = `  <b>First-name:-</b>
    <span>${fname}</span>
    <b>Last-name:- </b> <span>${lname}</span>
    <b>Father-name:- </b> <span>${faname}</span>
    <b>Mother-name:- </b> <span>${mname}</span>
    <b>Age:- </b> <span>${age}</span>
    <b>Date of Birth-:- </b> <span>${dob}</span>`;
  }
  return (
    <div id="form">
      <form onSubmit={data}>
        <label htmlFor="fname">First-name:-</label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={fname}
          onChange={(e) => {
            setfname(e.target.value);
          }}
        />
        &nbsp;&nbsp;
        <label htmlFor="lname">Last-name:-</label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={lname}
          onChange={(e) => {
            setlname(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="faname">Father-name:-</label>
        <input
          type="text"
          id="faname"
          name="faname"
          value={faname}
          onChange={(e) => {
            setfaname(e.target.value);
          }}
        />
        &nbsp;&nbsp;
        <label htmlFor="mname">Mother-name:-</label>
        <input
          type="text"
          id="mname"
          name="mname"
          value={mname}
          onChange={(e) => {
            setmname(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="age">Age:-</label>
        <input
          type="text"
          id="age"
          name="age"
          value={age}
          onChange={(e) => {
            setage(e.target.value);
          }}
        />
        &nbsp;&nbsp;
        <label htmlFor="dob">DOB:-</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={dob}
          onChange={(e) => {
            setdob(e.target.value);
          }}
        />
        <br />
        <br />
        <input className="btn" type="submit" />
        <button className="btn" onClick={print}>
          print
        </button>
        <input className="btn" type="reset" onClick={clear} />
      </form>

      <div id="val"></div>
    </div>
  );
}

export default Form;
