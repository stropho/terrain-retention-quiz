import {describe, it, expect} from '@jest/globals'
import {getTerrainCapacity} from './command-and-conquer-terrain'
import {stringLinesToLengths} from './test-utils'

describe('terrain-evaluator', () => {
	describe('no retention', () => {
		it('does not retain on flat terrain', () => {
			const input = stringLinesToLengths(`
        x
        x
        x
      `)

			const expectedResult = 0
			const actualResult = getTerrainCapacity(input)
			expect(actualResult).toEqual(expectedResult)
		})
		it('does not retain on only descending terrain', () => {
			const input = stringLinesToLengths(`
        xxx
        xx
        x
      `)

			const expectedResult = 0
			const actualResult = getTerrainCapacity(input)
			expect(actualResult).toEqual(expectedResult)
		})
		it('does not retain on only ascending terrain', () => {
			const input = stringLinesToLengths(`
        x
        xx
        xxx
      `)

			const expectedResult = 0
			const actualResult = getTerrainCapacity(input)
			expect(actualResult).toEqual(expectedResult)
		})
	})
	describe('retention between peaks', () => {
		it('retains water between peaks where first is higher', () => {
			const input = stringLinesToLengths(`
        xxxxx
        x
        xxx
      `)

			const expectedResult = 2
			const actualResult = getTerrainCapacity(input)
			expect(actualResult).toEqual(expectedResult)
		})

		it('retains water between peaks where second is higher', () => {
			const input = stringLinesToLengths(`
        xxx
        x
        xxxxx
      `)

			const expectedResult = 2
			const actualResult = getTerrainCapacity(input)
			expect(actualResult).toEqual(expectedResult)
		})

		it('retains water between peaks of same height', () => {
			const input = stringLinesToLengths(`
        xxx
        x
        xxx
      `)

			const expectedResult = 2
			const actualResult = getTerrainCapacity(input)
			expect(actualResult).toEqual(expectedResult)
		})
	})
	describe('retention between multiple peaks', () => {
		it('retains water between peaks of descending height', () => {
			const input = stringLinesToLengths(`
        xxxx
        x
        xxx
        x
        xx
      `)

			const expectedResult = 3
			const actualResult = getTerrainCapacity(input)
			expect(actualResult).toEqual(expectedResult)
		})

		it('retains water between peaks of ascending height', () => {
			const input = stringLinesToLengths(`
        xxx
        x
        xxxx
        xx
        xxxxx
      `)

			const expectedResult = 4
			const actualResult = getTerrainCapacity(input)
			expect(actualResult).toEqual(expectedResult)
		})

		it('retains water between peaks of various heights', () => {
			const input = stringLinesToLengths(`
        xxx
        x
        xxxxxx
        xx
        xxx
      `)

			const expectedResult = 3
			const actualResult = getTerrainCapacity(input)
			expect(actualResult).toEqual(expectedResult)
		})
	})

	describe('task input', () =>{
		it('calculates capacity for example task input', () => {
			const input = [3, 1, 4, 2, 3, 1] 
			const expectedResult = 3
			const actualResult = getTerrainCapacity(input)
			expect(actualResult).toEqual(expectedResult)
		})

		it('calculates capacity for task input', () => {
			const input = [
				51, 94, 91, 57, 82, 6, 94, 4, 0, 71, 10, 12, 32, 11, 49, 8, 67, 72, 1,
				36, 33, 35, 37, 3, 2, 6, 57, 4, 4, 57, 32, 5, 25, 45, 16, 25, 6, 55, 55,
				2, 10, 84, 2, 50, 48, 0, 83, 24, 14, 4, 5, 5, 93, 0, 20, 73, 99, 0, 3,
				80, 30, 4, 0, 59, 10, 29, 92, 35, 79, 90, 33, 20, 79, 5, 2, 31, 42, 83,
				16, 6, 82, 39, 32, 3, 1, 47, 6, 3, 56, 70, 32, 64, 25, 82, 1, 70, 53, 5,
				6, 70, 94, 83, 46, 47, 57, 30, 64, 85, 4, 99, 46, 0, 74, 56, 3, 59, 10,
				52, 85, 37, 6, 3, 2, 68, 32, 11, 76, 89, 43, 35, 11, 64, 8, 5, 62, 1,
				47, 0, 1, 1, 49, 25, 27, 38, 78, 80, 3, 6, 25, 2, 98, 0, 1, 93, 97, 9,
				20, 87, 43, 56, 7, 33, 46, 17, 75, 85, 5, 1, 39, 81, 84, 27, 20, 0, 4,
				6, 88, 0, 27, 87, 23, 1, 71, 37, 32, 59, 20, 55, 26, 58, 89, 2, 0, 6, 3,
				32, 1, 0, 79, 9,
			]

			const expectedResult = 11509
			const actualResult = getTerrainCapacity(input)
			expect(actualResult).toEqual(expectedResult)
		})
	})
})
