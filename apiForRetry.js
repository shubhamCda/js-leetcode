const retryApiCall = (apiCbFn, maxRetries = 3, delayMs = 1000) => {
	return new Promise((resolve, reject) => {
		let retries = 0;
		const startCall = () => {
			apiCbFn()
				.then((data) => {
					resolve({ data, retries });
				})
				.catch((error) => {
					retries++;
					if (retries <= maxRetries) {
						console.warn(
							`Failed to call API, again Calling API in ${delayMs}. Retry: ${retries}/${maxRetries}....`
						);
						setTimeout(startCall, delayMs);
					} else {
						reject(
							new error(
								`Final API failed. Max Retry: ${retries}. Reason: ${error.message}`
							)
						);
					}
				});
    };
    startCall();
	});
};

const ranNum = () => {
	return new Promise((resolve, reject) => {
		let numGen = Math.random();
		if (numGen > 0.6) {
			resolve("Data fetched Successfully!");
		} else {
			reject("Data fetching failed. Please retry again!");
		}
	});
};

retryApiCall(ranNum, 5, 1000)
	.then(({ data, retries }) => {
		console.log(`Data has fetched: ${data}, Number of retries: ${retries}`);
	})
	.catch((error) => {
		console.error("Data fetching failed. This is finaal Error:",error.message );
	});
