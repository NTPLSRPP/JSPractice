function findOdd(arr) {
    const occurrences = {}

    arr.forEach(num => {
        occurrences[num] = (occurrences[num] || 0) + 1
    })

    for (const [key, value] of Object.entries(occurrences)) {
        if (value % 2 !== 0) {
            return parseInt(key)
        }
    }
    
    return null
}