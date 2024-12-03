export function partOne(input: string): number {
  return input.split('\n').filter(isSafe).length
}

export function isSafe(input: string): boolean {
  const levels = input.split(' ').map(Number)
  return findUnsafeLevel(levels) === -1
}

function findUnsafeLevel(levels: number[]) {
  const increasing: boolean = (levels[0] ?? 0) < (levels[1] ?? 0)

  return levels.findIndex((level, i) => {
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
  return input.split('\n').filter(report => {
    const levels = report.split(' ').map(Number)
    const unsafeLevelIndex = findUnsafeLevel(levels)

    if (unsafeLevelIndex > -1) levels.splice(unsafeLevelIndex, 1)

    return findUnsafeLevel(levels) === -1
  }).length
}
