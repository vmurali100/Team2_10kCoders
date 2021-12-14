class question {
    constructor(text, choice, answer) {
        this.text = text
        this.choice = choice
        this.answer = answer
    }
}
class quiz {
    constructor(question) {
        this.questions = questions

    }
}
let questions = [
    new question("Starting from the earliest hours of the day arrange these every day greetings in correctorder?",
        [" Good Morning", "Good Night", "Good Evening", "Good Afternoon"], 1432),
    new question(" Arrange these Land Measurements in the Decreasing order?",
        ["Acre", "Hectare", "cent", "Yard"], 2143)
]
console.log(questions)