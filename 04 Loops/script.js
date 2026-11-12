"use strict";

const questions = [
	{
		question: "Що таке цикл у програмуванні?",
		answers: [
			"Конструкція для оголошення змінної",
			"Конструкція, що повторює блок коду за певною умовою або для набору значень",
			"Команда для завершення програми",
			"Спосіб створити HTML-елемент"
		],
		correct: 1,
		explanation: "Цикл дає змогу повторно виконувати блок коду, доки виконується умова або перебираються елементи.",
		code: "for (let i = 0; i < 3; i++) {\n  console.log(i);\n}",
		application: "Цикли використовують для повторення однотипних дій, наприклад обробки списку товарів."
	},
	{
		question: "Які ключові слова використовують для циклів у JavaScript?",
		answers: [
			"if, else, switch",
			"for, while, do...while, for...of, for...in",
			"function, return, yield",
			"try, catch, finally"
		],
		correct: 1,
		explanation: "JavaScript має цикли for, while, do...while, а також for...of і for...in для перебору значень та ключів.",
		code: "for (const value of values) {\n  console.log(value);\n}",
		application: "Обирай цикл відповідно до задачі: лічильник, умова або перебір колекції."
	},
	{
		question: "Чим відрізняються while і do...while?",
		answers: [
			"while перевіряє умову після тіла, а do...while — до нього",
			"У do...while тіло виконується принаймні один раз",
			"while перебирає масиви, а do...while — об’єкти",
			"Вони працюють однаково"
		],
		correct: 1,
		explanation: "while перевіряє умову перед кожною ітерацією. do...while перевіряє її після виконання тіла.",
		code: "let count = 0;\ndo {\n  count++;\n} while (false);\nconsole.log(count); // 1",
		application: "do...while зручний, коли дію потрібно виконати хоча б один раз, наприклад показати меню."
	},
	{
		question: "Скільки разів виконається тіло цього циклу?",
		answers: ["Жодного разу", "Один раз", "Два рази", "Нескінченно"],
		correct: 1,
		explanation: "do...while спершу виконує тіло, а вже потім перевіряє умову. Тому тіло виконається один раз.",
		code: "let attempts = 0;\ndo {\n  attempts++;\n} while (false);",
		application: "Ця властивість корисна, коли спочатку треба отримати введення, а потім перевірити його."
	},
	{
		question: "Що виведе цей цикл for?",
		answers: ["0, 1, 2", "1, 2, 3", "0, 1, 2, 3", "Нічого"],
		correct: 0,
		explanation: "i починається з 0, збільшується на 1 після кожної ітерації, а цикл зупиняється, коли i вже не менше за 3.",
		code: "for (let i = 0; i < 3; i++) {\n  console.log(i);\n}",
		application: "for з лічильником підходить, коли кількість повторень або межі перебору відомі."
	},
	{
		question: "Що станеться, якщо умова while хибна ще до першої ітерації?",
		answers: [
			"Тіло виконається один раз",
			"Тіло не виконається",
			"Цикл перетвориться на do...while",
			"Виникне помилка"
		],
		correct: 1,
		explanation: "while перевіряє умову до виконання тіла, тому за хибної початкової умови цикл пропускається.",
		code: "while (false) {\n  console.log('Цього не буде');\n}",
		application: "Перевіряй початкову умову, щоб розуміти, чи може цикл виконатися хоча б один раз."
	},
	{
		question: "Що перебирає цикл for...of?",
		answers: [
			"Ключі звичайного об’єкта",
			"Значення ітерованого об’єкта, наприклад елементи масиву",
			"Лише числові індекси",
			"Умови циклу while"
		],
		correct: 1,
		explanation: "for...of проходить по значеннях ітерованих об’єктів, зокрема масивів і рядків.",
		code: "for (const fruit of ['яблуко', 'груша']) {\n  console.log(fruit);\n}",
		application: "Застосовуй for...of, коли потрібні самі елементи колекції, а не їхні індекси."
	},
	{
		question: "Що перебирає цикл for...in?",
		answers: [
			"Значення елементів масиву",
			"Перелічувані ключі об’єкта",
			"Лише числа від 0 до заданої межі",
			"Умови об’єкта"
		],
		correct: 1,
		explanation: "for...in перебирає перелічувані ключі об’єкта. Для перебору значень масиву зазвичай зручніше for...of.",
		code: "const user = { name: 'Оля' };\nfor (const key in user) {\n  console.log(key); // name\n}",
		application: "Використовуй for...in для ключів об’єктів і пам’ятай, що він не призначений для перебору значень масиву."
	},
	{
		question: "Що робить команда break усередині циклу?",
		answers: [
			"Переходить до наступної ітерації",
			"Завершує цикл",
			"Перезапускає цикл",
			"Пропускає перевірку умови назавжди"
		],
		correct: 1,
		explanation: "break негайно завершує найближчий цикл, у якому виконується.",
		code: "for (let i = 0; i < 5; i++) {\n  if (i === 2) break;\n  console.log(i);\n}",
		application: "break допомагає припинити пошук, щойно потрібний елемент знайдено."
	},
	{
		question: "Що робить команда continue у циклі?",
		answers: [
			"Завершує програму",
			"Завершує весь цикл",
			"Пропускає решту поточної ітерації та переходить до наступної",
			"Повертається до першої ітерації"
		],
		correct: 2,
		explanation: "continue пропускає решту команд поточної ітерації, але цикл продовжується.",
		code: "for (let i = 0; i < 3; i++) {\n  if (i === 1) continue;\n  console.log(i); // 0, 2\n}",
		application: "continue зручно пропускати для обробки елементи, які не відповідають потрібній умові."
	},
	{
		question: "Як перевірити, що ціле число number є парним?",
		answers: [
			"number / 2 === 0",
			"number % 2 === 0",
			"number % 2 === 1",
			"number === 2"
		],
		correct: 1,
		explanation: "Оператор остачі % повертає остачу від ділення. Парне ціле число ділиться на 2 без остачі.",
		code: "if (Number.isInteger(number) && number % 2 === 0) {\n  console.log('Парне');\n}",
		application: "Таку перевірку можна використати, щоб повторювати введення, доки користувач не введе парне ціле число."
	},
	{
		question: "Як повторювати запит, доки користувач не введе коректне число?",
		answers: [
			"Виконати prompt лише один раз",
			"Використати цикл while і повторно перевіряти введення",
			"Використати switch без циклу",
			"Завершити програму після першого неправильного введення"
		],
		correct: 1,
		explanation: "while дає змогу повторювати запит, поки введення порожнє або не перетворюється на скінченне число.",
		code: "let input;\nlet number;\nwhile (input === '' || !Number.isFinite(number)) {\n  input = prompt('Введіть число');\n  if (input !== null) number = Number(input);\n}",
		application: "Повторна перевірка введення запобігає продовженню програми з некоректними даними."
	}
];

