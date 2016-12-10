//GLOBAL VARIABLE	
//=========================================================================================================================

var randomNumber;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var crystalTotal = 0;

var winCount = 0;
var lossCount = 0;
var audio = new Audio ("./assets/javascript/coin.wav");





//Functions + Conditional Statements
//=========================================================================================================================
$(document).ready(function() {

	

	function startGame (){

		//Get random numbers
		randomNumber = Math.floor(Math.random() * 120) + 19;
		crystal1 = Math.floor(Math.random() * 12) + 1;
		crystal2 = Math.floor(Math.random() * 12) + 1;
		crystal3 = Math.floor(Math.random() * 12) + 1;
		crystal4 = Math.floor(Math.random() * 12) + 1;
		crystalTotal = 0;



		//Add + assign to HTML elements
		$(".randomNum").html(randomNumber);
		$(".1").data("crystal1");
		$(".2").data("crystal2");
		$(".3").data("crystal2");
		$(".4").data("crystal2");
		$(".userScore").html(crystalTotal);

			// $(".1").click(function () {
			// 	$(".userScore").val( function( ) {
	  //   			return crystal1;
	  //   		});
			// });

		//Testing + DeBugging
		console.log(randomNumber);
		console.log(crystal1);
	    console.log(crystal2);
	    console.log(crystal3);
	    console.log(crystal4);
	    $(".1").on("click", function (){
	    	console.log(crystal1);
	    });
	    $(".2").on("click", function (){
	    	console.log(crystal2);
	    });
	    $(".3").on("click", function (){
	    	console.log(crystal3);
	    });
	    $(".4").on("click", function (){
	    	console.log(crystal4);
	    });
  	}

  	function userTotal (){
  		$(".1").on("click", function () {
  			audio.play();
  			crystalTotal += crystal1;
  			$(".userScore").html(crystalTotal);
  			
  			checkScore ();
  		})
  		$(".2").on("click", function () {
  			audio.play();
  			crystalTotal += crystal2;
  			$(".userScore").html(crystalTotal);
  			checkScore();
  		
  		})
  		$(".3").on("click", function () {
  			audio.play();
  			crystalTotal += crystal3;
  			$(".userScore").html(crystalTotal);
  			checkScore();
  		
  		})
  		$(".4").on("click", function () {
  			audio.play();
  			crystalTotal += crystal4;
  			$(".userScore").html(crystalTotal);
  			checkScore ();
  		})

  	}

  	function checkScore() {
  		if (crystalTotal == randomNumber) {


  			winCount++;
  
  			// $(".win").html("Wins: " + winCount);
  			$(".win").append('<img src = "assets/images/Golden_Pick_Axe.png" height=50px />');

  			var audioWin = new Audio ("./assets/javascript/levelwin2.mp3");
  			audioWin.play();

  			startGame();
  		}

  		else if (crystalTotal > randomNumber) {
  			lossCount++;

  			// $(".lose").html("Losses: " + lossCount);
  			$(".lose").append('<img src = "assets/images/coal.png" height=50px />');

  			var audioLose = new Audio ("./assets/javascript/you-lose.wav");
  			audioLose.play();		

  			startGame ();
  		};

  		
  	};



//MAIN PROCESSES
//=========================================================================================================================
//document.body.style.backgroundImage = "url ('../images/cave-backgound-2.png')";
//startGame ();

	// document.onkeyup = (function(e) {
	// 	if (e.keyCode == '32') {
	    	startGame();
	    	userTotal ();
	    
// 		}
// 	})

});