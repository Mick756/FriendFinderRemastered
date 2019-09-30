import React, {useState} from 'react';
import {Button} from 'reactstrap';
import {Link} from "react-router-dom";
import axios from 'axios';

import '../styles/home.css';
import '../styles/survey.css';

import Account from './Account';
import SurveyQuestion from './SurveyQuestion';

function Survey() {

    let questions = [
        {
            question_id: 1,
            question: "I enjoy long walks on the beach more than a movie night."
        },
        {
            question_id: 2,
            question: "If I lost all my technology right now, I would not mind."
        },
        {
            question_id: 3,
            question: "The world needs to do more to stop global warming."
        },
        {
            question_id: 4,
            question: "Religion is very important to me."
        },
        {
            question_id: 5,
            question: "I am not interested in the political status of my country."
        },
        {
            question_id: 6,
            question: "Dogs are better than cats."
        },
        {
            question_id: 7,
            question: "I prefer to use a track-pad over a mouse on a laptop."
        },
        {
            question_id: 8,
            question: "Minecraft is the best video game ever made."
        },
        {
            question_id: 9,
            question: "I try not to be negative around others if I am not feeling well."
        },
        {
            question_id: 10,
            question: "In order to be happy, you have to believe you are."
        }
    ];

    const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("user"));
    const [error, setError] = useState("");

    async function submitSurvey() {

        let missingQuestions = [];

        for (let i = 1; i < questions.length + 1; i++) {

            if (localStorage.getItem("" + i) && localStorage.getItem("" + i) == -1) {
                missingQuestions.push(i);
            }

        }

        if (missingQuestions.length) {

            setError("You need to answer the questions: " + missingQuestions.join(', '));

            return false;
        } else {

            let survey_object = [];

            for (let i = 0; i < questions.length; i++) {

                let question_obj = {
                    question_id: questions[i].question_id,
                    question: questions[i].question,
                    score: localStorage.getItem(questions[i].question_id)
                };

                survey_object.push(question_obj);

            }

            let response = await axios.post("/api/add_survey/" + localStorage.getItem("user"), survey_object);

            if (response.data === true) {

                window.location.replace("/");

            }

            return true;
        }

    }

    return (
        <div className="App">
            <div className="Shadow App-header">
                Friend Finder
                <Account />
            </div>
            <div className="Button-Container">
                <Link to="/">
                    <Button className="Shadow Home-Page-Button" id="signUp">Home</Button>
                </Link>
                <Link to="/signup">
                    <Button className="Shadow Home-Page-Button" id="login">Sign Up</Button>
                </Link>
                <Link to="/login">
                    <Button className="Shadow Home-Page-Button" id="Search">Login</Button>
                </Link>
                <Link to="/search">
                    <Button className="Shadow Home-Page-Button" id="Friends">Search</Button>
                </Link>
            </div>

            <div className="Shadow App-header-2">
                Take the Survey
            </div>

            {loggedIn ?
                <div className="Survey-Container">

                    <p className="Friend-Finder-App-Description"> Rate the statements' significance to you on a scale from 1 to 10. 1 being opposite of you and 10 being a great description of you. </p>

                    {questions.map(question => {

                        localStorage.setItem(question.question_id, "-1");

                        return (<SurveyQuestion question={question.question} question_id={question.question_id}/>);

                    })}

                    {error ? <p className="Friend-Finder-App-Description">{error}</p> : <p></p>}

                    <Button className="Shadow Survey-Submit-Button" onClick={(e) => {e.preventDefault(); submitSurvey();}}>Submit Survey</Button>

                </div>
            :
                <div className="Friend-Finder-App-Description">You need to be logged in to view and take the survey!</div>
            }

        </div>);
}

export default Survey;
