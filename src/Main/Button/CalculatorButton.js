import React from 'react';
import './calculator_button.scss';
import '../calculator_utils.scss';

const CalculatorButton = (props) => {
	return (
		<div 
			className="calculator-button" 
			onClick={props.onCalculatorButtonClicked}
			style={{
				width: `${props.widthPercent}%`
			}}
		>
			<p className="calculator-button-text unselectable">{props.text}</p>
		</div>
	);
}

export default CalculatorButton;