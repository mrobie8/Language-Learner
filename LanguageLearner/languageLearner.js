/*
Main comments:
Name: Maya Robie

sources: 
- https://www.youtube.com/watch?v=_GTMOmRrqkU (used this to refresh my memory on some basic html, css, javascrip code)
- https://www.w3schools.com/jsref/dom_obj_style.asp (change css from javascript)
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference (used this list to find styling synatx)
- https://www.tutorialstonight.com/css-toggle-switch-with-text (how to code a toggle switch)
- https://stackoverflow.com/questions/35990445/how-to-move-a-div-up-and-down-infinitely-in-css3
(animate the start arrow to move up and down)
- https://www.w3schools.com/csS/css3_buttons.asp　to style buttons (general template for buttons used for majority of the buttons)


Some suggestions I received:
- have the guidebook available the whole time throughout the lesson, even if it seems like cheating it doesn't give the exact right answers
- for the written questions, show the correct answer when it is wrong so that the user can learn
- use brighter colors for the correct and incorrect answers so they stick out more

*/


// global variables
var onjapanese = true;
var view = true;
var lives = 3;
var whichchosen = "";
var levelCompleted = 0;
var questionNumber = 1;
var answered = false;
var stillplaying = true;
var levelon = 1;

function startgame(){
	document.getElementById('mainpagetitle').style.opacity = '1.0';
	document.getElementById('backgroundbox').style.opacity = '0.8';
	document.getElementById('container').style.opacity = '0.0';
	document.getElementById('container').zIndex = '-1';
	document.getElementById('infobutton').style.opacity = "1.0";
}

// for the toggle button on the info page
function slider() {
	// if it displays japanese change to english, and vice versa
	if(onjapanese == true){
		document.getElementById('text').innerHTML = "You may be wondering how best to proceed through the course. In the main page, there is a sign that indicates what lesson you are on. You unlock more lessons and move down the page by completing previous lessons. Each lesson includes several different games to tests your knowledge. You can only get 2 incorrect to unlock the next lesson. Want to practice that skill even after completing it? Don't worry about it. Tap the lesson again on the main page to continue honing that particular skill. If you are struggling on a problem, open the guidebook by clicking the guidebook button in the upper right corner to refresh your memory.";
		document.getElementById('text2').innerHTML = "You can retake the lessons as many times as you want. The purpose of these lessons is to familiarize you with different English phrases so that you can remember them better. Most importantly, have fun and enjoy your English journey!";
		document.getElementById('howto').innerHTML = 'How to:';
		document.getElementById('mainpagetitle').innerHTML = 'Help Center';
		onjapanese = false;
	} else{
		document.getElementById('mainpagetitle').innerHTML = 'ヘルプセンター';
		document.getElementById('text2').innerHTML = "再受講は何度でも可能です。 これらのレッスンの目的は、さまざまな英語のフレーズに慣れて、よりよく覚えられるようにすることです。 最も重要なことは、楽しんで英語の旅を楽しむことです!";
		document.getElementById('howto').innerHTML = '使い方:';
		document.getElementById('text').innerHTML = "コースをどのように進めるのが最善なのか疑問に思うかもしれません。メインページには、現在のレッスンを示すサインがあります。 前のレッスンを完了すると、さらにレッスンのロックが解除され、ページが下に移動します。 各レッスンには、知識をテストするためのいくつかの異なるゲームが含まれています。 次のレッスンのロックを解除するには、2 つの不正解しか得られません。そのスキルを完成させた後も、そのスキルを練習したいですか？ ご心配なく。 メイン ページでレッスンをもう一度タップして、その特定のスキルを磨き続けることができます。問題に苦労している場合は、右上隅のガイドブック ボタンをクリックしてガイドブックを開き、記憶をリフレッシュしてください。";
		onjapanese = true;
	}
}

