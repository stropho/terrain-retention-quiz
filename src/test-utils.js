/**
 *
 * @param {string[]} strings
 * @returns {number[]}
 */
export const stringsToLengths = (strings) => {
	return strings.map((s) => s.length)
}

/**
 *
 * @param {string} str
 * @returns {number[]}
 */
export const stringLinesToLengths = (str) => {
	return stringsToLengths(
		str
			.replace(/\./g, '')
			.trim()
			.split('\n')
			.map((s) => s.trim()),
	)
}
