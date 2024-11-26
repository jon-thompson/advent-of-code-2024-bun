import chalk from 'chalk'
import dedent from 'dedent'
import { existsSync } from 'node:fs'
import { mkdir } from 'node:fs/promises'

import { fetchInput } from './api.ts'

export async function scaffold(day: number, year: number) {
  const name = `${day}`.padStart(2, '0')

  const directory = new URL(`../src/${name}/`, import.meta.url)

  if (existsSync(directory)) return

  console.log(`📂 Setting up day ${day} of ${year}`)

  await mkdir(directory)

  const test = dedent`
    import { describe, expect, it } from 'bun:test'
    import { partOne, partTwo } from './${name}'

    describe('Day ${day}', () => {
      describe('Part One', () => {
        it.skip('example', async () => {
          const input = await readFile('./example.txt')

          expect(partOne(input)).toEqual(1)
        })

        it.skip('input', async () => {
          const input = await readFile('./input.txt')

          expect(partOne(input)).toEqual(1)
        })
      })

      describe('Part Two', () => {
        it.skip('example', async () => {
          const input = await readFile('./example.txt')

          expect(partTwo(input)).toEqual(2)
        })

        it.skip('input', async () => {
          const input = await readFile('./input.txt')

          expect(partTwo(input)).toEqual(2)
        })
      })
    })

    async function readFile(path: string): Promise<string> {
      const file = Bun.file(path)

      return await file.text()
    }

  `

  const solution = dedent`
    export function partOne(input: string): number {
      return 1
    }

    export function partTwo(input: string): number {
      return 2
    }
  `

  console.log(`📂 Fetching your input`)

  const input = await fetchInput({ day, year }).catch(() => {
    console.log(
      chalk.red.bold(
        '📂 Fetching your input have failed, empty file will be created.'
      )
    )
  })

  await Bun.write(new URL(`${name}.test.ts`, directory.href), test)
  await Bun.write(new URL(`${name}.ts`, directory.href), solution)
  await Bun.write(new URL(`input.txt`, directory.href), input ?? '')
  await Bun.write(new URL(`example.txt`, directory.href), '')

  console.log('📂 You all set up, have fun!')
}
