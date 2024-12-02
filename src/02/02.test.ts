import { describe, expect, it } from 'bun:test'
import { partOne, partTwo, isSafe } from './02'

describe('Day 2', () => {
  describe('Part One', () => {
    describe('isSafe', () => {
      it('returns true when the levels are all decreasing by 1 or 2', () => {
        const input = '7 6 4 2 1'

        expect(isSafe(input)).toBe(true)
      })

      it('returns false when increase greater than 3', () => {
        const input = '1 2 7 8 9'

        expect(isSafe(input)).toBe(false)
      })

      it('returns false when decrease greater than 3', () => {
        const input = '9 7 6 2 1'

        expect(isSafe(input)).toBe(false)
      })

      it('returns false when increases then decreases', () => {
        const input = '1 3 2 4 5'

        expect(isSafe(input)).toBe(false)
      })

      it('returns false when no change', () => {
        const input = '8 6 4 4 1'

        expect(isSafe(input)).toBe(false)
      })
    })

    it.skip('example', async () => {
      const input = await readFile('./src/02/example.txt')

      expect(partOne(input)).toEqual(1)
    })

    it.skip('input', async () => {
      const input = await readFile('./src/02/input.txt')

      expect(partOne(input)).toEqual(1)
    })
  })

  describe('Part Two', () => {
    it.skip('example', async () => {
      const input = await readFile('./src/02/example.txt')

      expect(partTwo(input)).toEqual(2)
    })

    it.skip('input', async () => {
      const input = await readFile('./src/02/input.txt')

      expect(partTwo(input)).toEqual(2)
    })
  })
})

async function readFile(path: string): Promise<string> {
  const file = Bun.file(path)

  return await file.text()
}
