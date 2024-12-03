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

    const safeShorterLevel = Array.from(Array(levels.length).keys()).find(i => {
      const shorterLevels = [...levels]
      shorterLevels.splice(i, 1)

      return findUnsafeLevel(shorterLevels) === -1
    })

    return safeShorterLevel !== undefined
  }).length
}
