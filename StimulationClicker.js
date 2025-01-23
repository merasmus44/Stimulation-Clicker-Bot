//Paste in console




//constants



var duolingo = [{
            text: "How do you say goodbye in Welsh?",
            choices: ["Hwyl far", "Farthee gow", "Hrtha tee", "Gwyn morn"],
            answer: 0
        }, {
            text: "Owls are commonly viewed as harbingers of:",
            choices: ["Good Luck", "Death", "Change", "Love"],
            answer: 1
        }, {
            text: "Which language is spoken by more people?",
            choices: ["English", "Spanish", "Mandarin", "French"],
            answer: 2
        }, {
            text: "Which one of these is not a German word?",
            choices: ["Schneebesen", "Rotzlöffel", "Gemealez", "Handschuhe"],
            answer: 2
        }, {
            text: "In Japanese, which word represents the sound of silence?",
            choices: ["Shiin", "Shushu", "Sho", "Shinigami"],
            answer: 0
        }, {
            text: "The most common starting letter in English is:",
            choices: ["S", "A", "B", "C"],
            answer: 0
        }, {
            text: "Which of these used to be a part of the English alphabet?",
            choices: ["*", "&", "$", "%"],
            answer: 1
        }, {
            text: "Which of these is not a fictional language?",
            choices: ["Lapine", "Dothraki", "Quenya", "Yurok"],
            answer: 3
        }, {
            text: "There's only one English word that ends in",
            choices: ["mt", "Te", "Nz", "Ep"],
            answer: 0
        }, {
            text: "What is the plural of octopus",
            choices: ["Only octopi", "Only octopuses", "Octopi or octopuses", "None of the above"],
            answer: 2
        }, {
            text: "Owls can spot prey up to ___ away",
            choices: ["100 feet", "500 feet", "Half a mile", "A mile"],
            answer: 2
        }, {
            text: "Past tense of sneak?",
            choices: ["Sneaked or snuck", "Only snuck", "Snuck or sneakered", "Sneaked or snucked"],
            answer: 0
        }, {
            text: "Which of these words have French origin?",
            choices: ["Jury", "Animal", "Romance", "Envy"],
            answer: 0
        }, {
            text: "Most common letter in English",
            choices: ["A", "T", "L", "E"],
            answer: 3
        }, {
            text: "Hiraeth, deep longing for home, is",
            choices: ["Welsh", "Swedish", "Portuguese", "Gaelic"],
            answer: 0
        }, {
            text: "How many languages exist today?",
            choices: ["Around 80,000", "Around 7,100", "Around 690", "Around 18,500"],
            answer: 1
        }, {
            text: "Which language has about 421 words for snow?",
            choices: ["Scottish", "Inuktitut", "Danish", "Icelandic"],
            answer: 0
        }, {
            text: "Which is NOT an extinct language?",
            choices: ["Esperanto", "Pazeh", "Livonian", "Wichita"],
            answer: 0
        }, {
            text: "What is an umlaut?",
            choices: ["§", "^", "Ø", "¨"],
            answer: 3
        }, {
            text: 'What does "fruits de mer" mean?',
            choices: ["Fruit basket", "Magic beans", "Fruit of the loom", "Seafood"],
            answer: 3
        }, {
            text: "Which is NOT a romance language?",
            choices: ["Portuguese", "Romanian", "Polish", "French"],
            answer: 2
        }, {
            text: "Which word appears in the Oxford English Dictionary?",
            choices: ["Amazeballs", "Cowabunga", "Awesomesauce", "All of the above"],
            answer: 3
        }, {
            text: "Which is NOT a word for potato?",
            choices: ["Patata", "Potate", "Papa", "Tatws"],
            answer: 1
        }, {
            text: '"Saudade" is a Portuguese word for',
            choices: ["Nostalgic longing", "Intense indigestion", "Sudden rash", "Romantic misery"],
            answer: 0
        }, {
            text: "What is Duo's favorite word?",
            choices: ["Change", "Rot", "Ambivalence", "Vengence"],
            answer: 3
        }, {
            text: 'Which word rhymes with "trough"?',
            choices: ["Through", "Rough", "Cough", "Ugh"],
            answer: 1
        }, {
            text: "What is an owl pellet?",
            choices: ["Owl droppings", "Undigested prey", "A type of owl food", "A small owl"],
            answer: 1
        }, {
            text: "In medieval Europe, what creature were owls often associated with?",
            choices: ["Vampires", "Werewolves", "Witches", "Demons"],
            answer: 2
        }, {
            text: "Owls have double the ___ of humans",
            choices: ["Vertebrae", "Charisma", "Stamina", "Brain cells"],
            answer: 0
        }, {
            text: "A group of pugs is called a:",
            choices: ["A puggle", "A grumble", "A snort", "A wrinkle"],
            answer: 1
        }, {
            text: "What is the term for a word that is the same backwards and forwards?",
            choices: ["Palindrome", "Anagram", "Homograph", "Synonym"],
            answer: 0
        }, {
            text: "How many degrees can an owl rotate its head?",
            choices: ["180 degrees", "270 degrees", "360 degrees", "90 degrees"],
            answer: 1
        }, {
            text: "What is the only letter that doesn't appear in any U.S. state name?",
            choices: ["X", "Q", "Z", "J"],
            answer: 1
        }, {
            text: "In which language is 'Gesundheit' commonly used after someone sneezes?",
            choices: ["French", "Spanish", "German", "Italian"],
            answer: 2
        }, {
            text: "Which of these words is its own opposite?",
            choices: ["Suck", "Dust", "Run", "Quick"],
            answer: 1
        }, {
            text: "What's the only letter that doesn't appear in the periodic table",
            choices: ["J", "Q", "X", "Z"],
            answer: 0
        }, {
            text: "Which of these is spelled correctly?",
            choices: ["Minuscule", "Minuscule", "Miniscuel", "All of the above"],
            answer: 1
        }, {
            text: "Which of these words changes its meaning when capitalized?",
            choices: ["Same/same", "March/march", "Water/water", "Laser/laser"],
            answer: 1
        }]

