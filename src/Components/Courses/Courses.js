import React from 'react';
import './Courses.css'

const Courses = (props) => {
    const {img, title, description, price} = props.course
    return (
        <div className="courses">
           <div>
           <img src={img} alt=""/>
                <h4 className="course-title">{title}</h4>
                <p className="course-description">{description}</p>
           </div>
            <div>
                <h5>Price : ${price}</h5>
                <button onClick={()=>props.addEnrollHandler(props.course)} className="enroll-button">Enroll Now</button>
            </div>
        </div>
    );
};

export default Courses;