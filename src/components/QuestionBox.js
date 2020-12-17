import React, { useState } from "react";
import "../style.css";
import { connect } from "react-redux"


// Function to question inside our app 
const QuestionBox = (props) => {
    const [answer, setAnswer] = useState("...");
    console.log("questionbox answer", answer);
    return (
        <div className="questionBox">
            <div className="question">{props.question}</div>
            <div className="radiobuttons">
                <input type="radio" value="yes" name="answer" /> Yes
                <input type="radio" value="no" name="answer" /> No
              </div>
        </div>

    )
};
const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => dispatch({ type: "ROOT_COUNTER" })
    }
}
export default connect(null, mapDispatchToProps)(QuestionBox); 