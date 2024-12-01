export function partOne(input: string): number {
  return 1
}

export function parseLists(input: string): number[][] {
  const lines = input.split('\n')

  return [
    lines.map(line => parseInt(line.split('   ')[0] ?? '')),
    lines.map(line => parseInt(line.split('   ')[1] ?? ''))
  ]
}

export function partTwo(input: string): number {
  return 2
}
