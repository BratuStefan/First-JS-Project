// Function For ON/OFF Lightbulb
const offON = () => {
	const lightBulbOFF = document.querySelector(".imgOFF");
	const lightBulbON = document.createElement("img");
	lightBulbON.src = "images/light_bulb_on.png";
	lightBulbOFF.remove();
	document.querySelector("div").appendChild(lightBulbON);
	lightBulbON.onclick = function () {
		lightBulbON.remove();
		document.querySelector("div").appendChild(lightBulbOFF);
	};
};
// Function For Rock, Paper, Scissors Game
const apasaimagine = (number) => {
	// Variables
	const winText = "You Won !";
	const lossText = "You Lost !";
	const drawText = "Draw";
	let winLoss;
	let draw;
	const ImaginiJoc = document.querySelectorAll(".rock_paper_scissors img");
	const div2 = document.querySelector(".rock_paper_scissors");
	const gameParagraph = document.querySelector(".rock_paper_scissors p");

	// Random Number Generator
	const valoareCalculator = Math.floor(Math.random() * 3);
	if (valoareCalculator === 3) {
		valoareCalculator = 0;
	}

	// Removing & Adding Images For Player
	// Removing & Adding Rock Image
	if (number === 0) {
		ImaginiJoc[0].remove();
		ImaginiJoc[1].remove();
		ImaginiJoc[2].remove();
		div2.appendChild(ImaginiJoc[0]);
		if (valoareCalculator === 0) {
			div2.appendChild(ImaginiJoc[0].cloneNode(true));
		}
		// Removing & Adding Paper Image
	} else if (number === 1) {
		ImaginiJoc[0].remove();
		ImaginiJoc[1].remove();
		ImaginiJoc[2].remove();
		div2.appendChild(ImaginiJoc[1]);
		if (valoareCalculator === 1) {
			div2.appendChild(ImaginiJoc[1].cloneNode(true));
		}
		// Removing & Adding Scissors Image
	} else if (number === 2) {
		ImaginiJoc[0].remove();
		ImaginiJoc[1].remove();
		ImaginiJoc[2].remove();
		div2.appendChild(ImaginiJoc[2]);
		if (valoareCalculator === 2) {
			div2.appendChild(ImaginiJoc[2].cloneNode(true));
		}
	}

	// Removing & Adding Images For Computer
	div2.appendChild(ImaginiJoc[valoareCalculator]);

	// Draw, Win, Loss Conditions
	//Draw Conditions
	if (
		(number === 0 && valoareCalculator === 0) ||
		(number === 1 && valoareCalculator === 1) ||
		(number === 2 && valoareCalculator === 2)
	) {
		draw = 1;
		//Win Conditions
	} else if (
		(number === 0 && valoareCalculator === 2) ||
		(number === 1 && valoareCalculator === 0) ||
		(number === 2 && valoareCalculator === 1)
	) {
		winLoss = 1;
		//Loss Conditions
	} else if (
		(number === 0 && valoareCalculator === 1) ||
		(number === 1 && valoareCalculator === 2) ||
		(number === 2 && valoareCalculator === 0)
	) {
		winLoss = 0;
	}

	// Draw, Win, Loss Effects
	// Effect in case of DRAW
	if (draw === 1) {
		gameParagraph.textContent = drawText;
		// Effect in case of WIN
	} else if (winLoss === 1) {
		gameParagraph.textContent = winText;
		// Effect in case of LOSS
	} else if (winLoss === 0) {
		gameParagraph.textContent = lossText;
	}
	// Makign The Images Unclickable
	div2.classList.add("no_pointer");
	// Creatign A Button
	const button = document.createElement("button");
	button.textContent = "Return";
	// Restore The Clickability Of The Button
	button.classList.add("pointer_restore");
	// Creatign A Function For The Button
	// The Function Restores The Game To Its Default State
	button.onclick = function () {
		winLoss;
		draw;
		gameParagraph.textContent = "Click An Image!";
		document.querySelector(".rock_paper_scissors img").remove();
		div2.appendChild(ImaginiJoc[0]);
		div2.appendChild(ImaginiJoc[1]);
		div2.appendChild(ImaginiJoc[2]);
		div2.classList.remove("no_pointer");
		button.remove();
	};
	div2.appendChild(button);
};
