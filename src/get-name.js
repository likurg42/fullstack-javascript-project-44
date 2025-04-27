import readlineSync from 'readline-sync'

export function getName() {
  const name = readlineSync.question('May I have your name? ')

  return name
}
