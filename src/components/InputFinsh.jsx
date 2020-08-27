import React from "react";
import ReactDOM from "react-dom";
import { updateValue } from "../utils/funcs";
import { Page2 } from "../pages/Page2";

class InputFinsh extends React.Component {
	constructor(props) {
		super(props);
		this.handleInputFinsh = this.handleInputFinsh.bind(this);
	}

	handleInputFinsh() {
		let value = updateValue.convertRate;
		if (value) {
			ReactDOM.render(<Page2 />, document.getElementById("root"));
		}
	}

	render() {
		return <button onClick={this.handleInputFinsh}>确认</button>;
	}
}

export { InputFinsh };
