import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FakeData from "./FakeData";
import Courses from "./Components/Courses/Courses";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";

function App() {
  let totalCost=0;
  const [enroll, setEnroll]=useState([])

  function addEnrollHandler(enrolled){
    let newEnrolled=[...enroll,enrolled]
    setEnroll(newEnrolled)
  }
  enroll.map(data=>{
    totalCost=totalCost+data.price
  })
  return (
    <div className="fullpage">

      <div className="header">
        <h1 className="text-center bg-success">Hey! this is Rezowan Ahmed.</h1>
        <p className="text-primary text-center" style={{fontSize:'25px', marginBottom: '30px'}}>Welcome to my online classes</p>
      </div>

      <div className="course-container">
        <div className="course-details ">
          {FakeData.map((course) => {
            return <Courses key={course.id} course={course} addEnrollHandler={addEnrollHandler}/>;
          })}
        </div>

        <div className="cart">
          <Cart totalCost={totalCost} enroll={enroll}/>
        </div>
      </div>
      <footer className= "text-center" style={{color: 'white', backgroundColor:'gray', height:'50px', marginTop: '10px', fontSize: '20px'}}>
        Copyright @ Rezowan Ahmed
        </footer>
    </div>
  );
}

export default App;
