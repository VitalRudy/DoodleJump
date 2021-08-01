let operationButtons = document.getElementsByClassName('operation-button');

const input1 = document.getElementById('number1');
const input2 = document.getElementById('number2');

function makeOperation(operationCode) {

	const number1 = Number(input1.value);
	const number2 = Number(input2.value);

		if (operationCode === '+') {
			const result = number1 + number2;
		} else if (operationCode === '-') {
			const result = number1 - number2;
		} else if (operationCode === '*') {
			const result = number1 * number2;
		} else if (operationCode === '/') {
			const result = number1 / number2;
		} else {
			window.alert('operation is unknown');
		}
		window.alert(result); 
}

function onOperationButtonClick(eventObject) {
	const clickedElement = eventObject.currentTarget;
	const operation = clickedElement.innerHTML
	makeOperation(operation);
}

for(let i = 0; i < operationButtons.length; i++) {
	const button = operationButtons[i];
	button.addEventListener('click', onOperationButtonClick); 
}
