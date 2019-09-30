import React from 'react';

import '../styles/friend.css';

function Friend(props) {

    return (
        <div>
            <h3 className="Friend-Name">{props.name}</h3>
            <p className="Friend-Email">Email: {props.email}</p>

            <p className="Friend-Finder-App-Description">Their Survey Results</p>
            <hr />
                {props.survey ?
                    <table className="Friend-Survey-Table">
                        <tr>
                            <th>Question</th>
                            <th>Their Answer (1-10)</th>
                        </tr>

                        <div>
                            {props.survey.map(q => {
                                let question = q.question;
                                let answer = q.score;

                                return (
                                    <tr>
                                        <th>{question}</th>
                                        <th className="Center">    {answer}</th>
                                    </tr>
                                );
                            })}
                        </div>
                    </table>
                    :
                    <div></div>
                }
        </div>
    );
}

export default Friend;
