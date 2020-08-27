let originValue = {
	moneyType1: "币种1",
	moneyType2: "币种2",
	convertRate: "",
};

let updateValue = {
	moneyType1: "币种1",
	moneyType2: "币种2",
	convertRate: "",
};

function resetValue() {
	updateValue.moneyType1 = originValue.moneyType1;
	updateValue.moneyType2 = originValue.moneyType2;
	updateValue.convertRate = originValue.convertRate;
}

function checkInputConvertRate(value) {
	let temp = parseFloat(value);
	let isInputRight = Number.isNaN(temp);
	if (!isInputRight) {
		return true;
	}
	return false;
}

function toMoneyType2(value) {
	return (updateValue.convertRate / 100) * value;
}

function toMoneyType1(value) {
	return (100 / updateValue.convertRate) * value;
}

export {
	originValue,
	updateValue,
	checkInputConvertRate,
	toMoneyType1,
	toMoneyType2,
	resetValue,
};
