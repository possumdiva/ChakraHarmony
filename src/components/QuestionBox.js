import React, { useState } from "react";
import "../style.css";
import { connect } from "react-redux"


// Function to question inside our app 
const QuestionBox = (props) => {
    const handleChange = (e) => {
        props.handleAnswerChange(e.target.name, e.target.value, props.Id, props.type)
    }
    return (
        <div className="questionBox">
            <div className="question">{props.question}</div>
            <div className="radiobuttons">
                <form onChange={handleChange}>
                    <input type="radio" value="yes" name="answer" /> Yes
                <input type="radio" value="no" name="answer" /> No
                </form>

            </div>
        </div>

    )
};

export default QuestionBox; 