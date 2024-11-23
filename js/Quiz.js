import {allData} from "./index.js"
import {QuizApp} from "./index.js"

export class Quiz{

    constructor(cat , diff , nums){
this.cat = cat;
this.diff = diff;
this.nums = nums;
this.score=0
    }
    getApi(){
        return `https://opentdb.com/api.php?amount=${this.nums}&category=${this.cat}&difficulty=${this.diff}`
    }

  async getApiResult(){
let resp=await fetch(this.getApi())
let {results}= await resp.json()
return results

    }

    displayScore(){
        let cartona = `
        <div class="w-100 d-flex justify-content-center">
         <h1 class="bg-light p-3 rounded-2 head">QUIZ APP</h1>
      </div>
         <div class="bg-white py-4 px-3 text-center fs-4">
     <p> ${this.score == allData.length  ?` congratulation 😀 🥳 your score ${this.score} of ${allData.length} `: `opps 🥱😌 your score ${this.score} of ${allData.length}` } </p>
     <button  class="btn-info p-2 btn tryAgain">Try Again</button>
     </div>
         `
         document.querySelector(".scoreOfQuiz").innerHTML=cartona
         document.querySelector(".answerQuestion").classList.replace("d-block","d-none")
         document.querySelector(".scoreOfQuiz").classList.replace("d-none","d-block")
         document.querySelector(".tryAgain").addEventListener("click",()=>{
            window.location.reload()
         })
    }

}