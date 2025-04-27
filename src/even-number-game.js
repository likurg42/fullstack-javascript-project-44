import readlineSync from 'readline-sync'

function isEven(n) {
  if (n === undefined) new Error('worng number')

  return n % 2 === 0
}

function getCorrectAnswer(number) {
  if (number === undefined) new Error('worng number')

  const answerMap = new Map([
    [true, 'yes'],
    [false, 'no'],
  ])

  const answer = answerMap.get(isEven(number))

  return answer
}

function generateNumbers() {
  return [null, null, null].map(() => Math.floor(Math.random() * 101))
}

export function evenNumberGame(name) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  let numbers = generateNumbers()
  let points = 0
  let pos = 0
  let number = numbers[pos]

  while (points < 3) {
    console.log(`Question: ${number} `)
    const answer = readlineSync.question('Your answer: ')
    const correctAnswer = getCorrectAnswer(number)

    if (answer === correctAnswer) {
      console.log('Correct!')
      points += 1
      pos += 1
      number = numbers[pos]
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}.`)
      console.log('Let\'s try again, Bill!')
      points = 0
      pos = 0
      numbers = generateNumbers()
      number = numbers[pos]
    }
  }
  console.log(`Congratulations, ${name}`)
}
