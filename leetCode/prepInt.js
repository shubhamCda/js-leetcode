/**
 * Retries an asynchronous API call until it succeeds, or until the maximum number of retries is reached.
 * @param {Function} apiCallFn The function that makes the API call and returns a Promise.
 * @param {number} maxRetries The maximum number of retry attempts. Defaults to 3.
 * @param {number} delayMs The initial delay in milliseconds between retries. Defaults to 1000ms.
 * @returns {Promise<{data: any, retries: number}>} A Promise that resolves with the API call's data and the number of retries taken, or rejects if all retry attempts fail.
 */
function retryApiCall(apiCallFn, maxRetries = 3, delayMs = 1000) {
  return new Promise((resolve, reject) => {
    let retries = 0;

    const attemptCall = () => {
      apiCallFn()
        .then(data => {
          resolve({ data, retries });
        })
        .catch(error => {
          retries++;
          if (retries <= maxRetries) {
            console.warn(`API call failed (attempt ${retries}/${maxRetries}). Retrying in ${delayMs}ms...`, error);
            setTimeout(attemptCall, delayMs);
            // Implement exponential backoff for delays, if desired, by modifying delayMs here.
            // For example: delayMs *= 2; 
          } else {
            reject(new Error(`API call failed after ${maxRetries} retries: ${error.message}`));
          }
        });
    };

    attemptCall();
  });
}

// Example usage:

// Simulate an API call that sometimes fails
const unreliableApiCall = () => {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber > 0.6) { // 60% chance of success
      resolve("Data fetched successfully!");
    } else {
      reject(new Error("Simulated API error"));
    }
  });
};

// Retry the API call up to 5 times with an initial delay of 500ms
retryApiCall(unreliableApiCall, 5, 500)
  .then(({ data, retries }) => {
    console.log(`Success! Data: "${data}", Retries: ${retries}`);
  })
  .catch(error => {
    console.error("Final Error:", error.message);
  });

// Another example with a different number of retries
retryApiCall(unreliableApiCall, 2)
  .then(({ data, retries }) => {
    console.log(`Success! Data: "${data}", Retries: ${retries}`);
  })
  .catch(error => {
    console.error("Final Error:", error.message);
  });
