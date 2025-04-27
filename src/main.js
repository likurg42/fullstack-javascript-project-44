import { evenNumberGame } from './even-number-game.js'
import { getName } from './get-name.js'

export function main(game = undefined) {
  const name = getName()

  const gameMap = new Map(([
    [undefined, () => null],
    ['even-number', () => evenNumberGame(name)],
  ]))

  return gameMap.get(game)()
}