// function called when guidebutton clicked, displays guidebook based on what level you are on
function guidehider() {
	if(levelon == 1){
		if(view == true){
			document.getElementById('guidebook1').style.opacity = "0%";
			document.getElementById('guidebook1').style.zIndex = "-1";
			document.getElementById('guidebook2').style.opacity = "0%";
			document.getElementById('guidebook2').style.zIndex = "-1";
			document.getElementById('startlesson').hidden = true;
			view = false;
		} else {
			document.getElementById('guidebook1').style.opacity = "100%";
			document.getElementById('guidebook1').style.zIndex = "1";
			document.getElementById('startlesson').hidden = false;
			view = true;
		}
	} else if(levelon == 2){
		if(view == true){
			document.getElementById('guidebook1').style.opacity = "0%";
			document.getElementById('guidebook1').style.zIndex = "-1";
			document.getElementById('guidebook2').style.opacity = "0%";
			document.getElementById('guidebook2').style.zIndex = "-1";
			document.getElementById('startlesson').hidden = true;
			view = false;
		} else {
			document.getElementById('guidebook2').style.opacity = "100%";
			document.getElementById('guidebook2').style.zIndex = "1";
			document.getElementById('startlesson').hidden = false;
			view = true;
		}
	}
}

// when i button clicked, reveal info page
function infopage(){
	// reset language to japanese always
	document.getElementById('mainpagetitle').innerHTML = 'ヘルプセンター';
	document.getElementById('info').style.opacity = '1.0';
	document.getElementById('info').style.zIndex = '1';
	document.getElementById('mainpagetitle').style.top = '100px';
	document.getElementById('slide').style.zIndex = '1';
}

// hide home page elements
function hidehomepage(){
	// hide all of the lesson buttons
	const lessons = ['l1button', 'l2button', 'l3button', 'l4button', 'l5button'];
	for (let i = 0; i < 5; i++) {
		document.getElementById(lessons[i]).hidden = true;
	}
	// hide all of the elements of a the homepage
	document.getElementById('startarrow').hidden = true;
	document.getElementById('backgroundbox').style.zIndex = '-1';
	document.getElementById('infobutton').style.opacity = "0%";
	document.getElementById('infobutton').style.zIndex = '-1';
	document.getElementById('home').style.zIndex = '1';
	document.getElementById('home').style.opacity = '1.0';
}

// when a lesson button is clicked
function startlesson(){
	// resets everything so that you have to start the lesson over everytime you go back to the home page
	document.getElementById('lesson').style.opacity = '100%';
	document.getElementById('lesson').style.zIndex = '1';
	document.getElementById('startlesson').hidden = false;
	document.getElementById('guidebookb').style.zIndex = '1';
	document.getElementById('winimg').style.opacity = '0.0';
	document.getElementById('winimg').style.zIndex = '-1';
	document.getElementById('endingimg').style.opacity = '0.0';
	document.getElementById('endingimg').style.zIndex = '-1';
	document.getElementById('losetext').style.opacity = '0.0';
	document.getElementById('arrow').style.opacity = '0.0';
	document.getElementById('losetext').style.zIndex = '-1';
	document.getElementById('arrow').style.zIndex = '-1';
	document.getElementById("basequestion").hidden = false;
	document.getElementById('nextbtn').style.opacity = '1.0';
	document.getElementById('nextbtn').style.zIndex = '1';
	document.getElementById('submit').style.opacity = '1.0';
	document.getElementById('submit').style.zIndex = '1';
	document.getElementById('life1').hidden = false;
	document.getElementById('life2').hidden = false;
	document.getElementById('life3').hidden = false;
	lives = 3;
	stillplaying = true;
	reset();
}

// when home button clicked, so undoes most of what startlesson() does
function gohome(){
	const lessons = ['l1button', 'l2button', 'l3button', 'l4button', 'l5button'];
	for (let i = 0; i < 5; i++) {
		document.getElementById(lessons[i]).hidden = false;
	}
	document.getElementById('startarrow').hidden = false;
	document.getElementById('mainpagetitle').innerHTML = 'メインページへようこそ!';
	document.getElementById('lesson').style.opacity = '0.0';
	document.getElementById('lesson').style.zIndex = '-1';
	document.getElementById('backgroundbox').style.zIndex = '0';
	document.getElementById('infobutton').style.opacity = "1.0";
	document.getElementById('infobutton').style.zIndex = '1';
	document.getElementById('home').style.zIndex = '-1';
	document.getElementById('home').style.opacity = '0.0';
	document.getElementById('guidebookb').style.zIndex = '-1';
	document.getElementById('info').style.zIndex = '-1';
	document.getElementById('info').style.opacity = '0.0';
	document.getElementById('mainpagetitle').style.top = '60px';
	document.getElementById('slide').style.zIndex = '-1';
}

