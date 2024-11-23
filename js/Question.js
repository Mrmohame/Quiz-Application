import {allData} from "./index.js"
import {QuizApp} from "./index.js"


export class Question{
    constructor(index){
        this.index = index;
this.correct_answer=allData[index].correct_answer;
this.incorrect_answers=allData[index].incorrect_answers;
this.category=allData[index].category;
this.allDataAnswers=this.allAnswers()
this.question=allData[index].question;
this.clickFlag=false

    }

    allAnswers(){
        let x=[...this.incorrect_answers,this.correct_answer]
        x.sort()
        return x
    }
    display(){
     let  cartona=`
    
    <div class="w-100 d-flex justify-content-center">
        <h1 class="bg-light p-3 rounded-2 head">QUIZ APP</h1>
     </div>


     <div class="w-100 bg-white py-3 text-center px-4">

<div class="d-flex justify-content-between px-3 py-2">
    <div>
        <h3>${this.category}</h3>
    </div>
    <div class="">
        <span>${this.index+1}</span>
        <span class="fs-5">of</span>
        <span>${allData.length}</span>
    </div>
</div>

<div>
    <h3 >${this.question}</h3>
<ul class="row gap-3 justify-content-center">
  
${this.allDataAnswers.map((ele)=>{
return `<li class="col-md-5 answers rounded-3 list-unstyled  p-3 AllLi">${ele}</li>`

}).join(" ")}
   
</ul>
</div>

<div>
    <h4>score : <span>${QuizApp.score}</span></h4>
</div>

     </div>


        `

        document.querySelector(".answerQuestion").innerHTML=cartona

      let liList =  document.querySelectorAll(".AllLi")
console.log(liList);

      liList.forEach((li)=>{
li.addEventListener("click",(e)=>{

this.checkClicked(li)
    
})
      })
    }

    checkClicked(li){
    console.log(this.correct_answer);
    console.log(li.innerHTML);
    if(!this.clickFlag){
        this.clickFlag = true
        if(this.correct_answer == li.innerHTML){
            li.classList.add("bg-success")
             QuizApp.score++
        }else{
            li.classList.add("bg-danger")
        }

        setTimeout(() => {
            this.nextQuestion()
        }, 2000);
    }

    }


    nextQuestion(){
        this.index++
if(this.index < allData.length){
    let QUIZ = new Question(this.index)
    QUIZ.display()
}else{
QuizApp.displayScore()
}
    }

}