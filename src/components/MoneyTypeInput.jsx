import React from "react";
import { originValue, updateValue } from "../utils/funcs";

class MoneytypeInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleChangeMoneyType = this.handleChangeMoneyType.bind(this);
	}

	handleChangeMoneyType(e) {
		let inputValue = e.target.value;
		if (e.target.id === "moneyTypeInput1") {
			updateValue.moneyType1 = inputValue || originValue.moneyType1;
		} else {
			updateValue.moneyType2 = inputValue || originValue.moneyType2;
		}
	}

	render() {
		return (
			<div>
				<p>
					{originValue.moneyType1}:
					<input
						onBlur={this.handleChangeMoneyType}
						id="moneyTypeInput1"
					></input>
				</p>
				<p>
					{originValue.moneyType2}:
					<input
						onBlur={this.handleChangeMoneyType}
						id="moneyTypeInput2"
					></input>
				</p>
			</div>
		);
	}
}

export { MoneytypeInput };
