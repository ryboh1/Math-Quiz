//React
import React from 'react'
import ReactDOM from 'react-dom'
import { generatesThreeRandomNumbers, shuffle, generatesThreeRandomAnswers} from './js/randomNumbers'
 
//CSS
import "./css/bootstrap-4.4.1-dist/css/bootstrap.min.css"
import "./css/index.css"


//Root
const theRoot = document.getElementById("root")

//Math Questions
const questions = ["8 * 1", "6 * 2", "34 + 34", "9 + 6", "2+2",
                 "9 * 9", "23 * 34", "12 + 1", "17 - 102", "3 *34"]

function Button(props){
    return(
    <button 
        className="btn-danger"

        onClick={() => {
            props.checkAnswer(props.theCorrectAnswer,props.theShuffledChoices[props.id] )
            props.updateQuestion()}
        }
            >{props.theShuffledChoices[props.id]}
    </button>
    )
}

function Question(props){
    return (
        <div className="row">
            <h1>What is {props.theQuestions}</h1>
        </div>
    )
}

function Answers(props){

    let correctAnswer = eval(props.theQuestions)    
    let theRandomNumbers = generatesThreeRandomNumbers()
    let theChoices = generatesThreeRandomAnswers(correctAnswer, theRandomNumbers)
    theChoices.push(correctAnswer)
    let shuffledChoices = shuffle(theChoices)

    return(
        <div className="row">
        <ol>
                <li>
                    <Button 
                        id={0} 
                        checkAnswer = {props.checkAnswer} 
                        theCorrectAnswer = {correctAnswer}
                        theShuffledChoices = {shuffledChoices}  
                        updateQuestion = {props.updateQuestion}
                    />
                </li>
                <li>
                <Button 
                        id={1} 
                        checkAnswer = {props.checkAnswer} 
                        theCorrectAnswer = {correctAnswer}
                        theShuffledChoices = {shuffledChoices}  
                        updateQuestion = {props.updateQuestion}
                    />
                </li>
                <li>
                <Button 
                        id={2} 
                        checkAnswer = {props.checkAnswer} 
                        theCorrectAnswer = {correctAnswer}
                        theShuffledChoices = {shuffledChoices}  
                        updateQuestion = {props.updateQuestion}
                    />
                </li>
                <li>
                <Button 
                        id={3} 
                        checkAnswer = {props.checkAnswer} 
                        theCorrectAnswer = {correctAnswer}
                        theShuffledChoices = {shuffledChoices}  
                        updateQuestion = {props.updateQuestion}
                    />
                </li>
        </ol>
       </div>
    )
}

function Correct(props){
    return(
        <div className="row">
            <h2>Correct Answers: {props.correctAnswers} </h2>
        </div>
    )
}

function Incorrect(props){
    return (
        <div className="row">
            <h2>Incorrect Answers: {props.incorrectAnswers}</h2>
        </div>
    )
}

class Quiz extends React.Component{

    constructor(props){
        super(props)

        this.state = {questionNumber: 0, theQuestions:{questions}, correctAnswers:0, incorrectAnswers:0 }
        this.checkAnswer = this.checkAnswer.bind(this)
        this.updateQuestion = this.updateQuestion.bind(this)
    }

    checkAnswer(theCorrectAnswer,theAnswer){

        this.setState((previousState) => {
            if(theCorrectAnswer === theAnswer){
                return {correctAnswers: previousState.correctAnswers + 1}
            }

            return {incorrectAnswers: previousState.incorrectAnswers + 1}

        })
    }

    updateQuestion(){
        this.setState((previousState) => {
            return {questionNumber:previousState.questionNumber + 1}
        })
    }

    render(){

        if(this.state.questionNumber === questions.length){
            return (
                <div id="block">
                    <h4>This is the end of The Quiz Your scores are:</h4>
                    <h5>Correct Answers: {this.state.correctAnswers}</h5>
                    <h5>Incorrect Answer: {this.state.incorrectAnswers}</h5>
                </div>
            )
        }
        return(
            <div id="block">
                <Question 
                questionNumber={this.state.questionNumber}
                 theQuestions ={this.state.theQuestions.questions[this.state.questionNumber]} />

                <Answers  
                questionNumber ={this.state.questionNumber} 
                theQuestions = {this.state.theQuestions.questions[this.state.questionNumber]}
                checkAnswer = {this.checkAnswer}
                updateQuestion = {this.updateQuestion}/>

                <Correct correctAnswers ={this.state.correctAnswers} />

                <Incorrect incorrectAnswers = {this.state.incorrectAnswers}/>
            </div>
        )
    }
}

ReactDOM.render(<Quiz />,theRoot)