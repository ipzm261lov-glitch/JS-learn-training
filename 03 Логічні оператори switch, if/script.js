"use strict";

// Оператори порівняння повертають true або false.
const age = 18;
const userName = "Олег";

console.log("=== Порівняння ===");
console.log("5 === 5:", 5 === 5);       // true: однакові значення й типи
console.log('5 === "5":', 5 === "5"); // false: number не дорівнює string
console.log("5 == '5':", 5 == "5");   // true: == приводить типи, зазвичай краще ===
console.log("5 !== 3:", 5 !== 3);     // true: значення або тип відрізняються
console.log("10 > 7:", 10 > 7);       // true
console.log("10 < 7:", 10 < 7);       // false
console.log("18 >= age:", 18 >= age); // true
console.log("16 <= age:", 16 <= age); // true

// Логічні оператори поєднують або змінюють умови.
const hasTicket = true;
const isAdult = age >= 18;
const isStudent = false;

console.log("\n=== Логічні оператори ===");
console.log("&& (І):", isAdult && hasTicket);       // true, якщо обидві умови true
console.log("|| (АБО):", isStudent || hasTicket);  // true, якщо хоча б одна умова true
console.log("! (НЕ):", !hasTicket);                // false, протилежне значення

// Практичний приклад: доступ дозволено повнолітнім із квитком.
if (isAdult && hasTicket) {
	console.log(`${userName} може увійти.`);
} else {
	console.log(`${userName} не може увійти.`);
}

// Коротке замикання: друга частина && перевіряється лише тоді,
// коли перша частина true.
const hasAccess = isAdult && hasTicket;
console.log("Доступ:", hasAccess);