//non constants

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function getUpgradeCost(element){
	var cost = element.getElementsByClassName("upgrade-cost")[0].innerText;
	cost = cost.match(/\d+/)[0];
	cost = Number(cost);
	return cost;
}

function getUpgradeName(element){
	return element.getElementsByClassName("upgrade-name")[0].innerText;
}

function getStimulation(){
	var text = currentStimulation.innerText;
	text = text.replaceAll(',', '');
	return Number(text);
}

function updateUpgrades(){
	var upgradesTemp = {};
	for (let i = 0; i < upgradesContainer.children.length; i++){
		upgradesTemp[getUpgradeCost(upgradesContainer.children[i])] = upgradesContainer.children[i];
	}
	return upgradesTemp;
}

function getStockShares(){
	return Number(document.getElementsByClassName("stock-shares")[0].innerText.replaceAll(" shares", '').replaceAll(" share", ''));
}

function getStockProfit(){

	var profit = document.getElementsByClassName("stock-profit")[0];
	if (!profit) {profit = document.getElementsByClassName("stock-neg")[0];}
	return Number(profit.innerText.replaceAll("$", "").replaceAll(",", ""));

}




var mainButton = document.getElementsByClassName("main-btn")[0];

var upgradesContainer = document.getElementsByClassName("main-upgrades")[0];

var currentStimulation = document.getElementsByClassName("main-stat-num")[0];


async function sleepClick(){

	while (clicking){
		await sleep(0);
		mainButton.click();
	}

}

function pauseClick(){clicking = false;}
function unpauseClick(){
	clicking = true;
	sleepClick();
}

function pauseUpgrade(){running = false;}
function unpauseUpgrade(){
	running = true;
	gameHandler();
	stockHandler();
}



async function checkPress(){
	if (!document.getElementsByClassName("hydraulic-press")[0]){
		return;
	}

	var collect = document.getElementsByClassName("press-collect")[0];
	var start = document.getElementsByClassName("press-btn")[0];

	if (!collect.classList.contains('press-collect-hide')){
		collect.click();
		return;
	}
	if (!start.classList.contains('press-btn-hide')){
		start.click();
		return;
	}
}

async function checkLevelReward(){
	var collect = document.getElementsByClassName("collect")[0];
	if (collect){
		collect.click();
	}
}

async function checkLootBoxes(){
	var lootboxes = document.getElementsByClassName("loot-box-target");
	for (let i = 0; i < lootboxes.length; i++){
		lootboxes[i].click();
	}
}

