
import { Quiz } from "./Quiz.js";
import { Question } from "./Question.js";

let catOfQues=document.getElementById("catOfQues");
let difficOfQues=document.getElementById("difficOfQues");
let numberOfQues=document.getElementById("numberOfQues");
let startQuestions=document.getElementById("startQuestions");
let error = document.querySelector(".error")



console.log(catOfQues.value);
console.log(difficOfQues.value);
console.log(numberOfQues.value);


export let allData
export let QuizApp

startQuestions.addEventListener("click",async function(e){
    let cat=catOfQues.value;
    let diff=difficOfQues.value;
    let nums=numberOfQues.value;
   
    if(cat == "Any categuery" && diff == "Any Defficality" && nums == ""){
        error.classList.replace("d-none","d-block")

    }else{
        QuizApp=new Quiz(cat, diff, nums);
        allData=await QuizApp.getApiResult()
       let QuizQues=new Question(0);
   QuizQues.display()
   
      document.querySelector(".ChooseQuestions").classList.replace("d-block","d-none");
      document.querySelector(".answerQuestion").classList.replace("d-none","d-block");
    }


})



