exports.generatesThreeRandomNumbers = () =>{

    let theRandomNumbers = []
    for(let i = 0; i < 3; i++){
        let newNumber = Math.floor(Math.random() * 10) + 2
        theRandomNumbers.push(newNumber)
    }


    return theRandomNumbers
}

exports.shuffle = (theArray) =>{
    
    theArray.sort(() => Math.random() - 0.5);

    return theArray
    
}

exports.generatesThreeRandomAnswers = (correctAnswer,theAnswers) =>{

    theAnswers[0] = correctAnswer - theAnswers[0]
    theAnswers[1] = correctAnswer + theAnswers[1]
    theAnswers[2] = correctAnswer * theAnswers[2]

    return theAnswers


}

exports.checksIfCorrectAnswer = (correctAnswer,answerClicked) =>{

    let result = correctAnswer == answerClicked ?  1: 0
    return result
}