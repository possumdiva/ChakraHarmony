import React, { Component } from "react";
import "./style.css";
import questionAPI from './question/questions';
import QuestionBox from './components/QuestionBox';
import Result from './components/ResultBox';


class App extends Component {
  constructor() {
    super();
    this.state = {
      questionBank: [],

    };
  }

  setAnswers = (id, answer) => {
    const questionBank = this.state.questionBank.map(question => {
      if (question.id === id) {
        return { ...question, response: answer }
      }
      return question
    })
    this.setState({ questionBank })
  }




  // Function to get question from ./question 
  getQuestions = () => {
    questionAPI().then(question => {
      console.log(question);
      this.setState({ questionBank: question });
    });
  };

  // Set state back to default and call function
  // playAgain = () => {
  //   this.getQuestions();
  //   this.setState({ score: 0, responses: 0 });
  // };

  // // Function to compute scores
  // computeAnswer = (answer, correctAns) => {
  //   if (answer === correctAns) {
  //     this.setState({
  //       score: this.state.score + 1
  //     });
  //   }
  //   this.setState({
  //     responses: this.state.responses < 5
  //       ? this.state.responses + 1
  //       : 5
  //   });
  // };

  // componentDidMount function to get question 
  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (<div className="container">
      <div className="glow">ChakraHarmony</div>

      {this.state.questionBank.length > 0 &&
        // this.state.responses < 5 &&
        this.state.questionBank.map((question, index) => <QuestionBox question=
          {question.question} options={question.answers} key={question.questionId + index}
          Id={question.questionId} />)}



      {
        this.state.responses === 49
          ? (<Result score={this.state.score}
            playAgain={this.playAgain} />)
          : null
      }

    </div>)
  }
}


export default App;
