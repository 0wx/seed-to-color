const light = '89ABCDEF'
const dark = '01234567'
const random = dark + light

type Seed = string | number

const xmur3 = (str: string): number => {
  for (var i = 0, h = 1779033703 ^ str.length; i < str.length; i++)
    (h = Math.imul(h ^ str.charCodeAt(i), 3432918353)),
      (h = (h << 13) | (h >>> 19))
  h = Math.imul(h ^ (h >>> 16), 2246822507)
  h = Math.imul(h ^ (h >>> 13), 3266489909)
  return (h ^= h >>> 16) >>> 0
}

const _randomColor = (list: string, seed?: Seed): string => {
  const seedNumber = seed
    ? xmur3(seed.toString())
    : +(Math.random() * Date.now()).toFixed(0)
  const fixedSeedNumber = seedNumber % 1e6
  const arrayOfNumber = fixedSeedNumber
    .toString()
    .split('')
    .map((n) => +n)

  while (arrayOfNumber.length < 6)
    arrayOfNumber.push(+((seedNumber / arrayOfNumber.length) % 10).toFixed(0))

  const isRandom = list.length === random.length
  const indexColor = arrayOfNumber.map((n, i) => {
    const isOdd = i % 2
    if (isRandom || isOdd) {
      let m: number = 0
      m = n * 2
      if (isOdd) m += 1
      if (m < random.length) return m
      const o = (m - random.length) * 3 + 1
      if (isOdd && o % 2) return o + 1
      if (isOdd) return o - 1
      return o
    }
    if (n < list.length) return n
    return [4, 5, 6, 7, 8, 9].indexOf(n - i)
  })

  let hexResult = ''

  for (let i = 0; i < indexColor.length; i++) {
    const n = indexColor[i]
    hexResult += i % 2 ? random[n] : list[n]
  }
  return hexResult
}

export const randomLightColor = (seed?: Seed): string =>
  _randomColor(light, seed)

export const randomDarkColor = (seed?: Seed): string =>
  _randomColor(dark, seed)

// prettier-ignore
export const randomColor = (seed?: Seed): string => 
  _randomColor(random, seed)
