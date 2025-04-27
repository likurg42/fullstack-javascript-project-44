import readlineSync from 'readline-sync'

export function main() {
  console.log('Welcome to brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
}
