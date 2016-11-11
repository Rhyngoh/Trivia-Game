//4 button answers
var allThemQuestions = {
	q1: {
	question: "What was the original name of Mario?",
	a1: "Mushroom man",
	a2: "Jumpman",
	a3: "Plumber man",
	a4: "Stuntman",
	daAns: "Jumpman",
	image1: "mariojumpman.jpg"
},
	q2: {
	question: "When was Super Mario first released?",
	a1: "September 13, 1985",
	a2: "June 4, 1979",
	a3: "March 23, 1990",
	a4: "May 15, 1987",
	daAns: "September 13, 1985",
	image1: "mariosuper.png"
},
	q3: {
	question: "What is the name of Mario's younger brother?",
	a1: "Wario",
	a2: "Lugia",
	a3: "Luigi", 
	a4: "Toad",
	daAns: "Luigi",
	image1: "marioluigi.jpg"
},
	q4: {
	question: "Of the following, which is not an enemy to Mario?",
	a1: "Toad",
	a2: "Goomba",
	a3: "Koopa Troopa",
	a4: "Bowser",
	daAns: "Toad",
	image1: "mariowalking.gif"
},
	q5: {
	question: "What is the name of the squid-like creature found underwater?",
	a1: "Inky",
	a2: "Squidie",
	a3: "Bloomer",
	a4: "Blooper",
	daAns: "Blooper",
	image1: "mariowater.jpg"
},
	q6: {
	question: "What does Mario shoot out of his hands after eating a fire flower?",
	a1: "Hammers",
	a2: "Mushrooms",
	a3: "Fireballs",
	a4: "Stars",
	daAns: "Fireballs",
	image1: "mariofire.gif"
},
	q7: {
	question
	: "How do you finish a level in Super Mario Bros.?",
	a1: "Punch Bowser",
	a2: "Shoot fire",
	a3: "Get a star",
	a4: "Touch a flagpole",
	daAns: "Touch a flagpole",
	image1: "mariovictory.gif"
},
	q8: {
	question: "When Mario picks up a Cape Feather, what is his name?",
	a1: "Cape Mario",
	a2: "Caped Crusader",
	a3: "Fly Mario",
	a4: "Feather Mario",
	daAns: "Cape Mario",
	image1: "marioflying.gif"
},
	q9: {
	question: "Who is the arch enemy of Mario?",
	a1: "Luigi",
	a2: "Boo",
	a3: "Shy Guy",
	a4: "Bowser",
	daAns: "Bowser",
	image1: "mariobowser.gif"
},
	q10: {
	question: "Should I also take mushrooms to get magical powers??",
	a1: "Mushrooms?",
	a2: "No!",
	a3: "Errr?",
	a4: "Yes!",
	daAns: "No!",
	image1: "mariospeedrun.gif"
}
}

//question bank
var questionBank = [allThemQuestions.q1.question,allThemQuestions.q2.question,allThemQuestions.q3.question,allThemQuestions.q4.question,allThemQuestions.q5.question,allThemQuestions.q6.question,allThemQuestions.q7.question,allThemQuestions.q8.question,allThemQuestions.q9.question,allThemQuestions.q10.question];
//answer array
var answerArray = [[allThemQuestions.q1.a1,allThemQuestions.q1.a2,allThemQuestions.q1.a3,allThemQuestions.q1.a4],[allThemQuestions.q2.a1,allThemQuestions.q2.a2,allThemQuestions.q2.a3,allThemQuestions.q2.a4],[allThemQuestions.q3.a1,allThemQuestions.q3.a2,allThemQuestions.q3.a3,allThemQuestions.q3.a4],[allThemQuestions.q4.a1,allThemQuestions.q4.a2,allThemQuestions.q4.a3,allThemQuestions.q4.a4],[allThemQuestions.q5.a1,allThemQuestions.q5.a2,allThemQuestions.q5.a3,allThemQuestions.q5.a4],[allThemQuestions.q6.a1,allThemQuestions.q6.a2,allThemQuestions.q6.a3,allThemQuestions.q6.a4],[allThemQuestions.q7.a1,allThemQuestions.q7.a2,allThemQuestions.q7.a3,allThemQuestions.q7.a4],[allThemQuestions.q8.a1,allThemQuestions.q8.a2,allThemQuestions.q8.a3,allThemQuestions.q8.a4],[allThemQuestions.q9.a1,allThemQuestions.q9.a2,allThemQuestions.q9.a3,allThemQuestions.q9.a4],[allThemQuestions.q10.a1,allThemQuestions.q10.a2,allThemQuestions.q10.a3,allThemQuestions.q10.a4]];
//answer bank
var answerBank = [allThemQuestions.q1.daAns,allThemQuestions.q2.daAns,allThemQuestions.q3.daAns,allThemQuestions.q4.daAns,allThemQuestions.q5.daAns,allThemQuestions.q6.daAns,allThemQuestions.q7.daAns,allThemQuestions.q8.daAns,allThemQuestions.q9.daAns,allThemQuestions.q10.daAns];

