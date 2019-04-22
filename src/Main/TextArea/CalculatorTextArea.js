import React from 'react';
import './calculator_text_area.scss';

const CalculatorTextArea = (props) => {
	return (
		<div className="calculator-text-area">
			<p className="calculator-input">{props.input}</p>
			<p className="calculator-output">{props.result}</p>
		</div>
	);
}

export default CalculatorTextArea;