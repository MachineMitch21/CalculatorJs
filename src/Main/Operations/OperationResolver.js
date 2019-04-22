import Operation from './Operation';
import Add from './Add';
import Subtract from './Subtract';
import Divide from './Divide';
import Multiply from './Multiply';

let Operators = Object.freeze({
	DIVIDE: 	'DIVIDE',
	MULTIPLY: 	'MULTIPLY',
	SUBTRACT: 	'SUBTRACT',
	ADD: 		'ADD'
});

const OperationResolver = function() {
	this.operators = new Map([
		['/', Operators.DIVIDE], 
		['*', Operators.MULTIPLY], 
		['-', Operators.SUBTRACT], 
		['+', Operators.ADD]
	]);

	this.operations = new Map([
		[Operators.ADD, Add],
		[Operators.SUBTRACT, Subtract],
		[Operators.DIVIDE, Divide],
		[Operators.MULTIPLY, Multiply]
	]);

	let _input = [];
	let _opTree = [];

	let that = this;
	this.isOperator = function(str) {
		return this.operators.has(str);
	}

	this.isOperation = function(type) {
		return this.operations.has(type);
	}

	this.getEvaluationOpTree = function() {
		let opArr = [];
		let evaluationOpTree = [];

		let evalIndex = 0;

		for (let i = 0; i < _opTree.length; i++) {
			if (
				_opTree[i + 1] === Operators.MULTIPLY ||
				_opTree[i + 1] === Operators.DIVIDE
			) {
				opArr.push(
					_opTree[i],
					_opTree[i + 1],
					_opTree[i + 2]
				);

				evaluationOpTree[evalIndex] = [...opArr];
				opArr.length = 0;
				i += 2;
			} else {
				evaluationOpTree.push(_opTree[i]);
			}
			evalIndex++;
		}

		console.log(evaluationOpTree);

		let evalOpTree = [];
		evalIndex = 0;
		for (let i = 0; i < evaluationOpTree.length; i++) {
			if (
				evaluationOpTree[i + 1] === Operators.ADD ||
				evaluationOpTree[i + 1] === Operators.SUBTRACT
			) {
				opArr.push(
					evaluationOpTree[i],
					evaluationOpTree[i + 1],
					evaluationOpTree[i + 2]
				);

				evalOpTree[evalIndex] = [...opArr];
				opArr.length = 0;
				i += 2;
			} else {
				evalOpTree.push(evaluationOpTree[i]);
			}
			evalIndex++;
		}

		return evalOpTree;
	}

	function getOperatorType(op) {
		return that.operators.get(op);
	}

	function getOperationFromOperatorType(type) {
		return that.operations.get(type);
	}

	function evalOpArray(opArr) {
		let result = 0;
		let nums = [];

		if (Array.isArray(opArr[0])) {
			nums[0] = evalOpArray(opArr[0]);
		} else {
			nums[0] = parseFloat(opArr[0]);
		} 

		if (Array.isArray(opArr[2])) {
			nums[1] = evalOpArray(opArr[2]);
		} else {
			nums[1] = parseFloat(opArr[2]);
		}

		if (that.isOperation(opArr[1])) {
			let operation = getOperationFromOperatorType(opArr[1]);

			let opInst = new operation(...nums);
			result = opInst.perform();
		}

		return result;
	}

	function evaluateOpTree() {
		let result = 0;

		let evalOpTree = that.getEvaluationOpTree();

		if (evalOpTree.length === 1) {
			result = evalOpArray(evalOpTree[0]);
		} else {
			result = evalOpArray(evalOpTree);
		}

		return result;
	}

	this.addInput = function(str) {

		let len = _input.length;

		let strIsOp = this.isOperator(str);

		if (len > 0) {
			if (this.isOperator(_input[len - 1])) {
				if (strIsOp) {
					throw new Error('Syntax error: Please enter another number');
				}
				_input.push(str);
			} else if (strIsOp) {
				_input.push(str);
			} else {
				_input[len - 1] = _input[len - 1] + str;
			}
		} else {
			_input.push(str);
		}

		if (strIsOp) {
			_opTree.push(getOperatorType(str));
		} else {
			_opTree[_input.length - 1] = (_input[_input.length - 1]);
		}
	}

	this.getInput = function() {
		return _input;
	}

	this.flushInput = function() {
		_input.length = 0; 
		_opTree.length = 0;
	}

	this.getResult = function() {
		if (_input.length === 0) {
			return 0;
		}

		return evaluateOpTree();
	}
}

export default new OperationResolver();