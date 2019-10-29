import React from 'react';
import './Form.css';

const formComp = (props) => {
    return (
        <div className="Form">
            <form>
                <label className="Field">Store Name:</label><input type='text'value={props.storename}/><br />
                <label className="Field">Location:</label><input type='text' value={props.location}/><br />
                <label className="Field">Size:</label><input type='text' value={props.size}/>
            </form>
        </div>
    )
}

export default formComp;