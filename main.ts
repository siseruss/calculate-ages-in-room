let answer = 0
let ask_age = 0
// This will start the program by asking how many people are in the room, so the computer knows how many times to ask for an age.
let number_of_people = game.askForNumber("How many people are in the room?", 2)
effects.confetti.startScreenEffect()
for (let index = 0; index < number_of_people; index++) {
    ask_age = game.askForNumber("How old are you?", 2)
    answer += ask_age
}
let averageAge = answer / number_of_people
game.splash("The total of our ages is " + answer)
game.splash("\"The average age is \"" + averageAge)