// more specific actions when lesson is clicked based on which lesson it is 
function startlesson1(){
	// to know which guidebook should be displayed
	levelon = 1;
	view = true;
	document.getElementById('mainpagetitle').innerHTML = 'Lesson 1';
	document.getElementById('guidebook1').style.opacity = "100%";
	document.getElementById('guidebook1').style.zIndex = "1";
	document.getElementById('guidebook2').style.zIndex = "-1";
	// resets lesson
	questionNumber = 1;
	resetop('「とても」の意味を選んでください', 'sandwich', 'beautiful', 'very');
}

function startlesson2(){
	levelon = 2;
	view = true;
	document.getElementById('mainpagetitle').innerHTML = 'Lesson 2';
	document.getElementById('guidebook2').style.opacity = "100%";
	document.getElementById('guidebook2').style.zIndex = "1";
	document.getElementById('guidebook1').style.zIndex = "-1";
	questionNumber = 23;
	resetop('「有名」の意味を選んでください', 'Australia', 'chocolate', 'famous');
}

function startlesson3(){
	alert('lesson 3 start');
}

// everytime home button clicked, check which lessons are unlocked or completed to show the correct image for the button
function checkstatus(){
	if(levelCompleted == 0){
		document.getElementById('l1buttonstar').hidden = false;
		document.getElementById('l2buttonlock').hidden = false;
	} else if(levelCompleted == 1){
		document.getElementById('l1buttonstar').hidden = true;
		document.getElementById('l2buttonlock').hidden = true;
		document.getElementById('startarrow').style.top = '145px';
		document.getElementById('startarrow').style.left = '38%';	
	} else if(levelCompleted == 2){
		document.getElementById('l2buttonstar').hidden = true;
		document.getElementById('l3buttonlock').hidden = true;
		document.getElementById('startarrow').style.top = '235px';
		document.getElementById('startarrow').style.left = '18%';
	}
}

// when one of the three options is clicked
function op1clicked(){
	whichchosen = 'op1';
	answered = true;
}

function op2clicked(){
	whichchosen = 'op2';
	answered = true;
}

function op3clicked(){
	whichchosen = 'op3';
	answered = true;
}

// check if the multiple choice question is correct or not
function opcheck(qnumber, right, wrong1, wrong2){
	if(questionNumber == qnumber){
		// always show the correct answer
		showcorrect(right);
		if(whichchosen == wrong1 || whichchosen == wrong2){
			checklives();
			wrong();
			wrongop(whichchosen);
		} else {
			correct();
		}
	}
}

// called when incorrect answer is given, subtracts one life, checks if there are no more lives left
function checklives() {
	lives -= 1
	if(lives == 2){
		document.getElementById('life1').hidden = true;
	} else if(lives == 1){
		document.getElementById('life2').hidden = true;
	} else {
		document.getElementById('life3').hidden = true;
		stillplaying = false;
	}
}

// called when incorrect answer
function wrong(){
	document.getElementById("status").style.opacity = "1.0";
	document.getElementById("status").innerHTML = "残念 :(";
	// changes input box color to red if incorrect
	document.getElementById("typedtext").style.backgroundColor = 'rgb(240, 53, 43)';
}

// changes the clicked choice color to red if incorrect, takes parameter of which button clicked
function wrongop(chosen){
	document.getElementById(chosen).style.backgroundColor = 'rgb(240, 53, 43)';
	document.getElementById(chosen).style.color = 'rgb(89, 13, 9)';
	document.getElementById(chosen).style.borderColor = 'rgb(89, 13, 9)';
	document.getElementById(chosen).style.boxShadow = '0 2px rgb(89, 13, 9)';
}

// shows correct answer in multiple choice question by turning it green
function showcorrect(answer){
	document.getElementById(answer).style.backgroundColor = 'rgb(155, 217, 63)';
	document.getElementById(answer).style.color = 'rgb(69, 110, 13)';
	document.getElementById(answer).style.borderColor = 'rgb(69, 110, 13)';
	document.getElementById(answer).style.boxShadow = '0 2px rgb(69, 110, 13)';
}

