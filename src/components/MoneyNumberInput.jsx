import React from "react";
import { updateValue, toMoneyType1, toMoneyType2 } from "../utils/funcs";

class MoneyNumberInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			moneyType1Num: "",
			moneyType2Num: "",
		};
		this.handleConvertMoneyNumber = this.handleConvertMoneyNumber.bind(this);
	}

	handleConvertMoneyNumber(e) {
		let id = e.target.id;
		let num = parseFloat(e.target.value);
		let moneyConvertPlace = document.querySelectorAll(
			"div#moneyConvertPlace input"
		);
		if (id === "moneyConvertInput1") {
			let moneyNum2 = toMoneyType2(num);
			this.setState = {
				moneyType2Num: moneyNum2,
			};
			moneyConvertPlace[1].value = moneyNum2 || "";
		} else {
			let moneyNum1 = toMoneyType1(num);
			this.setState = {
				moneyType1Num: moneyNum1,
			};
			moneyConvertPlace[0].value = moneyNum1 || "";
		}
	}

	render() {
		return (
			<div id="moneyConvertPlace">
				<p>{updateValue.moneyType1}</p>
				<input
					id="moneyConvertInput1"
					onChange={this.handleConvertMoneyNumber}
				/>
				<p>{updateValue.moneyType2}</p>
				<input
					id="moneyConvertInput2"
					onChange={this.handleConvertMoneyNumber}
				/>
			</div>
		);
	}
}

export { MoneyNumberInput };
