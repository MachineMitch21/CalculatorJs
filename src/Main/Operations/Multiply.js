import Operation from "./Operation";

class Multiply extends Operation {

	perform() {
		let product = this.args[0];
		for (let i = 1; i < this.args.length; i++) {
			product *= this.args[i];
		}
		return product;
	}
}

export default Multiply;