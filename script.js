/* remove this comment and place your JavaScript here */ 
var value = null;
var trait = null;
var celebrity = null;
var pageTitle = document.getElementById("page-title");
var pageTitleText = pageTitle.innerHTML; 
var tryAgain =  document.getElementById("try-again");
var quizWrapper = document.getElementById("quiz-wrapper");
var result = document.getElementById("result"); 
var formSubmit = document.getElementById("form-submit"); 


tryAgain.addEventListener("click", resetQuiz);
formSubmit.addEventListener("click", processResults);

function processResults(){

}
function getPersonality(){
	var score = 0; 
	if(questionOneValue.id === "T'ChallaResponse1-ServingOthers") {
    	score += 3;
    }
    else if(questionOneValue.id === "ErickResponse1-BeingRecognized") {
    	score += 2;
  	}
  	else if(questionOneValue.id === "OkoyeResponse1-Loyalty") {
    	score += 1;
  	}
  	else if(questionOneValue.id === "NakiaResponse1-MakingPeace") {
    	score += 0;
  	}


  	if(questionTwoTrait.id === "T'ChallaResponse2-Honorable") {
    	score += 3;
    }
    else if(questionTwoTrait.id === "ErickResponse2-Prepared") {
    	score += 2;
  	}
  	else if(questionTwoTrait.id === "OkoyeResponse2-Fierce") {
    	score += 1;
  	}
  	else if(questionTwoTrait.id === "NakiaResponse2-Strong") {
    	score += 0;
  	}


  	  	if(questionThreeCelebrity.id === "T'ChallaResponse3-MartinLutherKingJr.") {
    	score += 3;
    }
    else if(questionThreeCelebrity.id === "ErickResponse3-MalcolmX") {
    	score += 2;
  	}
  	else if(questionThreeCelebrity.id === "OkoyeResponse3-Beyonce") {
    	score += 1;
  	}
  	else if(questionThreeCelebrity.id === "NakiaResponse3-Oprah") {
    	score += 0;
  	}


  	if (score >= 0 && score <= 3){
  		return 0;
  	}
  	else if (score >= 4 && score <= 6){
  		return 1;
	}
	else if (score >= 7 && score <= 9){
		return 2;
	}
	else if (score >= 10 && score <= 12){
		return 3;
	}

function resetQuiz(){

}