// called when correct answer given
function correct(){
	document.getElementById("status").style.opacity = "1.0";
	// chooses a random exclamation out of this list and assigns it to text tagged status
	const celebrations = ['いい感じ！' , 'いいね！', 'スゴイ！', 'エクセレント！', 'すばらしい！', 'よくできました！', '正解！'];
	const random = Math.floor(Math.random() * celebrations.length);
	document.getElementById("status").innerHTML = celebrations[random];
	// changes the input box color to green if it is correct
	document.getElementById("typedtext").style.backgroundColor = 'rgb(155, 217, 63)';
}

// check if written question is correct or not, gives 6 possible right answers
function writecheck(qnumber, right, p1, p2, p3, p4, p5, p6){
	if(questionNumber == qnumber){
		let inputVal = document.getElementById('typedtext').value;
		inputVal = inputVal.toLowerCase();
		if(inputVal == p1 || inputVal == p2 || inputVal == p3 || inputVal == p4 || inputVal == p5 || inputVal == p6){
			correct();
		} else {
			wrong();
			checklives();
			showcorrectwritten(right);
		}
	}
}

// show the correct answer in written questions
function showcorrectwritten(answer){
	document.getElementById("options").innerHTML = '正解例：' + answer;
	document.getElementById("options").style.fontSize = '25px';
}

