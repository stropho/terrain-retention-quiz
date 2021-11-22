import {calculateCapacity} from './terrain-evaluator'

/**
 *
 * @param {number[]} heights
 * @param {number} start
 * @param {number} end
 * @returns {number}
 */
const findMaxPeakIndex = (heights, start, end) => {
	const searchRangeStart = start + 1

	let maxIndex = null
	for (let i = searchRangeStart; i < end; i++) {
		if (maxIndex == null || heights[i] > heights[maxIndex]) {
			maxIndex = i
		}
	}

	return maxIndex
}

/**
 *
 * @param {number[]} heights
 * @param {number} start
 * @param {number} end
 * @returns {number}
 */
const divideAndConquer = (heights, start, end) => {
	// no water fits here
	if (Math.abs(end - start) < 2) return 0

	const peakInBetween = findMaxPeakIndex(heights, start, end)

	if (
		heights[peakInBetween] <= heights[start] &&
		heights[peakInBetween] <= heights[end]
	)
		return calculateCapacity(heights, start, end)

	return (
		divideAndConquer(heights, start, peakInBetween) +
		divideAndConquer(heights, peakInBetween, end)
	)
}

/**
 *
 * @param {number[]} heights
 * @returns {number}
 */
export const getTerrainCapacity = (heights) => {
	const start = 0
	const end = heights.length - 1

	return divideAndConquer(heights, start, end)
}
