const quickSort = (arr: number[]): number[] => {
    if (arr.length <= 1) {
        return arr
    }

    const pivot: number = arr[0]
    const left: number[] = []
    const right: number[] = []

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    left.push(pivot)
    return quickSort(left).concat(quickSort(right))
}

console.log(quickSort([23, 44, 1, 32, 2, 4]))