// activated when submit button clicked
function submitclicked(){
	// only checks correctness is something is typed in the input box or one of the options is clicked
	if(answered == true || document.getElementById('typedtext').value !== ""){
		// display next button over the submit button
		document.getElementById('nextbtn').style.zIndex = '1';
		opcheck(1, 'op3', 'op1', 'op2');
		writecheck(2, 'こんにちは、おはようございます！', 'こんにちは、おはようございます！', 'こんにちはおはようございます！', 'こんにちは、おはようございます', 'こんにちはおはようございます', 'こんにちは、おはようございます。', 'こんにちわ、おはようございます。');
		opcheck(3, 'op1', 'op2', 'op3');
		writecheck(4, 'チーズ', 'チーズ。', ' チーズ', 'チーズ ', '  チーズ　', 'チーズ', ' チーズ。 ');
		opcheck(5, 'op1', 'op2', 'op3');
		writecheck(6, 'カナダはとても美しいです。', 'カナダはとても美しいです。', 'カナダはとても美しいです', 'カナダはとても美しいです。 ', '  カナダはとても美しいです。', ' カナダはとても美しいです ', 'カナダはとても美しいです ');
		opcheck(7, 'op2', 'op1', 'op3');
		writecheck(8, 'いらっしゃいませ、こんにちは！', 'いらっしゃいませ、こんにちは！', 'いらっしゃいませこんにちは！', 'いらっしゃいませ、こんにちは', 'いらっしゃいませこんにちは', 'いらっしゃいませこんにちは ', 'いらっしゃいませ、こんにちは ');
		opcheck(9, 'op2', 'op1', 'op3');
		opcheck(10, 'op3', 'op1', 'op2');
		opcheck(11, 'op1', 'op2', 'op3');
		writecheck(12, 'New York is in America.', 'new york is in america.', 'new york is in america', 'new york is in america ', ' new york is in america ', ' new york is in america', 'new york is in america. ');
		opcheck(13, 'op1', 'op2', 'op3');
		writecheck(14, 'I am also from Canada!', 'i am also from canada.', 'i am also from canada!', 'i am also from canada', 'i am also from canada! ', 'i am also from canada ', 'i am also from canada. ');
		writecheck(15, 'A chocolate muffin and a coffee please.', 'a chocolate muffin and a coffee please.', 'a chocolate muffin and a coffee please', 'one chocolate muffin and one coffee please', 'one chocolate muffin and one coffee please.', 'a chocolate muffin and a coffee please ', 'a chocolate muffin and a coffee please. ');
		writecheck(16, 'Salad', 'salad', 'salad.', 'salad ', ' salad', ' salad ', 'salad. ');
		writecheck(17, 'Soda', 'soda', 'soda.', 'soda ', ' soda', ' soda ', 'soda. ');
		writecheck(18, 'One muffin and one tea please.', 'one muffin and one tea please', 'one muffin and one tea, please', 'one muffin and one tea please.', 'one muffin and one tea, please.', 'a muffin and tea please', 'a muffin and tea, please.');
		writecheck(19, 'Ham', 'ham', 'ham.', 'ham ', ' ham', 'ham. ', ' ham ');
		writecheck(20, 'Tokyo is in Japan.', 'tokyo is in japan', 'tokyo is in japan.', 'tokyo is in japan ', 'tokyo is in japan. ', ' tokyo is in japan', ' tokyo is in japan ');
		writecheck(21, 'Chocolate', 'chocolate', 'chocolate.', 'choco', 'chocolate ', ' chocolate ', ' chocolate');
		writecheck(22, 'Thank you, Tom!', 'thank you, tom!', 'thank you, tom', 'thank you tom!', 'thank you, tom.', 'thank you tom.', 'thank you tom');
		opcheck(23, 'op3', 'op1', 'op2');
		writecheck(24, 'はい、この都市はとても古いです。', 'はい、この都市はとても古いです。', 'はいこの都市はとても古いです。', 'はい、この都市はとても古いです', 'はいこの都市はとても古いです', 'はいこの都市はとても古いです ', 'はい、この都市はとても古いです ');
		opcheck(25, 'op2', 'op1', 'op3');
		writecheck(26, 'これはあなたの犬ですか？', 'これはあなたの犬ですか？', 'これはあなたの犬ですか', 'これはあなたの犬ですか。', 'これはあなたの犬ですか？ ', 'これはあなたの犬ですか ', 'これはあなたの犬ですか。 ');
		opcheck(27, 'op3', 'op1', 'op2');
		writecheck(28, '銀行に行きましょう。', '銀行に行きましょう。', '銀行に行きましょう', '銀行に行きましょう。 ', '銀行に行きましょう ', ' 銀行に行きましょう。 ', ' 銀行に行きましょう ');
		opcheck(29, 'op1', 'op2', 'op3');
		opcheck(30, 'op2', 'op1', 'op3');
		opcheck(31, 'op3', 'op2', 'op1');
		opcheck(32, 'op3', 'op2', 'op1');
		opcheck(33, 'op1', 'op2', 'op3');
		opcheck(34, 'op3', 'op2', 'op1');
		writecheck(35, 'Yes, this is my house!', 'yes, this is my house!', 'yes, this is my house', 'yes this is my house!', 'yes this is my house', 'yes, this is my house.', 'yes this is my house.');
		writecheck(36, 'Hello, is this the bus to the supermarket?', 'hello, is this the bus to the supermarket?', 'hello, is this the bus to the supermarket', 'hello is this the bus to the supermarket?', 'hello, is this the bus to the supermarket.', 'hello is this the bus to the supermarket.', 'hello is this the bus to the supermarket');
		writecheck(37, 'Is this the train to Toronto?', 'is this the train to toronto?', 'is this the train to toronto', 'is this the train to toronto.', 'is this the train to toronto? ', 'is this the train to toronto ', 'is this the train to toronto. ');
		writecheck(38, 'Train', 'train', 'train.', 'train ', ' train', ' train.', 'train. ');
		writecheck(39, 'Cheese', 'cheese', 'cheese.', 'cheese ', ' cheese', 'cheese. ', ' cheese.');
		writecheck(40, 'Excuse me, where is the bank?', 'excuse me, where is the bank?', 'excuse me, where is the bank', 'excuse me where is the bank?', 'excuse me where is the bank', 'excuse me where is the bank.', 'excuse me, where is the bank.');
		writecheck(41, 'Sandwich', 'sandwich', 'sandwich.', 'sandwich ', 'sandwich. ', 'sandwitch', ' sandwich');
		writecheck(42, 'A ham sandwich, please.', 'one ham sandwich, please.', 'one ham sandwich please.', 'one ham sandwich, please', 'one ham sandwich please', 'a ham sandwich, please.', 'a ham sandwich please');
		writecheck(43, 'Tea', 'tea', 'tea.', 'tea ', 'tea. ', ' tea', ' tea.');
		writecheck(44, 'This is my room.', 'this is my room.', 'this is my room', 'this is my room ', 'this is my room. ', ' this is my room', ' this is my room.');
	// if optiion not clicked yet
	} else if (answered == false){
		alert('最初に何かをクリックして！');
	// if nothing is typed in yet
	} else {
		alert('最初に何か書いて！');
	}
}