const scoreElement = document.querySelector("#score");
const streakElement = document.querySelector("#streak");
const levelElement = document.querySelector("#level");
const questionCountElement = document.querySelector("#question-count");
const progressPercentElement = document.querySelector("#progress-percent");
const progressTrack = document.querySelector("#progress-track");
const progressFill = document.querySelector("#progress-fill");
const questionElement = document.querySelector("#question");
const answersElement = document.querySelector("#answers");
const feedbackElement = document.querySelector("#feedback");
const feedbackExplanation = document.querySelector("#feedback-explanation");
const feedbackCode = document.querySelector("#feedback-code");
const feedbackApplication = document.querySelector("#feedback-application");
const nextButton = document.querySelector("#next-button");
const quizContent = document.querySelector("#quiz-content");
const resultElement = document.querySelector("#result");
const resultTitle = document.querySelector("#result-title");
const resultSummary = document.querySelector("#result-summary");
const restartButton = document.querySelector("#restart-button");

let currentQuestion = 0;
let score = 0;
let streak = 0;
let correctAnswers = 0;
let hasAnswered = false;

function getLevel() {
	if (score >= 80) return "Експерт";
	if (score >= 40) return "Практик";
	if (score >= 20) return "Дослідник";
	return "Новачок";
}

function updateStats() {
	scoreElement.textContent = `${score} XP`;
	streakElement.textContent = String(streak);
	levelElement.textContent = getLevel();
}

function updateProgress() {
	const completed = currentQuestion;
	const percentage = Math.round((completed / questions.length) * 100);
	questionCountElement.textContent = `Запитання ${Math.min(currentQuestion + 1, questions.length)} з ${questions.length}`;
	progressPercentElement.textContent = `${percentage}%`;
	progressTrack.setAttribute("aria-valuemax", String(questions.length));
	progressTrack.setAttribute("aria-valuenow", String(completed));
	progressFill.style.width = `${percentage}%`;
}

function showQuestion() {
	hasAnswered = false;
	const question = questions[currentQuestion];
	questionElement.textContent = question.question;
	answersElement.replaceChildren();
	feedbackElement.hidden = true;
	feedbackElement.removeAttribute("data-state");
	nextButton.hidden = true;
	nextButton.textContent = currentQuestion === questions.length - 1 ? "Побачити результат" : "Далі";
	updateProgress();

	question.answers.forEach((answer, index) => {
		const button = document.createElement("button");
		button.type = "button";
		button.className = "answer";
		button.textContent = answer;
		button.addEventListener("click", () => selectAnswer(index));
		answersElement.append(button);
	});
}

