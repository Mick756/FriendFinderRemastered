import React, {useState} from 'react';
import SurveyAnswerButton from "./SurveyAnswerButton";

import '../styles/survey.css';

function SurveyQuestion(props) {

    return (
        <div className="Survey-Question-Container">
            <p className="Survey-Question">{props.question}</p>
                <SurveyAnswerButton how_many={10} question_id={props.question_id} />
        </div>
    );
}

export default SurveyQuestion;
