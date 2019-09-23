import React from 'react';
import '../styles/friend.css';

function Friend(props) {

    function limitDesc(desc) {
        let newDesc = [];
        let split = desc.split('');
        for (let i = 0; i < 30; i++) {
                newDesc.push(split[i]);
        }
        return (newDesc.join('') + (split.length < 30 ? "" : "..."));
    }

    return (
       <div>
           <h3 className="Friend-Name">{props.name}</h3>
           <h4 className="Friend-Age">Age: {props.age}</h4>
           <p className="Friend-Description">{limitDesc(props.description)}</p>
           <span><button className="Shadow Friend-Button">Send a Message</button><button className="Shadow Friend-Button">View Survey</button></span>
       </div>
    );
}

export default Friend;
