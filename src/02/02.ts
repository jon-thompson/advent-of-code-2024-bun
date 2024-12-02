export function partOne(input: string): number {
  return 1
}

export function isSafe(input: string): boolean {
  const levels = input.split(' ').map(Number)

  const unsafeLevel = levels.find((level, i) => {
    const next = levels[i + 1]

    if (next === undefined) return false

    return Math.abs(next - level) > 3
  })

  return !unsafeLevel
}

export function partTwo(input: string): number {
  return 2
}
