import Operation from "./Operation";

class Subtract extends Operation {

	perform() {
		let dif = this.args[0];
		for (let i = 1; i < this.args.length; i++) {
			dif -= this.args[i];
		}
		return dif;
	}
}

export default Subtract;