import React, { Component } from 'react';
import './calculator_container.scss';

import TextArea from './TextArea/CalculatorTextArea';
import Button from './Button/CalculatorButton';

class CalculatorContainer extends Component {
	render() {
		return (
			<div className="calculator-container">
				<TextArea 
					input={this.props.input}
					result={this.props.result}
				/>
				<div className="calculator-row">
					<Button 
						text="C"
						onCalculatorButtonClicked={this.props.onCalculatorButtonClicked}
						widthPercent="100"
					/>
				</div>
				<div className="calculator-row">
					<Button 
						text="7" 
						onCalculatorButtonClicked={this.props.onCalculatorButtonClicked}
						widthPercent="25"
					/>
					<Button 
						text="8" 
						onCalculatorButtonClicked={this.props.onCalculatorButtonClicked}
						widthPercent="25"
					/>
					<Button 
						text="9" 
						onCalculatorButtonClicked={this.props.onCalculatorButtonClicked}
						widthPercent="25"
					/>
					<Button 
						text="/" 
						onCalculatorButtonClicked={this.props.onCalculatorButtonClicked}
						widthPercent="25"
					/>
				</div>
				<div className="calculator-row">
					<Button 
						text="4" 
						onCalculatorButtonClicked={this.props.onCalculatorButtonClicked}
						widthPercent="25"
					/>
					<Button 
						text="5" 
						onCalculatorButtonClicked={this.props.onCalculatorButtonClicked}
						widthPercent="25"
					/>
					<Button 
						text="6" 
						onCalculatorButtonClicked={this.props.onCalculatorButtonClicked}
						widthPercent="25"
					/>
					<Button 
						text="*" 
						onCalculatorButtonClicked={this.props.onCalculatorButtonClicked}
						widthPercent="25"
					/>
				</div>
				<div className="calculator-row">
					<Button 
						text="1" 
						onCalculatorButtonClicked={this.props.onCalculatorButtonClicked}
						widthPercent="25"
					/>
					<Button 
						text="2" 
						onCalculatorButtonClicked={this.props.onCalculatorButtonClicked}
						widthPercent="25"
					/>
					<Button 
						text="3" 
						onCalculatorButtonClicked={this.props.onCalculatorButtonClicked}
						widthPercent="25"
					/>
					<Button 
						text="-" 
						onCalculatorButtonClicked={this.props.onCalculatorButtonClicked}
						widthPercent="25"
					/>
				</div>
				<div className="calculator-row">
					<Button 
						text="," 
						onCalculatorButtonClicked={this.props.onCalculatorButtonClicked}
						widthPercent="25"
					/>
					<Button 
						text="0" 
						onCalculatorButtonClicked={this.props.onCalculatorButtonClicked}
						widthPercent="25"
					/>
					<Button 
						text="=" 
						onCalculatorButtonClicked={this.props.onCalculatorButtonClicked}
						widthPercent="25"
					/>
					<Button 
						text="+" 
						onCalculatorButtonClicked={this.props.onCalculatorButtonClicked}
						widthPercent="25"
					/>
				</div>
			</div>
		);
	}
}

export default CalculatorContainer;