import React from 'react';

const formComp = (props) => {
    return (
        <div>
            <form>
                <label>Store Name:</label>
                <input type='text' />
                <label>Location:</label>
                <input type='text' />
                <label>Size:</label>
                <input type='text' />
            </form>
        </div>
    )
}

export default formComp;