// reset everything, so any changes made when correct/incorrect answer shown are reversed
function reset(){
	// hide next button again
	document.getElementById('nextbtn').style.zIndex = '-1';
	const ops = ['op1', 'op2', 'op3'];
	for (let i = 0; i < 3; i++) {
		document.getElementById(ops[i]).hidden = true;
	}
	for (let i = 0; i < 3; i++) {
		document.getElementById(ops[i]).style.backgroundColor = 'rgb(244, 223, 180)';
		document.getElementById(ops[i]).style.color = 'rgb(56, 48, 47)';
		document.getElementById(ops[i]).style.borderColor = 'rgb(191, 172, 130)';
		document.getElementById(ops[i]).style.boxShadow = '0 2px rgb(191, 172, 130)';
	}
	document.getElementById("status").style.opacity = "0.0";
	document.getElementById("textbox").style.opacity = "0.0";
	document.getElementById('textbox').style.zIndex = '-1';
	document.getElementById("typedtext").style.opacity = "0.0";
	document.getElementById('typedtext').style.zIndex = '-1';
	document.getElementById("options").style.opacity = "0.0";
	document.getElementById('options').style.zIndex = '-1';
	document.getElementById("typedtext").style.backgroundColor = "rgb(250, 241, 225)";
	document.getElementById("typedtext").value = "";
	document.getElementById("basequestion").style.top = '160px';
	document.getElementById("example").style.opacity = "0.0";
	document.getElementById("options").style.fontSize = '18px';
}

// model for multiple choice question with just a base question
function resetop(question, option1, option2, option3){
	document.getElementById("basequestion").innerHTML = question;
	document.getElementById('op1').innerHTML = option1;
	document.getElementById('op2').innerHTML = option2;
	document.getElementById('op3').innerHTML = option3;
	const ops = ['op1', 'op2', 'op3'];
	for (let i = 0; i < 3; i++) {
		document.getElementById(ops[i]).hidden = false;
	}
}

// model for written question with input box, example to translate, and word bank
function writingreset(question, example, options){
	document.getElementById("basequestion").innerHTML = question;
	document.getElementById("textbox").style.opacity = "1.0";
	document.getElementById('textbox').style.zIndex = '1';
	document.getElementById("typedtext").style.opacity = "1.0";
	document.getElementById('typedtext').style.zIndex = '1';
	document.getElementById("options").style.opacity = "1.0";
	document.getElementById('options').style.zIndex = '1';
	document.getElementById("textbox").innerHTML = example;
	document.getElementById("options").innerHTML = options;
}

// model for multiple choice question where you have to fill in the blank
function resetfill(question, example, option1, option2, option3){
	document.getElementById("basequestion").innerHTML = question;
	document.getElementById('op1').innerHTML = option1;
	document.getElementById('op2').innerHTML = option2;
	document.getElementById('op3').innerHTML = option3;
	const ops = ['op1', 'op2', 'op3'];
	for (let i = 0; i < 3; i++) {
		document.getElementById(ops[i]).hidden = false;
	}
	document.getElementById("basequestion").style.top = '140px';
	document.getElementById("example").innerHTML = example;
	document.getElementById("example").style.opacity = "1.0";
}

// model for written question with no word bank
function writeownreset(question){
	document.getElementById("basequestion").innerHTML = question;
	document.getElementById("typedtext").style.opacity = "1.0";
	document.getElementById('typedtext').style.zIndex = '1';
}

