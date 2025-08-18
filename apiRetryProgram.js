const retryAPI = (cb, maxRetries = 3, delayMs = 1000) => {
	return new Promise((resolve, reject) => {
		let retry = 0;

		const retryCall = () => {
			cb()
				.then((data) => {
					resolve({ data, retry });
				})
				.catch((error) => {
					retry++;
					if (retry <= maxRetries) {
						console.warn(
							`Failed to call API. Retrying : ${retry}/${maxRetries} in seconds in ms: ${delayMs}`
						);
						setTimeout(retryCall, delayMs);
					} else {
						reject(
							new Error(
								`API call failed, Maximum retries: ${maxRetries}. retries: ${retry}, failed due to: ${error}`
							)
						);
					}
				});
		};
		retryCall();
	});
};

const randomNumGen = () => {
	return new Promise((resolve, reject) => {
		let rnNum = Math.random();

		if (rnNum >= 0.6) {
			resolve("Data fetched successfully!");
		} else {
			reject("Data Error XXXX");
		}
	});
};

retryAPI(randomNumGen, 5, 1000)
	.then(({ data, retry }) => {
		console.log(
			`Data has fetched: ${data}, Number of retries took: ${retry}`
		);
	})
	.catch((error) => {
		console.error("Final error. API failed:", error.message);
	});
