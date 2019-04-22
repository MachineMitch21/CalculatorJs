import Operation from "./Operation";

class Divide extends Operation {

	perform() {
		let quotient = this.args[0];
		for (let i = 1; i < this.args.length; i++) {
			quotient /= this.args[i];
		}
		return quotient;
	}
}

export default Divide;