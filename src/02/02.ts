export function partOne(input: string): number {
  return input.split('\n').filter(isSafe).length
}

export function isSafe(input: string): boolean {
  return findUnsafeLevels(input).length === 0
}

function findUnsafeLevels(input: string) {
  const levels = input.split(' ').map(Number)
  const increasing: boolean = (levels[0] ?? 0) < (levels[1] ?? 0)

  return levels.filter((level, i) => {
    const next = levels[i + 1]

    if (next === undefined) return false

    return (
      next === level ||
      (increasing ? next < level : level < next) ||
      Math.abs(next - level) > 3
    )
  })
}

export function partTwo(input: string): number {
  return 2
}
