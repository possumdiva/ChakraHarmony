import React, { useEffect, useState } from 'react';
import '../style.css';
import questionAPI from '../question/questions';
import QuestionBox from './QuestionBox';
import Result from './ResultBox';
import { connect } from 'react-redux';
import {
  setRoot,
  setSacral,
  setSolarPlexus,
  setHeart,
  setThroat,
  setThirdEye,
  setCrown,
} from '../store/actions';
import { Switch, Route, Link } from 'react-router-dom';

function Quiz({
  setRoot,
  setSacral,
  setSolarPlexus,
  setHeart,
  setThroat,
  setThirdEye,
  setCrown,
}) {
  const [answerBank, setAnswerBank] = useState([]);
  const [questionBank, setQuestionBank] = useState([]);
  const [submitClick, setSubmitClick] = useState(false);
  // const [ sacralState, setSacralState ] =useState(0)
  // const [ solarPlexusState, setSolarPlexusState ] =useState(0)
  // const [ heartState, setHeartState ] =useState(0)
  // const [ throatState, setThroatState ] =useState(0)
  // const [ thirdEyeState, setThirdEyeState ] =useState(0)
  // const [ crownState, setCrownState ] =useState(0)

  useEffect(() => {
    getQuestions();
  }, []);

  const handleChange = (name, value, Id, type) => {
    console.log(name, value, Id, type);
    let answer = {
      Id: Id,
      type: type,
      value: value,
    };
    setAnswerBank([...answerBank, answer]);
    // let rootCount = 0;
    // let sacralCount = 0;
    // let solarPlexusCount = 0;
    // let heartCount = 0;
    // let throatCount = 0;
    // let thirdEyeCount = 0;
    // let crownCount = 0;
    // for (let i = 0; i < answerBank.length; i++) {
    //     if (answerBank[i].type === "Root" && answerBank[i].value === "yes") {
    //       rootCount +=1;
    //       setRoot(rootCount)
    //     }
    //     if (answerBank[i].type === "Sacral" && answerBank[i].value === "yes") {
    //         sacralCount +=1;
    //         setSacral(sacralCount)
    //       }
    //       if (answerBank[i].type === "SolarPlexus" && answerBank[i].value === "yes") {
    //         solarPlexusCount +=1;
    //         setSolarPlexus(solarPlexusCount)
    //       }
    //       if (answerBank[i].type === "Heart" && answerBank[i].value === "yes") {
    //         heartCount +=1;
    //         setHeart(heartCount)
    //       }
    //       if (answerBank[i].type === "Throat" && answerBank[i].value === "yes") {
    //         throatCount +=1;
    //         setThroat(throatCount)
    //       }
    //       if (answerBank[i].type === "ThirdEye" && answerBank[i].value === "yes") {
    //         thirdEyeCount +=1;
    //         setThirdEye(thirdEyeCount)
    //       }
    //       if (answerBank[i].type === "Crown" && answerBank[i].value === "yes") {
    //         crownCount +=1;
    //         setCrown(crownCount)
    //       }
    // }
    // console.log("quiz root", rootCount)
    // console.log("quiz sacral",sacralCount)
    // console.log("quiz solar",solarPlexusCount)
    // console.log("quiz heart",heartCount)
    // console.log("quiz throat",throatCount)
    // console.log("quiz thirdeye",thirdEyeCount)
    // console.log("quiz crown",crownCount)
  };
  const handleSubmit = () => {
    console.log(answerBank);

    let rootCount = 0;
    let sacralCount = 0;
    let solarPlexusCount = 0;
    let heartCount = 0;
    let throatCount = 0;
    let thirdEyeCount = 0;
    let crownCount = 0;
    for (let i = 0; i < answerBank.length; i++) {
      if (answerBank[i].type === 'Root' && answerBank[i].value === 'yes') {
        rootCount += 1;
        setRoot(rootCount);
      }
      if (answerBank[i].type === 'Sacral' && answerBank[i].value === 'yes') {
        sacralCount += 1;
        setSacral(sacralCount);
      }
      if (
        answerBank[i].type === 'SolarPlexus' &&
        answerBank[i].value === 'yes'
      ) {
        solarPlexusCount += 1;
        setSolarPlexus(solarPlexusCount);
      }
      if (answerBank[i].type === 'Heart' && answerBank[i].value === 'yes') {
        heartCount += 1;
        setHeart(heartCount);
      }
      if (answerBank[i].type === 'Throat' && answerBank[i].value === 'yes') {
        throatCount += 1;
        setThroat(throatCount);
      }
      if (answerBank[i].type === 'ThirdEye' && answerBank[i].value === 'yes') {
        thirdEyeCount += 1;
        setThirdEye(thirdEyeCount);
      }
      if (answerBank[i].type === 'Crown' && answerBank[i].value === 'yes') {
        crownCount += 1;
        setCrown(crownCount);
      }
    }
    console.log(answerBank);
    setSubmitClick(true);
  };

  // Function to get question from ./question
  const getQuestions = () => {
    questionAPI().then((question) => {
      console.log(question);
      setQuestionBank(question);
    });
  };

  useEffect(() => {
    if (answerBank.length > 48) {
      console.log('Answers Are Long Enough: ', answerBank);
      handleSubmit();
    }
  }, [answerBank])

  const handleTestSubmit = () => {
    // Set fake data
    setAnswerBank([
      { Id: '33', type: 'Throat', value: 'yes' },
      { Id: '36', type: 'ThirdEye', value: 'yes' },
      { Id: '34', type: 'Throat', value: 'yes' },
      { Id: '35', type: 'Throat', value: 'yes' },
      { Id: '38', type: 'ThirdEye', value: 'yes' },
      { Id: '39', type: 'ThirdEye', value: 'yes' },
      { Id: '37', type: 'ThirdEye', value: 'yes' },
      { Id: '40', type: 'ThirdEye', value: 'yes' },
      { Id: '09', type: 'Sacral', value: 'no' },
      { Id: '01', type: 'Root', value: 'no' },
      { Id: '02', type: 'Root', value: 'no' },
      { Id: '43', type: 'Crown', value: 'no' },
      { Id: '44', type: 'Crown', value: 'no' },
      { Id: '11', type: 'Sacral', value: 'no' },
      { Id: '10', type: 'Sacral', value: 'no' },
      { Id: '42', type: 'ThirdEye', value: 'yes' },
      { Id: '41', type: 'ThirdEye', value: 'yes' },
      { Id: '12', type: 'Sacral', value: 'no' },
      { Id: '45', type: 'Crown', value: 'no' },
      { Id: '14', type: 'Sacral', value: 'no' },
      { Id: '13', type: 'Sacral', value: 'no' },
      { Id: '16', type: 'SolarPlexus', value: 'no' },
      { Id: '46', type: 'Crown', value: 'no' },
      { Id: '47', type: 'Crown', value: 'no' },
      { Id: '48', type: 'Crown', value: 'no' },
      { Id: '03', type: 'Root', value: 'no' },
      { Id: '04', type: 'Root', value: 'no' },
      { Id: '07', type: 'Root', value: 'no' },
      { Id: '15', type: 'SolarPlexus', value: 'no' },
      { Id: '05', type: 'Root', value: 'no' },
      { Id: '49', type: 'Crown', value: 'no' },
      { Id: '06', type: 'Root', value: 'no' },
      { Id: '08', type: 'Sacral', value: 'no' },
      { Id: '23', type: 'Heart', value: 'no' },
      { Id: '20', type: 'SolarPlexus', value: 'no' },
      { Id: '18', type: 'SolarPlexus', value: 'no' },
      { Id: '17', type: 'SolarPlexus', value: 'no' },
      { Id: '19', type: 'SolarPlexus', value: 'no' },
      { Id: '21', type: 'SolarPlexus', value: 'no' },
      { Id: '22', type: 'Heart', value: 'no' },
      { Id: '24', type: 'Heart', value: 'no' },
      { Id: '29', type: 'Throat', value: 'yes' },
      { Id: '26', type: 'Heart', value: 'no' },
      { Id: '28', type: 'Heart', value: 'no' },
      { Id: '30', type: 'Throat', value: 'yes' },
      { Id: '32', type: 'Throat', value: 'yes' },
      { Id: '31', type: 'Throat', value: 'yes' },
      { Id: '27', type: 'Heart', value: 'no' },
      { Id: '25', type: 'Heart', value: 'no' },
    ]);
  };

  return (
    <div>
      <div className="glow">ChakraHarmony</div>
      <div className="questionBox">
        Please click yes or no to all questions and click submit at the bottom
      </div>

      {questionBank.length > 0 &&
        questionBank.map((question, index) => (
          <QuestionBox
            question={question.question}
            handleAnswerChange={handleChange}
            type={question.type}
            options={question.answers}
            key={question.questionId + index}
            Id={question.questionId}
          />
        ))}
      <div className="submit-button">
        <button onClick={handleTestSubmit} className="submit-button">
          Test Submit
        </button>
        {!!submitClick !== true ? (
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        ) : (
          <Link to="/result" style={{ textDecoration: 'none' }}>
            <button className="submit-button">Results</button>
          </Link>
        )}
      </div>
      <Switch>
        <Route path="/result">
          <Result />
        </Route>
      </Switch>
    </div>
  );
}
//     const mapDispatchToProps = (dispatch) => {
//         return {
//             increase: () => dispatch({ type: "ROOT_COUNTER" })
//         }
// }

export default connect(null, {
  setRoot,
  setSacral,
  setSolarPlexus,
  setHeart,
  setThroat,
  setThirdEye,
  setCrown,
})(Quiz);
