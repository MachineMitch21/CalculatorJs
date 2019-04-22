
class Operation {
	constructor(...args) {
		if (this.constructor === Operation) {
			throw new TypeError('Abstract base class "Operation" cannot be directly instantiated');
		}

		if (this.perform === undefined) {
			throw new TypeError('Classes extending Operation must have a perform method');
		}

		this.args = args;
	}

}

export default Operation;