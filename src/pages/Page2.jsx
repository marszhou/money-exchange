import React from "react";
import { MoneyNumberInput } from "../components/MoneyNumberInput";
import { InputCancel } from "../components/InputCancel";

class Page2 extends React.Component {
	render() {
		return (
			<div>
				<InputCancel />
				<MoneyNumberInput />
			</div>
		);
	}
}

export { Page2 };