var imageBank = ["assets/images/mariojumpman.jpg", "assets/images/mariosuper.png", "assets/images/marioluigi.jpg", "assets/images/mariowalking.gif", "assets/images/mariowater.jpg", "assets/images/mariofire.gif", "assets/images/mariovictory.gif", "assets/images/marioflying.gif", "assets/images/mariobowser.gif", "assets/images/mariospeedrun.gif"];
//count the score
var count = 0;
//image bank
var marioImage = '<img src=' + imageBank[count] + ' alt="Mario Image" width="600px" height="400px">';
//hold the setInterval
var intervalTime;
var yourAnswer;
//score ratio
var numberCorrect = 0;
//total score
var trueVictory = 0;
var trueLoss = 0;
//game has started
var stopClicking = true;
//timeClock time remaining
var timer = {
	time: 15,
	count: function(){
		timer.time--;
		$("#timeClock").html("Time Left:" + timer.time);
		if(timer.time === 0){
			clearInterval(counter);
		}
	},
	start: function(){
		counter = setInterval(timer.count, 1000);
	},
	stop: function(){
		clearInterval(counter);
	}
}

//jQuery stuffs
$(document).ready(function() {
	function clearQuestions(){//clear previous answers and clear interval
		$("#a1").html("");
		$("#a2").html("");
		$("#a3").html("");
		$("#a4").html("");
		clearInterval(intervalTime);
	}
	function resetGame(){
		count = 0;
		timer.time = 15
		numberCorrect = 0;
		trueVictory = 0;
		trueLoss = 0;
		marioImage = '<img src=' + imageBank[count] + ' alt="Mario Image" width="600px" height="400px">';
		startGame();
		$("#correctScore").html("Number Correct: " + numberCorrect + "/10");
	}
	//15 seconds to answer the question before nextQuestion appears
	function timeTicking(){
		intervalTime = setInterval(displayImageOOT, 15000);
	}
	function startGame(){
		$(".wrongAnswer").html("");
		$("#image-holder").html("");
		$(".question").html(questionBank[0]);
		$("#a1").html(answerArray[count][0]);
		$("#a2").html(answerArray[count][1]);
		$("#a3").html(answerArray[count][2]);
		$("#a4").html(answerArray[count][3]);
		timeTicking();
		timer.start();
	}
	function displayImageCorrect(){
		$("#theImage").show();
		$("#image-holder").html(marioImage);
		trueVictory++;
		clearQuestions();
		setTimeout(nextQuestion, 5000)
	}
	function displayImage(){
		$("#theImage").show();
		$("#image-holder").html(marioImage);
		trueLoss++;
		$(".wrongAnswer").html("The correct answer was " + answerBank[count]);
		clearQuestions();
		setTimeout(nextQuestion, 5000);
	}
	function displayImageOOT(){
		$("#theImage").show();
		$("#image-holder").html(marioImage);
		$(".question").html("Out of time!");
		trueLoss++;
		$(".wrongAnswer").html("The correct answer was " + answerBank[count]);
		clearQuestions();
		setTimeout(nextQuestion, 5000);
		
	}
	function isItRight(){
		timer.stop();
		if (yourAnswer === answerBank[count]){
			$(".question").html("You got it right!");
			clearQuestions();
			displayImageCorrect();
			numberCorrect++;
			$("#correctScore").html("Number Correct: " + numberCorrect + "/10");
		} else {
			$(".question").html("Wrong!");
			$("#correctScore").html("Number Correct: " + numberCorrect + "/10");
			$(".wrongAnswer").html("The correct answer was " + answerBank[count]);
			clearQuestions();
			displayImage();
		}
		console.log(answerBank[count]);
	}
	//go to the next question
	function nextQuestion(){
		timer.start();
		timeTicking();
		timer.time = 15;
		$("#theImage").hide();
		$("#image-holder").html("");
		$("#timeClock").html("Time Left:" + timer.time);
		$(".wrongAnswer").html("");
		count++;
		marioImage = '<img src=' + imageBank[count] + ' alt="Mario Image" width="600px" height="400px">';
		if (count === questionBank.length){
			clearQuestions();
			$("#resetbtn").show();
			stopClicking = true;
			timer.stop();
			$(".question").html("Thanks for playing! Click Reset Game to play again!");
			//stop the game
			if(trueLoss > 7){
				$("#image-holder").html("<img src='assets/images/mariovomit.gif' width='600px' height='400px'/>");
			} else {
				$("#image-holder").html("<img src='assets/images/mariogameover.png' width='600px' height='400px'/>");
			}
		}
		else {
				$(".question").html(questionBank[count]);
				$("#a1").html(answerArray[count][0]);
				$("#a2").html(answerArray[count][1]);
				$("#a3").html(answerArray[count][2]);
				$("#a4").html(answerArray[count][3]);
			}
		console.log(count);
	}
	//answer choice click, only click if game has started
	if (stopClicking !== false){
	$(".answerchoice").on("click", function(){
			yourAnswer = $(this).text();
			isItRight();
		});
	}
	//Start button
	$("#startbtn").on("click", function(){
		stopClicking = false;
		startGame();
		$("#startbtn").hide();
	});
	//Reset Button
	if (stopClicking !== false){
		$("#resetbtn").on("click", function(){
		resetGame();
		$("#resetbtn").hide();
	});
	}
	$("#resetbtn").hide();
	$("#startbtn").show();
	$("#theImage").hide();
});