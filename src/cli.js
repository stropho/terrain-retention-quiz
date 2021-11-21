import {getTerrainCapacity} from './divide-and-conquer-terrain'

const stringInput = process.argv.slice().pop()

let input = null
try {
	input = JSON.parse(stringInput)
} catch (e) {}

const isValidInput =
	Array.isArray(input) && input.every((n) => typeof n === 'number')

if (!isValidInput) {
	console.error('oh nooo, come on, the input should be an array of numbers!!!')
} else {
	console.log(getTerrainCapacity(input))
}
