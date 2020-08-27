import React from "react";
import { checkInputConvertRate, updateValue } from "../utils/funcs";

class ConvertRateInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleConvertRate = this.handleConvertRate.bind(this);
	}

	handleConvertRate(e) {
		let isInputRight = checkInputConvertRate(e.target.value);
		let value = e.target.value;
		if (isInputRight) {
			updateValue.convertRate = value;
		} else {
			updateValue.convertRate = "";
		}
	}

	render() {
		return (
			<p>
				兑换比例:
				<input
					id="convertRateInput"
					onBlur={this.handleConvertRate}
					placeholder="100币种1兑换币种2"
				></input>
			</p>
		);
	}
}

export { ConvertRateInput };
