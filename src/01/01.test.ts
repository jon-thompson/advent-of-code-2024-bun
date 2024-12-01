import { describe, expect, it } from 'bun:test'
import { partOne, partTwo, parseLists } from './01'

describe('Day 1', () => {
  describe('Part One', () => {
    it('parses lists', () => {
      const input = '3   4\n4   3\n2   5'

      expect(parseLists(input)).toEqual([
        [3, 4, 2],
        [4, 3, 5]
      ])
    })

    it.skip('example', async () => {
      const input = await readFile('./src/01/example.txt')

      expect(partOne(input)).toEqual(1)
    })

    it.skip('input', async () => {
      const input = await readFile('./src/01/input.txt')

      expect(partOne(input)).toEqual(1)
    })
  })

  describe('Part Two', () => {
    it.skip('example', async () => {
      const input = await readFile('./src/01/example.txt')

      expect(partTwo(input)).toEqual(2)
    })

    it.skip('input', async () => {
      const input = await readFile('./src/01/input.txt')

      expect(partTwo(input)).toEqual(2)
    })
  })
})

async function readFile(path: string): Promise<string> {
  const file = Bun.file(path)

  return await file.text()
}