const questions = [
	{
		question: "Який оператор перевіряє рівність і значення, і типу?",
		answers: ["==", "===", "=", "!=="],
		correct: 1,
		explanation: "=== — строга рівність: значення та тип мають збігатися.",
		code: 'console.log(5 === 5);   // true\nconsole.log(5 === "5"); // false',
		application: "Використовуй === для передбачуваної перевірки введених даних, наприклад ролі або статусу користувача."
	},
	{
		question: 'Який результат виразу 5 === "5"?',
		answers: ["true", "false", "5", "Помилка"],
		correct: 1,
		explanation: 'Результат false: число 5 і рядок "5" мають різні типи.',
		code: 'const input = "5";\nconsole.log(input === 5); // false',
		application: "Корисно пам’ятати про різні типи під час перевірки значень із форми: поля введення зазвичай повертають рядки."
	},
	{
		question: "Що поверне вираз 10 >= 10?",
		answers: ["true", "false", "10", "Помилка"],
		correct: 0,
		explanation: ">= означає «більше або дорівнює», тож 10 >= 10 — true.",
		code: "const age = 10;\nconsole.log(age >= 10); // true",
		application: "Так перевіряють, чи досягло значення мінімального порогу: наприклад, потрібного віку або кількості балів."
	},
	{
		question: "Коли вираз A && B буде true?",
		answers: ["Коли true хоча б одне з них", "Коли обидва true", "Коли обидва false", "Завжди"],
		correct: 1,
		explanation: "Оператор && (І) повертає true, лише якщо обидві умови істинні.",
		code: "const hasTicket = true;\nconst isAdult = true;\nconsole.log(hasTicket && isAdult); // true",
		application: "Застосовуй &&, коли для дії потрібні всі умови одночасно, наприклад квиток і повноліття для входу."
	},
	{
		question: "Коли вираз A || B буде true?",
		answers: ["Лише коли обидва true", "Лише коли обидва false", "Коли хоча б одне true", "Ніколи"],
		correct: 2,
		explanation: "Оператор || (АБО) повертає true, якщо істинна хоча б одна умова.",
		code: "const isWeekend = true;\nconst isHoliday = false;\nconsole.log(isWeekend || isHoliday); // true",
		application: "Застосовуй ||, якщо доступні альтернативні умови, наприклад знижка діє у вихідні або свята."
	},
	{
		question: "Як змінити true на false, а false на true?",
		answers: ["Додати !!", "Використати !", "Використати &&", "Використати =="],
		correct: 1,
		explanation: "Логічне НЕ (!) інвертує булеве значення.",
		code: "const isBlocked = false;\nconsole.log(!isBlocked); // true",
		application: "Оператор ! зручний для перевірки протилежного стану, наприклад показати кнопку, якщо користувач не заблокований."
	},
	{
		question: "Який результат виразу 7 !== 7?",
		answers: ["true", "false", "7", "Помилка"],
		correct: 1,
		explanation: "!== перевіряє строгу нерівність. Однакові числа 7 і 7 не є нерівними.",
		code: "console.log(7 !== 7);   // false\nconsole.log(7 !== '7'); // true",
		application: "Перевіряй !==, чи відрізняються тип або значення, наприклад чи змінилося обране користувачем значення."
	},
	{
		question: "Що виведе вираз 3 < 2 || 4 > 1?",
		answers: ["true", "false", "2", "Помилка"],
		correct: 0,
		explanation: "Перша умова false, друга true. Для || достатньо однієї істинної умови.",
		code: "console.log(3 < 2 || 4 > 1); // true",
		application: "Так об’єднують альтернативи: наприклад, значення прийнятне, якщо воно менше мінімуму або більше максимуму."
	},
	{
		question: "Що називають коротким замиканням у виразі A && B?",
		answers: [
			"JavaScript завжди перевіряє обидві умови",
			"Якщо A — false, B не перевіряється",
			"Якщо A — true, B не перевіряється",
			"Оператор && завершує програму"
		],
		correct: 1,
		explanation: "Якщо ліва частина && уже false, результат false — перевіряти праву частину не потрібно.",
		code: 'const user = null;\nconsole.log(user && user.name); // null',
		application: "Коротке замикання допомагає не звертатися до властивості, якщо об’єкта ще немає."
	},
	{
		question: "Яка умова дозволить увійти лише повнолітньому з квитком?",
		answers: [
			"age >= 18 || hasTicket",
			"age < 18 && hasTicket",
			"age >= 18 && hasTicket",
			"age === 18 || !hasTicket"
		],
		correct: 2,
		explanation: "Потрібні обидві умови одночасно: вік від 18 років і наявність квитка.",
		code: "const canEnter = age >= 18 && hasTicket;",
		application: "Таку перевірку доступу використовують перед показом сторінки або виконанням дії."
	},
	{
		question: 'Що поверне вираз 5 == "5"?',
		answers: ["true", "false", "Рядок '5'", "Помилка"],
		correct: 0,
		explanation: '== порівнює значення з приведенням типів, тому число 5 дорівнює рядку "5".',
		code: 'console.log(5 == "5"); // true',
		application: "== може дати неочікуваний результат через приведення типів, тому в більшості випадків обирай ===."
	},
	{
		question: "Що означає оператор !==?",
		answers: ["Строга рівність", "Присвоєння", "Строга нерівність", "Більше або дорівнює"],
		correct: 2,
		explanation: "!== повертає true, якщо значення або типи не збігаються.",
		code: 'console.log("active" !== "blocked"); // true',
		application: "Ним можна перевірити, що стан або значення відрізняється від забороненого."
	},
	{
		question: "Що поверне вираз 4 <= 4?",
		answers: ["true", "false", "4", "Помилка"],
		correct: 0,
		explanation: "<= означає «менше або дорівнює», тому рівні значення також дають true.",
		code: "console.log(4 <= 4); // true",
		application: "Перевірка корисна для верхньої межі: наприклад, чи не перевищена максимальна кількість спроб."
	},
	{
		question: "Який результат виразу 9 > 12?",
		answers: ["true", "false", "12", "Помилка"],
		correct: 1,
		explanation: "9 не більше за 12, тому результат порівняння — false.",
		code: "const temperature = 9;\nconsole.log(temperature > 12); // false",
		application: "Оператори > та < порівнюють числа для умов на кшталт перевірки температури чи бюджету."
	},
	{
		question: "Який вираз перевіряє, що score від 50 до 100 включно?",
		answers: [
			"score >= 50 || score <= 100",
			"score >= 50 && score <= 100",
			"50 >= score >= 100",
			"score === 50 && score === 100"
		],
		correct: 1,
		explanation: "Потрібно окремо перевірити обидві межі та поєднати їх оператором &&.",
		code: "const isValid = score >= 50 && score <= 100;",
		application: "Так перевіряють, чи значення входить у допустимий діапазон, наприклад оцінку або вік."
	},
	{
		question: "Що поверне вираз !false?",
		answers: ["true", "false", "null", "Помилка"],
		correct: 0,
		explanation: "Оператор ! заперечує логічне значення: !false дорівнює true.",
		code: "const isLoading = false;\nconsole.log(!isLoading); // true",
		application: "Можна показувати вміст, коли завантаження не триває: if (!isLoading) { ... }."
	},
	{
		question: "Що поверне вираз true && false?",
		answers: ["true", "false", "1", "Помилка"],
		correct: 1,
		explanation: "Для true результату && обидві частини мають бути true. Тут друга частина false.",
		code: "console.log(true && false); // false",
		application: "Якщо бодай одна обов’язкова умова не виконана, дія не повинна відбуватися."
	},
	{
		question: "Що поверне вираз false || false?",
		answers: ["true", "false", "null", "Помилка"],
		correct: 1,
		explanation: "Для true результату || хоча б одна частина має бути true. Тут обидві частини false.",
		code: "console.log(false || false); // false",
		application: "Якщо жодна з альтернатив не доступна, наприклад немає ні email, ні телефону, результат буде false."
	},
	{
		question: "Який результат виразу 'ананас' > 'апельсин'?",
		answers: ["true", "false", '"ананас"', "Помилка"],
		correct: 1,
		explanation: "Рядки порівнюються лексикографічно за кодами символів. На першому відмінному символі «н» стоїть перед «п».",
		code: 'console.log("ананас" > "апельсин"); // false',
		application: "Рядкові порівняння можна застосовувати для простого сортування, але для локалізованих текстів краще використовувати localeCompare()."
	},
	{
		question: "Що виведе вираз 2 + 3 > 4?",
		answers: ["true", "false", "5", "Помилка"],
		correct: 0,
		explanation: "Спершу обчислюється 2 + 3, отримуємо 5; потім 5 > 4, тобто true.",
		code: "console.log(2 + 3 > 4); // true",
		application: "Порівнюй обчислені значення, наприклад суму кошика із мінімальною сумою замовлення."
	},
	{
		question: "Що повертає вираз 0 === false?",
		answers: ["true", "false", "0", "Помилка"],
		correct: 1,
		explanation: "0 і false мають різні типи, тому строга рівність === повертає false.",
		code: "console.log(0 === false); // false",
		application: "Не плутай числовий нуль із булевим false під час перевірки результатів і лічильників."
	},
	{
		question: "Що означає умова !(hasAccess)?",
		answers: [
			"Доступ надано",
			"Доступ не надано",
			"Перевіряється лише тип hasAccess",
			"Умова завжди true"
		],
		correct: 1,
		explanation: "! змінює булеве значення на протилежне, тож умова істинна, якщо hasAccess — false.",
		code: "if (!hasAccess) {\n  console.log('Доступ заборонено');\n}",
		application: "Заперечення часто використовують для обробки випадку, коли користувач не авторизований або ресурс недоступний."
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
	} else if (correctAnswers >= 7) {
		resultTitle.textContent = "Чудовий результат! ✨";
	} else if (correctAnswers >= 4) {
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

document.querySelector("#age-button").addEventListener("click", () => {
	const input = prompt("Скільки вам років?");
	if (input === null) return;

	const age = Number(input);
	if (input.trim() === "" || !Number.isFinite(age)) {
		alert("Введено не число.");
	} else if (age < 12) {
		alert("Ви дитина.");
	} else if (age < 18) {
		alert("Ви підліток.");
	} else {
		alert("Ви дорослий.");
	}
});

document.querySelector("#month-button").addEventListener("click", () => {
	const input = prompt("Введіть назву місяця українською:");
	if (input === null) return;

	const month = input.trim().toLocaleLowerCase("uk");
	let message;

	switch (month) {
		case "січень":
		case "березень":
		case "травень":
		case "липень":
		case "серпень":
		case "жовтень":
		case "грудень":
			message = `${month}: 31 день.`;
			break;
		case "квітень":
		case "червень":
		case "вересень":
		case "листопад":
			message = `${month}: 30 днів.`;
			break;
		case "лютий":
			message = `${month}: 28 або 29 днів (залежно від високосного року).`;
			break;
		default:
			message = "Такого місяця не знайдено. Введіть назву українською.";
	}

	console.log(message);
});

updateStats();
showQuestion();


// const input = prompt("Скільки вам років?");
// const age = Number(input);

// if (input === null) {
//   // Введення скасовано
// } else if (input.trim() === "" || !Number.isFinite(age)) {
//   alert("Введено не число.");
// } else if (age < 12) {
//   alert("Ви дитина.");
// } else if (age < 18) {
//   alert("Ви підліток.");
// } else {
//   alert("Ви дорослий.");
// }

switch (month) {
  case "січень":
  case "березень":
  case "травень":
  case "липень":
  case "серпень":
  case "жовтень":
  case "грудень":
    console.log("31 день");
    break;
  case "квітень":
  case "червень":
  case "вересень":
  case "листопад":
    console.log("30 днів");
    break;
  case "лютий":
    console.log("28 або 29 днів");
    break;
  default:
    console.log("Такого місяця не знайдено.");
}