function selectAnswer(selectedIndex) {
	if (hasAnswered) return;
	hasAnswered = true;

	const question = questions[currentQuestion];
	const isCorrect = selectedIndex === question.correct;
	const answerButtons = answersElement.querySelectorAll(".answer");
	answerButtons.forEach((button, index) => {
		button.disabled = true;
		if (index === question.correct) button.classList.add("correct");
		if (index === selectedIndex && !isCorrect) button.classList.add("incorrect");
	});

	if (isCorrect) {
		streak += 1;
		correctAnswers += 1;
		const points = 10 + Math.min((streak - 1) * 2, 10);
		score += points;
		feedbackExplanation.textContent = `Правильно! +${points} XP. ${question.explanation}`;
		feedbackElement.dataset.state = "correct";
	} else {
		streak = 0;
		feedbackExplanation.textContent = `Не зовсім. ${question.explanation}`;
		feedbackElement.dataset.state = "incorrect";
	}

	feedbackCode.textContent = question.code;
	feedbackApplication.textContent = question.application;
	feedbackElement.hidden = false;
	updateStats();
	nextButton.hidden = false;
	nextButton.focus();
}

function finishGame() {
	quizContent.hidden = true;
	resultElement.hidden = false;
	progressTrack.setAttribute("aria-valuenow", String(questions.length));
	progressFill.style.width = "100%";
	progressPercentElement.textContent = "100%";
	questionCountElement.textContent = `Завершено · ${questions.length} запитань`;

	if (correctAnswers === questions.length) {
		resultTitle.textContent = "Ідеальний раунд! 🏆";
	} else if (correctAnswers >= Math.ceil(questions.length * 0.8)) {
		resultTitle.textContent = "Чудовий результат! ✨";
	} else if (correctAnswers >= Math.ceil(questions.length * 0.5)) {
		resultTitle.textContent = "Гарний прогрес! 🚀";
	} else {
		resultTitle.textContent = "Є куди зростати! 💪";
	}

	resultSummary.textContent = `Правильних відповідей: ${correctAnswers} з ${questions.length}. Зароблено ${score} XP. Рівень: «${getLevel()}».`;
	restartButton.focus();
}

nextButton.addEventListener("click", () => {
	currentQuestion += 1;
	if (currentQuestion === questions.length) {
		finishGame();
		return;
	}

	showQuestion();
	questionElement.focus();
});

restartButton.addEventListener("click", () => {
	currentQuestion = 0;
	score = 0;
	streak = 0;
	correctAnswers = 0;
	resultElement.hidden = true;
	quizContent.hidden = false;
	updateStats();
	showQuestion();
	questionElement.focus();
});

function promptForNumber(label) {
	while (true) {
		const input = prompt(label);
		if (input === null) return null;

		const trimmedInput = input.trim();
		const number = Number(trimmedInput);
		if (trimmedInput !== "" && Number.isFinite(number)) return number;

		alert("Це не число. Спробуй ще раз.");
	}
}

document.querySelector("#range-button").addEventListener("click", () => {
	const result = document.querySelector("#range-result");
	const firstNumber = promptForNumber("Введи перше число:");
	if (firstNumber === null) {
		result.textContent = "Введення скасовано.";
		return;
	}

	const secondNumber = promptForNumber("Введи друге число:");
	if (secondNumber === null) {
		result.textContent = "Введення скасовано.";
		return;
	}

	const min = Math.min(firstNumber, secondNumber);
	const max = Math.max(firstNumber, secondNumber);
	const numbers = [];
	for (let number = Math.ceil(min); number <= max; number++) {
		numbers.push(String(number));
	}

	result.textContent = numbers.length > 0
		? `Цілі числа від меншого до більшого: ${numbers.join(", ")}`
		: "У цьому діапазоні немає цілих чисел.";
});

document.querySelector("#even-button").addEventListener("click", () => {
	const result = document.querySelector("#even-result");
	while (true) {
		const input = prompt("Введи ціле парне число:");
		if (input === null) {
			result.textContent = "Введення скасовано.";
			return;
		}

		const trimmedInput = input.trim();
		const number = Number(trimmedInput);
		if (trimmedInput !== "" && Number.isFinite(number) && Number.isInteger(number) && number % 2 === 0) {
			result.textContent = `Число ${number} — парне.`;
			return;
		}

		alert("Потрібно ввести ціле парне число. Спробуй ще раз.");
	}
});

progressTrack.setAttribute("aria-valuemax", String(questions.length));
updateStats();
showQuestion();
