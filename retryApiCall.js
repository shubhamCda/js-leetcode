const retryApiCall = (apiCallFn, maxRetries = 3, delayMs = 1000) => {
	return new Promise((resolve, reject) => {
		let retries = 0;

		const attemptApiCall = () => {
      apiCallFn()
        .then(data => {
          resolve({ data, retries });
        })
        .catch(error => {
          retries++;
          if (retries <= maxRetries) {
            console.warn(`API call failed (attempt ${retries}/${maxRetries}). Retrying in ${delayMs}ms...`, error);
            setTimeout(attemptApiCall, delayMs);
          } else {
            reject(new Error(`API call failed after ${maxRetries} retries: ${error.message}`))
          }
          
          
      })
    };
    attemptApiCall();
	});
};


const randomApiCall = () => {
  return new Promise((resolve, reject) => {
    const ranDigit = Math.random();
    if (ranDigit > 0.6) {
      resolve("Data fetched Successfully!")
    } else {
      reject("Api Error XXXXX")
    }
  })
}

retryApiCall(randomApiCall, 5, 1000)
  .then(({ data, retries }) => {
    console.log(`Successs Data: "${data}", Retries: ${retries}`);
    
  })
  .catch((error) => {
    console.log("Final Error..", error.message);
    
  })