var lowestPrice = 9999999;
var highestPrice = 0;
var targetStockAmount = 30;
var minimumProfit = 250;
var minimumProfitBitcoin = 250000;
var refreshTime = 10;
var lastRefresh = performance.now();


async function checkStocks(){//TODO: make more advanced
	var currentPrice = document.getElementsByClassName("last-price")[0];
	if (!currentPrice){
		return;
	}
	currentPrice = currentPrice.innerText.replaceAll(',', '').replaceAll('$', '');
	currentPrice = Number(currentPrice);
	if (currentPrice < lowestPrice){
		lowestPrice = currentPrice;
	}
	if (currentPrice > highestPrice){
		highestPrice = currentPrice;
	}

	var timeElapsedSeconds = Math.round((performance.now() - lastRefresh) / 1000)
	if (timeElapsedSeconds >= refreshTime){
		highestPrice = 0;
	}
	//getStockShares getStockProfit
	var shares = getStockShares();

	var canBuy = currentPrice < highestPrice*0.6;
	if (currentPrice > 1000) {canBuy = currentPrice < highestPrice*0.4;}

	if (canBuy){
		if (currentMoney >= currentPrice && shares < targetStockAmount){
			document.getElementsByClassName("stock-buy")[0].click();
			console.log("Bought Stocks");
			return;
		}
	}
	var profit = getStockProfit();



	if (profit >= minimumProfit && shares > 0){
		for (let i = 0; i < shares; i++){
			document.getElementsByClassName("stock-sell")[0].click();
		}
		return;
	}

	if (currentPrice > 1000){//assume bitcoin
		if (profit >= minimumProfitBitcoin && shares > 0){
			for (let i = 0; i < shares; i++){
				document.getElementsByClassName("stock-sell")[0].click();
			}
			return;
		}

	}
}


function checkDuoLingo(){//TODO: some answers dont match correctly
	var questionBox = document.getElementsByClassName("question")[0];
	if (!questionBox) { return; }
	if (questionBox.classList.contains('hide')){
		return;
	}
	var questionText = questionBox.getElementsByClassName("question-text")[0];
	for (let i = 0; i < duolingo.length; i++){
		if (questionText.innerText.includes(duolingo[i].text)){
			var answers = document.getElementsByClassName("question-choice");
			var answer = duolingo[i].choices[duolingo[i].answer]
			for (let b = 0; b < answers.length; b++){
				if (answers[b].innerText.includes(answer)){
					answers[b].click();
					return;
				}
			}
			return;
		}
	}
}

async function checkKinderEgg(){

	var eggs = document.getElementsByClassName("egg");
	for (let i = 0; i < eggs.length; i++){
		eggs[i].click();
	}

}

async function checkChicken(){
	var feed = document.getElementsByClassName("action-btn")[0];
	if (!feed) {return;}
	if (feed.classList.contains('action-btn-hide')){return;}
	feed.click();

}

async function checkPowerUp(){
	var powerups = document.getElementsByClassName("powerup");
	for (let i = 0; i < powerups.length; i++){
		powerups[i].click();
	}


}

async function checkNotifications(){
	var notificationContainer = document.getElementsByClassName("notifications-container")[0];
	if (!notificationContainer) {return;}//action (class name of button to press)

	var notification = notificationContainer.getElementsByClassName("notification")[0];
	if (!notification){return;}
	notification.click();
	await sleep(10);

	var action = document.getElementsByClassName("action")[0]
	if (action){
		action.click();
	}
	await sleep(10);
	document.getElementsByClassName("close")[0].click();
}

async function gameHandler(){

	while (running){
		await sleep(2000);
		upgrades = updateUpgrades();
		currentMoney = getStimulation();
		for (const [key, value] of Object.entries(upgrades)) {
 			if (key <= currentMoney){
				value.click();
				currentMoney -= key;
			}
		}
		await checkPress();
		await checkLevelReward();
		await checkLootBoxes();
		await checkDuoLingo();
		await checkKinderEgg();
		await checkChicken();
		await checkPowerUp();
		await checkNotifications();
		
	}

}



async function stockHandler(){

	while (running){
		await sleep(500);
		await checkStocks();
	}


}





var clicking = true;

var running = true;

var currentMoney = 0;

var upgrades = {};

upgrades = updateUpgrades();

sleepClick();

gameHandler();

stockHandler();
