
/**
 * Splits an array into a specified number of equally sized groups.
 * 
 * @param {Array} arr - The input array to be divided.
 * @param {number} groups - The number of groups to split the array into.
 * @returns {Array[]} - An array of arrays, where each subarray represents a group.
 */
export default function splitIntoEqualsGroups(arr, groups) {
    const size = Math.ceil(arr.length / groups);
    return [arr.slice(0, size), arr.slice(size, size * 2), arr.slice(size * 2)];
}