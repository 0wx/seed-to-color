# 🌱 Seed to Color 🌈

Generate random Color using seeder that you prefered.

### installing:

`yarn add seed-to-color`

or

`npm i seed-to-color`

## Example usage:

Random light color ☀️ 

```ts
import { randomLightColor } from 'seed-to-color'

const username = '0wx'
const color = randomLightColor(username) // 'EBE1EB'
```

Random dark color 🌒

```ts
import { randomDarkColor } from 'seed-to-color'

const fullName = 'Gilang Ramadhan'
const color = randomDarkColor(fullName) // '397F7B'
```

Random color 🌈

```ts
import { randomColor } from 'seed-to-color'

const userId = 123
const color = randomColor(userId) // 'E9E385'
```
