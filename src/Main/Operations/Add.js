
import Operation from './Operation';

class Add extends Operation {

	perform() {
		let sum = this.args[0];
		for (let i = 1; i < this.args.length; i++) {
			sum += this.args[i];
		}
		return sum;
	}
}

export default Add;