// activated when next button clicked
function nextq() {
	// nothing answered yet
	answered = false;
	// move onto next question
	questionNumber += 1;
	reset();
	// if checklives returns false for stillplaying, end game and display losing screen
	if(stillplaying == false){
		lose();
		gameend();
	} else {
		// for each question number, create the problem using the previous models
		if(questionNumber == 2){
			writingreset('これを日本語で書いてください', 'Hello, good morning!', 'こんにちは　　　です　　　ござい　　　大きい　　　マフィン　　　ます　　　おはよう　　　オーストラリア');
		} else if(questionNumber == 3){
			resetop('「大きい」の意味を選んでください', 'big', 'soda', 'muffin');
		} else if(questionNumber == 4){
			writingreset('これを日本語で書いてください', 'cheese', 'サラダ　　　コーヒー　　　チーズ　　　１　　　さん');
		}　else if(questionNumber == 5){
			resetop('「美しい」の意味を選んでください', 'beautiful', 'soda', 'chocolate');
		} else if(questionNumber == 6){
			writingreset('これを日本語で書いてください', 'Canada is very beautiful', 'です　　　美しい　　　オーストラリア　　　に　　　カナダ　　　ます　　　とても　　　は');
		} else if(questionNumber == 7){
			resetfill('空欄に当てはまるものを選択してください', ' ________, nice to meet you!','Tea', 'Welcome', 'Salad');
		} else if(questionNumber == 8){
			writingreset('これを日本語で書いてください', 'Welcome, hello!', 'こんにちは　　　いらっしゃい　　チョコレート　　　紅茶　　　ませ　　　サンドウッチ');
		}　else if(questionNumber == 9){
			resetfill('空欄に当てはまるものを選択してください', 'Hello, I am from ________, and you?', 'soda', 'America', 'tea');
		} else if(questionNumber == 10){
			resetfill('空欄に当てはまるものを選択してください', 'A ________ and a tea, please.', 'welcome', 'hello', 'coffee');
		} else if(questionNumber == 11){
			resetfill('空欄に当てはまるものを選択してください', 'Ben is also from ________', 'America', 'salad', 'cheese');
		} else if(questionNumber == 12){
			writingreset('これを英語で書いてください', 'ニューヨークはアメリカにあります。', 'is　　　Australia　　　pick　　　America　　　in　　　York　　　from　　　New　　　has');
		} else if(questionNumber == 13){
			resetfill('空欄に当てはまるものを選択してください', '________ am from Australia!', 'I', 'And', 'A');
		} else if(questionNumber == 14){
			writingreset('これを英語で書いてください', '私もカナダ出身です！', 'nice to meet you　　　Canada　　　is　　　also　　　good morning　　　am　　　Australia　　　I　　　from');
		} else if(questionNumber == 15){
			writingreset('これを英語で書いてください', 'チョコレートマフィンを１つとコーヒークを１杯ください。', 'chocolate　　　A　　　a　　　thin　　　salad　　　and　　　muffin　　　please　　　coffee　　　cheese　　　hat');
		} else if(questionNumber == 16){
			writeownreset('英語で「サラダ」を書いてください');
		} else if(questionNumber == 17){
			writeownreset('英語で「炭酸飲料」を書いてください');
		} else if(questionNumber == 18){
			writingreset('これを英語で書いてください', 'マフィンを１つと紅茶を１杯ください。', ' ');
		} else if(questionNumber == 19){
			writeownreset('英語で「ハム」を書いてください');
		} else if(questionNumber == 20){
			writingreset('これを英語で書いてください', '東京は日本にありまる。', ' ');
		} else if(questionNumber == 21){
			writingreset('これを英語で書いてください', 'チョコレート', ' ');
		} else if(questionNumber == 22){
			writingreset('これを英語で書いてください', 'ありがとう、トムさん！', ' ');
		// when reach the end of lesson 1
		} else if(questionNumber == 23){
			gameend();
			win();
			levelCompleted = 1;
		} else if(questionNumber == 24){
			writingreset('これを日本語で書いてください', 'Yes, this city is very old.', 'は　　　この　　　ます　　　はい　　　有名　　　犬　　　古い　　　都市　　　とても　　　です　　　大きい');
		} else if(questionNumber == 25){
			resetop('「マフィン」の意味を選んでください', 'beautiful', 'muffin', 'ham');
		} else if(questionNumber == 26){
			writingreset('これを日本語で書いてください', 'Is this your dog?', 'コンピューター　　　あなた　　　の　　　これ　　　です　　　か　　　犬　　　車　　　こんにちは　　　は　　　ペット');
		} else if(questionNumber == 27){
			resetop('「モール」の意味を選んでください', 'cat', 'bed', 'mall');
		} else if(questionNumber == 28){
			writingreset("これを日本語で書いてください", "let's go to the bank.", "に　　　有名　　　銀行　　　ましょ　　　古い　　　か　　　です　　　行き　　　う");
		} else if(questionNumber == 29){
			resetfill('空欄に当てはまるものを選択してください', '________. Good morning.', 'Hello', 'Ham', 'Soda');
		} else if(questionNumber == 30){
			resetfill('空欄に当てはまるものを選択してください', 'This is my ________ cat!', 'chocolate', 'new', 'coffee');
		} else if(questionNumber == 31){
			resetfill('空欄に当てはまるものを選択してください', 'Is this your new ________?', 'please', 'thank you', 'computer');
		} else if(questionNumber == 32){
			resetfill('空欄に当てはまるものを選択してください', 'Is that ________ new dog?', 'sandwich', 'phone', 'your');
		} else if(questionNumber == 33){
			resetfill('空欄に当てはまるものを選択してください', 'I am also from Australia. ________ meet you!', 'Nice to', 'Good morning', 'Thank you');
		} else if(questionNumber == 34){
			resetfill('空欄に当てはまるものを選択してください', '________ is the park?', 'Welcome', 'House', 'Where');
		} else if(questionNumber == 35){
			writingreset('これを英語で書いてください', 'はい、これは私の家です！', 'your　　　this　　　Yes　　　full　　　phone　　　is　　　that　　　house　　　my');
		} else if(questionNumber == 36){
			writingreset('これを英語で書いてください', 'こんにちは、これはスーパーまでのバスですか？', 'the　　　hat　　　supermarket　　　this　　　the　　　is　　　bus　　　yes　　　Hello　　　to　　　pick　　　from');
		} else if(questionNumber == 37){
			writingreset('これを英語で書いてください', 'これはトロントまでの電車ですか？', 'van　　　train　　　famous　　　is　　　this　　　full　　　bite　　　the　　　to　　　Toronto');
		} else if(questionNumber == 38){
			writeownreset('英語で「電車」を書いてください');
		} else if(questionNumber == 39){
			writeownreset('英語で「チーズ」を書いてください');
		} else if(questionNumber == 40){
			writingreset('これを英語で書いてください', 'すみません、銀行はどこですか？', ' ');
		} else if(questionNumber == 41){
			writeownreset('英語で「サンドイッチ」を書いてください');
		} else if(questionNumber == 42){
			writingreset('これを英語で書いてください', 'ハムサンドを１つください。', ' ');
		} else if(questionNumber == 43){
			writeownreset('英語で「紅茶」を書いてください');
		} else if(questionNumber == 44){
			writingreset('これを英語で書いてください', 'これは私の部屋です。', ' ');
		// when reach end of lesson 2
		} else if(questionNumber == 45){
			gameend();
			win();
			levelCompleted = 2;
		}
	}	
}

