//this will return the cummulated value of the input arrays
export const getCummulatedValues = (array = []) => {
    return array.reduce((prev, curr) => {
        return (parseFloat(prev) + parseFloat(curr)).toFixed(2)
    })
}