import React from "react";
import { MoneytypeInput } from "../components/MoneyTypeInput";
import { ConvertRateInput } from "../components/ConvertRateInput";
import { InputFinsh } from "../components/InputFinsh";

class Page1 extends React.Component {
	render() {
		return (
			<div>
				<MoneytypeInput />
				<ConvertRateInput />
				<InputFinsh />
			</div>
		);
	}
}

export { Page1 };
