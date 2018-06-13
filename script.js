/* remove this comment and place your JavaScript here */ 
var questionOneValue = null;
var questionTwoTrait = null;
var questionThreeCelebrity = null;
var pageTitle = document.getElementById("page-title");
var pageTitleText = pageTitle.innerHTML; 
var tryAgain =  document.getElementById("try-again");
var quizWrapper = document.getElementById("quiz-wrapper");
var result = document.getElementById("result"); 
var formSubmit = document.getElementById("form-submit"); 


tryAgain.addEventListener("click", resetQuiz);
formSubmit.addEventListener("click", processResults);

function processResults(){
	questionOneValue = document.querySelector('input[name="questionOneValue"]:checked');
	questionTwoTrait = document.querySelector('input[name="questionTwoTrait"]:checked');
	questionThreeCelebrity = document.querySelector('input[name="questionThreeCelebrity"]:checked');
	
  if (questionOneValue === null){
		alert("You must answer all questions before submitting");
	} 
  if (questionTwoTrait === null){
    alert("You must answer all questions before submitting");
  } 
  if (questionThreeCelebrity === null){
     alert("You must answer all questions before submitting");
  }else{
		var personality = getPersonality();
  	quizWrapper.style.display = "none"; 
  	formSubmit.style.display = "none"; 
  	result.style.display = "block";
  	tryAgain.style.display = "block";
	}
	
	if (personality == 1){
		pageTitle.innerHTML = "You are Nakia!"
		result.style.backgroundImage = "url('Nakia.png')"
	} else if(personality == 2){
	  pageTitle.innerHTML = "You are Okoye!"
		result.style.backgroundImage = "url('Okoye.png')"
	} else if(personality == 3){
		pageTitle.innerHTML = "You are T'Challa!"
		result.style.backgroundImage = "url('T'Challa.png')"
	} else if(personality == 4){
		pageTitle.innerHTML = "You are Erick!"
		result.style.backgroundImage = "url('Erick.png')"
	}



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
  		return 1;
      //Nakia 
  	}
  	else if (score >= 4 && score <= 6){
  		return 2;
      //Okoye
	}
	else if (score >= 7 && score <= 9){
		  return 3;
    //Erick
	}
	else if (score >= 10 && score <= 12){
	   	return 4;
    //TChalla
	}
}


function resetQuiz(){

	pageTitle.innerHTML = pageTitleText;
  quizWrapper.style.display = "flex"; 
  result.style.display = "none";
  tryAgain.style.display = "none";
  formSubmit.style.display = "flex";

 questionOneValue.checked = false;
 questionTwoTrait.checked = false;
 questionThreeCelebrity.checked = false;


 questionOneValue = null;
 questionTwoTrait = null;
 questionThreeCelebrity = null;
}