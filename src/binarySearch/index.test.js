const binarySearch = require('./index');

describe('binarySearch', () => {
    it('should return -1 when the target integer is not found in the array', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1)
    })

    it('should return the correct index when the target integer is at the beginning of the array', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0)
    })

    it('should return the correct index when the target integer is at the middle of the array', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2)
    })

    it('should return the correct index when the target integer is at the end of the array', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4)
    })

    it('should handle inputs with duplicate numbers in the array', () => {
        expect(binarySearch([1, 2, 2, 3, 4, 5], 2)).toBe(2)
    })

    it('should return the index of the target integer when duplicates are at the beginning of the array', () => {
        expect(binarySearch([2, 2, 3, 4, 5, 6], 2)).toBe(0)
    })

    it('should return the index of the target integer when duplicates are at the end of the array', () => {
        expect(binarySearch([1, 3, 4, 5, 6, 6], 6)).toBe(4)
    })

    it('should return the index of the target integer when duplicates are in the middle of the array', () => {
        expect(binarySearch([1, 3, 4, 4, 4, 5, 6], 4)).toBe(3)
    })

    it('should return the index of the target integer when there are multiple sets of duplicates', () => {
        expect(binarySearch([1, 1, 2, 2, 2, 3, 3, 4], 2)).toBe(3)
    })
})