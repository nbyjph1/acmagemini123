const resultInput = document.getElementById('result');
const historyList = document.getElementById('history-list');
let history = [];

function appendNumber(number) {
  resultInput.value += number;
}

function appendOperator(operator) {
  resultInput.value += operator;
}

function calculateResult() {
  const expression = resultInput.value;
  try {
    const result = eval(expression);
    resultInput.value = result;
    addToHistory(expression, result);
    renderHistory();
  } catch (error) {
    resultInput.value = 'Error';
  }
}

function clearResult() {
  resultInput.value = '';
}

function deleteLast() {
  resultInput.value = resultInput.value.slice(0, -1);
}

function addToHistory(expression, result) {
  history.push({ expression, result });
}

function renderHistory() {
  historyList.innerHTML = '';
  for (const item of history) {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.expression} = ${item.result}`;
    historyList.appendChild(listItem);
  }
}
