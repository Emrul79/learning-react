/* eslint-disable no-unused-vars */
import React from "react";
import "./style.css";
export default function CheckingProps({ Myarr, instatute, location }) {
  console.log(Myarr);
  return (
    <div>
      <h2 className="h2">Hello I am from Cheching Page:</h2>
      <h3>Our Students List in Bellow...</h3>
      {Myarr.map((student, index, arr) => {
        return (
          <div key={index} className="individual">
            <h1> Student Name is:{student.name}</h1>
            <h2> Student Email:{student.email}</h2>
            <h3>Student Age:{student.age}</h3>
            <h4> Is Student Graduate:{student.graduate}</h4>
          </div>
        );
      })}
    </div>
  );
}
