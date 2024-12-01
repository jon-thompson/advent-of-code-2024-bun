export function partOne(input: string): number {
  const [listOne, listTwo] = parseLists(input)

  listOne.sort()
  listTwo.sort()

  const distances = calculateDistances([listOne, listTwo])

  return distances.reduce((n, sum) => sum + n, 0)
}

export function calculateDistances([listOne, listTwo]: [
  number[],
  number[]
]): number[] {
  return listOne.map((l, i) => {
    const r = listTwo[i] ?? 0

    return r - l
  })
}

export function parseLists(input: string): [number[], number[]] {
  const lines = input.split('\n')

  return [
    lines.map(line => parseInt(line.split('   ')[0] ?? '')),
    lines.map(line => parseInt(line.split('   ')[1] ?? ''))
  ]
}

export function partTwo(input: string): number {
  return 2
}
