import React, { Component } from "react";
import "../style.css";
import questionAPI from '../question/questions';
import QuestionBox from './QuestionBox';
import Result from './ResultBox';


class Quiz extends Component {
    constructor() {
        super();
        this.state = {
            questionBank: [],
            answerBank: [],

        };
    }
    handleChange = (name, value, Id, type) => {
        console.log(name, value, Id, type);
        let answer = {
            Id: Id,
            type: type,
            value: value
        }
        this.setState({ answerBank: [...this.state.answerBank, answer] })



    }
    handleSubmit = () => {
        console.log(this.state.answerBank);

    }

    // Function to get question from ./question 
    getQuestions = () => {
        questionAPI().then(question => {
            console.log(question);
            this.setState({ questionBank: question });
        });
    };


    componentDidMount() {
        this.getQuestions();
    }

    render() {
        return (
            <div>

                <div className="glow">ChakraHarmony</div>

                {this.state.questionBank.length > 0 &&
                    this.state.questionBank.map((question, index) => <QuestionBox question=
                        {question.question} handleAnswerChange={this.handleChange} type={question.type} options={question.answers} key={question.questionId + index}
                        Id={question.questionId} />)}

                <button className="submit-button" onClick={this.handleSubmit}>Submit</button>
            </div>)
    }
}


export default Quiz;
