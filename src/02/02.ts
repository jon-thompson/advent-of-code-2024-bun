export function partOne(input: string): number {
  return 1
}

export function isSafe(input: string): boolean {
  const levels = input.split(' ').map(Number)
  const increasing: boolean = (levels[0] ?? 0) < (levels[1] ?? 0)

  const unsafeLevel = levels.find((level, i) => {
    const next = levels[i + 1]

    if (next === undefined) return false
    if (increasing && next < level) return true

    return Math.abs(next - level) > 3
  })

  return !unsafeLevel
}

export function partTwo(input: string): number {
  return 2
}
