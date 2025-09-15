// 3678. Smallest Absent Positive Greater Than Average

/**
 * @param {number[]} nums
 * @return {number}
 */
function smallestAbsentPositiveGreaterThanAverage(nums) {
    const n = nums.length;
    if (n === 0) return 1;  // edge case, though probably not needed per problem constraints

    // Sum up
    let sum = 0;
    for (let x of nums) {
        sum += x;
    }
    const average = sum / n;

    // Build set of positives present
    const present = new Set();
    for (let x of nums) {
        if (x > 0) {
            present.add(x);
        }
    }

    // Candidate: smallest integer > average
    // floor(average) + 1
    let candidate = Math.floor(average) + 1;

    // We need candidate to be at least 1
    if (candidate <= 0) {
        candidate = 1;
    }

    // Now increment until we find absent
    while (true) {
        if (!present.has(candidate)) {
            return candidate;
        }
        candidate++;
    }
}

