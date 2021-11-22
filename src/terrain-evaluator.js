/**
 *
 * @param {number[]} heights
 * @param {number} startIndex
 * @returns {number}
 */
const getFirstPeakIndex = (heights, startIndex) => {
	for (let i = startIndex; i < heights.length - 1; i++) {
		const nextStepIsUp = heights[i] <= heights[i + 1]
		if (!nextStepIsUp) return i
	}

	return heights.length - 1
}

/**
 *
 * @param {number[]} heights
 * @param {number} startIndex
 * @returns {number}
 */
const getFirstValleyIndex = (heights, startIndex) => {
	for (let i = startIndex; i < heights.length - 1; i++) {
		const nextStepIsDown = heights[i] >= heights[i + 1]
		if (!nextStepIsDown) return i
	}

	return heights.length - 1
}

/**
 *
 * @param {number[]} heights
 * @param {number} startIndex
 * @param {number} threshold
 * @returns {number}
 */
const getFirstRelevantPeakOrHighest = (heights, startIndex, threshold) => {
	let maxIndex = startIndex
	if (startIndex === heights.length - 1) return maxIndex
	for (let i = startIndex; i < heights.length; i++) {
		if (heights[i + 1] >= threshold) return i + 1
		if (heights[i + 1] >= heights[maxIndex]) maxIndex = i + 1
	}

	return maxIndex
}

/**
 *
 * @param {number[]} heights
 * @returns {[number, number][]}
 */
export const getRetainerSegments = (heights) => {
	/**
	 * @type {[number, number][]}
	 */
	const retainerSegments = []

	const lastTerrainIndex = heights.length - 1
	if (lastTerrainIndex < 2) return retainerSegments // nothing to do

	let currentPeakIndex = 0
	while (currentPeakIndex < lastTerrainIndex) {
		// On the left side there is nothing concerning us
		// Let's go up - no water can be retained here
		currentPeakIndex = getFirstPeakIndex(heights, currentPeakIndex)
		// We are at the top, next step is down
		const firstValley = getFirstValleyIndex(heights, currentPeakIndex)
		const relevantNextPeak = getFirstRelevantPeakOrHighest(
			heights,
			firstValley,
			heights[currentPeakIndex],
		)

		if (currentPeakIndex !== relevantNextPeak)
			retainerSegments.push([currentPeakIndex, relevantNextPeak])
		currentPeakIndex = relevantNextPeak
	}

	return retainerSegments
}

/**
 * Calculate capacity for terrain segment that does not contain any higher
 * peak than its borders
 * @param {number[]} heights
 * @param {number} start
 * @param {number} end
 * @returns {number}
 */
export const calculateCapacity = (heights, start, end) => {
	const maxWaterLevel = Math.min(heights[start], heights[end])
	let capacity = 0
	for (let i = start; i < end; i++) {
		const water = Math.max(maxWaterLevel - heights[i], 0)
		capacity += water
	}
	return capacity
}

/**
 *
 * @param {number[]} heights
 * @returns {number}
 */
export const calculateTerrainCapacity = (heights) => {
	const segmentsCapacity = getRetainerSegments(heights).map(([start, end]) => {
		return calculateCapacity(heights, start, end)
	})

	return segmentsCapacity.reduce((acc, capacity) => acc + capacity, 0)
}