// when game ends (from winning or losing), hide lesson elements first
function gameend(){
	document.getElementById("basequestion").hidden = true;
	document.getElementById('life1').hidden = true;
	document.getElementById('life2').hidden = true;
	document.getElementById('life3').hidden = true;
	document.getElementById('nextbtn').style.opacity = '0.0';
	document.getElementById('nextbtn').style.zIndex = '-2';
	document.getElementById('submit').style.opacity = '0.0';
	document.getElementById('submit').style.zIndex = '-2';
	document.getElementById('losetext').style.opacity = '1.0';
	document.getElementById('arrow').style.opacity = '1.0';
	document.getElementById('losetext').style.zIndex = '1';
	document.getElementById('arrow').style.zIndex = '1';
}

// if win, display congratulation text and happy face image
function win(){
	document.getElementById('losetext1').innerHTML = 'テストコンプリート！';
	document.getElementById('losetext2').innerHTML = 'すごい！すばらしい進歩を遂げているね！';
	document.getElementById('winimg').style.opacity = '1.0';
	document.getElementById('winimg').style.zIndex = '1';
}

// if lose, display losing text and sad face image
function lose(){
	document.getElementById('losetext1').innerHTML = 'ユニット 2 をアンロックできませんでした';
	document.getElementById('losetext2').innerHTML = '心配しないで！コツコツいこう！';
	document.getElementById('endingimg').style.opacity = '1.0';
	document.getElementById('endingimg').style.zIndex = '1';
}


