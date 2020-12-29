import React, { useEffect, useState } from 'react';
import '../style.css';
import questionAPI from '../question/questions';
import QuestionBox from './QuestionBox';
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
import { Link } from 'react-router-dom';

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
    
  };
  const handleSubmit = () => {
    if (answerBank.length > 48) {
      console.log('Answers Are Long Enough: ', answerBank);
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
    } else {
      alert('Please answer all questions to view results')
    }
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
  }, [answerBank]);


  return (
    <div>
      <div className="glow">ChakraHarmony</div>
      <div className="questionBox">
        Please click yes or no to ALL questions and click submit at the bottom to discover which of your chakras are out of banace
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
    </div>
  );
}


export default connect(null, {
  setRoot,
  setSacral,
  setSolarPlexus,
  setHeart,
  setThroat,
  setThirdEye,
  setCrown,
})(Quiz);
