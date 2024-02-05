import React from 'react';

function ButtonComponent({ count , onButtonClick }) {
    const generateButtons = () => {
        let buttons = [];
        for (let i = 1; i <= count; i++) {
            const buttonText = i === count ? '0' : i;
            buttons.push(
            <button key={i} onClick={()=>onButtonClick(buttonText)} className='btn' >
            {buttonText}
            </button>
            );  }
        return buttons;
    };

    return (
        <div id='NumBtn'>
            {generateButtons()}
        </div>
    );
}

export default ButtonComponent;
