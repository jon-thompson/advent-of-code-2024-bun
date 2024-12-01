import { describe, expect, it } from 'bun:test'
import {
  partOne,
  partTwo,
  parseLists,
  calculateDistances,
  calculatesSimilarity
} from './01'

describe('Day 1', () => {
  describe('Part One', () => {
    it('parses lists', () => {
      const input = '3   4\n4   3\n2   5'

      expect(parseLists(input)).toEqual([
        [3, 4, 2],
        [4, 3, 5]
      ])
    })

    it('calculates distances', () => {
      expect(
        calculateDistances([
          [2, 3, 4],
          [3, 4, 5]
        ])
      ).toEqual([1, 1, 1])
    })

    it('example', async () => {
      const input = await readFile('./src/01/example.txt')

      expect(partOne(input)).toEqual(11)
    })

    it('input', async () => {
      const input = await readFile('./src/01/input.txt')

      expect(partOne(input)).toEqual(1151792)
    })
  })

  describe('Part Two', () => {
    it('calculatesSimilarity', () => {
      expect(
        calculatesSimilarity([
          [2, 3, 4, 5],
          [3, 4, 4, 5]
        ])
      ).toEqual([0, 3, 8, 5])
    })

    it('example', async () => {
      const input = await readFile('./src/01/example.txt')

      expect(partTwo(input)).toEqual(31)
    })

    it('input', async () => {
      const input = await readFile('./src/01/input.txt')

      expect(partTwo(input)).toEqual(21790168)
    })
  })
})

async function readFile(path: string): Promise<string> {
  const file = Bun.file(path)

  return await file.text()
}
