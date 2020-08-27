import React from "react";
import { updateValue, resetValue } from "../utils/funcs";
import ReactDOM from "react-dom";
import { Page1 } from "../pages/Page1";

class InputCancel extends React.Component {
	constructor(props) {
		super(props);
		this.handleResetToPage1 = this.handleResetToPage1.bind(this);
	}

	handleResetToPage1() {
		resetValue();
		ReactDOM.render(<Page1 />, document.getElementById("root"));
	}

	render() {
		return (
			<div id="inputCancelPlace">
				<p>
					{updateValue.moneyType1} : {updateValue.moneyType2} =
					{updateValue.convertRate / 100}
				</p>
				<button id="inputCancel" onClick={this.handleResetToPage1}>
					修改
				</button>
			</div>
		);
	}
}

export { InputCancel };
